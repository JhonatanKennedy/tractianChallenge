import { InputText } from '../../../../../components/InputText'
import { TreeView, TreeViewProps } from '../../../../../components/TreeView'
import { Icons } from '../../../../../icons'
import styles from './styles.module.scss'

export type TreeContentProps = {
    searchInputProps: {
        value: string
        onChange: (value: string) => void
    }
    treeProps: TreeViewProps
}

export function TreeContent({ searchInputProps, treeProps }: TreeContentProps) {
    return (
        <div className={styles.container}>
            <InputText
                placeholder="Buscar Ativo ou Local"
                endIcon={<Icons.Contained.Search />}
                {...searchInputProps}
            />

            <div className={styles['tree-content']}>
                <TreeView {...treeProps} />
            </div>
        </div>
    )
}
