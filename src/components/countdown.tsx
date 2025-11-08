"use client";

import { Box, Container, VStack, HStack, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

    const galleryImages = ["/images/1.webp", "/images/5.webp", "/images/3.webp"];

  // Ganti tanggal sesuai kebutuhan
  const targetDate = new Date("2025-02-14T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      minH="100vh"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={20}
      px={4}
    >
      <Container maxW="container.md">
        <VStack spacing={12} textAlign="center" color="gray.700">
          {/* Pesan Ucapan */}
          <Text
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.9"
            maxW="520px"
            fontStyle="italic"
            color="gray.700"
          >
            It will be a joy for us if you are still willing to give your blessing
            from afar. Thank you for all the words, prayers, and attention given.
          </Text>

          {/* Countdown */}
          <HStack
            spacing={{ base: 3, md: 6 }}
            justify="center"
            maxW="400px"
            w="full"
          >
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <VStack key={index} spacing={1} flex={1}>
                <Box
                  border="1px solid #4a4035"
                  borderRadius="md"
                  py={3}
                  px={4}
                  w="full"
                  bg="#f9f7f4"
                >
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    fontWeight="medium"
                    color="#4a4035"
                    fontStyle="'Playfair Display', serif"
                  >
                    {item.value.toString().padStart(2, "0")}
                  </Text>
                  <Text
                  fontSize="xs"
                  color="gray.600"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  {item.label}
                </Text>
                </Box>
              </VStack>
            ))}
          </HStack>

          {/* Signature */}
          <VStack spacing={3} mt={10}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              letterSpacing="1px"
              color="#1a1b1d"
              textTransform="uppercase"
            >
              Our Sincere,
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="light"
              fontStyle="italic"
              color="#2d2d2d"
            >
              Tiffany & Jared
            </Heading>

            <Text
              fontSize="2xl"
              color="gray.500"
              fontStyle="italic"
              letterSpacing="1.5px"
            >
              #TImetoshaRE
            </Text>
          </VStack>

          <Box w="100%" mt={8}>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              justify="center"
              align="center"
            >
              {galleryImages.map((src, index) => (
                <Box
                  key={index}
                  flex="1"
                  maxW={{ base: "100%", md: "300px" }}
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    w="100%"
                    h="250px"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
