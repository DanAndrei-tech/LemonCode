import { AppLayout } from "@/layouts";
import { useNavigate } from "react-router-dom";
import { AddAccountFormComponent } from "./components";
import { mapAddAccountFromVmToApi } from "./add-account.mapper";
import { saveAccount } from "./api";
import { appRoutes } from "@/core/router";
import { AddAccountVm } from "./add-account.vm";
import { AddAccountHeaderComponent } from "./components/add-account-header.component";
import classes from "./add-account.module.css";

export const AddAccountPage = () => {
  const navigate = useNavigate();

  const handleSave = (vm: AddAccountVm) => {
    const account = mapAddAccountFromVmToApi(vm);
    saveAccount(account).then(() => {
      navigate(appRoutes.accountList);
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <AddAccountHeaderComponent />
        <AddAccountFormComponent onSave={handleSave} />
      </div>
    </AppLayout>
  );
};
