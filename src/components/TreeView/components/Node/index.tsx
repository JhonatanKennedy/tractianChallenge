import { AssetLeaf } from './components/AssetLeaf'
import { ComponentLeaf } from './components/ComponentLeaf'
import { LocationLeaf } from './components/LocationLeaf'

export type NodeProps = {
    name: string
    isActive: boolean
    hasChildren: boolean
    type: 'asset' | 'component' | 'location'
    onClickNode: () => void
}

export function Node({
    type,
    name,
    isActive,
    hasChildren,
    onClickNode,
}: NodeProps) {
    if (type === 'location') {
        return (
            <LocationLeaf
                name={name}
                isActive={isActive}
                onClickLocation={onClickNode}
                hasChildren={hasChildren}
            />
        )
    }

    if (type === 'asset') {
        return (
            <AssetLeaf
                name={name}
                isActive={isActive}
                onClickAsset={onClickNode}
                hasChildren={hasChildren}
            />
        )
    }

    return (
        <ComponentLeaf
            name={name}
            isActive={isActive}
            onClickComponent={onClickNode}
        />
    )
}
