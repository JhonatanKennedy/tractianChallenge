import { FindChildrenTypeAttr } from '../../IService'

export function _findChildren(attrs: FindChildrenTypeAttr) {
    const { id, hashNodes } = attrs
    const rootNodes = hashNodes[id]

    if (!rootNodes) {
        return []
    }

    for (const node of rootNodes) {
        if (hashNodes[node.id]) {
            if (hashNodes[node.id].length !== 0) {
                node.hasChildren = true
            }
        }
    }

    return rootNodes
}
