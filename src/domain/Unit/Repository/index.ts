import { AxiosAdapter } from '../../infra/AxiosAdapter'
import { _getCompanies, CompanyType } from './functions/getCompanies'

export { type CompanyType }

export class Repository {
    constructor(private readonly adapter: AxiosAdapter) {}

    async getCompanies() {
        return await _getCompanies(this.adapter)
    }
}
