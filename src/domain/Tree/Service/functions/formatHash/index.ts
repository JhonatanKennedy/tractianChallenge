import { AssetsType, LocationType } from '../../../Repository'
import { NodeType } from '../../../../../type/nodeType'

export type FormatInitialHashAttr = {
    locations: LocationType[]
    assets: AssetsType[]
}

type NewTreeNodeType = LocationType | AssetsType

export type TreeNodeType = NewTreeNodeType & {
    type: NodeType
    hasChildren: boolean
}

export type NodeHashType = {
    [key: string]: TreeNodeType[]
}

export function _formatHash(attrs: FormatInitialHashAttr) {
    const hashNodes = {} as NodeHashType

    for (const location of attrs.locations) {
        if (!hashNodes[location.parentId ?? 'null']) {
            hashNodes[location.parentId ?? 'null'] = []
        }

        hashNodes[location.parentId ?? 'null'].push({
            ...location,
            type: NodeType.LOCATION,
            hasChildren: false,
        })
    }

    for (const asset of attrs.assets) {
        const type = !asset.sensorType ? NodeType.ASSET : NodeType.COMPONENT
        const node: TreeNodeType = {
            ...asset,
            type,
            hasChildren: false,
        }

        if (!asset.parentId && !asset.locationId) {
            hashNodes['null'].push(node)
        } else {
            if (!asset.parentId) {
                if (!hashNodes[asset.locationId as string]) {
                    hashNodes[asset.locationId as string] = []
                }
                hashNodes[asset.locationId as string].push(node)
            } else {
                if (!hashNodes[asset.parentId]) {
                    hashNodes[asset.parentId] = []
                }
                hashNodes[asset.parentId].push(node)
            }
        }
    }

    return hashNodes
}
