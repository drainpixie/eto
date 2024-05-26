
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const __ETC_PROFILE_DONE: string;
	export const __HM_SESS_VARS_SOURCED: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const NIX_BUILD_CORES: string;
	export const NIX_GCROOT: string;
	export const HISTCONTROL: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const DIRENV_DIR: string;
	export const STRINGS: string;
	export const depsTargetTarget: string;
	export const XCURSOR_PATH: string;
	export const RIPGREP_CONFIG_PATH: string;
	export const stdenv: string;
	export const LOCALE_ARCHIVE_2_27: string;
	export const WEZTERM_EXECUTABLE: string;
	export const builder: string;
	export const DESKTOP_SESSION: string;
	export const NO_AT_BRIDGE: string;
	export const shellHook: string;
	export const DIRENV_FILE: string;
	export const EDITOR: string;
	export const phases: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_VIDEOS_DIR: string;
	export const NIX_PROFILES: string;
	export const SOURCE_DATE_EPOCH: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const NIX_PATH: string;
	export const npm_package_scripts_build: string;
	export const NIXPKGS_CONFIG: string;
	export const npm_package_author: string;
	export const CXX: string;
	export const XAUTHORITY: string;
	export const TEMPDIR: string;
	export const XDG_PICTURES_DIR: string;
	export const system: string;
	export const HOST_PATH: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const HOME: string;
	export const XDG_PUBLICSHARE_DIR: string;
	export const NIX_BINTOOLS: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const depsTargetTargetPropagated: string;
	export const npm_package_version: string;
	export const cmakeFlags: string;
	export const outputs: string;
	export const XDG_DOWNLOAD_DIR: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const XDG_SEAT_PATH: string;
	export const XDG_MUSIC_DIR: string;
	export const LD: string;
	export const XDG_TEMPLATES_DIR: string;
	export const buildPhase: string;
	export const DIRENV_DIFF: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const GTK_A11Y: string;
	export const npm_package_scripts_preview: string;
	export const NIX_USER_PROFILE_DIR: string;
	export const INFOPATH: string;
	export const npm_lifecycle_script: string;
	export const doCheck: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DESKTOP_DIR: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const GTK_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const LESSOPEN: string;
	export const npm_package_type: string;
	export const USER: string;
	export const strictDeps: string;
	export const npm_config_frozen_lockfile: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const MANPAGER: string;
	export const TEMP: string;
	export const DISPLAY: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const PAGER: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const QTWEBKIT_PLUGIN_PATH: string;
	export const patches: string;
	export const __NIXOS_SET_ENVIRONMENT_DONE: string;
	export const XDG_VTNR: string;
	export const buildInputs: string;
	export const XDG_SESSION_ID: string;
	export const LOCALE_ARCHIVE: string;
	export const preferLocalBuild: string;
	export const LESSKEYIN_SYSTEM: string;
	export const npm_config_user_agent: string;
	export const TERMINFO_DIRS: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const out: string;
	export const XDG_DOCUMENTS_DIR: string;
	export const npm_package_scripts_dev: string;
	export const STRIP: string;
	export const JOURNAL_STREAM: string;
	export const XDG_DATA_DIRS: string;
	export const LIBEXEC_PATH: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const npm_config_node_gyp: string;
	export const dontAddDisableDepTrack: string;
	export const CC: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_CC: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const depsBuildTargetPropagated: string;
	export const npm_package_license: string;
	export const depsBuildBuildPropagated: string;
	export const DIRENV_WATCHES: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_config_registry: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const NIX_HARDENING_ENABLE: string;
	export const WEZTERM_PANE: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		__ETC_PROFILE_DONE: string;
		__HM_SESS_VARS_SOURCED: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		NIX_BUILD_CORES: string;
		NIX_GCROOT: string;
		HISTCONTROL: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		mesonFlags: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		WEZTERM_CONFIG_DIR: string;
		SSH_AUTH_SOCK: string;
		DIRENV_DIR: string;
		STRINGS: string;
		depsTargetTarget: string;
		XCURSOR_PATH: string;
		RIPGREP_CONFIG_PATH: string;
		stdenv: string;
		LOCALE_ARCHIVE_2_27: string;
		WEZTERM_EXECUTABLE: string;
		builder: string;
		DESKTOP_SESSION: string;
		NO_AT_BRIDGE: string;
		shellHook: string;
		DIRENV_FILE: string;
		EDITOR: string;
		phases: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_VIDEOS_DIR: string;
		NIX_PROFILES: string;
		SOURCE_DATE_EPOCH: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		NIX_PATH: string;
		npm_package_scripts_build: string;
		NIXPKGS_CONFIG: string;
		npm_package_author: string;
		CXX: string;
		XAUTHORITY: string;
		TEMPDIR: string;
		XDG_PICTURES_DIR: string;
		system: string;
		HOST_PATH: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		HOME: string;
		XDG_PUBLICSHARE_DIR: string;
		NIX_BINTOOLS: string;
		SSH_ASKPASS: string;
		LANG: string;
		WEZTERM_UNIX_SOCKET: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		depsTargetTargetPropagated: string;
		npm_package_version: string;
		cmakeFlags: string;
		outputs: string;
		XDG_DOWNLOAD_DIR: string;
		NIX_STORE: string;
		TMPDIR: string;
		XDG_SEAT_PATH: string;
		XDG_MUSIC_DIR: string;
		LD: string;
		XDG_TEMPLATES_DIR: string;
		buildPhase: string;
		DIRENV_DIFF: string;
		INIT_CWD: string;
		READELF: string;
		GTK_A11Y: string;
		npm_package_scripts_preview: string;
		NIX_USER_PROFILE_DIR: string;
		INFOPATH: string;
		npm_lifecycle_script: string;
		doCheck: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		XDG_DESKTOP_DIR: string;
		TERM: string;
		npm_package_name: string;
		GTK_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		LESSOPEN: string;
		npm_package_type: string;
		USER: string;
		strictDeps: string;
		npm_config_frozen_lockfile: string;
		TZDIR: string;
		AR: string;
		AS: string;
		MANPAGER: string;
		TEMP: string;
		DISPLAY: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NIX_BUILD_TOP: string;
		NM: string;
		PAGER: string;
		NIX_CFLAGS_COMPILE: string;
		QTWEBKIT_PLUGIN_PATH: string;
		patches: string;
		__NIXOS_SET_ENVIRONMENT_DONE: string;
		XDG_VTNR: string;
		buildInputs: string;
		XDG_SESSION_ID: string;
		LOCALE_ARCHIVE: string;
		preferLocalBuild: string;
		LESSKEYIN_SYSTEM: string;
		npm_config_user_agent: string;
		TERMINFO_DIRS: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		LD_LIBRARY_PATH: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		WEZTERM_CONFIG_FILE: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		out: string;
		XDG_DOCUMENTS_DIR: string;
		npm_package_scripts_dev: string;
		STRIP: string;
		JOURNAL_STREAM: string;
		XDG_DATA_DIRS: string;
		LIBEXEC_PATH: string;
		TMP: string;
		OBJDUMP: string;
		PATH: string;
		propagatedBuildInputs: string;
		npm_config_node_gyp: string;
		dontAddDisableDepTrack: string;
		CC: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_CC: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		depsBuildTargetPropagated: string;
		npm_package_license: string;
		depsBuildBuildPropagated: string;
		DIRENV_WATCHES: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_config_registry: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		NIX_HARDENING_ENABLE: string;
		WEZTERM_PANE: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		WEZTERM_EXECUTABLE_DIR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
