/**
 * @noSelfInFile
 * @module tokio
 */

declare module "tokio" {
    export class TokioTask<T> {
        join(): T;

        abort(): void;
    }

    export class TokioHandle {
        spawn<T>(callback: () => T): TokioTask<T>;

        spawn_blocking<T>(callback: () => T): TokioTask<T>;
    }

    export function spawn<T>(callback: () => T): TokioTask<T>;

    export function spawn_blocking<T>(callback: () => T): TokioTask<T>;

    export function sleep(seconds: Duration): void;

    export function current_handle(): TokioHandle;

    export namespace sync {
        export class TokioSender<T> {
            send(data: T): void;
            send_timeout(data: T): void;
            try_send(data: T): boolean;

            closed(): void;
        }
        export class TokioReceiver<T> {
            recv(): T;
            try_recv(): T;
            blocking_recv(): T;

            close(): void;
        }

        export class TokioOneshotSender<T> {
            send(data: T): void;
        }
        export class TokioOneshotReceiver<T> {
            recv(): T;
            blocking_recv(): T;
        }

        export class TokioUnboundedSender<T> {
            send(data: T): void;
            same_channel(other: TokioUnboundedSender<T>): boolean;

            closed(): void;
        }
        export class TokioUnboundedReceiver<T> {
            recv(): T;
            try_recv(): T;
            blocking_recv(): T;

            close(): void;
        }

        export function channel<T = any>(size: integer): LuaMultiReturn<[TokioSender<T>, TokioReceiver<T> & LuaIterable<T>]>;
        export function oneshot_channel<T = any>(): LuaMultiReturn<[TokioOneshotSender<T>, TokioOneshotReceiver<T>]>;
        export function unbounded_channel<T = any>(): LuaMultiReturn<[TokioUnboundedSender<T>, TokioUnboundedReceiver<T> & LuaIterable<T>]>;
    }

    type SocketAddr = string;

    export class TcpListner {
        static bind(this: void, address: SocketAddr): TcpListner;

        get local_addr(): SocketAddr;

        accept(): TcpStream;
    }

    export class TcpStream {
        get local_addr(): SocketAddr;
        get peer_addr(): SocketAddr;
    }
}