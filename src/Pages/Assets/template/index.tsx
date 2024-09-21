import { AssetContent } from './components/AssetContent'
import { Card } from './components/Card'
import { Filter, FilterProps } from './components/Filter'
import { Header, HeaderProps } from './components/Header'
import { TreeContent, TreeContentProps } from './components/TreeContent'
import './styles.scss'

export type AssetsTemplateProps = {
    headerProps: HeaderProps
    filterProps: FilterProps
    treeContentProps: TreeContentProps
}

export function AssetsTemplate({
    headerProps,
    filterProps,
    treeContentProps,
}: AssetsTemplateProps) {
    return (
        <div className="container">
            <Header {...headerProps} />
            <div className="content">
                <Card>
                    <Filter {...filterProps} />

                    <div className="card-container">
                        <TreeContent {...treeContentProps} />
                        <AssetContent
                            assetName="MOTOR RT COAL AF01"
                            componentName="Motor Elétrico (Trifásico)"
                            sensorType={'Elétrica'}
                            gatwayId="CXW988"
                            sensorId="VEQ023"
                        />
                    </div>
                </Card>
            </div>
        </div>
    )
}
