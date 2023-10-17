/**
 * @noSelfInFile
 * @module thread
 */
declare module "thread" {
    /**
     * Spawn a thread with specific lua function
     * @param fun the function will be executed in new thread
     * @param name optional thread name
     */
    export function spawn<T>(fun: () => T, name?: string): Thread<T>;

    /**
     * Let current thread sleep for a while
     * @param ms milliseconds
     */
    export function sleep(ms: number): void;

    /**
     * @see https://doc.rust-lang.org/std/thread/fn.park.html
     */
    export function park(): void;

    /** Get ID of current thread */
    export function id(): number;

    /** Get name of current thread */
    export function name(): string;

    /**
     * @see https://doc.rust-lang.org/std/thread/fn.yield_now.html
     */
    export function yield_now(): void;
    export function mutex(): Mutex;
    export function condvar(): CondVar;

    export class Thread<T> {
        /** thread id */
        id: number;
        /** thread name */
        name: string;
        /** native handle of this thread */
        handle: number;

        /**
         * Waits for the associated thread to finish
         * @see https://doc.rust-lang.org/std/thread/struct.JoinHandle.html#method.join
         */
        join(): T;

        /**
         * Atomically makes the handle’s token available if it is not already
         * @see https://doc.rust-lang.org/std/thread/struct.Thread.html#method.unpark
         */
        unpark(): void;
    }

    /**
     * TODO: guard usage
     */
    export class Mutex {
        lock(): MutexGuard;
        try_lock(): null | MutexGuard;
        is_poisoned(): boolean;
    }

    export class MutexGuard {
        unlock(): void;
        __close(): void;
    }

    export class CondVar {
        /**
         * @see https://doc.rust-lang.org/std/sync/struct.Condvar.html#method.notify_one
         * @param val
         */
        notify_one(val: any): void;

        /**
         * @see https://doc.rust-lang.org/std/sync/struct.Condvar.html#method.notify_all
         * @param val
         */
        notify_all(val: any): void;

        /**
         * Wait the conditional variable
         * @param timeout milliseconds for wait
         */
        wait(timeout: integer): void;
    }

    export namespace sync {
        export class Sender<T> {}
        export class Receiver<T> {}

        export function channel<T = any>(): LuaMultiReturn<[Sender<T>, Receiver<T> & LuaIterable<T>]>;
    }
}