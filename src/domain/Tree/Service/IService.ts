import { NodeType } from '../../../type/nodeType'
import { AssetsType, LocationType } from '../Repository/IRepository'

export type FormatHashTypeAttrs = {
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

export type FindChildrenTypeAttr = {
    hashNodes: NodeHashType
    id: string
}

export interface IService {
    formatHash(attrs: FormatHashTypeAttrs): NodeHashType
    findChildren(attrs: FindChildrenTypeAttr): TreeNodeType[]
}
