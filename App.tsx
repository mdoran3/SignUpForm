import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
    <View style={{ alignItems: 'center', marginTop: 100 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Dog's Information</Text>
    </View>
    <ScrollView>
      <Field text="Email" />
      <UserInput />

      <Field text="Password" />
      <UserInput secureTextEntry={true} />

      <Field text="Pet's Name" />
      <UserInput />

      <Field text="Pet's Date of Birth" />
      <UserInput />

      <Field text="Breed" />
      <UserInput />

      <Field text="Favorite Toy" />
      <UserInput />
    </ScrollView>
  </View>
);

export default App;

interface FieldProps {
  text: string;
}

export const Field = ({ text }: FieldProps) => (
  <View style={{
    marginTop: 20,
    marginLeft: 20, 
  }}>
    <Text style={{ fontSize: 18 }}>{text}</Text>
  </View>
);

interface UserInputProps {
  secureTextEntry?: boolean;
}

export const UserInput = ({ secureTextEntry = false }: UserInputProps) => {
  const [value, setValue] = useState('');
  return (
    <View style={{
      marginLeft: 20,
      marginRight: 20,
      padding: 8, 
      backgroundColor: '#ffffff' }}>
      <TextInput 
        onChangeText={text => setValue(text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};