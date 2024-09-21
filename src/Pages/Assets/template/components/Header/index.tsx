import { Button } from '../../../../../components/Button'
import { Icons } from '../../../../../icons'
import styles from './styles.module.scss'

export type CompanyType = { id: string; name: string }

export type HeaderProps = {
    selectedCompany: CompanyType
    companies: CompanyType[]
    onChangeCompany: (company: CompanyType) => void
}

export function Header({
    companies,
    selectedCompany,
    onChangeCompany,
}: HeaderProps) {
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
                        isSelected={selectedCompany.id === company.id}
                        leftIcon={<Icons.Outlined.Unit />}
                        onClick={() => onChangeCompany(company)}
                    >
                        {company.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
