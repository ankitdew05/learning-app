import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

const { width } = Dimensions.get("window");

const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: image
            ? image
            : "https://example.com/default-thumbnail.jpg",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <Text style={styles.instructor}>Instructor: {name}</Text>
      <Text style={styles.price}>Price: ${price}</Text>
      <Text style={styles.seats}>Available Seats: {countInStock}</Text>
      {countInStock > 0 ? (
        <View style={{ marginVertical: 10 }}>
          <View style={styles.enrollButton}>
            <Text style={{ color: "white" }}>Enroll Now</Text>
          </View>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Course Full</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    enrollInCourse: (course) =>
      dispatch(actions.enrollInCourse({ course })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 50,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
    borderRadius: 10,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  instructor: {
    fontSize: 12,
    textAlign: "center",
    color: "gray",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    color: "green",
  },
  seats: {
    fontSize: 12,
    textAlign: "center",
    color: "gray",
  },
  enrollButton: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
  },
});




export default connect(null, mapDispatchToProps)(ProductCard);
