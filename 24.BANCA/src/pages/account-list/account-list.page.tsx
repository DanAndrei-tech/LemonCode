import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import {
  AccountListHeaderComponent,
  AccountListTableComponent,
} from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);
  return (
    <AppLayout>
      <div className={classes.root}>
        <AccountListHeaderComponent />
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
