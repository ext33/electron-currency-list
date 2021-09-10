import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import './App.sass'
import { fetchData } from './store/currencyStore/actions'
import Container from './components/container'
import Loading from './components/loading'
import Header from './components/header'
import Error from './components/error'
import useDetectTheme from './components/themeDetector'
import { setTheme } from './store/themeStore/actions'

function App(props) {

  const isLoaded = useRef(false)
  const theme = useDetectTheme()

  // fetch data
  useEffect(()=>{
    if (!isLoaded.current) {
      props.fetchData()
      isLoaded.current = true
    }
  }, [props])

  // switch theme
  useEffect(()=>{
    setAppTheme(props.theme)
  }, [props.theme])

  // set theme
  useEffect(()=>{
    if (theme.isDark)
      props.setTheme(true)
    else
      props.setTheme(false)
      // eslint-disable-next-line
  }, [theme])


  // set theme directly in app
  function setAppTheme(theme) {
    if (theme) 
      document.documentElement.setAttribute('data-theme', 'dark')
    else 
      document.documentElement.removeAttribute('data-theme', 'dark')
  }


  return (
    <div className="flex App animate animate__fadeIn">
      <Header />
      {
        props.isError ? <Error /> : 
        <>
          { props.data.length > 0 ? <Container data={props.data} /> : <Loading /> }
        </>
      }
    </div>
  )
}

function mapStateToProps(state){
  return {
    theme: state.themeReducer.isDarkTheme,
    isError: state.currencyReducer.error,
    data: state.currencyReducer.data
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchData: () => dispatch(fetchData()),
      setTheme: (theme) => dispatch(setTheme(theme)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
