"use client";
import { Box, Text, Container, VStack, Icon, Heading } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

export default function placeTime() {
  return (
    <Container
      maxW="container.md"
      h="30vh"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      bg="#fefefe"
      py={4}
      px={8}
      color={"#1a1b1d"}
    >
        <Box mb={10} textAlign="left" width={"100%"}>
                <Heading
                  fontSize="2xl"
                  fontWeight="bold"
                  letterSpacing="1px"
                  py={1}
                >
                  PLACE & TIME
                </Heading>
                <Text fontSize="xl" color="#1a1b1d" fontStyle="italic" fontWeight={"normal"} py={2}>
                  Holy Matrimony
                </Text>
                <Text fontSize="md" fontStyle="italic" color="#1a1b1d" py={1}>
                  Date: Monday, 24 February 2024
                </Text>
                <Text fontSize="md" fontStyle="italic" color="#1a1b1d" py={1}>
                  Time: 10.00 WIB
                </Text>
            </Box>
    </Container>
  );
}
