import React from "react";
import classes from "../movements-list.page.module.css";

interface Props {
  balance: number;
}

export const MovementListHeaderComponent: React.FC<Props> = (props) => {
  const { balance } = props;
  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <div className={classes.saldo}>
          <p>SALDO DISPONIBLE</p>
          <span className={classes.balance}>{balance + " €"}</span>
        </div>
      </div>
    </>
  );
};
