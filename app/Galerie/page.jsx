'use client'
import Galerie from "@/components/Galerie"

export const metadata = {
    title: 'Space-Explorer | Galerie',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'Space-Explorer | Galerie',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./Space_Explorer.webp']
    }
  }

export default function Page(){
    return <>
        <Galerie/>
    </>
}