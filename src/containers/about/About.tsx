import * as React from 'react'
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
  'data-test': string
}

const About: React.FunctionComponent<AboutProps> = ({
  windowSize,
  active,
  skills,
  bioHeading,
  bioText,
  'data-test': dataTest,
}) => {
  return (
    <div className={style['about-wrapper']} style={{ minHeight: windowSize.height }} data-test={dataTest}>
      <div
        className={`container ${style.about} ${active === 'about' ? style['about-active'] : style['about-inactive']}`}>
        <img
          key='bio-pic'
          className={style['bio-pic']}
          width='150'
          height='150'
          alt="Scott's profile pic"
          src='https://scontent-lhr3-1.cdninstagram.com/vp/32a3801cf287c36ce0d8b09cc0551a61/5DE61703/t51.2885-19/51555128_153971348831636_6628374679469948928_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com'
        />
        <h2 className={style['bio-heading']}>{bioHeading}</h2>
        <p className={style['bio-text']}>{bioText}</p>

        <div className={style['bio-grid']}>
          {skills.map((skill) => {
            return (
              <div className={style['bio-grid-item']} key={skill.title}>
                <h3 className={style['bio-grid-title']}>{skill.title}</h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
