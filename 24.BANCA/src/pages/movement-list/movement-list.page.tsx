import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./movements-list.page.module.css";
import { MovementsVm } from "./movements-list.vm";
import { getAccount, getMovements } from "./api";
import { mapAccountToVm } from "./account.mapper";
import { mapMovementToVm } from "./movements.mapper";
import { AccountVm } from "./account.vm";

import {
  MovementListHeaderComponent,
  MovementsListTableComponent,
  DetailsAccountComponent,
} from "./components";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams();

  const [account, setAccount] = React.useState<AccountVm | null>(null);
  const [movements, setMovements] = React.useState<MovementsVm[]>([]);

  React.useEffect(() => {
    if (id) {
      getAccount(id).then((data) => {
        if (data) {
          setAccount(mapAccountToVm(data));
        }
      });

      getMovements(id).then((data) => setMovements(data.map(mapMovementToVm)));
    }
  }, [id]);
  if (!account) return null;

  return (
    <AppLayout>
      <div className={classes.root}>
        <MovementListHeaderComponent balance={Number(account.balance)} />
        <DetailsAccountComponent account={account} />
        <MovementsListTableComponent movementsList={movements} />
      </div>
    </AppLayout>
  );
};
