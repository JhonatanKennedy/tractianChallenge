import { _findChildren } from './functions/findChildren'
import { _formatHash } from './functions/formatHash'
import { FindChildrenTypeAttr, FormatHashTypeAttrs, IService } from './IService'

export class Service implements IService {
    formatHash(attrs: FormatHashTypeAttrs) {
        return _formatHash(attrs)
    }

    findChildren(attrs: FindChildrenTypeAttr) {
        return _findChildren(attrs)
    }
}
