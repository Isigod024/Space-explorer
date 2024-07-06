import Connexion from "@/components/Connexion"

export const metadata = {
    title: 'Space-Explorer | Connexion',
    description: 'Site web présentant les fonctionnalités de React et Next.js.',
    openGraph: {
      title: 'Space-Explorer | Connexion',
      description: 'Site web présentant les fonctionnalités de React et Next.js.',
      images: ['./Space_Explorer.webp']
    }
  }

export default function Page(){
    return <>
        <Connexion/>
    </>
}