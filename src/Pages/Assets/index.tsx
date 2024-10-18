import { useState } from 'react'
import { ComponentTemplate, ComponentTemplateProps } from './template'
import { CompanyType } from './template/components/Header'
import { FilterType } from './template/components/Filter'
import { useUnitDomain } from './hooks/useUnitDomain'
import { useTreeDomain } from './hooks/useTreeDomain'

export function AssetsPage() {
    const { companies, selectedCompany, setSelectedCompany } = useUnitDomain()
    const {
        rootNodes,
        selectedNode,
        handleChangeUnitId,
        hash,
        handleNodeClick,
    } = useTreeDomain(selectedCompany.id)

    const [seachText, setSearchText] = useState('')

    function handleChangeCompany(company: CompanyType) {
        setSelectedCompany(company)
        handleChangeUnitId(company.id)
    }

    function handleChangeFilter(filters: FilterType) {
        console.log(filters)
    }

    const props: ComponentTemplateProps = {
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
                rootNodes,
                hash,
                onClickNode: handleNodeClick,
            },
        },
        componentContentProps: {
            component: selectedNode,
        },
    }

    return <ComponentTemplate {...props} />
}
