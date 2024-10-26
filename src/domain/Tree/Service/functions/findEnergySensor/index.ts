import { FillFiltersAttrs, NodeHashType } from '../../IService'

function fillFilters(hash: NodeHashType, id: string) {
    for (const childrenId of hash[id].children) {
        fillFilters(hash, childrenId)
        hash[id].isEnergy = hash[id].isEnergy || hash[childrenId].isEnergy
        hash[id].isCritical = hash[id].isCritical || hash[childrenId].isCritical
    }
}

export function _fillFilters(attrs: FillFiltersAttrs) {
    const roots = attrs.rootIds
    const hash = attrs.hash

    for (const rootId of roots) {
        fillFilters(hash, rootId)
    }

    return hash
}
