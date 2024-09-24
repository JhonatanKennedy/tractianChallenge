import { useCallback, useEffect, useState } from 'react'
import { TreeDomain } from '../../../domain/Tree/main'
import { TreeNodeType } from '../../../domain/Tree/Service/IService'

export function useTreeDomain(unitId: string) {
    const [treeDomain] = useState(new TreeDomain())

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [rootNodes, setRootNodes] = useState<TreeNodeType[]>([])

    const fetchData = useCallback(
        async (id: string) => {
            try {
                setIsLoading(true)

                const response = await treeDomain.getLocations(id)
                if (!response.data) {
                    setIsError(true)
                    return
                }

                const rootArray = treeDomain.getChildren()
                setRootNodes(rootArray.data)
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
    }

    function handleNodeClick(id: string) {
        const childrenArray = treeDomain.getChildren(id)
        return childrenArray.data
    }

    return {
        rootNodes,
        handleChangeUnitId,
        isLoading,
        isError,
        handleNodeClick,
    }
}
