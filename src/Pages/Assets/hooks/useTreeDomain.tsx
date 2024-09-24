import { useCallback, useEffect, useState } from 'react'
import { TreeDomain } from '../../../domain/Tree/main'
import { NodeType } from '../../../type/nodeType'
import {
    FormattedComponentType,
    TreeNodeType,
} from '../../../domain/Tree/Service/IService'

export function useTreeDomain(unitId: string) {
    const [treeDomain] = useState(new TreeDomain())

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [rootNodes, setRootNodes] = useState<TreeNodeType[]>([])
    const [selectedNode, setSelectedNode] =
        useState<FormattedComponentType | null>(null)

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
                setRootNodes(rootArray)
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

    function handleNodeClick(node: TreeNodeType) {
        if (node.type === NodeType.COMPONENT) {
            setSelectedNode(treeDomain.formatComponent(node))
            return []
        }

        setSelectedNode(null)
        const childrenArray = treeDomain.getChildren(node.id)
        return childrenArray
    }

    return {
        rootNodes,
        handleChangeUnitId,
        isLoading,
        isError,
        handleNodeClick,
        selectedNode,
    }
}
