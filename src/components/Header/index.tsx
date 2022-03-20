import { Flex, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";

const Header = () => {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";

  return (
    <Flex as="header" w="100%" h="100px" align="center" justify="center">
      {notHomePage && (
        <Link href="/">
          <a>
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              position="absolute"
              w="32px"
              h="32px"
              left="140px"
              top="34px"
            />
          </a>
        </Link>
      )}

      <Image w="184px" h="45px" src="/logo.svg" alt="Logo" />
    </Flex>
  );
};

export default Header;
