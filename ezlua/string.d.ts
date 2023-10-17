/**
 * @noSelfInFile
 * @module _G
 */

declare global {
    namespace string {
        /**
         * Convert utf8 string to utf16(le)
         */
        function to_utf16(this: string): string;

        /**
         * Convert utf16 string to utf8
         */
        function from_utf16(this: string): string;

        function starts_with(this: string, prefix: string): boolean;
        function ends_with(this: string, suffix: string): boolean;

        function trim(this: string): string;
        function trim_start(this: string): string;
        function trim_end(this: string): string;

        /**
         * Compare two strings with optional case_sensitive
         *
         * ---
         *
         * 比较字符串，默认不区分大小写
         */
        function equal(this: string, b: string, case_sensitive?: boolean): boolean;

        /**
         * Return if str matches the wildcard
         *
         * ---
         *
         * 通配符匹配字符串，默认不区分大小写
         *
         * ```lua
         * local s = 'C:/abc.txt'
         * assert(s:wildmatch '*abc.txt')
         * ```
         */
        function wildmatch(this: string, wildcard: string, case_sensitive?: boolean): boolean;
    }

    interface String {
        to_utf16: typeof string.to_utf16,
        from_utf16: typeof string.from_utf16,
        starts_with: typeof string.starts_with,
        ends_with: typeof string.ends_with,
        trim: typeof string.trim,
        trim_start: typeof string.trim_start,
        trim_end: typeof string.trim_end,
        equal: typeof string.equal,
        wildmatch: typeof string.wildmatch,
    }
}

export {}