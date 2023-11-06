import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4">
      <Nav />
      <p className="text-sm py-7 max-w-md text-center">
        Hi, my name is George. I live in California, I write code for work, and
        I like to be in the mountains. Welcome to my website!
      </p>
      <Image
        src="/images/falling.jpeg"
        alt="/images/falling.jpeg"
        width={400}
        height={500}
      />
    </main>
  );
}
