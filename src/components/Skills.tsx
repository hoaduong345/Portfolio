import {
    Box,
    Container,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { FaAngular, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiGitlab, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiTypescript } from 'react-icons/si'
import { Skill } from '../types/Skill'

// Map skill names to their corresponding icons
const iconMap: { [key: string]: any } = {
  React: FaReact,
  Node: FaNodeJs,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Angular: FaAngular,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Docker: FaDocker,
  Git: FaGitAlt,
  GitHub: FaGithub,
  GitLab: SiGitlab,
  NestJS: SiNestjs
}

// Skills data based on resume
const skills: Skill[] = [
  { name: 'Angular', icon: 'angular' },
  { name: 'React', icon: 'react' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Node.js', icon: 'node' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'GitLab', icon: 'gitlab' }
]

interface SkillCategory {
  title: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Communication',
    description: 'Possess strong communication and interpersonal skills, a positive and collaborative attitude. Able to integrate seamlessly into diverse teams and foster strong relationships among team members.'
  },
  {
    title: 'Problem-solving',
    description: 'Demonstrated ability to effectively solve problems. Experienced in developing projects from initial requirements gathering to incorporating client feedback throughout the development process.'
  },
  {
    title: 'Frontend',
    description: 'Skilled in utilizing HTML & CSS and leveraging current popular frameworks, including Angular and React, for web development.'
  },
  {
    title: 'Backend',
    description: 'Back-end developer proficient in building robust and scalable applications using Node.js and NestJS. Expertise in developing RESTful APIs and integrating with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Experience with ORMs like TypeORM and Prisma.'
  },
  {
    title: 'Project Management',
    description: 'Proficient in project management workflows using Git platforms such as Github, Gitea, and Gitlab. Leverage existing CI/CD pipelines for streamlined deployment and testing processes.'
  }
]

export function Skills() {
  return (
    <Box py={16} id="skills">
      <Container maxW={'7xl'}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10}>
          <Heading fontSize={'3xl'}>My Skills</Heading>
          <Text color={'gray.600'}>
            Technologies and tools that I use to bring products to life
          </Text>
        </Stack>

        <Stack spacing={10}>
          <Box>
            <Heading fontSize={'2xl'} mb={6} textAlign={'center'}>Technical Skills</Heading>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} spacing={10}>
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </SimpleGrid>
          </Box>

          <Box mt={12}>
            <Heading fontSize={'2xl'} mb={6} textAlign={'center'}>Professional Skills</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {skillCategories.map((category) => (
                <SkillCategoryCard key={category.title} category={category} />
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = iconMap[skill.name] || FaReact
  
  return (
    <Box
      maxW={'120px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      rounded={'lg'}
      p={6}
      textAlign={'center'}
      transition={'transform 0.3s'}
      _hover={{
        transform: 'translateY(-5px)',
      }}>
      <Icon as={IconComponent} w={10} h={10} mb={4} color={'primary.500'} />
      <Text fontWeight={600}>{skill.name}</Text>
    </Box>
  )
}

interface SkillCategoryCardProps {
  category: SkillCategory
}

function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  return (
    <Box
      p={5}
      shadow={'md'}
      borderWidth={'1px'}
      bg={useColorModeValue('white', 'gray.800')}
      rounded={'md'}>
      <Heading fontSize={'xl'} mb={2}>{category.title}</Heading>
      <Text>{category.description}</Text>
    </Box>
  )
}