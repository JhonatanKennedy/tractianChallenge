import { _fillFilters } from './functions/findEnergySensor'
import { _findRootNodes } from './functions/findRootNodes'
import { _formatArrayNode } from './functions/formatArrayNode'
import { _formatComponent } from './functions/formatComponent'
import { _formatHash } from './functions/formatHash'
import {
    FillFiltersAttrs,
    FormatArrayNodeAttrs,
    IService,
    TreeNodeType,
} from './IService'

export class Service implements IService {
    formatArrayNode(attrs: FormatArrayNodeAttrs) {
        return _formatArrayNode(attrs)
    }

    findRootNodes(array: TreeNodeType[]) {
        return _findRootNodes(array)
    }

    formatHash(attrs: TreeNodeType[]) {
        return _formatHash(attrs)
    }

    formatComponent(component: TreeNodeType) {
        return _formatComponent(component)
    }

    fillFilters(attrs: FillFiltersAttrs) {
        return _fillFilters(attrs)
    }
}
