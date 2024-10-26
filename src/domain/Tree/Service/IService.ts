import { NodeType } from '../../../type/nodeType'
import {
    AssetsType,
    AssetType,
    LocationType,
    ComponentType,
} from '../Repository/IRepository'

export type FormatArrayNodeAttrs = {
    locations: LocationType[]
    assets: AssetsType[]
}

export type FindChildrenTypeAttr = {
    hashNodes: NodeHashType
    id: string
}

export type FillFiltersAttrs = {
    rootIds: string[]
    hash: NodeHashType
}

type LocationHashType = LocationType & {
    type: NodeType.LOCATION
    isEnergy: boolean
    isCritical: boolean
}

type AssetHashType = AssetType & {
    type: NodeType.ASSET
    isEnergy: boolean
    isCritical: boolean
}

type ComponentHashType = ComponentType & {
    type: NodeType.COMPONENT
    isEnergy: boolean
    isCritical: boolean
}

export type TreeNodeType = (
    | LocationHashType
    | AssetHashType
    | ComponentHashType
) & {
    children: string[]
}

export type NodeHashType = {
    [key: string]: TreeNodeType
}

export type FormattedComponentType = {
    sensorId: string
    gatewayId: string
    name: string
    isCritical: boolean
    sensorLabel: string
}

export interface IService {
    formatArrayNode(attrs: FormatArrayNodeAttrs): TreeNodeType[]
    findRootNodes(array: TreeNodeType[]): string[]
    formatHash(array: TreeNodeType[]): NodeHashType
    formatComponent(component: TreeNodeType): FormattedComponentType | null
    fillFilters(attrs: FillFiltersAttrs): NodeHashType
}
