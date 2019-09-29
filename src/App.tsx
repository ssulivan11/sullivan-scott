import React, { useEffect, useState, StrictMode } from 'react'
import { hot } from 'react-hot-loader/root'
import throttle from 'lodash.throttle'

import content from './helpers/content'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

import Home from './containers/home/Home'
import About from './containers/about/About'
import Contact from './containers/contact/Contact'
import * as style from './scss/main.scss'

interface AppProps {
  compiler: string
  framework: string
}

const App: React.FunctionComponent<AppProps> = () => {
  const getWindowSize = () => ({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
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
    window.scrollTo(0, 0)
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const heightWithGive = windowSize.height - (windowSize.height / 100) * 20
  const active =
    heightWithGive > scrollPosition.y ? 'home' : heightWithGive * 2 > scrollPosition.y ? 'about' : 'contact'

  const { mainHeadingText, subHeadingText, social, skills, bioHeading, bioText, bioImg } = content

  return (
    <div className={style.container}>
      <StrictMode>
        <ErrorBoundary>
          <Home
            active={active}
            windowSize={windowSize}
            mainHeadingText={mainHeadingText}
            subHeadingText={subHeadingText}
            data-test='home'
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <About
            active={active}
            windowSize={windowSize}
            bioHeading={bioHeading}
            bioText={bioText}
            skills={skills}
            bioImg={bioImg}
            data-test='about'
          />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact active={active} windowSize={windowSize} social={social} data-test='contact' />
        </ErrorBoundary>
      </StrictMode>
    </div>
  )
}

export default hot(App)
