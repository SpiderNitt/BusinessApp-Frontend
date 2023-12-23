import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import colors from '../../constants/Colors.js';
import Keyboards from '../../assets/image/Keyboards.png';
import Laptops from '../../assets/image/Laptops.png';
import Smartphones from '../../assets/image/Smartphones.png';
import Tablets from '../../assets/image/Tablets.png';
import { moderateScale } from 'react-native-size-matters';

const categories = [
    { id: '1', image: Smartphones, category: 'Smartphones', discount: '30% OFF' },
    { id: '2', image: Keyboards, category: 'Keyboards', discount: '20% OFF' },
    { id: '3', image: Tablets, category: 'Tablets', discount: '' },
    { id: '4', image: Laptops, category: 'Laptops', discount: '30% OFF' },
    { id: '5', image: Smartphones, category: 'Smartphones', discount: '30% OFF' },
    { id: '6', image: Keyboards, category: 'Keyboards', discount: '20% OFF' },
    { id: '7', image: Tablets, category: 'Tablets', discount: '' },
    { id: '8', image: Laptops, category: 'Laptops', discount: '30% OFF' },
];

const HomeScreen = () => {
    const renderCategoriesItem = ({ item }) => (
        <View>
            <TouchableOpacity>
                <View style={styles.productItem}>
                    <Image source={item.image} style={styles.productImage} />
                </View>
                {item.discount && (
                    <View style={styles.discount}>
                        <Text style={{ color: colors.black, fontWeight: '700', fontSize: moderateScale(12) }}>{item.discount}</Text>
                    </View>
                )}
                <Text style={styles.productText}>{item.category}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search in Smartphones..."
                    placeholderTextColor="#000000"
                />
            </View>
            <ScrollView>
                <Text style={styles.categoryName}>Electronics</Text>
                <FlatList
                    data={categories}
                    renderItem={renderCategoriesItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.productList}
                />
                <View style={{ marginTop: moderateScale(20) }} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: '100%',
        backgroundColor: colors.white,
    },
    textInput: {
        height: moderateScale(58),
        color: 'white',
        backgroundColor: colors.white,
        borderRadius: 8,
        fontWeight: '300',
        textAlign: 'left',
        paddingLeft: moderateScale(20),
        fontSize: moderateScale(17),
    },
    productList: {
        paddingHorizontal: moderateScale(15),
        marginTop: moderateScale(20),
    },
    productItem: {
        width: Dimensions.get('window').width / 2 - moderateScale(20),
        borderRadius: moderateScale(10),
        overflow: 'hidden',
        marginRight: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    productText: {
        color: colors.black,
        fontSize: moderateScale(15),
        marginTop: moderateScale(6),
        textAlign: 'center',
        fontWeight: '400',
    },
    categoryName: {
        color: colors.black,
        fontSize: moderateScale(20),
        marginTop: moderateScale(20),
        textAlign: 'left',
        fontWeight: '700',
        marginLeft: moderateScale(15),
    },
    searchBar: {
        width: '90%',
        marginTop: moderateScale(50),
        alignSelf: 'center',
        elevation: 3,
        borderRadius: 8,
    },
    discount: {
        position: 'absolute',
        bottom: 43,
        right: 18,
        backgroundColor: colors.discount,
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(4),
        paddingVertical: moderateScale(2),
    }
});
