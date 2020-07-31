import React, { useState } from 'react';
import Card from './../../components/Card';
import icon from './../../assets/icon.png';
import { documentMask } from './../../utils/index';
import { Container, Img, InputText, Bt, Label, Form } from './index.syles';


export default function Component() {
  const [document, setdocument] = useState('');
  const [password, setpassword] = useState('');


  function handleDocumentChange(e) {
    const { value } = e.target;
    console.log(value)
    setdocument(documentMask(value));
  };
  function handlePasswordChange(e) {
    const { value } = e.target;
    setpassword(value);
  }

  function hadleSumibt(e) {
    e.preventDefault();

  };


  return (
    <Container>
      <Form onChange={(e) => hadleSumibt(e)}>
        <Card title="Login" >
          <Img src={icon} />
          <Label>CPF</Label>
          <InputText
            type="text"
            placeholder="CPF cadastrado"
            value={document}
            onChange={(e) => handleDocumentChange(e)}
            maxLength={14}
          />

          <Label>Senha</Label>
          <InputText
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
          <Bt ligth> Enviar</Bt>
        </Card >
      </Form>
    </Container>
  );
}
