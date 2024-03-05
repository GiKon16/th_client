import React from 'react'
import styles from './BurgerButton.module.scss'

export default function BurgerButton({ open, setOpen }) {
    return (
        <div  
            className={ !open ? styles.burger : `${ styles.burger } ${ styles.active }` }  
            onClick={ () => setOpen(!open) }> 
            <span className={ styles.line }></span> 
        </div>  
    )
}
