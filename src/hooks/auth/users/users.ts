import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_USERS } from "../../../api/auth/users/contants/api";
import  { users }  from "../../../api/auth/users/users";

interface IUsers {
    id: number;
}

export function Users(){
    return useQuery({
        queryKey: [QUERY_KEY_USERS],
        queryFn: users
    });
}

export function useUsers(data : IUsers) {

    console.log(data.id);

}

export function useCreateUser() {

}
