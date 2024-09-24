import { NodeType } from '../../../../../type/nodeType'
import { FormatHashTypeAttrs, NodeHashType, TreeNodeType } from '../../IService'

export function _formatHash(attrs: FormatHashTypeAttrs) {
    const hashNodes = {} as NodeHashType

    for (const location of attrs.locations) {
        if (!hashNodes[location.parentId ?? 'root']) {
            hashNodes[location.parentId ?? 'root'] = []
        }

        hashNodes[location.parentId ?? 'root'].push({
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
            hashNodes['root'].push(node)
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
