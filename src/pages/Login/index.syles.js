import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Input = styled.input`
display:flex;
height:25px;
margin-left:18px;
border-radius:3px;
margin-block-start:3px;

`;
export const Label = styled.label`
display:flex;
margin-bottom:1px;
font-size:20px;

`;
export const Img = styled.img`
display:flex;
align-self:center;
height:300px;
width:300px;

`;
export const Bt = styled.button`
margin-top:5px;
height:44px;
width:100%;
border-radius:4px;
cursor:pointer;

:hover{
  color:white;
  background:#071918 ;
  box-shadow:2px solid red;
};
`;

export const InputText = styled.input`
  border: 0.5px solid black;
  border-radius:5px;
  width: 336px;
  height: 16px;
  padding:16px;
  background:#E6E6E6;
  margin-bottom:15px;
`;
export const Form = styled.form`
display:flex;
flex-direction:column;
`;