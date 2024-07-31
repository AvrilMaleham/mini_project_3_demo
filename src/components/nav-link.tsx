import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {

  return (
    <li className="nav-item">
      <Link className="nav-link fw-bold" href={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavLink;
