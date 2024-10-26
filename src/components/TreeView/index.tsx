import styles from './styles.module.scss'
import { NodeHashType } from '../../domain/Tree/Service/IService'
import { ListNodes } from './components/ListNodes'
import { TreeViewProvider } from './context'
import { FilterType } from '../../Pages/Assets/template/components/Filter'

export type TreeViewProps = {
    rootNodes: string[]
    hashNodes: NodeHashType
    filters: FilterType[]
    onClickNode: (id: string) => void
}

export function TreeView({
    rootNodes,
    hashNodes,
    onClickNode,
    filters,
}: TreeViewProps) {
    const hasEnergy = filters.includes(FilterType.ENERGY)
    const hasCritical = filters.includes(FilterType.CRITICAL)

    if (hasCritical && hasEnergy) {
        const filteredNodes = rootNodes.filter(
            (id) => hashNodes[id].isCritical || hashNodes[id].isEnergy,
        )

        return (
            <TreeViewProvider hash={hashNodes} onSelectNode={onClickNode}>
                <div className={styles.container}>
                    {filteredNodes.map((id) => (
                        <ListNodes key={id} id={id} />
                    ))}
                </div>
            </TreeViewProvider>
        )
    }

    if (hasEnergy) {
        const filteredNodes = rootNodes.filter((id) => hashNodes[id].isEnergy)
        return (
            <TreeViewProvider hash={hashNodes} onSelectNode={onClickNode}>
                <div className={styles.container}>
                    {filteredNodes.map((id) => (
                        <ListNodes key={id} id={id} />
                    ))}
                </div>
            </TreeViewProvider>
        )
    }

    if (hasCritical) {
        const filteredNodes = rootNodes.filter((id) => hashNodes[id].isCritical)

        return (
            <TreeViewProvider hash={hashNodes} onSelectNode={onClickNode}>
                <div className={styles.container}>
                    {filteredNodes.map((id) => (
                        <ListNodes key={id} id={id} />
                    ))}
                </div>
            </TreeViewProvider>
        )
    }

    return (
        <TreeViewProvider hash={hashNodes} onSelectNode={onClickNode}>
            <div className={styles.container}>
                {rootNodes.map((id) => (
                    <ListNodes key={id} id={id} />
                ))}
            </div>
        </TreeViewProvider>
    )
}
