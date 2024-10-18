import { NodeHashType, TreeNodeType } from '../../IService'

export function _formatHash(array: TreeNodeType[]) {
    const hashNodes = {} as NodeHashType

    for (const node of array) {
        hashNodes[node.id] = node
    }

    for (const node of array) {
        if (node.type === 'location' && node.parentId) {
            hashNodes[node.parentId].children.push(node.id)
        }

        if (node.type !== 'location') {
            if (node.parentId) {
                hashNodes[node.parentId].children.push(node.id)
            }

            if (node.locationId) {
                hashNodes[node.locationId].children.push(node.id)
            }
        }
    }

    return hashNodes
}
