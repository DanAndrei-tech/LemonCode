import Axios from "axios";
import { Account } from "./account-api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (accountId: string): Promise<Account | null> =>
  Axios.get(`${url}`).then(({ data }) => {
    const account = data.find((acc: Account) => acc.id === accountId);
    return account || null;
  });
