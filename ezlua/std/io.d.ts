/**
 * @noSelfInFile
 * @module std
 */

declare interface Read {
    read(size?: integer): bytes;
    read_exact(size: integer): bytes;
    bufreader(): BufReader;
}

declare interface Write {
    flush(): void;
    write(data: bytes): void;
    write_all(data: bytes): void;
}

declare interface Seek {
    seek(pos: 'start'|'current'|'end', n: integer): integer;
    rewind(): void;
}

declare interface BufReader {
    lines(): LuaIterable<bytes>;
    split(byte: integer): LuaIterable<bytes>;

    read_line(): bytes;
    read_until(byte: integer): bytes;
}
