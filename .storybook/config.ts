import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'

const defaultBrand = {
  brandTitle: 'Scott Sullivan Info',
  brandUrl: 'https://ssullivan.info',
  brandImage: 'https://ssullivan.info/images/icon-512x512.png',
}

addParameters({
  darkMode: {
    dark: { ...themes.dark, ...defaultBrand },
    light: { ...themes.normal, ...defaultBrand },
  },
})

addDecorator(withA11y)

console.warn(process.env)

addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          marginRight: '20px',
          fontSize: '25px',
          display: 'inline',
        },
        body: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        h2: {
          display: 'inline',
          color: '#999',
        },
      },
      infoBody: {
        backgroundColor: 'transparent',
        padding: '0px 5px',
        lineHeight: '2',
      },
    },
    inline: true,
    source: false,
  }),
)

const req = require.context('../stories', true, /\.story\.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
