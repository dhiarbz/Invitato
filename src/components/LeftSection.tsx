"use client";

import { Heading, Text, Box, VStack} from "@chakra-ui/react"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionVStack = motion(VStack);

export default function LeftSection(){
    return (
       <VStack
      align="flex-start"
      justify="space-between"
      spacing={6}
      h="100%"
      py={{ base: 10, md: 20 }}
    >
      {/* Bagian atas */}
      <Box>
        <MotionText
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="bold"
          letterSpacing="widest"
          textTransform={"uppercase"}
          initial={{ opacity:0, y:20}}
          animate={{ opacity:1, y:0}}
          transition={{ delay:0.3, duration:0.8}}
        >
          WEDDING ANNOUNCEMENT
        </MotionText>
      </Box>

      {/* Nama besar di tengah */}
      <Box>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          lineHeight="1.1"
          fontWeight="bold"
        >
          TIFFANY & JARED
        </Heading>
      </Box>

      {/* Kutipan di bawah */}
      <MotionBox 
      maxW={{ base: "90%", md: "80%" }} 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}>
        <Text
          fontStyle="italic"
          fontSize={{ base: "sm", md: "lg" }}
          lineHeight="1.8"
        >
          "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
          diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
          mencintaimu dengan sederhana; dengan isyarat yang tak sempat
          disampaikan awan kepada hujan yang menjadikannya tiada."
        </Text>
        <Text mt={2} fontSize={{ base: "sm", md: "md" }} fontStyle="italic">
          — Sapardi Djoko Damono
        </Text>
      </MotionBox>
    </VStack>
    );
}