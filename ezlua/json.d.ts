/**
 * json binding to lua
 *
 * @noSelfInFile
 * @module json
 */

declare module "json" {
    /**
     * 加载JSON数据：JSON字符串转JSON数据
     * @param json JSON编码的字符串
     */
    export function load(json: string): any;

    /**
     * 从json文件中加载JSON数据
     * @param path JSON文件路径(utf8编码)
     */
    export function loadfile(path: string): any;

    /**
     * 任意数据转JSON格式
     */
    export function dump(data: any): string;

    /**
     * 转储JSON格式到文件中
     */
    export function dumpfile(path: string, data: any): void;

    /**
     * 和dump类似，转成带缩进、空格的json，更易于阅读
     */
    export function dump_pretty(data: any): string;
}