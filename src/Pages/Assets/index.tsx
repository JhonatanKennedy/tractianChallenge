import { useState } from 'react'
import { AssetsTemplate, AssetsTemplateProps } from './template'
import { CompanyType } from './template/components/Header'
import { FilterType } from './template/components/Filter'
import { useUnitDomain } from './hooks/useUnitDomain'

export function AssetsPage() {
    const { companies, selectedCompany, setSelectedCompany } = useUnitDomain()

    const [seachText, setSearchText] = useState('')

    function handleChangeCompany(company: CompanyType) {
        setSelectedCompany(company)
    }

    function handleChangeFilter(filters: FilterType) {
        console.log(filters)
    }

    const props: AssetsTemplateProps = {
        headerProps: {
            onChangeCompany: handleChangeCompany,
            companies,
            selectedCompany,
        },
        filterProps: {
            onChangeFilter: handleChangeFilter,
            companyName: selectedCompany.name,
        },
        treeContentProps: {
            searchInputProps: {
                value: seachText,
                onChange: setSearchText,
            },
        },
    }

    return <AssetsTemplate {...props} />
}
