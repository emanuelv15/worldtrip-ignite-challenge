import { Flex, Text, Image } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Flex w="100%" h="368px" align="top" justify="center">
      <Flex
        w="100%"
        h="335px"
        align="center"
        justify="center"
        bgImage="/banner_background.svg"
        backgroundSize="cover"
      >
        <Flex
          align="left"
          justify="center"
          direction="column"
          w="100%"
          h="100%"
        >
          <Text
            fontFamily="Poppins"
            fontWeight="500 medium"
            fontSize="36px"
            lineHeight="54px"
            color="gray.100"
            marginLeft="140px"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="400 regular"
            fontSize="20px"
            lineHeight="30px"
            color="gray.100"
            marginLeft="140px"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          align="bottom"
          justify="center"
          marginBottom="-33px"
        >
          <Image
            w="417.15px"
            h="270.74px"
            marginTop="76px"
            src="/banner_airplane.svg"
            alt="Banner airplane"
          />
        </Flex>
      </Flex>
    </Flex>
  );
  ``;
};

export default Banner;
