import React from 'react'
import { connect } from 'react-redux'
import './container.sass'
import CurrencyList from '../currencyList'
import { toggleList } from '../../store/listStore/actions'

function Container(props) {
    return (
        <div className="flex container animate animate__fadeIn">

            <div className="flex container__button" onClick={props.toggle}>
                currency list
            </div>

            { 
                props.isToogle ? 
                <> 
                    <div className="container__list-arrow animate animate__fadeIn" />
                    <div className="container__list-hr animate animate__fadeIn" /> 
                    <CurrencyList data={props.data} /> 
                </>
                : null 
            }
            
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
