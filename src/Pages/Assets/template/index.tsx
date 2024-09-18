import { Card } from './components/Card'
import { Header, HeaderProps } from './components/Header'
import './styles.scss'

export type AssetsTemplateProps = {
    headerProps: HeaderProps
}

export function AssetsTemplate({ headerProps }: AssetsTemplateProps) {
    return (
        <div className="container">
            <Header {...headerProps} />
            <div className="content">
                <Card>teste</Card>
            </div>
        </div>
    )
}
