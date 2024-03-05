import React from 'react'
import styles from './Option.module.scss'

export default function Option({ name, img, mainCategory, category, setCategory, setProducts }) {
    return (
        <div 
            className={ mainCategory === category ? 
                `${ styles.option } ${ styles.active }` : 
                `${ styles.option } ${ styles.passive }` }
            onClick={ () => {
                setCategory(category)
                setProducts([])
                } }>
            <div className={ styles["img-container"] }>
                <img src={ img } alt="" />
            </div>
            <span className={ styles.name }>{ name }</span>
        </div>
    )
}
