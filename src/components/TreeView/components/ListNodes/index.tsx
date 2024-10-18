import { useState } from 'react'
import { Node } from '../Node'
import styles from './styles.module.scss'
import { useTreeViewContext } from '../../context'

export type ListNodesProps = {
    id: string
    onClickNode: (id: string) => void
}

export function ListNodes({ id, onClickNode }: ListNodesProps) {
    const [open, setOpen] = useState(false)
    const { hash, handleSelectedValue, selectedId } = useTreeViewContext()

    const hasChildren = hash[id].children.length !== 0
    const listSelected = selectedId === id
    const isSelected = hash[id].type === 'component' ? listSelected : open

    function handleNodeClick(nodeId: string) {
        if (hash[nodeId].type === 'component') {
            handleSelectedValue(nodeId)
            onClickNode(nodeId)
            return
        }
        setOpen(!open)
    }

    return (
        <div>
            <Node
                name={hash[id].name}
                isActive={isSelected}
                onClickNode={() => handleNodeClick(id)}
                hasChildren={hasChildren}
                type={hash[id].type}
            />
            {open ? (
                <div className={styles['nodes-container']}>
                    <div className={styles['trail-container']}>
                        <div className={styles.trail} />
                    </div>

                    <div className={styles['children-container']}>
                        {hash[id].children.map((id) => (
                            <ListNodes
                                key={id}
                                id={id}
                                onClickNode={handleNodeClick}
                            />
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}
