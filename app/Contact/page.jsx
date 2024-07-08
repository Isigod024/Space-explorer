'use client'
import Contact from "@/components/Contact"

export const metadata = {
    title: 'Space-Explorer | Contact',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'Space-Explorer | Contact',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./Space_Explorer.webp']
    }
  }

export default function Page(){
    return <>
        <Contact/>
    </>
}