import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import * as style from './contact.scss'
import * as svg from '../../helpers/svg'

interface ContactProps {
  windowSize: {
    height: number
    width: number
  }
  social: {
    linkedIn: string
    github: string
    codePen: string
  }
  active?: string
  'data-test': string
}

const Contact: React.FunctionComponent<ContactProps> = ({ windowSize, active, social, 'data-test': dataTest }) => {
  const socialList = Object.keys(social).map((item, index) => (
    <li key={`${item}-${index}`}>
      <AnimatePresence key={'AnimatePresence-contact'}>
        {active === 'contact' && (
          <motion.a
            transition={{ delay: index / 5 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 1 }}
            className={style['contact-link']}
            title={`Go to Scott's ${item} page`}
            href={social[item]}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d={svg[item]} />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </li>
  ))

  const currentYear = new Date().getFullYear()

  return (
    <div style={{ minHeight: windowSize.height, position: 'relative' }} data-test={dataTest}>
      <div
        className={`container ${style.contact} ${
          active === 'about' || active === 'contact' ? style['contact-active'] : style['contact-inactive']
        }`}>
        <div className={style['contact-buttons']}>
          <ul tabIndex={0}>{socialList}</ul>
        </div>
      </div>
      <footer className={style['contact-footer']}>
        © Scott Sullivan {currentYear} &nbsp;&nbsp;|&nbsp;&nbsp; Thank you for stopping by.
      </footer>
    </div>
  )
}

export default Contact
