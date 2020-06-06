import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

export default function DemoInput() {
  const [txt, setTxt] = useState('');
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.txtInput}
                placeholder='Type here to translate!'
                onChangeText={txt => setTxt(txt)}
                defaultValue={txt}
            />
            <Text style={styles.txtContent}>
                {txt.split(' ').map(word => word && ':smirk_cat:')}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txtInput: {    
      height:40
    },
    txtContent: {
      padding: 10,
      fontSize: 42
    }
  });
  