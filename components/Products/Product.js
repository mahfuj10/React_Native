import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Product({ product }) {




    const { name, image } = product;

    return (
        <View style={{ marginRight: 10 }}>

            <Image
                source={{ uri: image }}
                style={{ width: 150, height: 150 }}
            />
            <Text style={{ textAlign: 'center' }}>{name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

});
