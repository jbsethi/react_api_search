import { useState, useEffect, useCallback } from 'react'

const useFetch = (url, q, reduceRecord) => {
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(true)

    const getRecords = useCallback(async (url, q) => {
        if (q && q.length > 0) {
            const response = await fetch(url + '?q=' + q)
            const results = await response.json()

            setRecords(reduceRecord(results))
        } else {
            setRecords([])
        }

        setLoading(false)
    }, [reduceRecord])

    useEffect(() => {
        getRecords(url, q)
    }, [url, q, getRecords])

    return {
        loading,
        records
    }
}

export default useFetch