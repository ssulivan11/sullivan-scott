import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import throttle from 'lodash.throttle'

import content from './helpers/content'

import Home from './containers/home/Home'
import About from './containers/about/About'
import Contact from './containers/contact/Contact'
import style from './scss/main.scss'

require('./assets/favicon.ico')

const App = () => {
  const getWindowSize = () => ({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const getScrollPosition = () => ({ y: window.pageYOffset })

  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition())

  const handleResize = throttle(() => {
    setWindowSize(getWindowSize())
  }, 50)
  const handleScroll = throttle(() => {
    setScrollPosition(getScrollPosition())
  }, 50)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isHomeActive = windowSize.height > scrollPosition.y

  const { mainHeadingText, subHeadingText, social } = content

  return (
    <div className={style.container}>
      <Home
        isActive={isHomeActive}
        windowSize={windowSize}
        mainHeadingText={mainHeadingText}
        subHeadingText={subHeadingText}
        data-test='home'
      />
      <About isActive={!isHomeActive} windowSize={windowSize} data-test='about' />
      <Contact isActive={!isHomeActive} windowSize={windowSize} social={social} data-test='contact' />

      <div className={style['gradient-background']} style={{ height: windowSize.height }} />
    </div>
  )
}

export default hot(App)
