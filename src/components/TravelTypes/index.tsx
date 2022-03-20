import { Flex, Image, Text } from "@chakra-ui/react";

const TravelTypes = () => {
  return (
    <Flex
      w="100%"
      h="145px"
      align="center"
      justify="space-between"
      marginTop="80px"
      marginBottom="80px"
      marginRight="45px"
      padding="0 140px"
    >
      <Flex align="center" justify="center" direction="column">
        <Image src="/icon_cocktail.svg" alt="Icon cocktail" />
        <Text
          fontFamily="Poppins"
          fontWeight="600 semi-bold"
          fontSize="24px"
          lineHeight="36px"
          color="gray.300"
          textAlign="center"
          marginTop="24px"
        >
          vida noturna
        </Text>
      </Flex>

      <Flex align="center" justify="center" direction="column">
        <Image src="/icon_surf.svg" alt="Icon cocktail" />
        <Text
          fontFamily="Poppins"
          fontWeight="600 semi-bold"
          fontSize="24px"
          lineHeight="36px"
          color="gray.300"
          textAlign="center"
          marginTop="24px"
        >
          praia
        </Text>
      </Flex>

      <Flex align="center" justify="center" direction="column">
        <Image src="/icon_building.svg" alt="Icon cocktail" />
        <Text
          fontFamily="Poppins"
          fontWeight="600 semi-bold"
          fontSize="24px"
          lineHeight="36px"
          color="gray.300"
          textAlign="center"
          marginTop="24px"
        >
          moderno
        </Text>
      </Flex>

      <Flex align="center" justify="center" direction="column">
        <Image src="/icon_museum.svg" alt="Icon cocktail" />
        <Text
          fontFamily="Poppins"
          fontWeight="600 semi-bold"
          fontSize="24px"
          lineHeight="36px"
          color="gray.300"
          textAlign="center"
          marginTop="24px"
        >
          classico
        </Text>
      </Flex>

      <Flex align="center" justify="center" direction="column">
        <Image src="/icon_earth.svg" alt="Icon cocktail" />
        <Text
          fontFamily="Poppins"
          fontWeight="600 semi-bold"
          fontSize="24px"
          lineHeight="36px"
          color="gray.300"
          textAlign="center"
          marginTop="24px"
        >
          e mais...
        </Text>
      </Flex>
    </Flex>
  );
};

export default TravelTypes;
