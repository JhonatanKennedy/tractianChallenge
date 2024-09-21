import { InputText } from '../../../../../components/InputText'
import { Icons } from '../../../../../icons'
import styles from './styles.module.scss'

export type TreeContentProps = {
    searchInputProps: {
        value: string
        onChange: (value: string) => void
    }
}

export function TreeContent({ searchInputProps }: TreeContentProps) {
    return (
        <div className={styles.container}>
            <InputText
                placeholder="Buscar Ativo ou Local"
                endIcon={<Icons.Contained.Search />}
                {...searchInputProps}
            />
        </div>
    )
}
