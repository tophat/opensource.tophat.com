import { useEffect } from 'react'

declare let window: Window & { dataLayer: any }

export function useGoogleTagManager() {
    useEffect(() => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
            // eslint-disable-next-line prefer-rest-params
            window.dataLayer.push(arguments)
        }
        // @ts-expect-error copied from GTM
        gtag('js', new Date())
        // @ts-expect-error copied from GTM
        gtag('config', 'UA-129741728-1')
    }, [])
}
