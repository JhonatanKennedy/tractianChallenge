import { useState } from 'react'
import { AssetsTemplate, AssetsTemplateProps } from './template'
import { CompanyType } from './template/components/Header'
import { FilterType } from './template/components/Filter'

const companies = [
    {
        id: '662fd0ee639069143a8fc387',
        name: 'Jaguar',
    },
    {
        id: '662fd0fab3fd5656edb39af5',
        name: 'Tobias',
    },
    {
        id: '662fd100f990557384756e58',
        name: 'Apex',
    },
]

export function AssetsPage() {
    const [companyName, setCompanyName] = useState<string>('')

    function handleChangeCompany(company: CompanyType) {
        setCompanyName(company.name)
    }

    function handleChangeFilter(filters: FilterType) {
        console.log(filters)
    }

    const props: AssetsTemplateProps = {
        headerProps: {
            onClickCompany: handleChangeCompany,
            companies,
            initialCompany: companies[0],
        },
        filterProps: {
            onClickFilter: handleChangeFilter,
            companyName,
        },
    }

    return <AssetsTemplate {...props} />
}
