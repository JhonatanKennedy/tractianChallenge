/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IAdapter {
    get(url: string, body?: Record<string, any>): Promise<unknown>
    post(url: string, body?: Record<string, any>): Promise<unknown>
    put(url: string, body?: Record<string, any>): Promise<unknown>
    delete(url: string, body?: Record<string, any>): Promise<unknown>
}
