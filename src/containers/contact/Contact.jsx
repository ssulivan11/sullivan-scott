import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import style from './contact.scss'

import * as svg from '../../helpers/svg'

const Contact = ({ windowSize, active, social, 'data-test': dataTest }) => {
  const socialList = Object.keys(social).map((item, index) => (
    <li key={item}>
      <AnimatePresence>
        {active === 'contact' && (
          <motion.a
            transition={{ delay: index / 5 }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={style['social-link']}
            title={`Go to Scott's ${item} page`}
            href={social[item]}>
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
          <ul>{socialList}</ul>
        </div>
      </div>
      <footer className={style['contact-footer']}>
        © Scott Sullivan {currentYear} &nbsp;&nbsp;|&nbsp;&nbsp; Thank you for stopping by.
      </footer>
    </div>
  )
}

Contact.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  active: PropTypes.string,
  social: PropTypes.shape({
    linkedIn: PropTypes.string,
    github: PropTypes.string,
    codePen: PropTypes.string,
  }),
  'data-test': PropTypes.string,
}

export default Contact
