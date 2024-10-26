import { createContext, useState, useContext, ReactNode } from 'react'
import { NodeHashType, TreeNodeType } from '../../domain/Tree/Service/IService'

type TreeViewProviderProps = {
    children: ReactNode
    hash: NodeHashType
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
    onSelectNode,
}: TreeViewProviderProps) {
    const [selectedId, setSelectedId] = useState<string>('')

    function getHashNode(id: string): TreeNodeType {
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
