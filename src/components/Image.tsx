import React from 'react'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  quality: number
  templates: string[]
  lazy: boolean
  responsive: boolean
  className: string
  'data-test': string
}

const ImageSrcFormat = (src, width, height, quality, templates) => {
  const supportedResolutions = [1, 2]
  let srcSet = ''
  const templatesParam = templates.length ? `${templates.join('&')}&` : ``
  supportedResolutions.forEach((res) => {
    const widthParam = typeof width !== 'undefined' ? `w=${width * res}&` : ``
    const heightParam = typeof height !== 'undefined' ? `h=${height * res}&` : ``
    srcSet += `${src}?${templatesParam}${widthParam}${heightParam}qlt=${quality}&fmt=webp ${res}x, `
  })
  const widthParam = typeof width !== 'undefined' ? `w=${width}&` : ``
  const heightParam = typeof height !== 'undefined' ? `h=${height}&` : ``
  return {
    src: `${src}?${templatesParam}${widthParam}${heightParam}qlt=${quality}`,
    srcSet,
  }
}

const Image: React.FunctionComponent<ImageProps> = ({
  src,
  alt,
  width,
  height,
  quality = 75,
  templates = [],
  responsive = false,
  lazy = false,
  className,
  'data-test': dataTest = 'component-image',
  ...props
}) => {
  const { src: imageSrc, srcSet } = ImageSrcFormat(src, width, height, quality, templates)
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
        data-test={dataTest}
        className={className}
        {...props}
      />
    </picture>
  )
}

export default Image
