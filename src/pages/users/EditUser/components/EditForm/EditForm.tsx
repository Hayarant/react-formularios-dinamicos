import { useState } from "react";
import Input from "../../../../../components/Input";
import InputSpan from "../../../../../components/InputSpan";
import type { UserProp } from "./types/type";
import { useUpdateUser } from '../../../../../hooks/auth/users/users'
import Button from "../../../../../components/Button";

interface EditUserFormProps {
    data:UserProp
}

const EditForm = ({data}: EditUserFormProps) => {
  const {mutate , isPending} = useUpdateUser()
  const [name , setName] = useState(data.name)
  const [email , setEmail] = useState(data.email)
  
  function handleEditUser(){
    mutate(
        {
            id:data.id,
            email:email,
            name:name,
        },
        {
            onSuccess(data){
                setName(data.name)
                setEmail(data.email)
            }
        }
    )
  }

  return (
    <div>
        <div className="flex flex-col gap-2">
            <div className="flex space-x-2">
                <div className="w-full">
                    <InputSpan text="Nome: "/>
                    <Input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div className="w-full">
                    <InputSpan text="Email: "/>
                    <Input placeholder="Nome" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-col w-xs">
                <Button text={isPending ? 'Atualizando...' : 'Login'} key={data.id} onClick={handleEditUser}/>
            </div>
        </div>
    </div>

  )
}

export default EditForm