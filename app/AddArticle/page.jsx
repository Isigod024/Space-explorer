'use client'
import AddArticle from "@/components/AjoutArticle"

const metadata = {
    title: 'Space-Explorer | AddArticle',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'Space-Explorer | AddArticle',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./Space_Explorer.webp']
    }
  }

export default function Page(){
    return <>
        <AddArticle/>
    </>
}