"use client";

import { useState, useEffect } from "react";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import LeftSection from "../components/LeftSection";
import WeddingInvitation from "../components/RightSection";
import WelcomeMessage from "../components/secondPage";
import BrideAndGroom from "../components/BrideGroom";
import Quote from "../components/quote";
import PlaceTime from "../components/placeTime";
import WeddingGift from "../components/weddingGift";
import LiveStreaming from "../components/liveStreaming";
import GettingMarried from "../components/watchVideo";
import Wishes from "../components/wishes";
import Countdown from "../components/countdown";
// import Gallery from "./gallery";
import Footer from "../components/footer";


export default function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isClient, setIsClient] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  }, []);

  if(!isClient)return null;

  if (isMobile) {
    return (
      <Box w="100%" minH="100vh" overflow="auto">
        <WeddingInvitation />
      </Box>
    );
  }

  return (
    <Flex h="100vh" w="100vw" direction={{ base: "column", md: "row" }}>
      {/* Kolom Kiri (tetap) */}
      <Box
        position={{ base: "relative", md: "fixed" }}
        top={{ base: "auto", md: "0" }}
        left={{ base: "auto", md: "0" }}
        w={{ base: "100%", md: "67%" }}
        flex={3}
        h={{ base: "50vh", md: "100vh" }}
        bgImage="url('/images/2.webp')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        color="white"
        flexDir="column"
        // justifyContent="center"
        px={{ base: 6, md: 12 }}
        zIndex={1}
      >
        <Box
        position={"absolute"}
        top={0}
        left={0}
        w={"100%"}
        h={"100%"}
        bg="rgba(0, 0, 0, 0.45)"
        zIndex={0}
        />
        <Box position={"relative"} zIndex={1} >
        <LeftSection />
        </Box>
      </Box>

      {/* Kolom Kanan (scrollable) */}
      <Box
        flex={1}
        overflowY="auto"
        minH="100vh"
        ml={{ base: 0, md: "67%" }}
        position="relative"
        zIndex={2}
      >
        <WeddingInvitation />
      </Box>
    </Flex>
  );
}