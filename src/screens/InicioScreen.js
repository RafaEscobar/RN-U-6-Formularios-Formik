import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useFormik } from 'formik';
import { Input, Stack, FormControl, Button } from 'native-base';


export const InicioScreen = () => {
    const {values, isSubmitting, setFieldValue, handleSubmit} = useFormik({
        initialValues: {
          nombre: '',
          carrera: '',
          docencia: '',
        },
        onSubmit: values => {
            console.log(values);
        },
    });
  return (
    <View style={styles.container}>
        <FormControl>
            <Stack space={5}>
              <Stack>
                <FormControl.Label>Nombre</FormControl.Label>
                <Input variant="underlined" p={2} placeholder="Username" value={values.nombre} onChangeText={text => setFieldValue('nombre', text)}/>
              </Stack>
              <Stack>
                <FormControl.Label>Carrera</FormControl.Label>
                <Input variant="underlined" p={2} placeholder="Username" value={values.carrera} onChangeText={text => setFieldValue('carrera', text)}/>
              </Stack>
              <Stack>
                <FormControl.Label>Docencia</FormControl.Label>
                <Input variant="underlined" p={2} placeholder="Username" value={values.docencia} onChangeText={text => setFieldValue('docencia', text)}/>
              </Stack>
              <TouchableOpacity onPress={handleSubmit}><Text>Enviar</Text></TouchableOpacity>
            </Stack>
        </FormControl>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        padding: 10,
    },
    title: {
        fontSize:22,
        color: 'black',
        fontWeight: '500'
    }
});