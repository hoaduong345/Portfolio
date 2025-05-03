import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import { contactConfig } from "./contact";
import { useContactForm } from "./contactForm";

export function Contact() {
  const { t } = useTranslation(["common"]);
  const toast = useToast();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    formValues,
    errors,
    formStatus,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  // Handle success submit with toast notification
  React.useEffect(() => {
    if (formStatus.isSubmitted && !formStatus.isError) {
      toast({
        title: t("contact.successTitle"),
        description: formStatus.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else if (formStatus.isSubmitted && formStatus.isError) {
      onOpen(); // Open error dialog
    }
  }, [
    formStatus.isSubmitted,
    formStatus.isError,
    formStatus.message,
    toast,
    t,
    onOpen,
  ]);

  // Get background gradient matching Hero section
  const bgGradient = useColorModeValue(
    'linear(to-br, white, primary.50 80%)',
    'linear(to-br, gray.900, primary.900 80%)'
  );

  return (
    <Box id="contact" bgGradient={bgGradient}>
      <Container maxW={"7xl"} pt={16}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
        >
          <Heading fontSize={"3xl"} color={useColorModeValue("white", "white")}>{t("contact.title")}</Heading>
          <Text color={useColorModeValue("primary.50", "gray.300")} fontWeight="medium">{t("contact.subtitle")}</Text>
        </Stack>

        <Flex
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("primary.50", "gray.800")}
          boxShadow={"xl"}
          rounded={"xl"}
          overflow="hidden"
        >
          <Box
            bg="primary.500"
            color="white"
            borderRadius={{ base: "xl xl 0 0", md: "xl 0 0 xl" }}
            p={8}
            w={{ base: "full", md: "350px" }}
            position="relative"
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage: 'radial-gradient(circle at 30% 70%, primary.400, transparent 40%)',
              opacity: 0.2,
              zIndex: 0,
            }}
          >
            <VStack spacing={5} align="flex-start" position="relative" zIndex={1}>
              <Heading fontSize="2xl">{t("contact.info")}</Heading>
              <Text mt={4}>{t("contact.availability")}</Text>

              <HStack spacing={4} align="center" >
                <IconButton
                  aria-label="email"
                  variant="ghost"
                  size="md"
                  color="white"
                  _hover={{ bg: "primary.600" }}
                  icon={<MdEmail size="24px" />}
                />
                <VStack spacing={0} align="center">
                  <Link href={`mailto:${contactConfig.email}`}>
                    {contactConfig.email}
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
                <VStack spacing={0} align="center">
                  <Text margin={0}>{contactConfig.phone}</Text>
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
                  <Text margin={0}>{contactConfig.location}</Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>

          <Box p={8} width="full" bg={useColorModeValue("white", "gray.800")}>
            {formStatus.isSubmitted && !formStatus.isError ? (
              <VStack spacing={4} align="center" h="100%" justify="center">
                <Heading
                  size="md"
                  color={useColorModeValue("primary.500", "primary.300")}
                >
                  {t("contact.thankYou")}
                </Heading>
                <Text>{formStatus.message}</Text>
                <Button colorScheme="primary" onClick={resetForm} mt={4}>
                  {t("contact.sendAnother")}
                </Button>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={5}>
                  <FormControl isInvalid={!!errors.name} isRequired>
                    <FormLabel color={useColorModeValue("primary.700", "primary.200")}>{t("contact.yourName")}</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson color={useColorModeValue("primary.500", "primary.300")} />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        placeholder={t("contact.namePlaceholder")}
                        borderColor={useColorModeValue("primary.200", "primary.700")}
                        _hover={{ borderColor: useColorModeValue("primary.300", "primary.600") }}
                        _focus={{ borderColor: "primary.500", boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email} isRequired>
                    <FormLabel color={useColorModeValue("primary.700", "primary.200")}>{t("contact.email")}</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail color={useColorModeValue("primary.500", "primary.300")} />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        placeholder={t("contact.emailPlaceholder")}
                        borderColor={useColorModeValue("primary.200", "primary.700")}
                        _hover={{ borderColor: useColorModeValue("primary.300", "primary.600") }}
                        _focus={{ borderColor: "primary.500", boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel color={useColorModeValue("primary.700", "primary.200")}>{t("contact.phone")}</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <MdPhone color={useColorModeValue("primary.500", "primary.300")} />
                      </InputLeftElement>
                      <Input
                        type="tel"
                        name="phone"
                        value={formValues.phone || ""}
                        onChange={handleChange}
                        placeholder={t("contact.phonePlaceholder")}
                        borderColor={useColorModeValue("primary.200", "primary.700")}
                        _hover={{ borderColor: useColorModeValue("primary.300", "primary.600") }}
                        _focus={{ borderColor: "primary.500", boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message} isRequired>
                    <FormLabel color={useColorModeValue("primary.700", "primary.200")}>{t("contact.message")}</FormLabel>
                    <Textarea
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      placeholder={t("contact.messagePlaceholder")}
                      rows={6}
                      resize="none"
                      borderColor={useColorModeValue("primary.200", "primary.700")}
                      _hover={{ borderColor: useColorModeValue("primary.300", "primary.600") }}
                      _focus={{ borderColor: "primary.500", boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)` }}
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
                    isLoading={formStatus.isSubmitting}
                    loadingText={t("contact.sending")}
                  >
                    {t("contact.sendMessage")}
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Flex>
      </Container>

      {/* Error Dialog */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("contact.errorTitle")}
            </AlertDialogHeader>

            <AlertDialogBody>
              {formStatus.message || t("contact.errorMessage")}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {t("common.close")}
              </Button>
              <Button colorScheme="primary" onClick={resetForm} ml={3}>
                {t("contact.tryAgain")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
