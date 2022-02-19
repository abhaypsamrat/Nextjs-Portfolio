import Link from "next/link";

export default function Header(href) {
  return (
    <div className="header">
      <Link href={'/'} passHref>
        <h3>Abhay Pratap Samrat</h3>
      </Link>
    </div>
  );
}
