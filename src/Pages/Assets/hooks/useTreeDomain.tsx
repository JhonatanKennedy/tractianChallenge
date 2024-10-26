import { useCallback, useEffect, useState } from 'react'
import { TreeDomain } from '../../../domain/Tree/main'
import { NodeType } from '../../../type/nodeType'
import { FormattedComponentType } from '../../../domain/Tree/Service/IService'
import { FilterType } from '../template/components/Filter'

export function useTreeDomain(unitId: string) {
    const [treeDomain] = useState(new TreeDomain())

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [rootNodes, setRootNodes] = useState<string[]>([])
    const [selectedNode, setSelectedNode] =
        useState<FormattedComponentType | null>(null)

    const [filters, setFilters] = useState<FilterType[]>([])

    const fetchData = useCallback(
        async (id: string) => {
            try {
                setIsLoading(true)

                const response = await treeDomain.getItems(id)
                if (!response.data) {
                    setIsError(true)
                    return
                }

                treeDomain.getRootNodes()
                setRootNodes(treeDomain.rootNodes)
                setIsError(false)
            } finally {
                setIsLoading(false)
            }
        },
        [treeDomain],
    )

    useEffect(() => {
        if (unitId) {
            fetchData(unitId)
        }
    }, [fetchData, unitId])

    function handleChangeUnitId(id: string) {
        fetchData(id)
        setSelectedNode(null)
    }

    function handleNodeClick(id: string) {
        const hash = treeDomain.hashNodes[id]

        if (hash.type === NodeType.COMPONENT) {
            setSelectedNode(treeDomain.formatComponent(hash))
            return
        }
    }

    return {
        rootNodes,
        hash: treeDomain.hashNodes,
        handleChangeUnitId,
        isLoading,
        isError,
        handleNodeClick,
        selectedNode,
        filters,
        setFilters,
    }
}
