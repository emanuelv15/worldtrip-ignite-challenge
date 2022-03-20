import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./slider.module.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller]);

interface SliderProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

const Slider = ({ continents }: SliderProps) => {
  return (
    <Flex w="100%" h="450px" padding="0 100px" marginBottom="40px">
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="slide"
        autoplay={{
          delay: 4000,
        }}
        style={{
          width: "100%",
          height: "450px",
          flex: "1",
        }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="450px"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('${continent.image}')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/continent/${continent.slug}`}>
                <a>
                  <Heading
                    fontSize={["3xl", "4xl", "5xl"]}
                    color="white.500"
                    fontWeight="bold"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="white.500"
                    fontSize={["0.8rem", "1xl", "2xl"]}
                    mt={["2", "4"]}
                  >
                    {continent.summary}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Slider;
