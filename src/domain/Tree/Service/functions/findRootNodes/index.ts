import { TreeNodeType } from '../../IService'

export function _findRootNodes(array: TreeNodeType[]): string[] {
    const rootIds = []
    for (const node of array) {
        if (node.type !== 'location') {
            if (!node.parentId && !node.locationId) {
                rootIds.push(node.id)
            }
        }

        if (node.type === 'location') {
            if (!node.parentId) {
                rootIds.push(node.id)
            }
        }
    }

    return rootIds
}
