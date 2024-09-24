import { NodeType } from '../../../type/nodeType'
import {
    AssetsType,
    AssetType,
    LocationType,
    ComponentType,
} from '../Repository/IRepository'

export type FormatHashTypeAttrs = {
    locations: LocationType[]
    assets: AssetsType[]
}

export type FindChildrenTypeAttr = {
    hashNodes: NodeHashType
    id: string
}

type LocationHashType = LocationType & {
    type: NodeType.LOCATION
    hasChildren: boolean
}

type AssetHashType = AssetType & {
    type: NodeType.ASSET
    hasChildren: boolean
}

export type ComponentHashType = ComponentType & {
    type: NodeType.COMPONENT
    hasChildren: boolean
}

export type TreeNodeType = LocationHashType | AssetHashType | ComponentHashType

export type NodeHashType = {
    [key: string]: TreeNodeType[]
}

export type FormattedComponentType = {
    sensorId: string
    gatewayId: string
    name: string
    isCritical: boolean
    sensorLabel: string
}

export interface IService {
    formatHash(attrs: FormatHashTypeAttrs): NodeHashType
    findChildren(attrs: FindChildrenTypeAttr): TreeNodeType[]
    formatComponent(component: ComponentHashType): FormattedComponentType
}
