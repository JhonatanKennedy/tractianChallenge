import { RepositoryReturnType } from '../../../type/repositoryReturnType'

export type LocationType = {
    id: string
    name: string
    parentId: string | null
}

export type SensorTypeType = 'vibration' | 'energy' | null
export type StatusType = 'operating' | 'alert'

export type AssetType = {
    id: string
    name: string
    parentId: string | null
    locationId: string | null
    sensorType: SensorTypeType
    status: null
}

export type ComponentType = {
    id: string
    name: string
    parentId: string | null
    locationId: string | null
    sensorType: SensorTypeType
    status: StatusType
    gatewayId: string
    sensorId: string
}

export type AssetsType = AssetType | ComponentType

export interface IRepository {
    getLocations(id: string): RepositoryReturnType<LocationType[]>
    getAssets(id: string): RepositoryReturnType<AssetsType[]>
}
