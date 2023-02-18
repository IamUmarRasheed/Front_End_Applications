"use client"
import { Box, Center, Container, Flex, Heading, Image ,Text} from '@chakra-ui/react'
import React from 'react'
import { data } from './datastore'

export default function Instructor() {
  return (
    <Box  py={'50px'}>
            <Container maxW={1400} >
                <Center>
                    <Heading mb={'20px'} >Our Instructors</Heading>
                </Center>
                <Flex flexDir={{lg:'row', base:"column"}} py={10} >
                    {data.map((ins) => (
                        <Box key={ins.id}  mt='30px'>
                            <Center >
                                <Image borderRadius='full' width={90} height={90} src={ins.src} />
                            </Center>
                            <Heading textAlign='center' size='md'>{ins.heading}</Heading>
                            <Text px='30px' fontSize='sm' textAlign='center'>{ins.text}</Text>
                        </Box>
                    ))}
                </Flex>
                
            </Container>
        </Box>
  )
}
