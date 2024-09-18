import { Button } from '../../../../../components/Button'
import { Icons } from '../../../../../icons'
import './styles.scss'

export type CompanyType = { id: string; name: string }

export type HeaderProps = {
    selectedCompany: string
    companies: CompanyType[]
}

export function Header({ selectedCompany, companies }: HeaderProps) {
    return (
        <div className="container">
            <div className="logo-area">
                <Icons.Contained.Logo />
            </div>
            <div className="button-area">
                {companies.map((company) => (
                    <Button
                        key={company.id}
                        color="primary"
                        size="small"
                        isSelected={selectedCompany === company.id}
                    >
                        {company.name}
                    </Button>
                ))}
            </div>
        </div>
    )
}
