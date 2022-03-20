import { Flex, Text } from "@chakra-ui/react";

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Separator from "../components/Separator";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Header />
      <Banner />
      <TravelTypes />
      <Separator />
      <Text
        fontFamily="Poppins"
        fontWeight="500 medium"
        fontSize="36px"
        lineHeight="54px"
        color="gray.300"
        marginTop="52px"
        marginBottom="52px"
        textAlign="center"
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Slider
        continents={[
          {
            slug: "europe",
            title: "Europa",
            summary: "O continente mais aintigo.",
            image:
              "https://images.unsplash.com/photo-1473905008190-69b1a3dc6dd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            slug: "europe",
            title: "Europa",
            summary: "O continente mais aintigo.",
            image:
              "https://images.unsplash.com/photo-1473905008190-69b1a3dc6dd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
        ]}
      />
    </Flex>
  );
};

export default Home;
