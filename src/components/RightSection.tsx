"use client";

import { useState, useEffect } from "react";
import Welcoming from "./Welcoming";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

export default function RightSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [audioPlay, setaudioPlay] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

    const handleOpenInvitation = () => {
      setIsOpen(true);
      setaudioPlay(true);
    }

  const weddingDate = new Date("2025-06-15T14:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return (
      <Box
        minH="100vh"
        bgImage="url('/images/1.webp')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.3)"
        />

        <VStack
          spacing={6}
          textAlign="center"
          position="relative"
          zIndex="1"
          color="white"
        >
          <Text
            fontSize="sm"
            letterSpacing="widest"
            textTransform="uppercase"
            fontWeight="medium"
          >
            Wedding Announcement
          </Text>

          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            fontFamily="serif"
            fontWeight="semibold"
          >
            TIFFANY & JARED
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontStyle="italic"
            color="rgba(255,255,255,0.9)"
          >
            #TImetoshaRE
          </Text>

          <Button
            size="xs"
            bg="white"
            color="#4a4035"
            border="1px solid black"
            px={12}
            py={4}
            _hover={{ bg: "#4a4035", color: "white" }}
            transition="all 0.3s"
            onClick={() => setIsOpen(true)}
          >
            Open
          </Button>
        </VStack>
      </Box>
    );
  };
}
