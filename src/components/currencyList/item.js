import React from 'react'

function Item(props) {
    return (
        <div className="flex currencyList__item">
            <img
                src={`https://flagcdn.com/16x12/${ props.flag }.png`}
                srcset={`https://flagcdn.com/32x24/${ props.flag }.png 2x,
                    https://flagcdn.com/48x36/${ props.flag }.png 3x`}
                width="20"
                height="16"
                alt="" 
            />
            <p> { props.name } </p>
            <p> { props.rate } </p>
        </div>
    )
}

export default Item
