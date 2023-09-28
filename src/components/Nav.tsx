import Link from "next/link";

const Nav = () => (
  <nav className="nav flex p-5 font-mono gap-4">
    <Link href="/" passHref>
      <h2 className="pointer">George Wang</h2>
    </Link>
    <Link href="/adventures" passHref>
      <p className="pointer px-4 border-x border-gray-400">Adventures</p>
    </Link>
    <Link href="https://github.com/joage" passHref>
      <p className="pointer">GitHub</p>
    </Link>
  </nav>
);

export default Nav;
