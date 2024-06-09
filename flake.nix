{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {inherit system;};

      dev = let
        r = pkgs.redis;
        t = pkgs.tmux;
      in
        pkgs.writeShellScriptBin "dev" ''
          if ! ${t}/bin/tmux has-session -t dev 2>/dev/null; then
            ${t}/bin/tmux new-session -d -s dev -n nvim
            ${t}/bin/tmux new-window -t dev -n vite "pnpm run dev"
            ${t}/bin/tmux new-window -t dev -n redis "${r}/bin/redis-server --loglevel verbose --appendonly yes"
            ${t}/bin/tmux new-window -t dev -n redis-cli "${r}/bin/redis-cli"
          fi

          ${t}/bin/tmux attach-session -t dev
        '';
    in {
      devShells.default = pkgs.mkShell {
        packages =
          builtins.attrValues {
            inherit (pkgs) nodejs_latest;
            inherit (pkgs.nodePackages_latest) pnpm;
          }
          ++ [dev];
      };
    });
}
