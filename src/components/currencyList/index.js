import React from 'react'
import './currencyList.sass'
import Item from './item'

function CurrencyList(props) {

    return (
        <div className="flex currencyList animate animate__fadeIn">
            <div className="flex currencyList__head">
                <p>Currency title</p>
                <p>Currency / EUR</p>
            </div>
            {
                props.data.map((item, index) => {
                    return (
                        <Item key={index} flag={item.flagCode} name={item.name} rate={item.rate} />
                    )
                })
            }
        </div>
    )
}

export default CurrencyList
