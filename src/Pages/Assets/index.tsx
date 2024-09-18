import { AssetsTemplate, AssetsTemplateProps } from './template'

export function AssetsPage() {
    const props: AssetsTemplateProps = {
        headerProps: {
            onClickCompany: (company) => console.log(company),
            companies: [
                {
                    id: '662fd0ee639069143a8fc387',
                    name: 'Jaguar',
                },
                {
                    id: '662fd0fab3fd5656edb39af5',
                    name: 'Tobias',
                },
                {
                    id: '662fd100f990557384756e58',
                    name: 'Apex',
                },
            ],
            selectedCompany: '662fd0ee639069143a8fc387',
        },
    }

    return <AssetsTemplate {...props} />
}
