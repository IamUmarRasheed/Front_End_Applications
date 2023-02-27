import { Box, Center, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { bannerData, cards, core } from "@/utils/data/datastore";
import Link from "next/link";

export const Bannerabout = () => {
  return (
    <section>
      <Box pt={"50px"}>
        <Container maxW={1520} w="full">
          <Center flexDir="column">
            <Heading size="2xl" fontFamily={"sans-serif"}>
              Course Syllabus
            </Heading>

            <Text mt="20px" textAlign="center" fontFamily={"sans-serif"}>
              The first three quarters are shared by all specialties and are
              dedicated to studying Object-Oriented Programming and cutting-edge
              Full-Stack Web 2.0 development. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each
            </Text>
          </Center>
          <Center flexDir="column" mt="20px">
            <Heading fontFamily={"sans-serif"}>Common In All</Heading>
            <Text
              textAlign="center"
              px={{ base: "10px", lg: "130px" }}
              fontFamily={"sans-serif"}
            >
              Every participant of the program will start by completing the
              following three core courses
            </Text>
          </Center>
          <Center>
            <Flex
              mt={"40px"}
              gap={"30px"}
              flexDir={{ base: "column", lg: "row" }}
            >
              {core.map((val) => (
                <Box
                  key={val.id}
                  textAlign="center"
                  borderRadius={"20px"}
                  boxShadow="dark-lg"
                  width={"300px"}
                  p="50px"
                  fontFamily={"sans-serif"}
                >
                  <Link href={"/"}>
                    <Heading>{val.heading}</Heading>
                    <Text pt={"5px"}>{val.text}</Text>
                  </Link>{" "}
                </Box>
              ))}
            </Flex>
          </Center>
        </Container>

        <Container
          maxW={1520}
          bgAttachment="fixed"
          bgSize={"cover"}
          bgImage="https://png.pngtree.com/background/20210709/original/pngtree-spray-powder-glare-colorful-background-picture-image_623477.jpg"
          mt={"40px"}
        >
          {cards.map((elm) => (
            <Box pt="40px" key={elm.id} fontFamily={"sans-serif"}>
              <Center flexDir={"column"} mt="50px ">
                <Heading ml="15px" size="xl" color={"white"}>
                  {elm.heading1}
                </Heading>
                <Text
                  fontWeight="medium"
                  color="white"
                  mt="20px"
                  textAlign="center"
                  px={{ base: "10px", lg: "130px" }}
                >
                  {" "}
                  {elm.text1}
                </Text>
              </Center>

              <Flex
                mt="50px"
                gap="20px"
                justifyContent={"center"}
                flexDir={{ base: "column", lg: "row" }}
                fontFamily={"sans-serif"}
              >
                <Box
                  borderRadius={"lg"}
                  boxShadow="dark-lg"
                  width={"350px"}
                  textAlign="center"
                  bg="white"
                  p={"50px"}
                >
                  <Heading>{elm.heading2}</Heading>
                  <Text fontWeight="medium" pt="5px">
                    {elm.text2}
                  </Text>
                </Box>
                <Box
                  bgColor="white"
                  textAlign="center"
                  p="50px"
                  boxShadow="dark-lg"
                  borderRadius="lg"
                  width="350px"
                >
                  <Heading>{elm.heading3}</Heading>
                  <Text fontWeight="medium" pt="5px">
                    {elm.text3}
                  </Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Container>
      </Box>
    </section>
  );
};
export default Bannerabout;
