import React from 'react'
import Document from '../document'
import App from '../app'

export function Home(props: any) {
    return (
        <Document {...props}>
            <App>
                <p>Rex JS</p>
            </App>
        </Document>
    )
}

export default Home