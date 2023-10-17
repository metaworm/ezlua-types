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

        spawn_bloking<T>(callback: () => T): TokioTask<T>;
    }

    export function spawn<T>(callback: () => T): TokioTask<T>;

    export function spawn_bloking<T>(callback: () => T): TokioTask<T>;

    export function sleep(ms: integer): void;

    export function current_handle(): TokioHandle;

    export namespace sync {
        export class TokioSender<T> {}
        export class TokioReceiver<T> {}

        export class TokioOneshotSender<T> {}
        export class TokioOneshotReceiver<T> {}

        export class TokioUnboundedSender<T> {}
        export class TokioUnboundedReceiver<T> {}

        export function channel<T = any>(size: integer): LuaMultiReturn<[TokioSender<T>, TokioReceiver<T> & LuaIterable<T>]>;
        export function oneshot_channel<T = any>(): LuaMultiReturn<[TokioOneshotSender<T>, TokioOneshotReceiver<T>]>;
        export function unbounded_channel<T = any>(): LuaMultiReturn<[TokioUnboundedSender<T>, TokioUnboundedReceiver<T> & LuaIterable<T>]>;
    }
}