export type RepositoryReturnType<T> = Promise<{
    data: T | null
    message: string
    typeMessage: 'success' | 'warning' | 'error'
}>
