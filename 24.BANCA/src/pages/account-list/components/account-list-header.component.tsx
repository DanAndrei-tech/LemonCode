import React from "react";
import classes from "../account-list.page.module.css";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router/";

export const AccountListHeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Mis cuentas</h1>
        <button onClick={() => navigate(appRoutes.addAccount)}>
          AGREGAR NUEVA CUENTA
        </button>
      </div>
    </>
  );
};
