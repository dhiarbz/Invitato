"use client";

import { Box, Container, Heading, Text, SimpleGrid, Image, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const images = [
  "/images/1.webp",
  "/images/5.webp", 
  "/images/3.webp",
  "/images/4.webp"
];

export default function WelcomeMessage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slidesToShow = useBreakpointValue({ base: 1, md: 3 });

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => 
      prev === images.length - (slidesToShow || 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - (slidesToShow || 1) : prev - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < (slidesToShow || 1); i++) {
      const index = (currentIndex + i) % images.length;
      visibleImages.push(images[index]);
    }
    return visibleImages;
  };

  return (
    <MotionBox
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#fefefe"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 16 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxW="container.md" textAlign="center" color="#4a4035">
        {/* HEADER */}
        <Text
          fontSize="sm"
          letterSpacing="0.1em"
          fontWeight="bold"
          textTransform="uppercase"
          mb={1}
        >
          Dear Mr–Mrs–Ms,
        </Text>
        <Text
          fontSize="sm"
          letterSpacing="0.1em"
          fontWeight="bold"
          textTransform="uppercase"
          mb={6}
        >
          Family & Friends
        </Text>

        <Heading
          fontFamily="serif"
          fontWeight="500"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={4}
          lineHeight="short"
        >
          Welcome to <br />
          Tiffany & Jared's <br />
          Wedding Website
        </Heading>

        <Text
          fontStyle="italic"
          fontSize="md"
          maxW="500px"
          mx="auto"
          color="gray.600"
          mb={10}
        >
          Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
        </Text>

        {/* CAROUSEL */}
        <Box position="relative" mb={10} overflow="hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <SimpleGrid
              key={currentIndex}
              as={motion.div}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              columns={{ base: 1, md: 3 }}
              spacing={4}
              justifyItems="center"
            >
              {getVisibleImages().map((src, index) => (
                <Image
                  key={`${currentIndex}-${index}`}
                  src={src}
                  alt={`Couple ${currentIndex + index + 1}`}
                  objectFit="cover"
                  borderRadius="md"
                  w="100%"
                  maxH="400px"
                  minH="300px"
                />
              ))}
            </SimpleGrid>
          </AnimatePresence>
        </Box>

        {/* NAVIGATION BUTTONS */}
        <HStack justify="center" spacing={4}>
          <IconButton
            aria-label="Previous"
            icon={<FaArrowLeft />}
            variant="outline"
            borderColor="#4a4035"
            color="#4a4035"
            _hover={{ bg: "#4a4035", color: "white" }}
            onClick={prevSlide}
          />
          <IconButton
            aria-label="Next"
            icon={<FaArrowRight />}
            variant="outline"
            borderColor="#4a4035"
            color="#4a4035"
            _hover={{ bg: "#4a4035", color: "white" }}
            onClick={nextSlide}
          />
        </HStack>
      </Container>
    </MotionBox>
  );
}