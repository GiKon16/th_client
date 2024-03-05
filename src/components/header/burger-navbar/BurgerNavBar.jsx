import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import styles from './BurgerNavbar.module.scss'
import BurgerButton from '../../../ui/burger-button/BurgerButton'

export default function BurgerNavBar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <BurgerButton
                open={ open }
                setOpen={ setOpen } />
            <div className={ !open ? styles["burger-navbar"] : `${ styles["burger-navbar"] } ${ styles.slide }` }>
                <div className={ styles.content }>
                    <div className={ styles.title }>
                        <img src="/assets/images/logo.svg" alt="" />
                    </div>
                    <nav className={ styles.navbar }>
                        <Link
                            className={ styles["navbar-item"] }
                            // activeClass={`${ styles["navbar-item"] } ${ styles.active }`}  
                            to='home'
                            spy
                            smooth
                            offset={ -100 }
                            duration={ 800 }>Домашняя</Link>
                        <Link
                            className={ styles["navbar-item"] }
                            // activeClass={`${ styles["navbar-item"] } ${ styles.active }`}  
                            to='menu'
                            spy
                            smooth
                            offset={ -100 }
                            duration={ 800 }>Меню</Link>
                        <Link
                            className={ styles["navbar-item"] }
                            // activeClass={`${ styles["navbar-item"] } ${ styles.active }`} 
                            to='about'
                            spy
                            smooth
                            offset={ -100 }
                            duration={ 800 }>О нас</Link>
                        <Link
                            className={ styles["navbar-item"] }
                            // activeClass={`${ styles["navbar-item"] } ${ styles.active }`}  
                            to='order'
                            spy
                            smooth
                            offset={ -100 }
                            duration={ 800 }>Заказать</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}
