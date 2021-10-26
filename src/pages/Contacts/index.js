import React from "react";
import {StyleSheet, View, Text } from "react-native";

export default function Contacts({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.divOne}>
                <Text style={styles.textContactsTitle}>John Kevin</Text>
                <Text style={styles.textContacts}>Telefone: 99608-0250</Text>
                <Text style={styles.textContacts} onPress={() => navigation.navigate('Information', 
                {
                    nome: 'John Kevin',
                    telefone: '99608-0250',
                    endereco: 'Lirio do vale',
                    numero: '45',
                    profissao: 'developer',
                    email: 'dev@gmail.com'
                }
                )}
                > Informações </Text>
            </View>
            <View style={styles.divOne}>
                <Text style={styles.textContactsTitle}>Hugo Jorge</Text>
                <Text style={styles.textContacts}>Telefone: 99608-5555</Text>
                <Text style={styles.textContacts} onPress={() => navigation.navigate('Information', 
                {
                    nome: 'Hugo Jorge',
                    telefone: '99608-0250',
                    endereco: 'Lirio do vale',
                    numero: '155',
                    profissao: 'Cirurgião',
                    email: 'hj@gmail.com'
                }
                )}
                > Informações </Text>
            </View>
        </View>
       

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B4D3E',

      },
      textContacts: {
          color: '#ffff',
          backgroundColor: '#464646',
          paddingTop: 10,
          paddingBottom: 5,
          marginTop: 10
      },
      textContactsTitle: {
          fontSize: 30,
          color: '#fff',
      },
      divOne: {
        marginTop: 20, 
        
      }

});