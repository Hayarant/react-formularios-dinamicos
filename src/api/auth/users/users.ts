import { api } from "../../axios";
import { MUTATION_KEY_UPDATE_USER_BY_ID, QUERY_KEY_USER_BY_ID, QUERY_KEY_USERS }  from "./contants/api";

export interface UserResponse {
  id: number;
  name: string;
  email: string;
}

export interface GetUserByIdRequest {
  id: number;
}

export interface UpdateUserRequest{
  id:number
  name:string;
  email:string;
}

export async function users() {
  const response = await api.get<UserResponse[]>(QUERY_KEY_USERS);

  return response.data;
}

export async function getUserById({id}: GetUserByIdRequest) : Promise<UserResponse> {
  const response = await api.get<UserResponse>(`${QUERY_KEY_USER_BY_ID}/${id}`);
  return response.data;
}

export async function updateUserById({ id, name, email}: UpdateUserRequest): Promise<UserResponse>{
  const response = await api.put<UserResponse>(`${MUTATION_KEY_UPDATE_USER_BY_ID}/${id}` , {name , email});
  return response.data;
}