import { createContext, useState, useContext, ReactNode } from 'react'
import { NodeHashType, TreeNodeType } from '../../domain/Tree/Service/IService'
import { FilterType } from '../../type/filterType'

type TreeViewProviderProps = {
    children: ReactNode
    hash: NodeHashType
    filters: FilterType[]
    onSelectNode: (id: string) => void
}

type TreeViewContextProps = {
    selectedId: string
    handleSelectedValue: (id: string) => void
    getHashNode: (id: string) => TreeNodeType
}

const TreeViewContext = createContext({} as TreeViewContextProps)

function TreeViewProvider({
    children,
    hash,
    filters,
    onSelectNode,
}: TreeViewProviderProps) {
    const [selectedId, setSelectedId] = useState<string>('')

    function getHashNode(id: string): TreeNodeType {
        if (filters.length !== 0) {
            const isEnergy = filters.includes(FilterType.ENERGY)
            const isCritical = filters.includes(FilterType.CRITICAL)

            let childrenFiltered: string[] = []

            if (isEnergy && isCritical) {
                childrenFiltered = hash[id].children.filter(
                    (id) => hash[id].isCritical || hash[id].isEnergy,
                )
            }

            if (isEnergy) {
                childrenFiltered = hash[id].children.filter(
                    (id) => hash[id].isEnergy,
                )
            }

            if (isCritical) {
                childrenFiltered = hash[id].children.filter(
                    (id) => hash[id].isCritical,
                )
            }

            return {
                ...hash[id],
                children: childrenFiltered,
            }
        }

        return hash[id]
    }

    function handleSelectedValue(id: string) {
        setSelectedId(id)
        onSelectNode(id)
    }

    return (
        <TreeViewContext.Provider
            value={{ selectedId, handleSelectedValue, getHashNode }}
        >
            {children}
        </TreeViewContext.Provider>
    )
}

function useTreeViewContext() {
    const context = useContext(TreeViewContext)
    return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { TreeViewProvider, useTreeViewContext }
