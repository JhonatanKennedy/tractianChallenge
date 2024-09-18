import { Button } from '../../../../../components/Button'
import { Icons } from '../../../../../icons'
import styles from './styles.module.scss'

export type CompanyType = { id: string; name: string }

export type HeaderProps = {
    selectedCompany: string
    companies: CompanyType[]
}

export function Header({ selectedCompany, companies }: HeaderProps) {
    return (
        <div className={styles.container}>
            <div className={styles['logo-area']}>
                <Icons.Contained.Logo />
            </div>
            <div className={styles['button-area']}>
                {companies.map((company) => (
                    <Button
                        key={company.id}
                        color="primary"
                        size="small"
                        isSelected={selectedCompany === company.id}
                        leftIcon={<Icons.Outlined.Unit />}
                    >
                        {company.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
