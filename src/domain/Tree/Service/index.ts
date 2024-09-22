import { _formatTreeHash } from './functions/formatHashChildren'
import { LocationType } from '../Repository'

export class Service {
    formatTreeHash(locations: LocationType[]) {
        return _formatTreeHash(locations)
    }
}
