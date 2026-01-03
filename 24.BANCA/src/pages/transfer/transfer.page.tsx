import { AppLayout } from "@/layouts";
import React from "react";

import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import { TransferHeaderComponent } from "./components/transfer-header.component";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accountListVm = accountListApi.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con exito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <TransferHeaderComponent />
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
