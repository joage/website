import ImageGroup from '@/components/ImageGroup';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <p className="text-sm pt-8">Welcome to my website. It's a work in progress</p>
      <div className="pt-3">
        <ImageGroup images={[{path: "/images/falling.jpeg", caption: ""}]} />
      </div>
    </main>
  )
};
