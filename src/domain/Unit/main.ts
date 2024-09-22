import { Repository, CompanyType } from './Repository'
import { axiosAdapter } from '../infra/AxiosAdapter'
import { Service } from './Service'

export { type CompanyType }

export class UnitDomain {
    private repository: Repository
    private service: Service

    constructor() {
        this.repository = new Repository(axiosAdapter)
        this.service = new Service()
    }

    async getCompanies() {
        const response = await this.repository.getCompanies()

        if (!response.data) {
            return response
        }

        return {
            data: this.service.formatUnits(response.data),
            message: response.message,
            typeMessage: response.typeMessage,
        }
    }
}
