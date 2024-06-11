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
        r = "${pkgs.redis}/bin/redis-";
        t = "${pkgs.tmux}/bin/tmux";
      in
        pkgs.writeShellScriptBin "dev" ''
          if ! ${t} has-session -t dev 2>/dev/null; then
            ${t} new-session -d -s dev -n nvim
            ${t} new-window -t dev -n vite "pnpm run dev"
            ${t} new-window -t dev -n redis "${r}server --loglevel verbose --appendonly yes"
            ${t} new-window -t dev -n redis-cli "${r}cli"
          fi

          ${t} attach-session -t dev
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
