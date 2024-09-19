import { AssetContent } from './components/AssetContent'
import { Card } from './components/Card'
import { Filter, FilterProps } from './components/Filter'
import { Header, HeaderProps } from './components/Header'
import './styles.scss'

export type AssetsTemplateProps = {
    headerProps: HeaderProps
    filterProps: FilterProps
}

export function AssetsTemplate({
    headerProps,
    filterProps,
}: AssetsTemplateProps) {
    return (
        <div className="container">
            <Header {...headerProps} />
            <div className="content">
                <Card>
                    <Filter {...filterProps} />

                    <AssetContent
                        assetName="MOTOR RT COAL AF01"
                        componentName="Motor Elétrico (Trifásico)"
                        sensorType={'Elétrica'}
                        gatwayId="CXW988"
                        sensorId="VEQ023"
                    />
                </Card>
            </div>
        </div>
    )
}
