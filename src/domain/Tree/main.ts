import { FilterType } from '../../type/filterType'
import { axiosAdapter } from '../infra/AxiosAdapter'
import { Repository } from './Repository'
import { IRepository } from './Repository/IRepository'
import { Service } from './Service'
import { IService, NodeHashType, TreeNodeType } from './Service/IService'

export class TreeDomain {
    private repository: IRepository
    private service: IService

    private searchArray: TreeNodeType[] = []

    private alreadyApplyedFilters = false
    private rawRootNodes: string[] = []

    hashNodes = {} as NodeHashType

    constructor() {
        this.repository = new Repository(axiosAdapter)
        this.service = new Service()
    }

    async getItems(id: string) {
        this.reset()

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
        if (this.rawRootNodes.length === 0) {
            this.rawRootNodes = this.service.findRootNodes(this.searchArray)
            return this.rawRootNodes
        }

        return this.rawRootNodes
    }

    applyFilter(filters: FilterType[]) {
        if (!this.alreadyApplyedFilters) {
            this.hashNodes = this.service.fillFilters({
                hash: this.hashNodes,
                rootIds: this.rawRootNodes,
            })
            this.alreadyApplyedFilters = true
        }

        if (filters.length === 0) {
            return this.rawRootNodes
        }

        const hasEnergy = filters.includes(FilterType.ENERGY)
        const hasCritical = filters.includes(FilterType.CRITICAL)

        if (hasEnergy && hasCritical) {
            const filteredNodes = this.rawRootNodes.filter(
                (id) =>
                    this.hashNodes[id].isCritical ||
                    this.hashNodes[id].isEnergy,
            )

            return filteredNodes
        }

        if (hasEnergy) {
            const filteredNodes = this.rawRootNodes.filter(
                (id) => this.hashNodes[id].isEnergy,
            )

            return filteredNodes
        }

        if (hasCritical) {
            const filteredNodes = this.rawRootNodes.filter(
                (id) => this.hashNodes[id].isCritical,
            )

            return filteredNodes
        }

        return []
    }

    formatComponent(component: TreeNodeType) {
        return this.service.formatComponent(component)
    }

    reset() {
        this.alreadyApplyedFilters = false
        this.rawRootNodes = []
    }
}
