import { axiosAdapter } from '../infra/AxiosAdapter'
import { Repository } from './Repository'
import { Service } from './Service'
import { NodeHashType } from './Service/functions/formatHash'

export class TreeDomain {
    private repository: Repository
    private service: Service

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

    getChildren(id: string = 'null') {
        const children = this.service.findChildren({
            id,
            hashNodes: this.hashNodes,
        })

        return {
            data: children,
            message: '',
            typeMessage: 'success',
        }
    }
}
