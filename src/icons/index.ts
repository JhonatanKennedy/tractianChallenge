import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { FaCodepen } from 'react-icons/fa'
import {
    IoCubeOutline,
    IoChevronDownOutline,
    IoChevronUpOutline,
} from 'react-icons/io5'

import UnitOutlined from '../assets/unit.svg?react'
import Logo from '../assets/logo.svg?react'

const Outlined = {
    Unit: UnitOutlined,
    Location: MdOutlineLocationOn,
    Asset: IoCubeOutline,
    Component: FaCodepen,
    ChevronDown: IoChevronDownOutline,
    ChevronUp: IoChevronUpOutline,
}

const Contained = {
    Logo,
    Search: AiOutlineSearch,
}

export const Icons = {
    Outlined,
    Contained,
}
