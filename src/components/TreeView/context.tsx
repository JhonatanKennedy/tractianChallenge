import { createContext, useState, useContext, ReactNode } from 'react'
import { NodeHashType } from '../../domain/Tree/Service/IService'

type TreeViewProviderProps = {
    children: ReactNode
    hash: NodeHashType
}

type TreeViewContextProps = {
    selectedId: string
    handleSelectedValue: (id: string) => void
    hash: NodeHashType
}

const TreeViewContext = createContext({} as TreeViewContextProps)

function TreeViewProvider({ children, hash }: TreeViewProviderProps) {
    const [selectedId, setSelectedId] = useState<string>('')

    function handleSelectedValue(id: string) {
        if (id === selectedId) {
            setSelectedId('')
            return
        }

        setSelectedId(id)
    }

    return (
        <TreeViewContext.Provider
            value={{ selectedId, handleSelectedValue, hash }}
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
