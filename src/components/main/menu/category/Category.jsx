import React from 'react'
import styles from './Category.module.scss'
import Product from './product/Product'

export default function Category({ products, categoryId }) {
    return (
        <div className={ styles.category }>
            {
                products.map((product, index) => 
                    <Product
                        key={ index }
                        name={ product.name }
                        price={ product.price }
                        weight={ product.weight }
                        img={ product.img }
                        category={ product.categoryId }/>   
                )
            }
        </div>
    )
}
