import { api } from "../../axios";
import { QUERY_KEY_USERS }  from "./contants/api";

export interface UserResponse {
  id: number;
  name: string ;
  email: string;
}

export async function users() {
  const response = await api.get<UserResponse[]>(QUERY_KEY_USERS);

  return response.data;
}