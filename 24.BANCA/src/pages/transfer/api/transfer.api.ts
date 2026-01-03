import axios from "axios";
import { Account, Transfer } from "./transfer.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> =>
  axios.get<Account[]>(urlAccount).then(({ data }) => data);

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = (transfer: Transfer): Promise<boolean> =>
  axios.post<boolean>(urlTransfer, transfer).then(({ data }) => data);
