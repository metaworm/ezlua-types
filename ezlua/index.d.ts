/**
 * @noSelfInFile
 * @module _G
 */

/// <reference path="./os.d.ts" />
/// <reference path="./log.d.ts" />
/// <reference path="./json.d.ts" />
/// <reference path="./string.d.ts" />
/// <reference path="./tokio.d.ts" />
/// <reference path="./thread.d.ts" />

declare type integer = number;
declare type bytes = string;

/**
 * @see https://doc.rust-lang.org/std/fs/fn.read.html
 */
declare function readfile(path: string): bytes|null;

/**
 * @see https://doc.rust-lang.org/std/fs/fn.write.html
 */
declare function writefile(path: string, data: bytes): void;

/**
 * Get the file path of the caller belongs to
 */
declare function __file__(): string;
