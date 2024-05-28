import image from 'next/image';
import neb from '@/public/nebuleuse.webp'
import Banniere from '@/components/Banniere';


export default function Acce() {
  return (
    <main>
      <div>
      <Banniere
        image={neb}
        title="Nebuleuse"
        description="Ceci est une description de la bannière."
      />
      </div>
    </main>
  );
}
