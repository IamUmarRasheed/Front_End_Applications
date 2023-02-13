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
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export default function TOP() {
  return (
    <Box mt={"100px"}>
      <Container maxW={1400}>
        <Flex justifyItems={"center"} direction={{ base: "column", lg: "row" }}>
          <Box w={"600px"}>
            <Image
              src="/president.png"
              alt="president-pk"
              width={100}
              height={150}
            />
          </Box>

          <Box px="50px">
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
            <Box textAlign={"center"} pt={"80px"}
           >
                <HStack>
            
            <Button colorScheme={"teal"} px={{base:"30px", lg:"auto"}} >
                {" "}
                APPLY{" "}
              </Button>
              <Divider orientation="vertical" />
              <Heading pl={"30px"} as="h1">100K+.<br/>  <Text fontSize="sm">Applications Received</Text></Heading>
              
              
              </HStack>
              
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
