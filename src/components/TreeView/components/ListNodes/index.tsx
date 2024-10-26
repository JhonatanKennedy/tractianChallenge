import { useState } from 'react'
import { Node } from '../Node'
import styles from './styles.module.scss'
import { useTreeViewContext } from '../../context'

export type ListNodesProps = {
    id: string
}

export function ListNodes({ id }: ListNodesProps) {
    const [open, setOpen] = useState(false)
    const { selectedId, handleSelectedValue, getHashNode } =
        useTreeViewContext()

    const hashNode = getHashNode(id)

    const hasChildren = hashNode.children.length !== 0
    const listSelected = selectedId === id
    const isSelected = hashNode.type === 'component' ? listSelected : open

    function handleNodeClick(nodeId: string) {
        if (getHashNode(id).type === 'component') {
            handleSelectedValue(nodeId)
            return
        }
        setOpen(!open)
    }

    return (
        <div>
            <Node
                name={hashNode.name}
                isActive={isSelected}
                onClickNode={() => handleNodeClick(id)}
                hasChildren={hasChildren}
                type={hashNode.type}
            />
            {open ? (
                <div className={styles['nodes-container']}>
                    <div className={styles['trail-container']}>
                        <div className={styles.trail} />
                    </div>

                    <div className={styles['children-container']}>
                        {hashNode.children.map((id) => (
                            <ListNodes key={id} id={id} />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}
