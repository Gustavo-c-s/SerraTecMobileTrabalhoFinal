import { Button, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function Login() {
  const [login,setLogin]=useState('');
  const [senha,setSenha]=useState('');

const fazerLogin =()=>{
  console.log(login,senha)
}
  
  return (
    <View>
      <Input
      label="Login"
      value={login}
      setvalue={setLogin}
      />
      <Input
      label={"Senha"}
      value={senha}
      setvalue={setSenha}
      />
      <Button title='entra' onPress={fazerLogin}/>
    </View>
  )
}