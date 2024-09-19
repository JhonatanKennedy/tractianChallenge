import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button } from '../../../../../components/Button'
import styles from './styles.module.scss'
import { useState } from 'react'

//TODO correct this later
// energy = sensorType
// alert = status
enum AssetFilter {
    ENERGY = 'energy',
    ALERT = 'alert',
}

export type FilterType = AssetFilter[]

export type FilterProps = {
    onClickFilter: (filter: FilterType) => void
    companyName: string
}

export function Filter({ companyName, onClickFilter }: FilterProps) {
    const [selectedFilters, setSelectedFilters] = useState<FilterType>([])

    function handleClickFilter(selectedFilter: AssetFilter) {
        const filters = [...selectedFilters]
        const existingFilterIndex = filters.findIndex(
            (filter) => filter === selectedFilter,
        )

        const hasFilter = existingFilterIndex !== -1
        if (hasFilter) {
            filters.splice(existingFilterIndex, 1)
            setSelectedFilters(filters)
            onClickFilter(filters)
            return
        }

        setSelectedFilters([...filters, selectedFilter])
        onClickFilter([...filters, selectedFilter])
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
                    onClick={() => handleClickFilter(AssetFilter.ENERGY)}
                >
                    Sensor de Energia
                </Button>
                <Button
                    size="medium"
                    color="secondary"
                    leftIcon={<HiOutlineExclamationCircle />}
                    onClick={() => handleClickFilter(AssetFilter.ALERT)}
                >
                    Crítico
                </Button>
            </div>
        </div>
    )
}
