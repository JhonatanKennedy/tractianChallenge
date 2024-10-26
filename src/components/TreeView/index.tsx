import styles from './styles.module.scss'
import { NodeHashType } from '../../domain/Tree/Service/IService'
import { ListNodes } from './components/ListNodes'
import { TreeViewProvider } from './context'
import { FilterType } from '../../type/filterType'

export type TreeViewProps = {
    rootNodes: string[]
    hashNodes: NodeHashType
    onClickNode: (id: string) => void
    isLoading: boolean
    filters: FilterType[]
}

export function TreeView({
    rootNodes,
    hashNodes,
    isLoading,
    filters,
    onClickNode,
}: TreeViewProps) {
    if (isLoading) {
        return <div>loading</div>
    }

    return (
        <TreeViewProvider
            hash={hashNodes}
            onSelectNode={onClickNode}
            filters={filters}
        >
            <div className={styles.container}>
                {rootNodes.map((id) => (
                    <ListNodes key={id} id={id} />
                ))}
            </div>
        </TreeViewProvider>
    )
}
