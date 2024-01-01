import React from "react";
import Link from "next/link";

import Nav from "@/components/Nav";
import StravaIframe from "@/components/Strava";

interface PostProps {
  title: string;
  date: string;
  prev?: string;
  next?: string;
  stravaID?: string;
  children?: React.ReactNode;
}

const Post = ({ title, date, prev, next, stravaID, children }: PostProps) => (
  <main className="flex flex-col min-h-screen items-center p-4">
    <Nav />
    <div className="flex flex-col gap-6 max-w-3xl">
      <div className="flex flex-col">
        <div className="flex gap-4">
          <div>
            <h2 className="justify-left text-lg font-bold">{title}</h2>
            <h3 className="justify-left text-sm opacity-50">{date}</h3>
          </div>
          <div className="flex gap-4 text-sm pt-4 ml-auto text-gray-500">
            {!!prev && <Link href={prev}>Prev</Link>}
            {!!prev && !!next && <p>|</p>}
            {!!next && <Link href={next}>Next</Link>}
          </div>
        </div>
        {stravaID && <StravaIframe stravaID={stravaID} />}
      </div>
      {children}
      <div className="flex gap-4 text-sm pt-4 ml-auto mr-auto text-gray-500">
        {!!prev && <Link href={prev}>Prev</Link>}
        {!!prev && !!next && <p>|</p>}
        {!!next && <Link href={next}>Next</Link>}
      </div>
      {/* todo: Componentize prev/next toggle */}
    </div>
  </main>
);

export default Post;
