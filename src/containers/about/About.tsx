import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  return (
    <div className={style['about-wrapper']} style={{ minHeight: windowSize.height }} data-test={dataTest}>
      <main
        role='main'
        className={`container ${style.about} ${active === 'about' ? style['about-active'] : style['about-inactive']}`}>
        <AnimatePresence key={'AnimatePresence-about'}>
          {active === 'about' && (
            <React.Fragment>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                key='bio-image'
                className={style['bio-image']}
                width='150'
                height='150'
                alt="Scott's profile pic"
                src={bioImg}
              />

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                key='bio-heading'
                className={style['bio-heading']}
                data-test='bio-heading'>
                {bioHeading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                key='bio-text'
                className={style['bio-text']}
                data-test='bio-text'>
                {bioText}
              </motion.p>

              <div className={style['bio-grid']}>
                {skills.map((skill, index) => {
                  return (
                    <motion.div
                      transition={{ delay: (index + 1) / 5 }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 0, opacity: 1 }}
                      className={style['bio-grid-item']}
                      key={skill.title}>
                      <h3 className={style['bio-grid-title']}>{skill.title}</h3>
                      <ul tabIndex={0}>
                        {skill.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                })}
              </div>
            </React.Fragment>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default About
