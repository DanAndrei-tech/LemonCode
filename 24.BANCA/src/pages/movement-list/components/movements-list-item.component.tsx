import React from "react";
import { MovementsVm } from "../movements-list.vm";
import classes from "./movements-list-item.component.module.css";

interface Props {
  movementItem: MovementsVm;
}

export const MovementsListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;
  const amountClass =
    movementItem.amount < 0 ? classes.negative : classes.positive;
  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} `}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${amountClass} ${classes.alignRight}`}
      >
        {movementItem.amount + " €"}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance}
      </span>
    </div>
  );
};
