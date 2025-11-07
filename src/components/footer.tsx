import { Box, Container, VStack, Text, HStack, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="#f9f6f2"
      borderTop="1px solid #e2e8f0"
      py={8}
    >
      <Container maxW="container.md">
        <VStack spacing={1} textAlign="center" color="#4a4035">
          {/* Invitato */}
          <Text
            fontSize="xl"
            fontWeight="bold"
            letterSpacing="2px"
            fontFamily="serif"
          >
            Invitato
          </Text>

          {/* Created with Love */}
          <Text
            fontSize="sm"
            color="#1a1b1d"
            fontStyle="italic"
          >
            Created with Love by Invitato
          </Text>

          {/* Song Credit */}
          <Text
            fontSize="sm"
            color="#1a1b1d"
          >
            Song by So Far, So Good - Don Williams
          </Text>

          {/* Copyright */}
          <Text
            fontSize="xs"
            color="#1a1b1d"
            mt={1}
          >
            © 2025 Tiffany & Jared. All Rights Reserved
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}