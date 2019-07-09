import React from 'react'
import PropTypes from 'prop-types'
import style from './sections.scss'

const SectionTwo = ({ windowSize, isActive }) => {
  return (
    <div
      className={`${style['section-two']} ${isActive ? style['section-two-active'] : style['section-two-inactive']}`}
      style={{ height: windowSize.height }}>
      <img
        className={style['profile-pic']}
        width='150'
        height='150'
        alt="Scott's profile pic"
        src='https://scontent-lhr3-1.cdninstagram.com/vp/e1b629429645a951ca09bc95df0cafb3/5DBE8A03/t51.2885-19/51555128_153971348831636_6628374679469948928_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com'/>
      <div className={style['bio-text']}>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
        </p>
        <p>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
          illum qui dolorem eum fugiat quo voluptas nulla pariatur. Neque porro quisquam est, qui dolorem ipsum quia
          dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
          dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </p>
      </div>
    </div>
  )
}

SectionTwo.propTypes = {
  windowSize: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  isActive: PropTypes.bool,
}

export default SectionTwo
