/**
 * @noSelfInFile
 * @module _G
 */

declare global {
    /**
     * Extension to lua os table in virtue of rust standard library, like python's os module
     * 
     * @see https://doc.rust-lang.org/std/env/index.html
     * @see https://doc.rust-lang.org/std/fs/index.html
     */
    namespace os {
        export type OsArch = "x86" | "x86_64" | "arm" | "aarch64" | "m68k" | "mips" | "mips64" | "powerpc" | "powerpc64" | "riscv64" | "s390x" | "sparc64";

        const name: "linux" | "macos" | "ios" | "freebsd" | "dragonfly" | "netbsd" | "openbsd" | "solaris" | "android" | "windows";
        const arch: OsArch;
        const family: "unix" | "windows";
        const dllextension: "so" | "dll" | "dylib";
        const pointersize: 4 | 8;

        function mkdir(dir: string): void;
        function mkdirs(dir: string): void;
        function chdir(dir: string): void;
        function rmdir(dir: string): void;

        /**
         * Get current working directory
         *
         * ---
         *
         * 获取当前工作目录
         */
        function getcwd(): string;

        /**
         * Get the executing program's path
         *
         * ---
         *
         * 获取进程的可执行文件路径
         */
        function getexe(): string;

        /**
         * Enumerate path by wildcard
         *
         * ---
         *
         * 使用通配符枚举文件
         *
         * ```lua
         * for path in os.glob [[C:\Windows\*.exe]] do
         *     log(path)
         * end
         * ```
         *
         * @param wildcard
         */
        function glob(wildcard: string): LuaIterable<string>;

        /**
         * Get value of environment varialbe
         */
        function env(name: string): string;

        /**
         * Set value of environment varialbe
         */
        function putenv(name: string, val: string|null): void;

        /**
         * Path API like python's os.path
         * 
         * @see https://doc.rust-lang.org/std/path/struct.Path.html
         */
        export namespace path {
            /** Get parent directory */
            function dirname(path: string): string;
            /** Detect if a path is exists */
            function exists(path: string): string;
            /** get the absolute path */
            function abspath(path: string): string;
            function isabs(path: string): boolean;
            function isdir(path: string): boolean;
            function isfile(path: string): boolean;
            function issymlink(path: string): boolean;
            /** Get the filename of a path */
            function basename(path: string): string;
            /**
             * Replace the extension name to @ext
             * @param path path to replace
             * @param ext extension name
             */
            function withext(path: string, ext: string): string;
            function withfilename(path: string, name: string): string;
            function split(): LuaMultiReturn<[string, string]>;
            /** split extension name */
            function splitext(path: string): LuaMultiReturn<[string, string]>;

            function copy(from: string, to: string): void;
            function rename(from: string, to: string): void;
            function removedir(dir: string): void;
            function removefile(path: string): void;
            function readlink(path: string): string | null;
            function meta(path: string): Metadata;
            function join(path: string, ...args: string[]): string;

            class Metadata {
                size: number;
                modified: number;
                created: number;
                accessed: number;
                readonly: boolean;

                len(): number;
                is_dir(): boolean;
                is_file(): boolean;
                is_symlink(): boolean;
            }
        }
    }
}

export {}