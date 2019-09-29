import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

import * as style from './about.scss'

interface AboutProps {
  windowSize: {
    height: number
    width: number
  }
  skills: [{ items: [string]; title: string }]
  bioText: string
  bioHeading: string
  active?: string
  bioImg: string
  'data-test': string
}

const About: React.FunctionComponent<AboutProps> = ({
  windowSize,
  active,
  skills,
  bioHeading,
  bioText,
  bioImg,
  'data-test': dataTest,
}) => {
  const { scrollYProgress } = useViewportScroll()
  const circle1Scale = useTransform(scrollYProgress, [0, 1], [0.2, 2])
  const circle2Scale = useTransform(scrollYProgress, [0, 1], [0.1, 2])
  return (
    <div className={style['about-wrapper']} style={{ minHeight: windowSize.height }} data-test={dataTest}>
      <main
        role='main'
        className={`container ${style.about} ${active === 'about' ? style['about-active'] : style['about-inactive']}`}>
        <div className={style['bio-pic']}>
          <motion.span
            style={{
              scale: circle1Scale,
            }}
          />
          <motion.span
            style={{
              scale: circle2Scale,
            }}
          />
          <img key='bio-pic' width='150' height='150' alt="Scott's profile pic" src={bioImg} />
        </div>

        <h2 className={style['bio-heading']} data-test='bio-heading'>
          {bioHeading}
        </h2>
        <p className={style['bio-text']} data-test='bio-text'>
          {bioText}
        </p>
        <div className={style['bio-grid']}>
          {skills.map((skill) => {
            return (
              <div className={style['bio-grid-item']} key={skill.title}>
                <h3 className={style['bio-grid-title']}>{skill.title}</h3>
                <ul tabIndex={0}>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default About
