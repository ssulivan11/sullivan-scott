import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import throttle from 'lodash.throttle'

import content from './helpers/content'

import SectionOne from './components/sections/SectionOne'
import SectionTwo from './components/sections/SectionTwo'
import SectionThree from './components/sections/SectionThree'
import style from './app.scss'

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
  }, 1)
  const handleScroll = throttle(() => {
    setScrollPosition(getScrollPosition())
  }, 1)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isSectionOneActive = windowSize.height > scrollPosition.y

  const { mainHeadingText, subHeadingText } = content

  return (
    <div className={style.container}>
      <SectionOne
        isActive={isSectionOneActive}
        windowSize={windowSize}
        mainHeadingText={mainHeadingText}
        subHeadingText={subHeadingText}/>
      <SectionTwo isActive={!isSectionOneActive} windowSize={windowSize} />
      <SectionThree isActive={!isSectionOneActive} windowSize={windowSize} />
    </div>
  )
}

export default hot(App)
