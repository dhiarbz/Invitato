"use client";
import {useState} from "react";
import { Box, Container, Heading, Image, Text, Button, Flex, Link } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

 const slides = [
    {
      date: "3 February 2023",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin malesuada sapien, sit amet sodales ex sagittis quis.",
    },
    {
      date: "12 March 2023",
      text: "Suspendisse facilisis mi volutpat urna pulvinar, quis aliquet dui lobortis. Sed egestas consequat risus, eu mollis est tincidunt accumsan.",
    },
    {
      date: "25 April 2023",
      text: "Vivamus vehicula, leo sed bibendum tincidunt, mi ipsum sodales risus, in porttitor nulla arcu a urna.",
    },
  ];

export default function GettingMarried() {
    const [currentIndex, setcurrentIndex] = useState(0);

    const handlePrev = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Fungsi untuk tombol next
  const handleNext = () => {
    setcurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container
      maxW="container.md"
      py={16}
      textAlign="center"
      fontFamily="butler, sans-serif"
      minH="100vh"
    >
      {/* Judul */}
      <Heading as="h1" size="xl" mb={6} fontWeight={"medium"} fontFamily="italic">
        Tiffany & Jared are <br /> Getting Married!
      </Heading>

      {/* Foto */}
      <Box display="flex" justifyContent="center" mb={6}>
        <Image
          src="/images/9.webp" // ganti dengan path gambarmu di folder public
          alt="Couple"
          borderRadius="none"
          boxShadow="md"
          maxW="300px"
        />
      </Box>

      {/* Tombol Video */}
      <Link
        href="https://youtu.be/imq9Sea2uq0"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
        textDecoration="underline"
        color="black"
      >
        Watch Our Video
      </Link>

      {/* Tanggal */}
      <Text
        mt={6}
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="md"
        fontFamily={"italic"}
      >
        {slides[currentIndex].date}
      </Text>

      {/* Deskripsi */}
      <Text mt={4} fontSize="md" lineHeight="tall" px={4} transition="all 0.3s">
        {slides[currentIndex].text}
      </Text>

      {/* Navigasi */}
      <Flex justifyContent="center" gap={2} mt={4}>
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
            px={6}
            py={2}
          leftIcon={<FaArrowLeft />}
          onClick={handlePrev}
        >
        </Button>
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
            px={6}
            py={2}
          rightIcon={<FaArrowRight />}
          onClick={handleNext}
        >
        </Button>
      </Flex>
    </Container>
  );
}
