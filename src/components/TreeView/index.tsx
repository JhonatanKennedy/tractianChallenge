import { Node } from './components/Node'
import { TreeNodeType } from '../../domain/Tree/Service/IService'
import styles from './styles.module.scss'

export type TreeViewProps = {
    nodes: TreeNodeType[]
    onClickNode: (id: TreeNodeType) => TreeNodeType[]
}

export function TreeView({ nodes, onClickNode }: TreeViewProps) {
    return (
        <div className={styles.container}>
            {nodes.map((node) => (
                <Node key={node.id} node={node} onClickNode={onClickNode} />
            ))}
        </div>
    )
}
