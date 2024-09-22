import { RepositoryReturnType } from '../../../../../type/repositoryReturnType'
import { AxiosAdapter } from '../../../../infra/AxiosAdapter'

type IAdapter = AxiosAdapter

export type CompanyType = {
    id: string
    name: string
}

export async function _getCompanies(
    adapter: IAdapter,
): RepositoryReturnType<CompanyType[]> {
    try {
        const url = '/companies'
        const response = await adapter.get<CompanyType[]>(url)

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
            typeMessage: 'success',
        }
    }
}
