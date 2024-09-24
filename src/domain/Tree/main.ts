import { axiosAdapter } from '../infra/AxiosAdapter'
import { Repository } from './Repository'
import { IRepository } from './Repository/IRepository'
import { Service } from './Service'
import { ComponentHashType, IService, NodeHashType } from './Service/IService'

export class TreeDomain {
    private repository: IRepository
    private service: IService

    private hashNodes = {} as NodeHashType

    constructor() {
        this.repository = new Repository(axiosAdapter)
        this.service = new Service()
    }

    async getLocations(id: string) {
        const responseLocation = await this.repository.getLocations(id)

        if (!responseLocation.data) {
            return responseLocation
        }

        const responseAsset = await this.repository.getAssets(id)

        if (!responseAsset.data) {
            return responseAsset
        }

        this.hashNodes = this.service.formatHash({
            assets: responseAsset.data,
            locations: responseLocation.data,
        })

        return {
            data: true,
            message: '',
            typeMessage: 'success',
        }
    }

    getChildren(id: string = 'root') {
        return this.service.findChildren({
            id,
            hashNodes: this.hashNodes,
        })
    }

    formatComponent(component: ComponentHashType) {
        return this.service.formatComponent(component)
    }
}
