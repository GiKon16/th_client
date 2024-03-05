import React, { useState, useEffect, useTransition } from 'react'
import axios from 'axios'

import styles from './Menu.module.scss'

import Swithcer from './switcher/Swithcer'
import Category from './category/Category'
import Loader from '../../../ui/loader/Loader'

export default function Menu() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(2)
    const [isPending, startTransition] = useTransition()

    const getProductsData = async ()  => {
        axios.get('/api/products', { params: { category: category } })
        .then(data => {
            setProducts(data.data.data)
        })
    }

    const getCategoriesData = async ()  => {
        axios.get('/api/categories')
        .then(data => {
            setCategories(data.data.data)
        })
    }

    useEffect(() => {
        getProductsData()
    }, [category])

    useEffect(() => {
        getCategoriesData()
    }, [])

    return (
        <div className={ styles.menu } id='menu'>
            <div className={ styles.content }>
                <h1 className={ styles.title }>Меню</h1>
                <Swithcer options={ categories } category={ category } setCategory={ setCategory } setProducts={ setProducts }/>
                { products.length !== 0 ? <Category products={ products } category={ category }/> : <Loader/> }
            </div>
        </div>
    )
}

















    // const productss = [
    //     { name: "Новинка", description: "Описание товара (масса, стоимость)", category: "new" },
    //     { name: "Новинка", description: "Описание товара (масса, стоимость)", category: "new" },
    //     { name: "Новинка", description: "Описание товара (масса, стоимость)", category: "new" },
    //     { name: "Хлеб", description: "Описание товара (масса, стоимость)", category: "bread" },
    //     { name: "Хлеб", description: "Описание товара (масса, стоимость)", category: "bread" },
    //     { name: "Хлеб", description: "Описание товара (масса, стоимость)", category: "bread" },
    //     { name: "Домашняя выпечка", description: "Описание товара (масса, стоимость)", category: "home" },
    //     { name: "Домашняя выпечка", description: "Описание товара (масса, стоимость)", category: "home" },
    //     { name: "Домашняя выпечка", description: "Описание товара (масса, стоимость)", category: "home" },
    //     { name: "Сладкая выпечка", description: "Описание товара (масса, стоимость)", category: "sweet" },
    //     { name: "Сладкая выпечка", description: "Описание товара (масса, стоимость)", category: "sweet" },
    //     { name: "Сладкая выпечка", description: "Описание товара (масса, стоимость)", category: "sweet" },
    // ]

    // const options = [
    //     { name: "Свежие новинки", category: "new" },
    //     { name: "Хрустящий хлеб", category: "bread" },
    //     { name: "Домашняя выпечка", category: "home" },
    //     { name: "Сладкая выпечка", category: "sweet" },
    // ]
