import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
  Platform,
} from "react-native";
// import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

import Carousel from "react-native-snap-carousel";

// import { Container } from './styles';

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const Home = () => {
  const carouselRef = useRef(null);
  const [list, setList] = useState([
    {
      title: "O Justiceiro",
      text:
        "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg",
    },
    {
      title: "Bad Boys for life",
      text:
        "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg",
    },
    {
      title: "Viúva Negra",
      text:
        "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg",
    },
    {
      title: "Top Gun: MAVERICK",
      text:
        "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg",
    },
    {
      title: "BloodShot",
      text:
        "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg",
    },
    {
      title: "Free Guy",
      text:
        "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
      release: 2020,
      img:
        "https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg",
    },
  ]);

  const [background, setBackground] = useState(list[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const { width, height } = Dimensions.get("window");

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Image source={{ uri: item.img }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.ImageBg}
            blurRadius={8}
          >
            <View style={styles.SearchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.SearchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks this Week
            </Text>

            <View style={styles.carouselContainerView}>
              {/* <Carousel
                data={gallery}
                renderItem={renderItem}
                itemWidth={0}
                containerWidth={0}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              /> */}
              <Carousel
                ref={carouselRef}
                data={list}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(list[index].img);
                  setActiveIndex(index);
                }}
              />
            </View>
            <View style={styles.moreInfo}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieTitle}>{list[activeIndex].title}</Text>
                <Text style={styles.movieStat}>
                  {list[activeIndex].release}
                </Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={30}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text
                style={{
                  color: "#fff",
                  opacity: 0.8,
                  lineHeight: 20,
                  fontSize: 16,
                }}
              >
                {list[activeIndex].text}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{ marginHorizontal: 14, marginTop: 70 }}>
        <Text
          style={{
            fontSize: 25,
            color: "#fff",
            fontWeight: "bold",
            marginBottom: 24,
          }}
        >
          Continue Watching
        </Text>
        <ImageBackground
          source={{
            uri:
              "https://www.thehindu.com/entertainment/movies/4xicg2/article26618002.ece/ALTERNATES/FREE_960/how-to-train-your-dragon",
          }}
          style={{ height: 250, width: "100%", backgroundColor: "#000" }}
          resizeMode="cover"
        >
          <Text style={{ color: "#FFF", padding: 14 }}>
            How to train your Dragon: the Hidden World
          </Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%",
            }}
          >
            <FontAwesome5
              name="play"
              size={30}
              color="#02ad94"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text style={{ color: "#fff", fontSize: 14, fontWeight: "normal" }}>
            View All
          </Text>
        </View>

        <FlatList
          style={{ marginBottom: 30 }}
          data={list}
          horizontal={true}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={{ uri: item.img }}
                  style={{ height: 300, width: 200 }}
                />
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8,
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.9,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  moreInfo: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 15,
  },
  movieStat: {
    paddingLeft: 14,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8,
  },
  movieDesc: {
    paddingLeft: 15,
    paddingRight: 15,
    color: "#FFF",
    fontSize: 16,
  },
  playIconContainer: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2,173, 148, 0.2)",
    marginBottom: 14,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "ios" ? 30 : 30,
  },
  SearchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  Carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
});

export default Home;
