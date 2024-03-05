import React from 'react'
import styles from './About.module.scss'

export default function About() {
    return (
        <div className={ styles.about } id='about'>
            <div className={ styles.content }>
                <h1 className={ styles.title }>О нас</h1>
                <p className={ styles.text }>Каждый день, с раннего утра и до позднего вечера мы выпекаем c любовью и заботой счастье для вашего стола</p>
                <div className={ styles.lists }>
                    <ul className={ styles.list }>
                        <li className={ styles["list-item"] }>Мы используем только высококачественные ингредиенты</li>
                        <li className={ styles["list-item"] }>Наша выпечка всегда свежая и вкусная</li>
                        <li className={ styles["list-item"] }>У нас широкий ассортимент, удовлетворяющий разнообразные вкусы клиентов</li>
                    </ul>
                    <ul className={ styles.list }>
                        <li className={ styles["list-item"] }>Мы предлагаем выполнение индивидуальных заказов</li>
                        <li className={ styles["list-item"] }>У нас чистый и уютный магазин с приятной атмосферой</li>
                        <li className={ styles["list-item"] }>Наш персонал дружелюбный, профессиональный и всегда готов помочь клиентам</li>
                    </ul>
                </div>
                <div className={ styles.tandir }>
                    <img className={ styles.img } src="/assets/images/tandir.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
