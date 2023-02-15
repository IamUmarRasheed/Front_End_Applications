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
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
export default function Cards() {
  return (
    <Box>
      <Container maxW={1400} mb="10px" my={"60px"}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap="20px"
          px={{ base: "0", md: "200px", lg: "0" }}
        >
          <Link href={"/"}>
            <Card maxW="sm" borderRadius={"md"} >
              <Box
                h={"35px"}
                bg="black"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
              >
                {" "}
              </Box>
              <CardBody px={"80px"} py={"60px"}>
                <Center>
                  {/* <Stack mt='6' spacing='3'> */}
                  <Text fontWeight={"bold"}>Artificial Intelligence</Text>
                  
                </Center>
                {/* </Stack> */}
              </CardBody>
            </Card>
          </Link>
          <Link href={"/"}>
            <Card maxW="sm" borderRadius={"md"}>
              <Box
                h={"35px"}
                bg="black"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
              >
                {" "}
              </Box>
              <CardBody px={"80px"} py={"60px"}>
                <Center>
                  {/* <Stack mt='6' spacing='3'> */}
                  <Text fontWeight={"bold"}>Cloud Native and Mobile Web Computing Specialist</Text>
                
                </Center>
                {/* </Stack> */}
              </CardBody>
            </Card>
          </Link>
          <Link href={"/"}>
            <Card maxW="sm" borderRadius={"md"}>
              <Box
                h={"35px"}
                bg="black"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
              >
                {" "}
              </Box>
              <CardBody px={"80px"} py={"60px"}>
                <Center>
                  {/* <Stack mt='6' spacing='3'> */}
      <Text fontWeight={"bold"}>Blockchain Specialist</Text>
            
                </Center>
                {/* </Stack> */}
              </CardBody>
            </Card>
          </Link>
          <Link href={"/"}>
            <Card maxW="sm" borderRadius={"md"}>
              <Box
                h={"35px"}
                bg="black"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
              >
                {" "}
              </Box>
              <CardBody px={"80px"} py={"60px"}>
                <Center>
                  {/* <Stack mt='6' spacing='3'> */}
                  <Text fontWeight={"bold"}>Internet of Things and AI Specialist</Text>
                
                </Center>
                {/* </Stack> */}
              </CardBody>
            </Card>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
