import * as apiModel from "./api/account-api-model";
import * as viewModel from "./account.vm";

export const mapAccountToVm = (
  account: apiModel.Account
): viewModel.AccountVm => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: account.balance.toString(),
  lastTransaction: new Date(account.lastTransaction),
});
