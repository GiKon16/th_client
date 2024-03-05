import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import styles from './Product.module.scss'

export default function Product({ id, name, price, weight, img }) {
    return (
        <div className={ styles.product }>
            <div className={ styles["img-container"] }>
                {
                    img ? <img className={ styles.img } src={ img } alt="" />
                    : <p className={ styles.text }>Выпекается</p>
                }              
            </div>
            <span className={ styles.name }>{ name }</span>
            <p className={ styles.description }>Цена { price ? price : 1 }AZN { weight ? ` Масса ${ weight }гр.` : null }</p>
            <button className={ styles.button }>
            <Link
                to='order'
                spy
                smooth
                offset={ -10 }
                duration={ 800 }>Оформить</Link>
            </button>
        </div>
    )
}
