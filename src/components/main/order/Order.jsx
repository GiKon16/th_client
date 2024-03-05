import React, { useState } from 'react'
import axios from 'axios'
import styles from './Order.module.scss'
import InputMask from 'react-input-mask';
import { notification } from 'antd'

export default function Order() {
    const [api, contextHolder] = notification.useNotification()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [phone, setPhone] = useState()
    const [list, setList] = useState()

    const changeName = (e) => {setName(e.target.value) }
    const changeSurname = (e) => {setSurname(e.target.value) }
    const changePhone = (e) => {setPhone(e.target.value) }
    const changeList = (e) => {setList(e.target.value) }

    const openNotification = (message) => {
        api.open({
            message: message,
            duration: 5,
            style: {
                zIndex: 3,
                fontFamily: 'Montserrat Light'
            }
        })
    }

    const createOrder = async (event) => {
        event.preventDefault()
        try {
            await axios.post('/api/orders', {
                name: name,
                surname: surname,
                phone: phone,
                productsList: list
            })
            openNotification("Заказ успешно создан!")
            setName(null)
            setSurname(null)
            setPhone(null)
            setList(null)
        } catch (error) {
            openNotification("Для создания заказа необходимо заполнить все поля!")
        }
    }

    return (
        <div className={ styles.order } id='order'>
            { contextHolder }
            <img className={ styles["img-background"] } src="/assets/images/background.svg" alt="" />
            <div className={ styles.content }>
                <h1 className={ styles.title }>Заказать сейчас!</h1>
                <form className={ styles.form }>
                    <input 
                        className={ styles.input } 
                        placeholder='Имя' 
                        type="text" 
                        value={ name } 
                        onChange={ changeName } />
                    <input 
                        className={ styles.input } 
                        placeholder='Фамилия' 
                        type="text"
                        value={ surname }
                        onChange={ changeSurname }/>
                    <InputMask 
                        mask={ "+\\9\\94 999 999 99 99" } 
                        value={ phone }
                        onChange={ changePhone }>
                        { 
                            () => <input 
                                    className={ styles.input } 
                                    placeholder='Телефон' 
                                    type="tel"/> 
                        }
                    </InputMask>
                    <textarea 
                        className={ styles.textarea } 
                        placeholder='Заказ' 
                        cols="30" 
                        rows="100"
                        value={ list }
                        onChange={ changeList }/>
                    <button className={ styles.button } onClick={ createOrder }>
                        <div className={ styles.pl1 }><img className={ styles.img } src='/assets/images/pl1.svg'/></div>
                        <div className={ styles.pr1 }><img className={ styles.img } src='/assets/images/pr1.svg'/></div>
                        <div className={ styles.pl2 }><img className={ styles.img } src='/assets/images/pl2.svg'/></div>
                        <div className={ styles.pr2 }><img className={ styles.img } src='/assets/images/pr2.svg'/></div>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}
