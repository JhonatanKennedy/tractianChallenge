import { _formatUnits } from './functions/formatUnits'
import { CompanyType } from '../Repository'

export class Service {
    formatUnits(companiesList: CompanyType[]) {
        return _formatUnits(companiesList)
    }
}
