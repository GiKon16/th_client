import React from 'react'
import styles from './Page.module.scss'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '../components/footer/Footer'

export default function Page() {
    return (
        <>
            <Header />
            <Main />
            <Footer/>
        </>
    )
}
