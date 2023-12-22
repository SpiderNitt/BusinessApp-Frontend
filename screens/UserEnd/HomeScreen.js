import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    ImageBackground,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import colors from '../../constants/Colors.js';
import topBar from '../../assets/image/topBar.png';
import HomeAd from '../../assets/image/HomeAd.png';
import BestSeller from '../../assets/image/BestSeller.png';
import filledStar from '../../assets/icons/filledStar.png';
import lineStar from '../../assets/icons/lineStar.png';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { TextInput as PaperTextInput } from 'react-native-paper';

const products = [
    { id: '1', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '2', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '3', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '4', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '5', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '6', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '7', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
    { id: '8', image: BestSeller, company: 'Snitch & Co', description: 'Green Floral Tshirt with soft Fabric', price: '₹550', discount: '₹660 (20% OFF)', rating: '4', NoOfRating: '(200)' },
];

const HomeScreen = () => {
    const renderProductItem = ({ item }) => (
        <View>
            <TouchableOpacity>
                <View style={styles.productItem}>
                    <Image source={BestSeller} style={styles.productImage} />
                </View>
                <Text style={styles.companyText}>{item.company}</Text>
                <Text style={styles.description} numberOfLines={1} ellipsizeMode='tail'>{item.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.rating}>{item.rating}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: moderateScale(5) }}>
                        {[...Array(5)].map((_, index) => (
                            <Image
                                key={index}
                                source={index < Math.floor(item.rating) ? filledStar : lineStar}
                                style={{ width: moderateScale(12), height: moderateScale(12), marginRight: moderateScale(2) }}
                            />
                        ))}
                    </View>
                    <Text style={{ ...styles.rating, marginLeft: moderateScale(5) }}>{item.NoOfRating}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.price}>{item.price}</Text>
                    {item.discount && (
                        <>
                            <Text style={{ ...styles.discount, textDecorationLine: 'line-through', marginLeft: moderateScale(6) }}>
                                {item.discount.split(' ')[0]}
                            </Text>
                            <Text style={{ ...styles.discount, marginLeft: moderateScale(2) }}>
                                {item.discount.split(' ').slice(1).join(' ')}
                            </Text>
                        </>
                    )}
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.AddtoCart}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Icon name="shoppingcart" size={15} color={colors.white} /> */}
                    <Text style={{ color: colors.white, fontSize: moderateScale(14), fontWeight: '400', marginLeft: 10 }}>
                        Add to Cart
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.topBarContainer}>
                <ImageBackground source={topBar} style={styles.topBar}>
                    <View style={{ width: '90%', marginTop: moderateScale(40) }}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Search for products..."
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        {/* <FontAwesomeIcon name="map-marker" size={18} color={colors.white} style={{ marginRight: 5, marginTop: 5 }} /> */}
                        <Text
                            style={{
                                color: colors.white,
                                fontSize: moderateScale(14.5),
                                marginTop: moderateScale(8),
                                textAlign: 'left',
                            }}
                        >
                            Deliver to Dev - Ashok Nagar 600083
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <ScrollView>
                <View style={styles.HomeAd}>
                    <Image source={HomeAd} style={{ resizeMode: 'contain', width: '100%' }} />
                </View>
                <Text style={styles.BestSellers}>Best Sellers from Fashion</Text>

                <FlatList
                    data={products}
                    renderItem={renderProductItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.productList}
                />
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
    topBarContainer: {
        width: Dimensions.get('window').width,
        height: moderateScale(150),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    topBar: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: moderateScale(58),
        color: 'white',
        backgroundColor: colors.white,
        borderRadius: 8,
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
        backgroundColor: colors.black,
        marginRight: moderateScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: '85%',
        resizeMode: 'cover',
    },
    HomeAd: {
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: moderateScale(15),
    },
    BestSellers: {
        marginTop: moderateScale(10),
        fontSize: moderateScale(20),
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: moderateScale(15),
    },
    companyText: {
        color: colors.black,
        fontSize: moderateScale(18),
        marginTop: moderateScale(6),
        textAlign: 'left',
        fontWeight: '700',
    },
    description: {
        color: colors.black,
        fontSize: moderateScale(13),
        marginTop: moderateScale(0),
        textAlign: 'left',
        fontWeight: '500',
        width: Dimensions.get('window').width / 2.2
    },
    price: {
        color: colors.black,
        fontSize: moderateScale(18),
        marginTop: moderateScale(0),
        textAlign: 'left',
        fontWeight: '700',
    },
    discount: {
        color: colors.black,
        fontSize: moderateScale(11),
        marginTop: moderateScale(7),
        textAlign: 'left',
        fontWeight: '400',
    },
    AddtoCart: {
        width: Dimensions.get('window').width / 2 - moderateScale(20),
        height: moderateScale(40),
        backgroundColor: colors.cart,
        borderRadius: moderateScale(10),
        marginTop: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(20),
        flexDirection: 'row',
    },
    rating: {
        color: colors.black,
        fontSize: moderateScale(12),
        textAlign: 'left',
        fontWeight: '400',
    },
});
