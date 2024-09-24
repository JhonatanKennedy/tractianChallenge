import { NodeHashType } from '../formatHash'

export type FindChildrenTypeAttr = {
    hashNodes: NodeHashType
    id: string
}

export function _findChildren(attrs: FindChildrenTypeAttr) {
    const { id, hashNodes } = attrs
    const rootNodes = hashNodes[id]
    //TODO talvez colocar uma condição para caso nao exista o id desejado aqui

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
