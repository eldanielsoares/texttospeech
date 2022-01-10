import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #111;
`;

export const ViewInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 55px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #171717;
  padding: 0 16px;
  color: #171717;
  font-size: 18px;
  margin-right: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  background-color: #111;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #f5f5f5;
`;

export const ButtonCode = styled.TouchableOpacity`
  width: 80px;
  height: 55px;
  border-radius: 10px;
  background-color: #111;
  align-items: center;
  justify-content: center;
`;

export const TextLang = styled.Text`
  font-size: 14px;
  color: #f5f5f5;
`;
