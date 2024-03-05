import React from 'react'
import styles from './Switcher.module.scss'
import Option from './option/Option'

export default function Swithcer({ options, category, setCategory, setProducts }) {
    return (
        <div className={ styles.switcher }>
            <div className={ styles.options }>
                {
                    options.map(option => 
                        <Option 
                            name={ option.name }
                            img={ option.img }
                            category={ option.id }
                            mainCategory={ category }
                            setCategory={ setCategory }
                            setProducts={ setProducts }/>    
                    )
                }
            </div>
        </div>
    )
}
