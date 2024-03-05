import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={ styles.footer }>
            <div className={ styles.content }>
                <div className={ styles.media }>
                    <span className={ styles.site }>https://tandirhana.com</span>
                    <span className={ styles.site }>https://tendirxana.com</span>
                    <div className={ styles.call }>
                        <img className={ styles.img } src="/assets/images/fcall.svg" alt="" />
                    </div>
                </div>
                <div className={ styles.logo }>
                    <img className={ styles.img }src="/assets/images/footer.svg" alt="" />
                </div>
                <p className={ styles.text }>
                    Может содержать 
                    следы арахиса 
                    и следы другой 
                    ореховой продукции
                </p>
            </div>
        </footer>
    )
}
