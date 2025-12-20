import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";

import classes from "./navbar.component.module.css";
import { NavItem } from "./navitem.component";

export const NavBarComponent: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <NavItem
          to={appRoutes.accountList}
          label="Mis cuentas"
          activePrefix={routesPrefixes.accountList}
        />

        <NavItem
          to={appRoutes.accountList}
          label="Movimientos"
          activePrefix={routesPrefixes.movements}
        />

        <NavItem
          to={appRoutes.transfer}
          label="Mis transferencias"
          activePrefix={routesPrefixes.transfer}
        />
      </ul>
    </nav>
  );
};
