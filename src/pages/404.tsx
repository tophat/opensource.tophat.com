import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

export default function NotFoundPage() {
    useEffect(() => {
        navigate('/')
    }, [])

    return (
        <div>
            <h1>Page not found.</h1>
        </div>
    )
}
