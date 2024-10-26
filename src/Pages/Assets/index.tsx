import { useState } from 'react'
import { ComponentTemplate, ComponentTemplateProps } from './template'
import { CompanyType } from './template/components/Header'
import { useUnitDomain } from './hooks/useUnitDomain'
import { useTreeDomain } from './hooks/useTreeDomain'

export function AssetsPage() {
    const { companies, selectedCompany, setSelectedCompany } = useUnitDomain()
    const {
        rootNodes,
        selectedNode,
        hash,
        isLoading,
        filters,
        setFilters,
        handleChangeUnitId,
        handleNodeClick,
        handleChangeFilter,
    } = useTreeDomain(selectedCompany.id)

    const [seachText, setSearchText] = useState('')

    function handleChangeCompany(company: CompanyType) {
        setSelectedCompany(company)
        handleChangeUnitId(company.id)
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
            selectedFilters: filters,
            setSelectedFilters: setFilters,
        },
        treeContentProps: {
            searchInputProps: {
                value: seachText,
                onChange: setSearchText,
            },
            treeProps: {
                rootNodes,
                hashNodes: hash,
                onClickNode: handleNodeClick,
                isLoading,
                filters,
            },
        },
        componentContentProps: {
            component: selectedNode,
        },
    }

    return <ComponentTemplate {...props} />
}
