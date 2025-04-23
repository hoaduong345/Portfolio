import {
    Badge,
    Box,
    Container,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { Project } from '../types/Project'

// Project data from resume
const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce and Booking System',
    description: 'A comprehensive platform that combines e-commerce functionality with a booking system. Led a team of 5 members, contributed to development, and provided mentorship to team members.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Angular', 'NestJS', 'GraphQL', 'REST API', 'MySQL', 'Vendure', 'Agile', 'Scrum'],
    duration: 'October 2024 - Present',
    role: 'Team Leader & Software Engineer',
    responsibilities: [
      'Contributed to project development by directly participating in the process and prioritizing user experience improvements',
      'Distributed tasks among team members for each sprint',
      'Collaborated with the team to brainstorm and propose development directions',
      'Provided mentorship and guidance to new team members',
      'Conducted comprehensive code and logic reviews to maintain quality'
    ]
  },
  {
    id: 2,
    title: 'Blockchain Developer Tool',
    description: 'Implemented a utility to parse input, validate its structure, and convert it into a well-formed JSON object which is then passed to an SDK to generate executable script blocks for blockchain automation software.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Thirdweb', 'Node.js', 'Angular', 'JSON', 'Gitea', 'GitHub', 'Agile', 'Scrum'],
    duration: 'July 2024 - October 2024',
    role: 'Full Stack Developer',
    responsibilities: [
      'Developed utility for parsing and validating blockchain data structures',
      'Created JSON processing pipeline for automation scripts',
      'Built front-end interfaces with Angular',
      'Integrated with blockchain SDKs for script generation'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Built an e-commerce platform with comprehensive features. Responsible for receiving tasks from project manager, analyzing requirements, identifying solutions, and executing tasks.',
    image: 'https://images.unsplash.com/photo-1586880244406-8b75b676d394?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Vendure', 'Angular', 'NestJS', 'GraphQL', 'REST API', 'MySQL', 'Gitea', 'GitHub', 'Agile', 'Scrum'],
    duration: 'February 2024 - July 2024',
    role: 'Full Stack Developer',
    responsibilities: [
      'Analyzed requirements and identified solutions',
      'Built frontend components with Angular',
      'Developed backend APIs with NestJS',
      'Integrated with database systems',
      'Collaborated with project manager on implementation approach'
    ]
  }
]

export function Projects() {
  return (
    <Box py={16} id="projects">
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>My Projects</Heading>
          <Text color={'gray.600'}>
            Professional projects I've worked on
          </Text>
        </Stack>

        <Stack spacing={10}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  
  return (
    <Box
      w={'full'}
      bg={bgColor}
      boxShadow={'xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={8}>
        <Box 
          w={{ base: 'full', md: '300px' }}
          h={{ base: '200px', md: '250px' }}
          bg={'gray.100'}
          pos={'relative'}>
          <Image
            src={project.image}
            objectFit="cover"
            w="full"
            h="full"
            alt={project.title}
            rounded={'md'}
          />
        </Box>
        <Stack flex={1} spacing={5}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {project.title}
          </Heading>

          <HStack>
            <Badge colorScheme="blue" px={2} py={1}>
              {project.role}
            </Badge>
            <Badge colorScheme="green" px={2} py={1}>
              {project.duration}
            </Badge>
          </HStack>

          <Text color={'gray.500'}>
            {project.description}
          </Text>

          <Box>
            <Text fontWeight={600} mb={2}>Responsibilities:</Text>
            <Box as="ul" pl={4}>
              {project.responsibilities?.map((responsibility, index) => (
                <Box as="li" key={index} mb={1}>
                  <Text color={'gray.600'}>{responsibility}</Text>
                </Box>
              ))}
            </Box>
          </Box>

          <Stack direction={'row'} spacing={2} flexWrap="wrap">
            {project.tags?.map((tag) => (
              <Badge key={tag} px={2} py={1} bg="primary.50" fontWeight={'400'} color="primary.800">
                {tag}
              </Badge>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}