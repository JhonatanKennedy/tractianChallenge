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
        handleChangeUnitId,
        hash,
        handleNodeClick,
        filters,
        setFilters,
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
            onChangeFilter: setFilters,
            companyName: selectedCompany.name,
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
                filters,
            },
        },
        componentContentProps: {
            component: selectedNode,
        },
    }

    return <ComponentTemplate {...props} />
}
