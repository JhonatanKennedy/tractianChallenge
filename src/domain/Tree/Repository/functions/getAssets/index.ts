import { RepositoryReturnType } from '../../../../../type/repositoryReturnType'
import { AxiosAdapter } from '../../../../infra/AxiosAdapter'
import { AssetsType } from '../../IRepository'

type IAdapter = AxiosAdapter

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
