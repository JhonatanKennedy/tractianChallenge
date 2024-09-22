import axios, { AxiosResponse } from 'axios'
import { IAdapter } from './IAdapter'

/* eslint-disable @typescript-eslint/no-explicit-any */
class AxiosAdapter implements IAdapter {
    private axiosInstance = axios.create({
        baseURL: 'http://fake-api.tractian.com/',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
    })

    async get<T>(
        url: string,
        body?: Record<string, any>,
    ): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.get<T>(url, body)
    }

    async post<T>(
        url: string,
        body?: Record<string, any>,
    ): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.post(url, body)
    }

    async put<T>(
        url: string,
        body?: Record<string, any>,
    ): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.put(url, body)
    }

    async delete<T>(
        url: string,
        body?: Record<string, any>,
    ): Promise<AxiosResponse<T>> {
        return await this.axiosInstance.delete(url, body)
    }
}

const axiosAdapter = new AxiosAdapter()

export { axiosAdapter, AxiosAdapter }
