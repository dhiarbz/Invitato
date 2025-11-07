"use client";

import { Box, Container, SimpleGrid, Image, Heading, Text, VStack } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <Box bg="white" py={16} px={4}>
      <Container maxW="container.lg" textAlign="center">
        {/* Judul Halaman */}
        <VStack spacing={3} mb={10}>
          <Heading
            as="h2"
            fontFamily="'Playfair Display', serif"
            fontWeight="normal"
            fontSize={{ base: "2xl", md: "3xl" }}
            color="#2d2d2d"
          >
            Our Memories
          </Heading>
          <Text fontSize="md" color="gray.600" fontStyle="italic">
            Captured moments filled with love and laughter.
          </Text>
        </VStack>

        {/* Galeri Foto */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 3, md: 5 }}
        >
          {[
            "/gallery1.png",
            "/gallery2.png",
            "/gallery3.png",
          ].map((src, index) => (
            <Box
              key={index}
              overflow="hidden"
              borderRadius="md"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.02)", boxShadow: "md" }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                objectFit="cover"
                w="100%"
                h={{ base: "250px", md: "300px" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
