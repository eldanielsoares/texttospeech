/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import Tts from 'react-native-tts';
import { Modalize } from 'react-native-modalize';
import { Button, ButtonCode, Container, Input, TextButton, TextLang, Title, ViewInput } from './styles';
import Languages from '../../components/Languages';
import { Dimensions } from 'react-native';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [lang, setLang] = useState('pt-BR');
  const modalizeRef = useRef<Modalize>(null);
  const { height } = Dimensions.get('screen');

  function speech() {
    Tts.setDefaultLanguage(lang);
    Tts.speak(text);
  }

  return (
    <>
      <Container>
        <Title>Digite sua frase</Title>
        <ViewInput>
          <Input
            value={text}
            placeholder="Digite sua frase"
            placeholderTextColor="#171717"
            onChangeText={textInput => setText(textInput)}
          />
          <ButtonCode onPress={() => modalizeRef.current?.open()}>
            <TextLang>{lang}</TextLang>
          </ButtonCode>
        </ViewInput>
        <Button onPress={() => speech()}>
          <TextButton>Ouvir</TextButton>
        </Button>
      </Container>
      <Modalize
        ref={modalizeRef}
        // eslint-disable-next-line react-native/no-inline-styles
        modalStyle={{ paddingVertical: 20 }}
        modalHeight={height}
        closeAnimationConfig={{ timing: { duration: 500 } }}
        openAnimationConfig={{ timing: { duration: 500 } }}
        handlePosition="inside"
        withOverlay={false}
        closeOnOverlayTap={false}
        useNativeDriver
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          overScrollMode: 'never',
        }}
      >
        <Languages onChage={(tag: string) => {
          modalizeRef.current?.close();
          setLang(tag);
        }} />
      </Modalize>
    </>
  );
};

export default Home;
