import { NodeType } from '../../../../../type/nodeType'
import { FormatHashTypeAttrs, TreeNodeType } from '../../IService'

export function _formatArrayNode(attrs: FormatHashTypeAttrs): TreeNodeType[] {
    const arrayNode = []

    for (const location of attrs.locations) {
        const node = {
            ...location,
            type: NodeType.LOCATION,
            children: [],
            isSelected: false,
            isCritical: false,
            isEnergy: false,
        } as TreeNodeType

        arrayNode.push(node)
    }

    for (const asset of attrs.assets) {
        const type = !asset.sensorType ? NodeType.ASSET : NodeType.COMPONENT
        const node = {
            ...asset,
            type,
            children: [],
            isSelected: false,
            isCritical: false,
            isEnergy: false,
        } as TreeNodeType

        arrayNode.push(node)
    }

    return arrayNode
}
