import React from 'react'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  templates?: string[]
  lazy?: boolean
  responsive?: boolean
}

const ImageSrcFormat = (src, width, height, templates) => {
  const supportedResolutions = [1, 2]
  let srcSet = ''
  const templatesParam = templates.length ? `${templates.join('&')}&` : ``
  supportedResolutions.forEach((res) => {
    const widthParam = typeof width !== 'undefined' ? `w=${width * res}` : ``
    const heightParam = typeof height !== 'undefined' ? `h=${height * res}` : ``
    srcSet += `${src}?${templatesParam}${widthParam}${heightParam}&fmt=webp ${res}x, `
  })
  const widthParam = typeof width !== 'undefined' ? `w=${width}` : ``
  const heightParam = typeof height !== 'undefined' ? `h=${height}` : ``
  return {
    src: `${src}?${templatesParam}${widthParam}${heightParam}`,
    srcSet,
  }
}

const Image: React.FunctionComponent<ImageProps> = ({
  src,
  alt,
  width,
  height,
  templates = [],
  responsive = false,
  lazy = true,
  ...props
}) => {
  const { src: imageSrc, srcSet } = ImageSrcFormat(src, width, height, templates)
  return (
    <picture>
      <source type='image/webp' srcSet={srcSet} />
      <source type='image/pjpeg' srcSet={imageSrc} />
      <img
        src={imageSrc}
        width={responsive ? '100%' : width}
        height={responsive ? '100%' : height}
        alt={alt}
        loading={lazy ? 'lazy' : 'auto'}
        data-test='image-component'
        {...props}
      />
    </picture>
  )
}

export default Image
