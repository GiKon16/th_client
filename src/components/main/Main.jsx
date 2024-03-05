import React from 'react'
import styles from './Main.module.scss'
import Home from './home/Home'
import Menu from './menu/Menu'
import About from './about/About'
import Order from './order/Order'

export default function Main() {
    return (
        <main className={ styles.main }>
            <div className={ styles.content }>
                <Home/>
                <Menu/>
                <About/>
                <Order/>
            </div>
        </main>
    )
}
