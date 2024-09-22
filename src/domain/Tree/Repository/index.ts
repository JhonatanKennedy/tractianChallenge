import { AxiosAdapter } from '../../infra/AxiosAdapter'
import { _getLocations, LocationType } from './functions/getLocations'

export { type LocationType }

export class Repository {
    constructor(private readonly adapter: AxiosAdapter) {}

    async getLocations(id: string) {
        return await _getLocations(this.adapter, id)
    }
}
