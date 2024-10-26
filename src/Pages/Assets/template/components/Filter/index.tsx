import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button } from '../../../../../components/Button'
import styles from './styles.module.scss'
import { useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export enum FilterType {
    ENERGY = 'energy',
    CRITICAL = 'critical',
}

export type FilterProps = {
    onChangeFilter: (filter: FilterType[]) => void
    companyName: string
}

export function Filter({ companyName, onChangeFilter }: FilterProps) {
    const [selectedFilters, setSelectedFilters] = useState<FilterType[]>([])

    function handleClickFilter(selectedFilter: FilterType) {
        const filters = [...selectedFilters]
        const existingFilterIndex = filters.findIndex(
            (filter) => filter === selectedFilter,
        )

        const hasFilter = existingFilterIndex !== -1
        if (hasFilter) {
            filters.splice(existingFilterIndex, 1)
            setSelectedFilters(filters)
            onChangeFilter(filters)
            return
        }

        setSelectedFilters([...filters, selectedFilter])
        onChangeFilter([...filters, selectedFilter])
    }

    return (
        <div className={styles.container}>
            <div className={styles['text-container']}>
                <h3>{'Ativos'}&#160;</h3>
                <h5>{' / ' + companyName}</h5>
            </div>
            <div className={styles['actions-container']}>
                <Button
                    size="medium"
                    color="secondary"
                    leftIcon={<HiOutlineExclamationCircle />}
                    onClick={() => handleClickFilter(FilterType.ENERGY)}
                    isSelected={selectedFilters.includes(FilterType.ENERGY)}
                >
                    Sensor de Energia
                </Button>
                <Button
                    size="medium"
                    color="secondary"
                    leftIcon={<HiOutlineExclamationCircle />}
                    onClick={() => handleClickFilter(FilterType.CRITICAL)}
                    isSelected={selectedFilters.includes(FilterType.CRITICAL)}
                >
                    Crítico
                </Button>
            </div>
        </div>
    )
}
