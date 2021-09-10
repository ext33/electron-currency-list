import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import './App.sass'
import { fetchData } from './store/currencyStore/actions'
import Container from './components/container'
import Loading from './components/loading'
import Header from './components/header'

function App(props) {

  const isLoaded = useRef(false)

  useEffect(()=>{
    if (!isLoaded.current) {
      props.fetchData()
      isLoaded.current = true
    }
  }, [props])

  return (
    <div className="flex App animate animate__fadeIn">
      <Header />

      {
        props.isError ? 'error' : 
        <>
          { props.data.length > 0 ? <Container data={props.data} /> : <Loading /> }
        </>
      }
      
    </div>
  )
}

function mapStateToProps(state){
  return {
    isError: state.currencyReducer.error,
    data: state.currencyReducer.data
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
