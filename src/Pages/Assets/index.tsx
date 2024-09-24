import { useState } from 'react'
import { AssetsTemplate, AssetsTemplateProps } from './template'
import { CompanyType } from './template/components/Header'
import { FilterType } from './template/components/Filter'
import { useUnitDomain } from './hooks/useUnitDomain'
import { useTreeDomain } from './hooks/useTreeDomain'

export function AssetsPage() {
    const { companies, selectedCompany, setSelectedCompany } = useUnitDomain()
    const { rootNodes, handleChangeUnitId, handleNodeClick } = useTreeDomain(
        selectedCompany.id,
    )

    const [seachText, setSearchText] = useState('')

    function handleChangeCompany(company: CompanyType) {
        setSelectedCompany(company)
        handleChangeUnitId(company.id)
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
            treeProps: {
                nodes: rootNodes,
                onClickNode: handleNodeClick,
            },
        },
    }

    return <AssetsTemplate {...props} />
}
