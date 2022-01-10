/* eslint-disable prettier/prettier */
import React from 'react';


import { Button, ButtonText, Container } from './styles';
interface Props {
  onChage: (tag: string) => void;
}
const Languages: React.FC<Props> = ({ onChage }) => {
  const languages = [
    { name: 'Português', tag: 'pt-BR' },
    { name: 'Inglês', tag: 'en-US' },
    { name: 'Espanhol', tag: 'es' },
    { name: 'Francês', tag: 'fr' },
  ];

  return (
    <Container>
      {languages.map(item => {
        return (
          <Button key={item.tag} onPress={() => {
            onChage(item.tag);
          }}>
            <ButtonText>{item.name}</ButtonText>
          </Button>
        );
      })}
    </Container>
  );
};

export default Languages;
