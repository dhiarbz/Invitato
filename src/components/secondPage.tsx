"use client";

import { useState, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, useInView, easeInOut } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const images = [
  "/images/1.webp",
  "/images/6.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/8.webp",
];

export default function SecondPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slidesToShow = useBreakpointValue({ base: 1, md: 3 }) || 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Mendapatkan gambar yang akan ditampilkan (slidesToShow gambar)
  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < slidesToShow; i++) {
      const idx = (currentIndex + i) % images.length;
      visibleImages.push({ src: images[idx], idx });
    }
    return visibleImages;
  };

  // Variants animasi teks untuk stagger effect
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.6, ease: easeInOut }, // use imported easeInOut function
    }),
  };

  return (
    <MotionBox
      ref={ref}
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#fefefe"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 16 }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container maxW="container.md" textAlign="center" color="#4a4035">
        {/* HEADER */}
        <MotionText
          fontSize="sm"
          letterSpacing="0.1em"
          fontWeight="bold"
          textTransform="uppercase"
          mb={1}
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Dear Mr–Mrs–Ms,
        </MotionText>

        <MotionText
          fontSize="sm"
          letterSpacing="0.1em"
          fontWeight="bold"
          textTransform="uppercase"
          mb={6}
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Family & Friends
        </MotionText>

        <MotionHeading
          fontFamily="serif"
          fontWeight="500"
          fontSize={{ base: "2xl", md: "3xl" }}
          mb={4}
          lineHeight="short"
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Welcome to <br />
          Tiffany & Jared's <br />
          Wedding Website
        </MotionHeading>

        <MotionText
          fontStyle="italic"
          fontSize="md"
          maxW="500px"
          mx="auto"
          color="gray.600"
          mb={10}
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Together with joyful hearts and the grace of God, we joyfully announce
          the upcoming of our marriage.
        </MotionText>

        {/* CAROUSEL */}
        <Box position="relative" mb={10} overflow="hidden">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={4}
          >
            {getVisibleImages().map(({ src, idx }, i) => {
              // Untuk 3 gambar tengah, gambar kedua (index 1) sebagai highlight
              const isCenter = slidesToShow === 3 ? i === 1 : true;
              return (
                <MotionBox
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: isCenter ? 1.15 : 0.9,
                    opacity: isCenter ? 1 : 0.7,
                    y: isCenter ? -10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  cursor="pointer"
                >
                  <Image
                    src={src}
                    alt={`Wedding photo ${idx + 1}`}
                    objectFit="cover"
                    // borderRadius="xl"
                    shadow={isCenter ? "2xl" : "md"}
                    w={{
                      base: "280px",
                      md: isCenter ? "500px" : "300px",
                    }}
                    h={{ base: "320px", md: "350px" }}
                    loading="lazy"
                  />
                </MotionBox>
              );
            })}
          </Box>
        </Box>

        {/* NAVIGATION BUTTONS */}
        <HStack justify="center" spacing={4}>
          <IconButton
            aria-label="Previous slide"
            icon={<FaArrowLeft />}
            variant="outline"
            borderColor="#4a4035"
            color="#4a4035"
            _hover={{ bg: "#4a4035", color: "white" }}
            onClick={prevSlide}
            size="lg"
          />
          <IconButton
            aria-label="Next slide"
            icon={<FaArrowRight />}
            variant="outline"
            borderColor="#4a4035"
            color="#4a4035"
            _hover={{ bg: "#4a4035", color: "white" }}
            onClick={nextSlide}
            size="lg"
          />
        </HStack>
      </Container>
    </MotionBox>
  );
}
