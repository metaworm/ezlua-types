/**
 * regex binding to lua
 * 
 * @see https://docs.rs/regex/latest/regex
 *
 * @noSelfInFile
 * @module regex
 */

declare module "regex" {
    export function escape(pattern: string): string;

    export class Match {
        get start(): integer;
        get end_(): integer;
        get string(): string;

        range(): LuaMultiReturn<[number, number]>;
    }

    export class Capture {
        [key: integer|string]: string;
    }

    export namespace Capture {
        export const length: LuaLengthMethod<integer>;
    }

    export class Regex {
        static new(this: void, re: string): Regex;

        shortest_match(str: string): integer|null;

        find(str: string, position?: integer): Match;

        capture(str: string, position?: integer): Capture;
    }

    export class RegexBytes extends Regex {
        static new(this: void, re: string): RegexBytes;
    }
}