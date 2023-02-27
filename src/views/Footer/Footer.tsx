"use client";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <>
    <Box bg="#0c0c0c" >
      <Container maxW={1520}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
          spacing="30px"
          py="60px"
         px={'90px'}>
          <Box>
            <Heading as={'h5'} pb="20px" color="white">
              About US
            </Heading>
            <Grid justifyContent={{ base: "center", lg: "start" }}>
              <Image
                src="/panavers.png"
                alt="Panavers logo"
                width={100}
                height={150}
              ></Image>
            </Grid>

            <Text color={"skyblue"} pt="15px" pr={{ lg: "40px", base: "0" }}>
              The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
              Panaverse DAO is a movement to spread{" "}
            </Text>
          </Box>
          <Box>
            <Heading  as={'h5'} color="white">Useful Links</Heading>

            <Grid pt="50" color="skyblue">
              <Link href="/">Home</Link>
              <Link href="/">Syllabus</Link>
              <Link href="/">Explore</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </Grid>
          </Box>
          <Box >
            <Heading  as={'h5'} color="white">Follow Us</Heading>

            <Grid pt="50px" color="skyblue">
              <Link href="/">Facebook</Link>
              <Link href="/">Linkedin</Link>
              <Link href="/">Twitter</Link>
              <Link href="/">Youtube</Link>
              <Link href="/">GitHub</Link>
            </Grid>
          </Box>
          <Box>
            <Heading  as={'h5'} color="white">Contact Us</Heading>

            <Grid
              pt="50px"
              color="skyblue"
              justifyItems={{ base: "center", md: "center", lg: "start" }}
            >
              <HStack>
                <PhoneIcon />
                <Link href="/">+92 123 4567890</Link>
              </HStack>
              <HStack>
                <EmailIcon />
                <Link href="/">abcdefghi@gmail.com</Link>
              </HStack>
              <HStack>
                <LinkIcon />
                <Link href="/">Karachi, Pakistan</Link>
              </HStack>
            </Grid>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}
