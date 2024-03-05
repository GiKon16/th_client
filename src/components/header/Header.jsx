import React from 'react'
import styles from './Header.module.scss'
import BurgerNavBar from './burger-navbar/BurgerNavBar'
import NavBar from './navbar/NavBar'

export default function Header() {
    return (
        <header className={ styles.header }>
            <div className={ styles.content }>
                <div className={ styles.title }>
                    <img src="/assets/images/logo.svg" alt="" />
                </div>
                <NavBar/>
                <div className={ styles["phone-important"] }>
                    <img className={ `${ styles.img } ${ styles.call }` } src="/assets/images/call.svg" alt="" />
                    <img className={ `${ styles.img } ${ styles.phone }` } src="/assets/images/phone.svg" alt="" />
                </div>
            </div>
            <BurgerNavBar/>
        </header>
    )
}
