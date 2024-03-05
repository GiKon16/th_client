import React from 'react'
import styles from './Home.module.scss'

export default function Home() {
    return (
        <div className={ styles.home } id='home'>
            <div className={ styles.content }>
                <div className={ styles.description }>
                    <h1 className={ styles.title }>isti, Halal və təmiz</h1>
                    <p className={ styles.text }>
                        «Слово <span className={ styles.important }>счастье </span> 
                        своим появлением обязано <span className={ styles.important }>хлебу</span>.
                        Дело в том, что в глубокой древности, когда кто-то
                        рождался в семье, по обычаю пекли <span className={ styles.important }>хлеб</span>. 
                        В дом приглашали гостей и <span className={ styles.important }>хлеб</span> делили на части. Новорожденному тоже выделяли
                        свою долю, часть. Считалось, что с этого момента он живет
                        с "частью" жизненных благ. Так и произошло слово <span className={ styles.important }>СЧАСТЬЕ</span>»
                    </p> 
                    <button className={ styles.button }>Оформить</button>                       
                </div>
                <div className={ styles.mill }>
                    <img className={ styles.img } src="/assets/images/mill.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
