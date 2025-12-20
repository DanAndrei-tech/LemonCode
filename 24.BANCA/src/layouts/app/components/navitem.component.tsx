import { useLocation, Link } from "react-router-dom";
import classes from "./navbar.component.module.css";

interface NavItemProps {
  to: string;
  label: string;
  activePrefix: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  label,
  activePrefix,
}) => {
  const { pathname } = useLocation();
  const isActive = pathname.startsWith(activePrefix);

  return (
    <li className={isActive ? classes.selected : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
