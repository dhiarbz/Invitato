"use client";

import { Box, Text, Container, VStack, Heading } from "@chakra-ui/react";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function PlaceTime() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <Box
      ref={ref}
      w="100%"
      minH={{ base: "auto", md: "40vh" }}
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      bg="#fefefe"
      color="#1a1b1d"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 16 }}
    >
      <MotionVStack
        align="flex-start" // 👉 memastikan teks rata kiri
        spacing={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        maxW="lg"
        textAlign="left"
      >
        <MotionHeading
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          letterSpacing="1px"
          py={1}
          variants={itemVariants}
        >
          PLACE & TIME
        </MotionHeading>

        <MotionText
          fontSize={{ base: "lg", md: "xl" }}
          fontStyle="italic"
          fontWeight="normal"
          py={2}
          variants={itemVariants}
        >
          Holy Matrimony
        </MotionText>

        <MotionText
          fontSize={{ base: "md", md: "md" }}
          fontStyle="italic"
          py={1}
          variants={itemVariants}
        >
          Date: Monday, 24 February 2024
        </MotionText>

        <MotionText
          fontSize={{ base: "md", md: "md" }}
          fontStyle="italic"
          py={1}
          variants={itemVariants}
        >
          Time: 10.00 WIB
        </MotionText>
      </MotionVStack>
    </Box>
  );
}
