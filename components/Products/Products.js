import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Product from './Product';

export default function Products() {

    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('https://secret-island-26493.herokuapp.com/foods');
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <View style={{ margin: 10, marginTop: 50 }}>

            <Text style={styles.headerTitle}>Products</Text>
            <ScrollView >
                <View style={styles.productContainer}>
                    {
                        products.map(product => <Product key={product._id} product={product} />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    productContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',

    },
});
