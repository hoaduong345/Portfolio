import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <Box py={16} id="contact">
      <Container maxW={"7xl"} py={10}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
        >
          <Heading fontSize={"3xl"}>Contact Me</Heading>
          <Text color={"gray.600"}>
            Feel free to reach out for opportunities or just to say hi
          </Text>
        </Stack>

        <Flex
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"xl"}
          rounded={"xl"}
        >
          <Box
            bg="primary.500"
            color="white"
            borderRadius={{ base: "xl xl 0 0", md: "xl 0 0 xl" }}
            p={8}
            w={{ base: "full", md: "350px" }}
          >
            <VStack spacing={5} align="flex-start">
              <Heading fontSize="2xl">Contact Information</Heading>
              <Text mt={4}>
                I'm currently open for freelance work, full-time positions, or
                just a friendly chat.
              </Text>

              <HStack spacing={4} align="flex-start">
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<MdEmail size="24px" />}
                />
                <VStack spacing={0} align="flex-start">
                  <Text fontWeight="bold">Email</Text>
                  <Link href="mailto:vanhoa284@gmail.com">
                    vanhoa284@gmail.com
                  </Link>
                </VStack>
              </HStack>

              <HStack spacing={4} align="flex-start">
                <IconButton
                  aria-label="phone"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<MdPhone size="24px" />}
                />
                <VStack spacing={0} align="flex-start">
                  <Text fontWeight="bold">Phone</Text>
                  <Text>0849888897</Text>
                </VStack>
              </HStack>

              <HStack spacing={4} align="flex-start">
                <IconButton
                  aria-label="location"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<MdLocationOn size="24px" />}
                />
                <VStack spacing={0} align="flex-start">
                  <Text fontWeight="bold">Location</Text>
                  <Text>Buon Ma Thuot, DakLak</Text>
                </VStack>
              </HStack>

              <HStack spacing={4} pt={8}>
                <IconButton
                  aria-label="linkedin"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<BsLinkedin size="24px" />}
                  as="a"
                  href="https://www.linkedin.com/in/hoa-truong-705156292/"
                  target="_blank"
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<BsGithub size="24px" />}
                  as="a"
                  href="https://github.com/hoaduong345"
                  target="_blank"
                />
              </HStack>
            </VStack>
          </Box>

          <Box p={8} width="full">
            {isSubmitted ? (
              <VStack spacing={4} align="center" h="100%" justify="center">
                <Heading
                  size="md"
                  color={useColorModeValue("primary.500", "primary.300")}
                >
                  Thanks for reaching out!
                </Heading>
                <Text>
                  I've received your message and will get back to you as soon as
                  possible.
                </Text>
                <Button
                  colorScheme="primary"
                  onClick={() => setIsSubmitted(false)}
                  mt={4}
                >
                  Send Another Message
                </Button>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson color="gray.500" />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail color="gray.500" />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={6}
                      resize="none"
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    colorScheme="primary"
                    bg="primary.500"
                    color="white"
                    _hover={{
                      bg: "primary.600",
                    }}
                    type="submit"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
