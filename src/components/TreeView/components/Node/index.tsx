import { useState } from 'react'
import { AssetLeaf } from './components/AssetLeaf'
import { ComponentLeaf } from './components/ComponentLeaf'
import { LocationLeaf } from './components/LocationLeaf'
import styles from './styles.module.scss'
import { TreeNodeType } from '../../../../domain/Tree/Service/IService'

export type NodeProps = {
    onClickNode: (value: TreeNodeType) => TreeNodeType[]
    node: TreeNodeType
}

export function Node({ node, onClickNode }: NodeProps) {
    const [children, setChildren] = useState<TreeNodeType[]>([])

    function handleClickNode(node: TreeNodeType) {
        if (children.length !== 0) {
            setChildren([])
            return
        }
        const childrenArray = onClickNode(node)
        setChildren(childrenArray)
    }

    if (node.type === 'location') {
        return (
            <div>
                <LocationLeaf
                    name={node.name}
                    isActive={children.length !== 0}
                    onClickLocation={() => handleClickNode(node)}
                    hasChildren={node.hasChildren}
                />
                {children.length !== 0 && (
                    <div className={styles['nodes-container']}>
                        <div className={styles['trail-container']}>
                            <div className={styles.trail} />
                        </div>

                        <div className={styles['children-container']}>
                            {children.map((child) => (
                                <Node
                                    key={child.id}
                                    node={child}
                                    onClickNode={onClickNode}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    if (node.type === 'asset') {
        return (
            <div>
                <AssetLeaf
                    name={node.name}
                    isActive={children.length !== 0}
                    onClickAsset={() => handleClickNode(node)}
                    hasChildren={node.hasChildren}
                />
                {children.length !== 0 && (
                    <div className={styles['nodes-container']}>
                        <div className={styles['trail-container']}>
                            <div className={styles.trail} />
                        </div>

                        <div className={styles['children-container']}>
                            {children.map((child) => (
                                <Node
                                    key={child.id}
                                    node={child}
                                    onClickNode={onClickNode}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            <ComponentLeaf
                name={node.name}
                // TODO this will be implemented whey the click on assets and components starts
                isActive={false}
                onClickComponent={() => onClickNode(node)}
            />
        </div>
    )
}
