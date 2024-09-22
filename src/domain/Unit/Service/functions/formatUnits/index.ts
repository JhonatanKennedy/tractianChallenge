import { CompanyType } from '../../../Repository'

export function _formatUnits(companiesList: CompanyType[]): CompanyType[] {
    return companiesList.map((company) => ({
        id: company.id,
        name: `${company.name} Unit`,
    }))
}
