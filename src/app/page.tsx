import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <p className="text-sm pt-8 max-w-xl text-center">
        Hi my name is George. I write code for work, and I like walking in the
        mountains. Welcome to my website!
      </p>
      <div className="pt-7">
        <Image
          src="/images/falling.jpeg"
          alt="/images/falling.jpeg"
          width={400}
          height={500}
        />
      </div>
    </main>
  );
}
