"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Spacer,
  SimpleGrid,
  Stack,
  ButtonGroup,
  Button,
  Divider,
  Container,
  HStack,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export default function TOP() {
  return (
    <Box mt={"100px"}>
      <Container maxW={1400}>
        <Flex justifyItems={"center"} direction={{ base: "column", lg: "row" }}>
          <Box w={{base:'280px' ,lg:"500px"}}  justifyContent={{base:"center", md:"end" , lg: "start"}} ml="50px">
            <Image
              src="/president.png"
              alt="president-pk"
              width={250}
              height={400}
            />
          </Box>

          <Box mx="50px" >
            <Heading as="h1" mb={"10px"} pt="40px">
              Presidential Initiative
              <br />
            </Heading>
            <Heading as={"h5"} fontWeight={"normal"}>
              for Artificial Intelligence & Computing (PIAIC)
            </Heading>
            <Text mt={"60px"}>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things
            </Text>
            <Box textAlign={"center"} pt={"80px"} px={{base:"0",md:"200px",lg:"0"}}>
              <HStack>
                <Link as={NextLink} isExternal textDecoration={'none'} href="https://portal.piaic.org/signup">
                <Button colorScheme={"teal"} px={{ base: "30px", lg: "auto" }}>
                  {" "}
                  APPLY{" "}
                </Button>
                </Link>
                <Divider orientation="vertical" />
                <Heading pl={"30px"} as="h1">
                  100K+.
                  <br /> <Text fontSize="sm">Applications Received</Text>
                </Heading>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
