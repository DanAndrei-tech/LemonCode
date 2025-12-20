import React from "react";
import { AccountVm } from "../account.vm";

import classes from "./details-account.component.module.css";

interface Props {
  account: AccountVm;
}

export const DetailsAccountComponent: React.FC<Props> = (props) => {
  const { account } = props;

  return (
    <div className={classes.accountInfo}>
      <p>
        <strong>Alias:</strong>
        {account.name}
      </p>
      <p>
        <strong>IBAN:</strong>
        {account.iban}
      </p>
    </div>
  );
};
