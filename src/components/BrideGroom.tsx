"use client";

import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

export default function BrideAndGroom() {
  return (
    <Box
      id="bride-groom"
      minH="100vh"
      bg="#fefefe"
      color="#3b322b"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      px={6}
      py={20}
    >
      {/* Judul */}
      <Heading
        fontSize="lg"
        textTransform="uppercase"
        letterSpacing="2px"
        mb={8}
        textAlign="center"
      >
        Meet The Bride & Groom
      </Heading>

      {/* Foto Pasangan */}
      <Image
        src="/images/4.webp" // ganti dengan path gambar kamu
        alt="Bride and Groom"
        w={{ base: "80%", md: "400px" }}
        h="fit-content"
        objectFit="cover"
        mb={12}
      />

      {/* Bride */}
      <VStack spacing={1} mb={10}>
        <Heading
          fontSize="2xl"
          fontWeight="semibold"
          fontFamily="serif"
          letterSpacing="1px"
        >
          TIFFANY SMITH
        </Heading>
        <Text fontSize="sm" color="gray.600">
          @tiffanyinvitato
        </Text>
        <Text fontSize="md" fontStyle="italic" color="gray.600">
          The Daughter of
        </Text>
        <Text fontSize="md">Mr. Smith & Mrs. Bellyna</Text>
      </VStack>

      {/* Groom */}
      <VStack spacing={1}>
        <Heading
          fontSize="2xl"
          fontWeight="semibold"
          fontFamily="serif"
          letterSpacing="1px"
        >
          ROBIN JARED LUCAS
        </Heading>
        <Text fontSize="sm" color="gray.600">
          @jaredinvitato
        </Text>
        <Text fontSize="md" fontStyle="italic" color="gray.600">
          The Son of
        </Text>
        <Text fontSize="md">Mr. Lucas & Mrs. Anita</Text>
      </VStack>
    </Box>
  );
}
