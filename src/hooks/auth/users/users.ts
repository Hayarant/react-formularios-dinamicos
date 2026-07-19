import { useMutation, useQuery } from "@tanstack/react-query";
import {MUTATION_KEY_UPDATE_USER_BY_ID , QUERY_KEY_USER_BY_ID, QUERY_KEY_USERS } from "../../../api/auth/users/contants/api";
import  { getUserById , updateUserById, users }  from "../../../api/auth/users/users";
import type {UserResponse , UpdateUserRequest} from "../../../api/auth/users/users";

interface IGetUserByIdParams  {
    id: number;
}

export function Users(){
    return useQuery({
        queryKey: [QUERY_KEY_USERS],
        queryFn: users
    });
}

export function useGetUserById(id : IGetUserByIdParams ) {

    return useQuery<UserResponse>({
        queryKey: [QUERY_KEY_USER_BY_ID, id],
        queryFn: () => getUserById(id)
    });

}

export function useCreateUser() {

}

export function useUpdateUser(){
    return useMutation<UserResponse, Error, UpdateUserRequest>({
        mutationKey:[MUTATION_KEY_UPDATE_USER_BY_ID],
        mutationFn:updateUserById,
    })
}
