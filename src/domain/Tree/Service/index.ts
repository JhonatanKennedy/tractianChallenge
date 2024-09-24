import { _findChildren } from './functions/findChildren'
import { _formatComponent } from './functions/formatComponent'
import { _formatHash } from './functions/formatHash'
import {
    ComponentHashType,
    FindChildrenTypeAttr,
    FormatHashTypeAttrs,
    IService,
} from './IService'

export class Service implements IService {
    formatHash(attrs: FormatHashTypeAttrs) {
        return _formatHash(attrs)
    }

    findChildren(attrs: FindChildrenTypeAttr) {
        return _findChildren(attrs)
    }

    formatComponent(component: ComponentHashType) {
        return _formatComponent(component)
    }
}
