import React from 'react'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  lazy?: boolean
  loading: boolean
  responsive?: boolean
}

const Image: React.FunctionComponent<ImageProps> = ({
  src,
  alt,
  width,
  height,
  responsive = false,
  lazy = true,
  ...props
}) => {
  return (
    <img
      src={src}
      width={responsive ? '100%' : width}
      height={responsive ? '100%' : height}
      alt={alt}
      loading={lazy ? 'lazy' : 'auto'}
      data-test='image-component'
      {...props}
    />
  )
}

export default Image
