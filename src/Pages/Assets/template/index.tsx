import {
    ComponentContent,
    ComponentContentProps,
} from './components/ComponentContent'
import { Card } from './components/Card'
import { Filter, FilterProps } from './components/Filter'
import { Header, HeaderProps } from './components/Header'
import { TreeContent, TreeContentProps } from './components/TreeContent'
import './styles.scss'

export type ComponentTemplateProps = {
    headerProps: HeaderProps
    filterProps: FilterProps
    treeContentProps: TreeContentProps
    componentContentProps: ComponentContentProps
}

export function ComponentTemplate({
    headerProps,
    filterProps,
    treeContentProps,
    componentContentProps,
}: ComponentTemplateProps) {
    return (
        <div className="container">
            <Header {...headerProps} />
            <div className="content">
                <Card>
                    <Filter {...filterProps} />

                    <div className="card-container">
                        <TreeContent {...treeContentProps} />
                        <ComponentContent {...componentContentProps} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
