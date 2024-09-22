import { RepositoryReturnType } from '../../../../../type/repositoryReturnType'
import { AxiosAdapter } from '../../../../infra/AxiosAdapter'

type IAdapter = AxiosAdapter

export type LocationType = {
    id: string
    name: string
    parentId: string | null
}

export async function _getLocations(
    adapter: IAdapter,
    id: string,
): RepositoryReturnType<LocationType[]> {
    try {
        const url = `/companies/${id}/locations`
        const response = await adapter.get<LocationType[]>(url)

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
