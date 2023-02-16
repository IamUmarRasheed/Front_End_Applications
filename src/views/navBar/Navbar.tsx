"use client";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <>
    <Box boxShadow="lg">
      <Container maxW={1400} >
        <SimpleGrid
          templateColumns={{
            md: "repeat(3,)",
            lg: "repeat(3, 1fr)",
            base: "repeat(2, 1fr)",
          }}
          py="20px"
        >
          <Box>
            <Image
              src="/panavers.png"
              alt="panavers_logo"
              width={100}
              height={100}
            ></Image>
          </Box>

          <Flex
            display={{ base: "none", md: "none", lg: "flex" }}
            placeItems="center"
            color={"black"}
            fontSize={18}
            fontWeight="semibold"
            gap={10}
            mb="5px"
            // width={4}
            minW="150px"
            maxW="250px"
          >
            <Link href="">Home</Link>
            <Link href="">Syllabus</Link>
            <Link href="">Explore</Link>
            <Link href="./about">About</Link>
            <Link href="">Contact</Link>
          </Flex>

          <Box display={{ base: "none", md:"none", lg: "initial" }}>
            <Button
              m="10px"
              size="lg"
              colorScheme="messenger"
              float={{ base: "none", md: "none", lg: "right" }}
            >
              Apply
            </Button>
          </Box>
          <Box
            py="10px"
            display={{ base: "initial", md: "initial", lg: "none" }}
            mx="10px"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                float={"right"}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem><Link href={'/'}> Home</Link></MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem><Link href={'./about'}> About</Link></MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
    </>
  );
}
