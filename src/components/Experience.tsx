import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface Experience {
  id: number;
  title: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  technologies: string[];
  teamSize?: string;
  customer?: string;
}

export function Experience() {
  const { t } = useTranslation("experience");
  const accentColor = useColorModeValue("primary.500", "primary.300");
  // Gradient background sync with Hero
  const bgGradient = useColorModeValue(
    'linear(to-br, white, primary.50 80%)',
    'linear(to-br, gray.900, primary.900 80%)'
  );

  // Ensure experiences is always an array with proper fallback
  const experiences =
    (t("experiences", { returnObjects: true }) as any[]) || [];

  return (
    <Box
      id="experience"
      position="relative"
      bgGradient={bgGradient}
    >
      <Container maxW={"container.xl"} position="relative" zIndex={1} pt={16}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={16}
        >
          <Heading fontSize={"4xl"} fontWeight={"bold"} color={accentColor}>
            {t("title")}
          </Heading>
          <Text
            fontSize={"xl"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {t("subtitle")}
          </Text>
        </Stack>

        <VStack spacing={0} align={"stretch"}>
          {Array.isArray(experiences) ? (
            experiences.map((experience, index) => (
              <Box key={experience.id} position="relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <Box
                    position="absolute"
                    left="24px"
                    top="64px"
                    bottom="-24px"
                    width="2px"
                    bg={"primary.500"}
                    zIndex={1}
                  />
                )}

                <ExperienceCard
                  experience={experience}
                  isLast={index === experiences.length - 1}
                />
              </Box>
            ))
          ) : (
            <Text>No experience data available</Text>
          )}
        </VStack>
      </Container>
    </Box>
  );
}

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

function ExperienceCard({ experience, isLast }: ExperienceCardProps) {
  const { t } = useTranslation("experience");
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex mb={isLast ? 0 : 12} alignItems="flex-start">
      {/* Timeline icon */}
      <Box position="relative" mr={6} mt={2} zIndex={2}>
        <Flex
          alignItems="center"
          justifyContent="center"
          rounded="full"
          bg={useColorModeValue("primary.50", "primary.900")}
          color={useColorModeValue("primary.500", "primary.200")}
          boxSize="50px"
          boxShadow="sm"
        >
          <Icon as={FaBriefcase} boxSize="20px" />
        </Flex>
      </Box>

      {/* Experience content */}
      <Box
        p={6}
        flex="1"
        shadow="md"
        borderWidth="1px"
        borderColor={borderColor}
        bg={bgColor}
        rounded="lg"
      >
        {/* Header with job title */}
        <Heading
          fontSize={"xl"}
          fontWeight={700}
          mb={3}
          textTransform="uppercase"
          borderBottom="2px solid"
          borderColor="primary.500"
          pb={2}
        >
          {experience.title}
        </Heading>

        {/* Company with icon */}
        <Flex alignItems="center" mb={5}>
          <Icon
            as={BiSolidBuildingHouse}
            mr={2}
            color="primary.500"
            boxSize="18px"
          />
          <Text color="primary.500" fontWeight={500} margin={0}>
            {experience.company}
          </Text>
        </Flex>

        {/* Location and Duration in a row with proper spacing */}
        <Flex
          w="100%"
          justifyContent="space-between"
          mb={6}
          alignItems="center"
        >
          {experience.location && (
            <Flex alignItems="center">
              <Icon as={FaMapMarkerAlt} mr={2} color="primary.500" />
              <Text fontSize="sm" margin={0}>
                {experience.location}
              </Text>
            </Flex>
          )}
          <Flex alignItems="center">
            <Icon as={FaCalendarAlt} mr={2} color="primary.500" />
            <Text fontSize="sm" margin={0}>{experience.duration}</Text>
          </Flex>
        </Flex>

        {/* Responsibilities */}
        <Box mb={6}>
          <Text fontWeight={600} fontSize="md" mb={3} color="primary.500">
            {t("responsibilities")}
          </Text>
          <VStack
            as="ul"
            spacing={2}
            align="stretch"
            pl={0}
            listStyleType="disc"
            ml={5}
          >
            {experience.description.map((desc, index) => (
              <Box as="li" key={index} pl={1}>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.700", "gray.300")}
                >
                  {desc}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Technologies */}
        <Box>
          <Text fontWeight={600} fontSize="md" mb={3} color="primary.500">
            {t("technologies")}
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                px={2}
                py={1}
                fontWeight={500}
                fontSize="xs"
                rounded="md"
                bg={useColorModeValue("primary.50", "primary.900")}
                color={useColorModeValue("primary.800", "primary.200")}
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
