"use client";

import { useState, useEffect, useRef } from "react";
import welcoming from "./welcoming";
import secondPage from "./secondPage";
import BrideGroom from "./BrideGroom";
import quote from "./quote";
import placeTime from "./placeTime";
import weddingGift from "./weddingGift";
import liveStreaming from "./liveStreaming";
import watchVideo from "./watchVideo";
import wishes from "./wishes";
import countdown from "./countdown";
// import Gallery from "./gallery";
import footer from "./footer";

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
  Spinner,
  SimpleGrid,
  Image,
  IconButton,  Drawer,
  DrawerBody,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaChevronDown,
  FaVolumeMute, 
  FaVolumeUp, 
  FaBars,
} from "react-icons/fa";
import {easeInOut, motion} from "framer-motion";
import { audio } from "framer-motion/client";

const MotionButton = motion(Button);

export default function RightSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [audioPlay, setaudioPlay] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setisMuted] = useState(false);
  const { isOpen: isMenuOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState("welcoming");

  useEffect(() => {
    if (isOpen && currentPage === "welcoming") {
      const timer = setTimeout(() => {
        setCurrentPage("welcomeMessage");
      }, 4000); // 4 detik
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentPage]);

  const handleOpenInvitation = () => {
    setisLoading(true);

    setTimeout(()=>{
      setisLoading(false);
      setIsOpen(true);
      setaudioPlay(true);
    },2000);
  }

  const weddingDate = new Date("2025-06-15T14:00:00");

  useEffect(() => {
    if(audioPlay && audioRef.current){  
      const playAudio = async () => {
        try{
          await audioRef.current?.play();
        } catch (error){
          console.error("Error playing audioL",error);
        }
      };
      playAudio();
    }
    },[audioPlay]);

  const toggleMute = () => {
    if(audioRef.current){
      audioRef.current.muted = !audioRef.current.muted;
      setisMuted(audioRef.current.muted);
    }
  };

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
          bg="rgba(0,0,0,0.4)"
        />

        <VStack
          spacing={8}
          textAlign="center"
          position="relative"
          zIndex="1"
          color="white"
          w={"100%"}
          maxW={"90%"}
        >
          <Text
            fontSize="xs"
            letterSpacing="0.3em"
            textTransform="uppercase"
            fontWeight="300"
            opacity={0.9}
          >
            Wedding Announcement
          </Text>

          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontFamily="serif"
            fontWeight="400"
            letterSpacing="0.05em"
            textTransform={"uppercase"}
            lineHeight={1.1}
            textShadow={"2px 2px 4px rgba(0,0,0,0.3)"}
          >
            TIFFANY & JARED
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontStyle="italic"
            fontWeight={"medium"}
            letterSpacing={"0.1em"}
            mt={2}
            textShadow={"1px 1px 2px rgba(0,0,0,0.3)"}
            color="rgba(255,255,255,0.9)"
          >
            #TImetoshaRE
          </Text>

          <MotionButton
            size="xs"
            bg="white"
            color="#4a4035"
            border="0.5px solid black"
            px={12}
            py={4}
            _hover={{opacity: 0.8}}
            onClick={handleOpenInvitation}
            isLoading={isLoading}
            animate={{
               y: [0, -10, 0],
            }}
            transition={{
              duration: 7,
              repeat:Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Open
          </MotionButton>
        </VStack>
      </Box>
    );
  }

  return (
    <>
    <audio ref={audioRef} src="/music/lagu.mp3" loop preload="auto" >

    </audio>
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
    >
      <Welcoming />
      <secondPage />
      <BrideAndGroom />
      <Quote />
      <PlaceTime />
      <WeddingGift />
      <LiveStreaming />
      <GettingMarried />
      <Wishes />
      <Countdown/>
      {/* <Gallery/> */}
      <Footer /> 
    </motion.div>
    <Box
        position="fixed"
        bottom={5}
        left={5}
        display="flex"
        gap={3}
        zIndex={20}
      >

      {/* Tombol Menu Sidebar */}
      <IconButton
        aria-label="Open Menu"
        icon={<FaBars />}
        onClick={onOpen}
        colorScheme="whiteAlpha"
        variant="solid"
        bg="rgb(153, 122, 94)"
        color="rgba(255,255,255,0.7)"
        _hover={{ bg: "white", color:"rgba(212, 212, 212, 0.7)" }}
        borderRadius="full"
        boxShadow="md"
        size="sm"
      />

      {/* Tombol Mute/Unmute */}
      <IconButton
        aria-label="Toggle Sound"
        icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        onClick={toggleMute}
        colorScheme="whiteAlpha"
        variant="solid"
        bg="rgb(153, 122, 94)"
        color="rgba(255,255,255,0.7)"
        _hover={{ bg: "white", color:"rgba(212, 212, 212, 0.7)" }}
        borderRadius="full"
        boxShadow="md"
        size="sm"
      />
      </Box>
      
      {/* Sidebar Menu */}
      <Drawer isOpen={isMenuOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#f8f5f2">
          <DrawerHeader fontFamily="serif" color="#4a4035" alignItems="end">
             #TImetoshaRE
          </DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4} mt={4}>
              <Button variant="ghost" onClick={onClose}>
                🕊️ Home
              </Button>
              <Button variant="ghost" onClick={onClose}>
                💍 Our Story
              </Button>
              <Button variant="ghost" onClick={onClose}>
                📅 Event
              </Button>
              <Button variant="ghost" onClick={onClose}>
                ✉️ RSVP
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
