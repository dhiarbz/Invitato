"use state";
import {useState, useEffect } from "react";
import { Box, VStack, Heading, Text, Button, HStack, Icon, useMediaQuery, Container, Grid, GridItem, SimpleGrid  } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaHeart, FaChevronDown,FaChevronUp,FaCalendarAlt, FaClock,FaMap, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

interface InvitationCoverProps {
    onOpen: () => void;
}

export default function Welcoming({onOpen}: InvitationCoverProps){
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    return(
    <Box bg="#faf7f2" minH="100vh" overflow="hidden">
      {/* Hero Section */}
      <Box
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bgImage="url('/images/2.webp')"
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "rgba(0,0,0,0.4)",
        }}
      >
        <VStack spacing={6} position="relative" zIndex="1" color="white" textAlign="center">
          <Text
            fontSize="sm"
            letterSpacing="widest"
            textTransform="uppercase"
            fontWeight="light"
          >
            Wedding Announcement
          </Text>
          <Heading
            fontFamily="serif"
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="light"
            letterSpacing="wide"
          >
            TIFFANY & JARED
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="light" fontStyle="italic">
            June 15, 2025
          </Text>
          <Icon as={FaHeart} w={8} h={8} color="#c4967c" mt={4} />
          <VStack spacing={2} mt={8}>
            <Text fontSize="xs" textTransform="uppercase" letterSpacing="widest">
              Scroll to explore
            </Text>
            <Icon as={FaChevronDown} w={5} h={5} animation="bounce 2s infinite" />
          </VStack>
        </VStack>
      </Box>

      {/* Countdown Section */}
      <Container maxW="4xl" py={{ base: 10, md: 20 }}>
        <VStack spacing={{ base: 10, md: 20 }}>
          <Box textAlign="center">
            <Heading
              fontFamily="serif"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#4a4035"
              mb={6}
              fontWeight="light"
            >
              Counting Down to Our Big Day
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
              gap={6}
            >
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((item) => (
                <GridItem key={item.label}>
                  <VStack>
                    <Box
                      bg="white"
                      p={{ base: 4, md: 6 }}
                      borderRadius="xl"
                      w="full"
                      boxShadow="md"
                      border="1px solid #c4967c"
                    >
                      <Text
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        color="#4a4035"
                        fontFamily="serif"
                      >
                        {item.value}
                      </Text>
                    </Box>
                    <Text fontSize="sm" color="#8b7355" textTransform="uppercase">
                      {item.label}
                    </Text>
                  </VStack>
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* Event Details */}
          <Box w="full">
            <Heading
              fontFamily="serif"
              fontSize={{ base: "2xl", md: "3xl" }}
              color="#4a4035"
              textAlign="center"
              mb={10}
              fontWeight="light"
            >
              Event Details
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              {[
                {
                  title: "Holy Matrimony",
                  date: "Saturday, 15 June 2025",
                  time: "14:00 - 15:30",
                  location: "The Grand Ballroom\n123 Romance Street, Love City",
                },
                {
                  title: "Wedding Reception",
                  date: "Saturday, 15 June 2025",
                  time: "18:00 - 21:00",
                  location: "The Grand Ballroom\n123 Romance Street, Love City",
                },
              ].map((event) => (
                <Box
                  key={event.title}
                  bg="white"
                  p={{ base: 6, md: 8 }}
                  borderRadius="2xl"
                  boxShadow="xl"
                  border="1px solid #e8dcd0"
                >
                  <VStack spacing={4} align="start">
                    <Icon as={FaHeart} w={8} h={8} color="#c4967c" />
                    <Heading
                      fontFamily="serif"
                      fontSize={{ base: "xl", md: "2xl" }}
                      color="#4a4035"
                      fontWeight="light"
                    >
                      {event.title}
                    </Heading>
                    <Box h="1px" w="full" bg="#c4967c" opacity="0.3" />
                    <HStack>
                      <Icon as={FaCalendarAlt} color="#8b7355" />
                      <Text color="#6b5d52">{event.date}</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaClock} color="#8b7355" />
                      <Text color="#6b5d52">{event.time}</Text>
                    </HStack>
                    <HStack align="start">
                      <Icon as={FaMapMarkerAlt} color="#8b7355" mt={1} />
                      <Text color="#6b5d52" whiteSpace="pre-line">
                        {event.location}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Footer */}
          <Box bg="#4a4035" py={10} borderRadius="2xl" textAlign="center" color="white" w="full">
            <VStack spacing={3}>
              <Icon as={FaHeart} w={8} h={8} />
              <Heading
                fontFamily="serif"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="light"
              >
                Thank You
              </Heading>
              <Text fontSize="sm" opacity="0.8">
                We are grateful for your love and blessings
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
    );
}