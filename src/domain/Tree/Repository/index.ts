import { AxiosAdapter } from '../../infra/AxiosAdapter'
import { _getLocations } from './functions/getLocations'
import { _getAssets } from './functions/getAssets'
import { IRepository } from './IRepository'

export class Repository implements IRepository {
    constructor(private readonly adapter: AxiosAdapter) {}

    async getLocations(id: string) {
        return await _getLocations(this.adapter, id)
    }

    async getAssets(id: string) {
        return await _getAssets(this.adapter, id)
    }
}
