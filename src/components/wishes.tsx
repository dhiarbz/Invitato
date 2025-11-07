import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Wishes() {
  const [form, setForm] = useState({
    name: "",
    relationship: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Thank you for your prayers and wishes!");
    setForm({ name: "", relationship: "", message: "" });
  };

  return (
    <Container
      maxW="container.sm"
      h="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#f9f6f2"
      p={16}
    >
        <VStack as="form" spacing={5} onSubmit={handleSubmit}>
          <Heading
            as="h2"
            fontSize={{ base: "sm", md: "3xl" }}
            fontStyle="italic"
            fontWeight={"normal"}
          >
            Prayers & Wishes
          </Heading>

          <Text fontSize="md" color="gray.700" align={"center"} fontStyle={"italic"}>
            Please leave your sincere prayers and wishes to us and our family:
          </Text>

          <Input
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            borderColor="#1a1b1d"
            focusBorderColor="gray.600"
          />

          <Input
            placeholder="The Relationship"
            name="relationship"
            value={form.relationship}
            onChange={handleChange}
            borderColor="#1a1b1d"
            focusBorderColor="gray.600"
          />

          <Textarea
            placeholder="Prayers & Wishes"
            name="message"
            value={form.message}
            onChange={handleChange}
            borderColor="#1a1b1d"
            focusBorderColor="gray.600"
            rows={4}
          />
        <Box w={"100"} justifyContent={"flex-end"} display={"flex"}>
          <Button
            type="submit"
            bg="#b8a48a"
            color="white"
            borderRadius={"none"}
            justifyItems={"flex-end"}
            border={"0.5px solid #1a1b1d"}
            _hover={{ bg: "#a89278" }}
            fontStyle="italic"
            px={8}
          >
            Submit
          </Button>
        </Box>
        </VStack>
    </Container>
  );
}
