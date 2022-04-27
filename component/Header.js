import Link from "next/link";

export default function Header(href) {
  return (
    <div className="header">
      <Link href={'/'} passHref>
        <h3 className="first-word-uppercase-p">Abhay Pratap Samrat</h3>
      </Link>
    </div>
  );
}
