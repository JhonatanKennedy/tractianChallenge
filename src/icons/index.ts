import { AiOutlineSearch } from 'react-icons/ai'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

import UnitOutlined from '../assets/unit.svg?react'
import Logo from '../assets/logo.svg?react'
import Location from '../assets/location.svg?react'
import Component from '../assets/component.svg?react'
import Asset from '../assets/asset.svg?react'

const Outlined = {
    Unit: UnitOutlined,
    Location,
    Asset,
    Component,
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
