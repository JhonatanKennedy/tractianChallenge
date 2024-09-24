import { _findChildren, FindChildrenTypeAttr } from './functions/findChildren'
import { _formatHash, FormatInitialHashAttr } from './functions/formatHash'

export class Service {
    formatHash(attrs: FormatInitialHashAttr) {
        return _formatHash(attrs)
    }

    findChildren(attrs: FindChildrenTypeAttr) {
        return _findChildren(attrs)
    }
}
