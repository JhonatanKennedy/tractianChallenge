import { RepositoryReturnType } from '../../../../../type/repositoryReturnType'
import { AxiosAdapter } from '../../../../infra/AxiosAdapter'

type IAdapter = AxiosAdapter

export type SensorTypeType = 'vibration' | 'energy' | null
export type StatusType = 'operating' | 'alert' | null

//TODO se nao tem locationId ou parentId não é de nenhum nó da arvore
export type AssetsType = {
    id: string
    name: string
    parentId: string | null
    locationId: string | null
    sensorType: SensorTypeType
    status: StatusType
}

export async function _getAssets(
    adapter: IAdapter,
    id: string,
): RepositoryReturnType<AssetsType[]> {
    try {
        const url = `/companies/${id}/assets`
        const response = await adapter.get<AssetsType[]>(url)

        return {
            data: response.data,
            message: '',
            typeMessage: 'success',
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
        return {
            data: null,
            message: '',
            typeMessage: 'error',
        }
    }
}
