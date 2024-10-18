import { AssetLeaf } from './components/AssetLeaf'
import { ComponentLeaf } from './components/ComponentLeaf'
import { LocationLeaf } from './components/LocationLeaf'

export type NodeProps = {
    name: string
    isActive: boolean
    hasChildren: boolean
    type: 'location' | 'asset' | 'component'
    onClickNode: () => void
}

export function Node(props: NodeProps) {
    if (props.type === 'location') {
        return (
            <LocationLeaf
                name={props.name}
                isActive={props.isActive}
                onClickLocation={props.onClickNode}
                hasChildren={props.hasChildren}
            />
        )
    }

    if (props.type === 'asset') {
        return (
            <AssetLeaf
                name={props.name}
                isActive={props.isActive}
                onClickAsset={props.onClickNode}
                hasChildren={props.hasChildren}
            />
        )
    }

    return (
        <ComponentLeaf
            name={props.name}
            isActive={props.isActive}
            onClickComponent={props.onClickNode}
        />
    )
}
