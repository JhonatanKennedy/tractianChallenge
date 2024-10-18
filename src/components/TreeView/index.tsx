import styles from './styles.module.scss'
import { NodeHashType } from '../../domain/Tree/Service/IService'
import { ListNodes } from './components/ListNodes'
import { TreeViewProvider } from './context'

export type TreeViewProps = {
    rootNodes: string[]
    hash: NodeHashType
    onClickNode: (id: string) => void
}

export function TreeView({ rootNodes, hash, onClickNode }: TreeViewProps) {
    return (
        <TreeViewProvider hash={hash}>
            <div className={styles.container}>
                {rootNodes.map((id) => (
                    <ListNodes key={id} id={id} onClickNode={onClickNode} />
                ))}
            </div>
        </TreeViewProvider>
    )
}
