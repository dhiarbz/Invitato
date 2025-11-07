import { Box, Text, Container, VStack, Button, Heading } from "@chakra-ui/react";

export default function LiveStreaming() {
  return (
    <Box
      minH="40vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/images/8.webp')"
      bgSize="cover"
      bgPosition="center"
      py={10}
    >
      <Container maxW="container.md">
        <VStack 
          spacing={0.5} 
          textAlign="center"
          width="100%"
        >
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="normal"
            fontFamily="serif"
            letterSpacing="2px"
            color="#fefefe"
          >
            Live Streaming
          </Heading>
          
          <Button
            variant="outline"
            borderWidth={0.5}
            borderColor="#4a4035"
            color="#1a1b1d"
            size="sm"
            bg={"#f9f7f4"}
            borderRadius="none"
            fontFamily="serif"
            fontSize="sm"
            fontWeight="thin"
            letterSpacing="1px"
            _hover={{opacity: 0.8}}
            transition="all 0.3s ease"
            px={8}
            py={4}
            // onClick={}
          >
            Open via Youtube
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}