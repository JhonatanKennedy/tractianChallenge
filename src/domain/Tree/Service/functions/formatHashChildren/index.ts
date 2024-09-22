import { NodeType } from '../../../../../type/nodeType'
import { LocationType } from '../../../Repository'

export type LocationHashType = LocationType & {
    type: NodeType
    children: {
        [key: string]: LocationType
    }
}

export type TreeLocationHashType = {
    [key: string]: LocationHashType
}

export function _formatTreeHash(locations: LocationType[]) {
    const hashChildren = {} as TreeLocationHashType
    const hashParents = {} as TreeLocationHashType

    for (const location of locations) {
        if (!location.parentId) {
            hashParents[location.id] = {
                ...location,
                type: NodeType.LOCATION,
                children: {},
            }
        } else {
            hashChildren[location.parentId] = {
                ...location,
                type: NodeType.LOCATION,
                children: {},
            }
        }
    }

    return {
        hashChildren,
        hashParents,
    }
}
