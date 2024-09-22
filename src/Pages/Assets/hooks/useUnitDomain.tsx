import { useCallback, useEffect, useState } from 'react'
import { UnitDomain, CompanyType } from '../../../domain/Unit/main'

export function useUnitDomain() {
    const [domain] = useState(new UnitDomain())
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [companies, setCompanies] = useState<CompanyType[]>([])
    const [selectedCompany, setSelectedCompany] = useState<CompanyType>({
        id: '',
        name: '',
    })

    const fetchInitialData = useCallback(async () => {
        try {
            setIsLoading(true)

            const response = await domain.getCompanies()

            if (!response.data) {
                setIsError(true)
                setCompanies([])
                return
            }

            setCompanies(response.data)
            setSelectedCompany(response.data[0])
            setIsError(false)
        } finally {
            setIsLoading(false)
        }
    }, [domain])

    useEffect(() => {
        fetchInitialData()
    }, [fetchInitialData])

    return {
        loadingUnits: isLoading,
        errorUnits: isError,
        companies,
        selectedCompany,
        setSelectedCompany,
    }
}
