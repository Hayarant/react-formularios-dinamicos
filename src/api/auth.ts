import { api } from "./axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  auth: string;
}

export async function login(data: LoginRequest) {
  const response = await api.post<LoginResponse>("/login", data);

  return response.data;
}