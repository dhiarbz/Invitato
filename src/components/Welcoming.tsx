"use state";
import {useState, useEffect,useRef } from "react";
import { Box, VStack, Heading, Text, Button, HStack, Icon, useMediaQuery, Container, Grid, GridItem, SimpleGrid  } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaChevronDown,FaChevronUp,FaCalendarAlt, FaClock,FaMap, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const backgroundImages = [
  '/images/9.webp',
  '/images/1.webp',
  '/images/3.webp',
  '/images/11.webp',
  '/images/10.webp',
]
export default function Welcoming(){
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const countdownRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
      const interval = setInterval(()=> {
        setCurrentBgIndex((prevIndex)=> prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1);
      },5000);
      return () => clearInterval(interval);
    },[])
    const scrollToCountdown = () => {
        countdownRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      };
      
    return(
    <Box bg="#faf7f2" minH="100vh" overflow="hidden">
      {/* Hero Section */}
      <Box
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        overflow={"hidden"}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={currentBgIndex}
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgImage={`url('${backgroundImages[currentBgIndex]}')`}
                        bgSize="cover"
                        bgPosition="center"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale:1, transition: { duration: 8, ease: "easeOut" }}}
                        exit={{ opacity: 0, scale:1.1, transition: { duration: 5}}}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 10, ease: "linear" }}
                        z-index={1}
                    />
          </AnimatePresence>
        {/* Overlay */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="rgba(0,0,0,0.2)"
                    z-index={2}
                    _hover={{ bg: "rgba(0,0,0,0.25)" }}
                    transition="background 0.3s ease"
                />
          
        <VStack 
          spacing={6} 
          position="relative" 
          z-index={3} 
          color="white" 
          textAlign="center"
          px={4}
        >
          <Text
            fontSize="sm"
            letterSpacing="widest"
            textTransform="uppercase"
            fontWeight="light"
            textShadow="1px 1px 3px rgba(0,0,0,0.5)"
          >
            Wedding Announcement
          </Text>
          <Heading
            fontFamily="serif"
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="light"
            letterSpacing="wide"
            textShadow="2px 2px 6px rgba(0,0,0,0.6)"
          >
            TIFFANY & JARED
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontStyle="italic"
            fontWeight="medium"
            letterSpacing="0.1em"
            mt={2}
            textShadow="1px 1px 3px rgba(0,0,0,0.5)"
            color="rgba(255,255,255,0.95)"
          >
            #TImetoshaRE
          </Text>
          
          {/* Scroll to Begin Button */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={scrollToCountdown}
              variant="ghost"
              color="white"
              border="1px solid rgba(255,255,255,0.5)"
              borderRadius="full"
              px={8}
              py={6}
              fontWeight="light"
              letterSpacing="0.1em"
              textTransform="uppercase"
              fontSize="xs"
              _hover={{
                bg: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.8)",
                transform: "translateY(-2px)"
              }}
              _active={{
                transform: "translateY(0px)"
              }}
              transition="all 0.3s ease"
              rightIcon={<FaChevronDown />}
            >
              Scroll to Begin

            </Button>
          </MotionBox>
        </VStack>
      </Box>

    </Box>
    );
}