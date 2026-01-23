import { useEffect } from 'react'

type MetaInput = {
  title: string
  description: string
  url?: string
  image?: string
}

export const usePageMeta = ({ title, description, url, image }: MetaInput) => {
  useEffect(() => {
    document.title = title
    const ensure = (name: string, property = 'name') => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${property}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(property, name)
        document.head.appendChild(tag)
      }
      return tag
    }

    ensure('description').setAttribute('content', description)
    ensure('og:title', 'property').setAttribute('content', title)
    ensure('og:description', 'property').setAttribute('content', description)
    if (url) ensure('og:url', 'property').setAttribute('content', url)
    if (image) ensure('og:image', 'property').setAttribute('content', image)
  }, [title, description, url, image])
}
