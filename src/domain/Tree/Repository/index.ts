import { AxiosAdapter } from '../../infra/AxiosAdapter'
import { _getLocations, LocationType } from './functions/getLocations'
import {
    _getAssets,
    AssetsType,
    SensorTypeType,
    StatusType,
} from './functions/getAssets'

export { type LocationType }
export { type AssetsType, type SensorTypeType, type StatusType }
export class Repository {
    constructor(private readonly adapter: AxiosAdapter) {}

    async getLocations(id: string) {
        return await _getLocations(this.adapter, id)
    }

    async getAssets(id: string) {
        return await _getAssets(this.adapter, id)
    }
}
