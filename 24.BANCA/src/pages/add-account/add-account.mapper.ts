import { AddAccountVm } from "./add-account.vm";
import { AccountApi } from "./api";

export const mapAddAccountFromVmToApi = (vm: AddAccountVm): AccountApi => ({
  type: vm.type,
  name: vm.name,
});
