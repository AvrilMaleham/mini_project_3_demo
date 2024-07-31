import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "#order", text: "Order" },
  { href: "#about", text: "About Us" },
  { href: "#contact", text: "Contact" },
  { href: "/admin", text: "Admin" },
];


const Nav: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg container">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Slice of Heaven Logo"
          width={100}
          height={100}
        />
      </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href} text={link.text} />
        ))}
      </ul>
    </header>
  );
};

export default Nav;