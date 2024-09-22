import { axiosAdapter } from '../infra/AxiosAdapter'
import { Repository } from './Repository'
import { Service } from './Service'

export class TreeDomain {
    private repository: Repository
    private service: Service

    constructor() {
        this.repository = new Repository(axiosAdapter)
        this.service = new Service()
    }

    async getLocations(id: string) {
        const response = await this.repository.getLocations(id)

        if (!response.data) {
            return response
        }

        const { hashChildren, hashParents } = this.service.formatTreeHash(
            response.data,
        )

        return {
            data: hashParents,
            message: response.message,
            typeMessage: response.typeMessage,
        }
    }
}
