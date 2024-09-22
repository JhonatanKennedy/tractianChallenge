import { InputText } from '../../../../../components/InputText'
import { TreeView } from '../../../../../components/TreeView'
import { Icons } from '../../../../../icons'
import styles from './styles.module.scss'

export type TreeContentProps = {
    searchInputProps: {
        value: string
        onChange: (value: string) => void
    }
}
// Lembrando, o dado será armazenado com um hash com os Ids do pais, isso será feito com os dois endpoints
// A busca achará todos os componentes com o mesmo nome, a partir disso vou pegando todos os pais desses items achados pela pesquisa até chegar o root

export function TreeContent({ searchInputProps }: TreeContentProps) {
    return (
        <div className={styles.container}>
            <InputText
                placeholder="Buscar Ativo ou Local"
                endIcon={<Icons.Contained.Search />}
                {...searchInputProps}
            />

            <div className={styles['tree-content']}>
                <TreeView />
            </div>
        </div>
    )
}
