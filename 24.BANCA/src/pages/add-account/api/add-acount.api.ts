import axios from "axios";
import { AccountApi } from "./add-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: AccountApi): Promise<AccountApi> =>
  axios.post<AccountApi>(url, account).then(({ data }) => data);
