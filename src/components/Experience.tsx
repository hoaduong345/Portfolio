import {
    Badge,
    Box,
    Container,
    Heading,
    HStack,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";

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

const experiences: Experience[] = [
  {
    id: 1,
    title: "Team Leader & Software Engineer",
    company: "E-commerce and Booking Platform",
    duration: "October 2024 - Present",
    description: [
      "Contributed to project development by directly participating in the process and prioritizing user experience improvements",
      "Distributed tasks among team members for each sprint",
      "Collaborated with the team to brainstorm and propose development directions for the system and its features within each sprint",
      "Provided mentorship and guidance to new team members, facilitating their onboarding and integration into the team",
      "Conducted comprehensive code and logic reviews to maintain code quality and ensure alignment with project requirements prior to deployment",
    ],
    technologies: [
      "Vendure",
      "NestJS",
      "GraphQL",
      "REST API",
      "MySQL",
      "Angular",
      "Gitea",
      "GitHub",
      "Agile Scrum",
    ],
    teamSize: "5 members",
    customer: "Security issue",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Blockchain Project",
    duration: "July 2024 - October 2024",
    description: [
      "Implemented a utility to parse input, validate its structure, and convert it into a well-formed JSON object",
      "Created data processing pipeline that passes structured data to an SDK to generate executable script blocks for the main automation software",
    ],
    technologies: ["Thirdweb", "Node.js", "Angular", "Gitea", "Agile Scrum"],
    teamSize: "4 members",
    customer: "Security issue",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "E-commerce Platform",
    duration: "February 2024 - July 2024",
    description: [
      "Received tasks from the project manager, analyzed requirements, identified solutions",
      "Confirmed approach with the project manager, and executed the tasks",
      "Built frontend components with Angular",
      "Developed backend APIs with NestJS and integrated with database systems",
    ],
    technologies: [
      "Vendure",
      "NestJS",
      "GraphQL",
      "REST API",
      "MySQL",
      "Angular",
      "Gitea",
      "GitHub",
      "Agile Scrum",
    ],
    teamSize: "3 members",
    customer: "Security issue",
  },
];

export function Experience() {
  return (
    <Box py={16} id="experience">
      <Container maxW={"7xl"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
        >
          <Heading fontSize={"3xl"}>Work Experience</Heading>
          <Text color={"gray.600"}>My professional journey so far</Text>
        </Stack>

        <VStack
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
          spacing={10}
          align={"stretch"}
        >
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Box
      p={6}
      shadow={"md"}
      borderWidth={"1px"}
      bg={useColorModeValue("white", "gray.800")}
      rounded={"md"}
      transition={"transform 0.3s"}
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Stack spacing={4}>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Heading fontSize={"xl"} mb={1}>
              {experience.title}
            </Heading>
            <Text fontWeight={600} color={"primary.500"}>
              {experience.company}
            </Text>
            {experience.location && (
              <Text color={"gray.500"} fontSize="sm">
                {experience.location}
              </Text>
            )}
          </Box>
          <Text fontWeight={600} color={"gray.500"}>
            {experience.duration}
          </Text>
        </HStack>

        {(experience.teamSize || experience.customer) && (
          <HStack flexWrap="wrap" spacing={4}>
            {experience.teamSize && (
              <Badge px={2} py={1} bg="blue.50" color="blue.800">
                Team: {experience.teamSize}
              </Badge>
            )}
            {experience.customer && (
              <Badge px={2} py={1} bg="gray.100" color="gray.800">
                Client: {experience.customer}
              </Badge>
            )}
          </HStack>
        )}

        <Box>
          <Text fontWeight={600} mb={2}>
            Responsibilities:
          </Text>
          <Box as="ul" pl={4} mb={4}>
            {experience.description.map((desc, index) => (
              <Box as="li" key={index} mb={2}>
                <Text color={"gray.600"}>{desc}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Text fontWeight={600} mb={2}>
            Technologies:
          </Text>
          <Stack direction={"row"} spacing={2} flexWrap="wrap">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                px={2}
                py={1}
                bg="primary.50"
                fontWeight={"400"}
                color="primary.800"
              >
                {tech}
              </Badge>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
