/**
 * @noSelfInFile
 * @module log
 */

declare module "log" {
   export function error(...args: any[]): void;
   export function warn(...args: any[]): void;
   export function info(...args: any[]): void;
   export function debug(...args: any[]): void;
   export function trace(...args: any[]): void;
}