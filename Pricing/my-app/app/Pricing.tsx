import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkmark from "./icons/checkmark";

export default function Pricing() {
  return (
    <Box
      maxW={"950px"}
      m="auto"
      mt="-180"
      mx={{base:"15px",lg:"auto"}}
      bg={"white"}
      borderRadius={"16px"}
      overflow={"hidden"}
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
    >
      <Flex direction={{base :"column", md :"column",lg:"row"}}>
        <Box bg={`#cbb8ee`} p="40px" textAlign={`center`}>
          <Text fontSize={`24px`} fontWeight="bold">
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"20px"} w={"300px"} color={"white"} bg={"#805AD5"}>
            Get Started
          </Button>
        </Box>
        <Box pt={"50px"} pl={"25px"} pr={"15px"} >
          <Text pb="25px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as={checkmark} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmark} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmark} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mb={"15px"}>
            <Icon as={checkmark} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
