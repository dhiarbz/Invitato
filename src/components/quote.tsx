"use client";
import { Box, Text, Container, VStack } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function Quote() {
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
        ease: easeOut, // use the imported easing function
      },
    },
  };

  return (
    <Container
      ref={ref}
      maxW="container.md"
      h={{ base: "auto", md: "40vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f9f7f4"
      px={{ base: 4, md: 8 }}
      py={{ base: 16, md: 0 }}
    >
      <MotionVStack
        spacing={5}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        textAlign="center"
        color="#1a1b1d"
      >
        {/* Ganti MotionIcon dengan MotionBox as FaQuoteLeft */}
        <MotionBox
          as={FaQuoteLeft}
          boxSize={{ base: 6, md: 8 }}
          color="rgb(153, 122, 94)"
          variants={itemVariants}
        />

        <MotionText
          fontStyle="italic"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="normal"
          variants={itemVariants}
          maxW="600px"
          px={{ base: 2, md: 0 }}
        >
          “And of His signs is that He created for you from yourselves mates
          that you may find tranquility in them, and He placed between you
          affection and mercy. Indeed in that are signs for a people who give
          thought.”
        </MotionText>

        <MotionText
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          mt={1}
          variants={itemVariants}
        >
          – Q.S. Ar-Rum: 21
        </MotionText>
      </MotionVStack>
    </Container>
  );
}
