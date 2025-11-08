"use client";

import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function BrideGroom() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants animasi fade up dengan custom delay
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: custom * 0.3, // delay per item
      },
    }),
  };

  return (
    <MotionBox
      ref={ref}
      id="bride-groom"
      minH="100vh"
      bg="#fefefe"
      color="#3b322b"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 6 }}
      py={{ base: 16, md: 20 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      {/* Judul */}
      <MotionHeading
        fontSize={{ base: "lg", md: "xl" }}
        textTransform="uppercase"
        letterSpacing="2px"
        mb={8}
        textAlign="center"
        custom={0}
        variants={fadeUp}
      >
        Meet The Bride & Groom
      </MotionHeading>

      {/* Foto Pasangan */}
      <MotionImage
        src="/images/4.webp"
        alt="Bride and Groom"
        width={{ base: "80%", md: "300px" }}
        height="auto"
        objectFit="cover"
        mb={12}
        borderRadius="lg"
        shadow="lg"
        custom={1}
        variants={fadeUp}
      />

      {/* Bride & Groom Info */}
      <VStack spacing={1} mb={10}>
        {/* Bride */}
        <MotionHeading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          fontFamily="serif"
          letterSpacing="1px"
          custom={2}
          variants={fadeUp}
          textAlign="center"
        >
          TIFFANY AURELIA SMITH
        </MotionHeading>

        <MotionText
          fontSize="sm"
          color="gray.600"
          custom={3}
          variants={fadeUp}
          textAlign="center"
        >
          @tiffanyinvitato
        </MotionText>

        <MotionText
          fontSize="md"
          fontStyle="italic"
          color="gray.600"
          custom={4}
          variants={fadeUp}
          textAlign="center"
          mt={2}
        >
          The Daughter of
        </MotionText>

        <MotionText
          fontSize="md"
          custom={5}
          variants={fadeUp}
          textAlign="center"
          mb={8}
        >
          Mr. Smith & Mrs. Bellyna
        </MotionText>

        {/* Groom */}
        <MotionHeading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          fontFamily="serif"
          letterSpacing="1px"
          custom={6}
          variants={fadeUp}
          textAlign="center"
          mt={{ base: 4, md: 0 }}
        >
          ROBIN JARED LUCAS
        </MotionHeading>

        <MotionText
          fontSize="sm"
          color="gray.600"
          custom={7}
          variants={fadeUp}
          textAlign="center"
        >
          @jaredinvitato
        </MotionText>

        <MotionText
          fontSize="md"
          fontStyle="italic"
          color="gray.600"
          custom={8}
          variants={fadeUp}
          textAlign="center"
          mt={2}
        >
          The Son of
        </MotionText>

        <MotionText fontSize="md" custom={9} variants={fadeUp} textAlign="center">
          Mr. Lucas & Mrs. Anita
        </MotionText>
      </VStack>
    </MotionBox>
  );
}
