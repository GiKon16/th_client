import React from 'react'
import styles from './NavBar.module.scss'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function NavBar() {
    return (
        <nav className={ styles.navbar }>
            <Link
                className={ styles["navbar-item"] }
                // activeClass={`${ styles["navbar-item"] } ${ styles.active }`} 
                to='home'
                spy
                smooth
                offset={ -90 }
                duration={ 800 }>Домашняя</Link>
            <Link
                className={ styles["navbar-item"] }
                // activeClass={`${ styles["navbar-item"] } ${ styles.active }`}
                to='menu'
                spy
                smooth
                offset={ -47 }
                duration={ 800 }>Меню</Link>
            <Link
                className={ styles["navbar-item"] }
                // activeClass={`${ styles["navbar-item"] } ${ styles.active }`} 
                to='about'
                spy
                smooth
                offset={ 0 }
                duration={ 800 }>О нас</Link>
            <Link
                className={ styles["navbar-item"] }
                // activeClass={`${ styles["navbar-item"] } ${ styles.active }`} 
                to='order'
                spy
                smooth
                offset={ -10 }
                duration={ 800 }>Заказать</Link>
        </nav>
    )
}
