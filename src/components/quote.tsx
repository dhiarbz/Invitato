"use client";
import { Box, Text, Container, VStack, Icon } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

export default function quote() {
  return (
    <Container
      maxW="container.md"
      h="40vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f9f7f4"
      px={8}
    >
        <VStack spacing={5}>
          <Icon as={FaQuoteLeft} boxSize={8} color="rgb(153, 122, 94)" />

          <Text
            fontStyle="italic"
            color="#1a1b1d"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="normal"
            textAlign="center"
          >
            “And of His signs is that He created for you from yourselves mates
            that you may find tranquility in them, and He placed between you
            affection and mercy. Indeed in that are signs for a people who give
            thought.”
          </Text>

          <Text
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            color="#1a1b1d"
            mt={1}
          >
            – Q.S. Ar-Rum: 21
          </Text>
        </VStack>
      
    </Container>
  );
}
