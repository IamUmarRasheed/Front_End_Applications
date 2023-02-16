"use client";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <>
      <Box  bgAttachment={'fixed'} bgImage={"/background.png "} >
        <Container maxWidth={1400} >
          <Flex pt={'70px'}  pb="40px" direction={{base :"column" ,lg: "row"}}>
            <Box color={'white'} flexBasis={"50%"} px="70px" >
              <Heading pb={'25px'}>
                
                Prepare yourself for the Next Generation of Internet with
                Panaverse
              </Heading>
              <Text pb={'25px'} lineHeight={'30px'}>
                One Year Panaverse DAO Earn as you Learn Program. Consolidating
                Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge,
                and Ambient Computing/IoT Technologies
              </Text>
              <Button colorScheme={'linkedin'}>More info</Button>
            </Box>
            <Box ml={'50px'} flexBasis={"50%"} mt={{base:'40px' ,lg:'0'}}> 
              <Image  src="/metavers.png" alt="Metavers" width={400} height={400}>

              </Image>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box mt={"70px"}>
        <Container maxWidth={1400}>
          <Flex mt={"100px"} gap="20px" px={{lg:"70px",base:"0px"}}  direction={{base :"column" ,lg: "row"}}>
            <Box flexBasis={"50%"}>
              <Image src={'/web3.png'} alt='web3.O' width={700} height={600}></Image>
            </Box>
            <Box flexBasis={"50%"}>
              <Heading pt="15px">Web 3.O For All</Heading>
              <Text pr={{ lg: "50px", base: "25px" }} pt="40px" lineHeight={'30px'} pb='25px'>
                This curriculum is intended for beginners who want to learn
                software development from the ground up. It is going to be a
                fifteen-month-long hybrid program that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each. The emphasis will be on hands-on learning by educating
                students to produce projects.
              </Text>
              <Button colorScheme={'linkedin'}>More info</Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box mt={"50px"} >
        <Container maxWidth={1400}>
          <Flex   gap="20px"  pb={'30px'} px={{lg:"70px",base:"0px"}}   direction={{base :"column" ,lg: "row"}}>
           
            <Box flexBasis={"50%"} >
              <Heading pt="15px">Metavers Future is Here</Heading>
              <Text pr={{ lg: "50px", base: "25px" }} pt="40px" lineHeight={'30px'} pb='25px'>
                This curriculum is intended for beginners who want to learn
                software development from the ground up. It is going to be a
                fifteen-month-long hybrid program that includes both onsite and
                online classes and is divided into five quarters of 13 weeks
                each. The emphasis will be on hands-on learning by educating
                students to produce projects.
              </Text>
              <Button colorScheme={'linkedin'}>More info</Button>
            </Box>
            <Box  flexBasis={"50%"}>
              {" "}
              <Image src={'/metaverse2.png'} alt='metavers-2' width={700} height={600}></Image>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
