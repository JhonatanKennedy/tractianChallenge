import { AssetContent, AssetContentProps } from './components/AssetContent'
import { Card } from './components/Card'
import { Filter, FilterProps } from './components/Filter'
import { Header, HeaderProps } from './components/Header'
import { TreeContent, TreeContentProps } from './components/TreeContent'
import './styles.scss'

export type AssetsTemplateProps = {
    headerProps: HeaderProps
    filterProps: FilterProps
    treeContentProps: TreeContentProps
    assetContentProps: AssetContentProps
}

export function AssetsTemplate({
    headerProps,
    filterProps,
    treeContentProps,
    assetContentProps,
}: AssetsTemplateProps) {
    return (
        <div className="container">
            <Header {...headerProps} />
            <div className="content">
                <Card>
                    <Filter {...filterProps} />

                    <div className="card-container">
                        <TreeContent {...treeContentProps} />
                        <AssetContent {...assetContentProps} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
