"use client"
import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Home(pros:any) {
  return (
<Box bgImage={pros.src} py="220px" bgSize={"cover"} bgAttachment="fixed"  >
    <Container maxW={1520} >
        <Heading color={'white'} as='h1'>{pros.title}</Heading>

    </Container>
</Box>
  )
}
