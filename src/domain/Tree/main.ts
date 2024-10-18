import { axiosAdapter } from '../infra/AxiosAdapter'
import { Repository } from './Repository'
import { IRepository } from './Repository/IRepository'
import { Service } from './Service'
import { IService, NodeHashType, TreeNodeType } from './Service/IService'

export class TreeDomain {
    private repository: IRepository
    private service: IService

    private searchArray: TreeNodeType[] = []
    rootNodes: string[] = []
    hashNodes = {} as NodeHashType

    constructor() {
        this.repository = new Repository(axiosAdapter)
        this.service = new Service()
    }

    formatComponent(component: TreeNodeType) {
        return this.service.formatComponent(component)
    }

    async getItems(id: string) {
        const responseLocation = await this.repository.getLocations(id)

        if (!responseLocation.data) {
            return responseLocation
        }

        const responseAsset = await this.repository.getAssets(id)

        if (!responseAsset.data) {
            return responseAsset
        }

        const searchArray = this.service.formatArrayNode({
            assets: responseAsset.data,
            locations: responseLocation.data,
        })

        const hash = this.service.formatHash(searchArray)

        this.searchArray = searchArray
        this.hashNodes = hash

        return {
            data: true,
            message: '',
            typeMessage: 'success',
        }
    }

    getRootNodes() {
        this.rootNodes = this.service.findRootNodes(this.searchArray)
    }
}
