'use client'
import Apropos from "@/components/Apropos"

export const metadata = {
    title: 'Space-Explorer | a-propos-de-nous',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'Space-Explorer | a-propos-de-nous',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./Space_Explorer.webp']
    }
  }

export default function Page(){
    return <>
        <Apropos/>
    </>
}