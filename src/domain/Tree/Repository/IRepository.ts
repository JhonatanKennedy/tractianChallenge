import { RepositoryReturnType } from '../../../type/repositoryReturnType'

export type LocationType = {
    id: string
    name: string
    parentId: string | null
}

export type SensorTypeType = 'vibration' | 'energy' | null
export type StatusType = 'operating' | 'alert' | null

export type AssetsType = {
    id: string
    name: string
    parentId: string | null
    locationId: string | null
    sensorType: SensorTypeType
    status: StatusType
}

export interface IRepository {
    getLocations(id: string): RepositoryReturnType<LocationType[]>
    getAssets(id: string): RepositoryReturnType<AssetsType[]>
}
