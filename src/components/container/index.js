import React from 'react'
import { connect } from 'react-redux'
import './container.sass'
import CurrencyList from '../currencyList'
import { toggleList } from '../../store/listStore/actions'

function Container(props) {
    return (
        <div className="flex container animate animate__fadeIn">

            { props.isToogle ? <CurrencyList data={props.data} /> : null }

            <div className={props.isToogle ? "flex container__button container__button_toggle" : "flex container__button"} onClick={props.toggle}>
                { props.isToogle ? 'hide' : 'show currency' }
            </div>
            
        </div>
    )
}

function mapStateToProps(state){
    return {
      isToogle: state.listReducer.isToogle,
    }
  }
  
function mapDispatchToProps(dispatch){
    return {
        toggle: () => dispatch(toggleList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
