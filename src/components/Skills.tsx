import {
    Box,
    Container,
    Flex,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Tooltip,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { FaAngular, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiGitlab, SiMongodb, SiMysql, SiNestjs, SiPostgresql, SiTypescript } from 'react-icons/si'
import { Skill } from '../types/Skill'
import { motion, isValidMotionProp } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface SkillCategory {
  title: string;
  description: string;
  icon: string;
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

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

// Animation styles
const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  animation: pulse 3s infinite;
`

const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  animation: float 2s ease-in-out infinite;
`

const glowAnimation = `
  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(49, 151, 149, 0.2); }
    50% { box-shadow: 0 0 20px rgba(49, 151, 149, 0.4); }
    100% { box-shadow: 0 0 5px rgba(49, 151, 149, 0.2); }
  }
  animation: glow 3s infinite;
`

export function Skills() {
  const { t } = useTranslation('skills');
  
  const bgGradient = useColorModeValue(
    'linear(to-br, white, primary.50 80%)',
    'linear(to-br, gray.900, primary.900 80%)'
  )
  
  const headingColor = useColorModeValue('primary.600', 'primary.300')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const section = document.getElementById('skills')
    if (section) observer.observe(section)
    
    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  // Skill categories with translations
  const skillCategories = [
    {
      title: t('skillCategories.communication.title'),
      description: t('skillCategories.communication.description'),
      icon: 'chat'
    },
    {
      title: t('skillCategories.problemSolving.title'),
      description: t('skillCategories.problemSolving.description'),
      icon: 'lightbulb'
    },
    {
      title: t('skillCategories.frontend.title'),
      description: t('skillCategories.frontend.description'),
      icon: 'monitor'
    },
    {
      title: t('skillCategories.backend.title'),
      description: t('skillCategories.backend.description'),
      icon: 'server'
    },
    {
      title: t('skillCategories.projectManagement.title'),
      description: t('skillCategories.projectManagement.description'),
      icon: 'project'
    },
    {
      title: t('skillCategories.softwareDevelopment.title'),
      description: t('skillCategories.softwareDevelopment.description'),
      icon: 'agile'
    }
  ];

  const getSkillVariants = (index: number) => {
    return {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        transition: { 
          delay: index * 0.1,
          duration: 0.5
        } 
      }
    }
  }
  
  const getCategoryVariants = (index: number) => {
    return {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          delay: index * 0.2,
          duration: 0.5
        } 
      }
    }
  }

  return (
    <Box 
      id="skills" 
      position="relative"
      bgGradient={bgGradient}
      overflow="hidden">
      {/* Abstract background shapes */}
      <Box
        position="absolute"
        top="-50px"
        left="-50px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="primary.50"
        opacity={0.4}
        filter="blur(40px)"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      />
      <Box
        position="absolute"
        bottom="-80px"
        right="-80px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="accent.50"
        opacity={0.3}
        filter="blur(60px)"
        zIndex={0}
        display={{ base: 'none', md: 'block' }}
      />
      
      <Container maxW={'7xl'} position="relative" zIndex={1}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'} mb={10} pt={16}>
          <ChakraBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : -20
            }}
            transition="all 0.5s"
          >
            <Heading 
              fontSize={'3xl'} 
              color={headingColor}
              bgGradient="linear(to-r, primary.500, accent.500)"
              bgClip="text"
              fontWeight="bold"
            >
              {t('title')}
            </Heading>
          </ChakraBox>
          <ChakraBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: isVisible ? 1 : 0, 
              y: isVisible ? 0 : -10
            }}
            transition="all 0.5s 0.2s"
          >
            <Text color={textColor}>
              {t('subtitle')}
            </Text>
          </ChakraBox>
        </Stack>

        <Stack spacing={14}>
          <Box>
            <ChakraBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20
              }}
              transition="all 0.5s 0.3s"
            >
              <Heading 
                fontSize={'2xl'} 
                mb={6} 
                textAlign={'center'} 
                color={headingColor}
              >
                {t('technicalSkills')}
              </Heading>
            </ChakraBox>
            <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 7 }} spacing={10}>
              {skills.map((skill, index) => (
                <ChakraBox
                  key={skill.name}
                  variants={getSkillVariants(index)}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  <SkillCard skill={skill} index={index} />
                </ChakraBox>
              ))}
            </SimpleGrid>
          </Box>

          <Box mt={12}>
            <ChakraBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 20
              }}
              transition="all 0.5s 0.4s"
            >
              <Heading 
                fontSize={'2xl'} 
                mb={10} 
                textAlign={'center'} 
                color={headingColor}
              >
                {t('professionalSkills')}
              </Heading>
            </ChakraBox>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {skillCategories.map((category, index) => (
                <ChakraBox
                  key={category.title}
                  variants={getCategoryVariants(index)}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  <SkillCategoryCard category={category} />
                </ChakraBox>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  const { t } = useTranslation('skills');
  const IconComponent = iconMap[skill.name] || FaReact
  
  const bgColor = useColorModeValue('white', 'gray.800')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')
  const iconColor = useColorModeValue('primary.500', 'primary.300')
  const hoverIconColor = useColorModeValue('accent.500', 'accent.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  const [isHovered, setIsHovered] = useState(false)
  
  // Add animated entry
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Tooltip label={t('tooltip', { skill: skill.name })} hasArrow placement="top">
      <Box
        maxW={'120px'}
        w={'full'}
        h={'120px'}
        bg={bgColor}
        boxShadow={'md'}
        rounded={'xl'}
        p={6}
        textAlign={'center'}
        borderWidth="1px"
        borderColor={borderColor}
        transition={'all 0.3s ease'}
        position="relative"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: 'xl',
          borderColor: 'primary.300',
          bg: hoverBgColor,
        }}
        sx={{
          animationDelay,
          ...(isHovered && { animation: pulseAnimation })
        }}
      >
        {/* Animated background on hover */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="primary.50"
          opacity={isHovered ? 0.1 : 0}
          transition="opacity 0.3s ease"
          zIndex={0}
          borderRadius="xl"
          sx={isHovered ? { animation: glowAnimation } : {}}
        />
        
        <Flex
          direction="column"
          align="center"
          justify="center"
          position="relative"
          zIndex={1}
        >
          <Icon 
            as={IconComponent} 
            w={10} 
            h={10} 
            mb={4} 
            color={isHovered ? hoverIconColor : iconColor} 
            transition="all 0.3s ease"
            sx={isHovered ? { animation: floatAnimation } : {}}
          />
          <Text 
            fontWeight={600}
            fontSize="sm"
            transition="all 0.3s ease"
            color={isHovered ? 'primary.600' : 'inherit'}
          >
            {skill.name}
          </Text>
        </Flex>
      </Box>
    </Tooltip>
  )
}

interface SkillCategoryCardProps {
  category: SkillCategory
}

function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const bgColor = useColorModeValue('white', 'gray.800')
  const hoverBgColor = useColorModeValue('gray.50', 'gray.700')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const titleColor = useColorModeValue('primary.600', 'primary.300')
  
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Box
      p={6}
      shadow={'md'}
      borderWidth={'1px'}
      borderColor={borderColor}
      bg={bgColor}
      rounded={'xl'}
      transition={'all 0.3s ease'}
      position="relative"
      overflow="hidden"
      height="100%"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      _hover={{
        transform: 'translateY(-5px) scale(1.02)',
        boxShadow: 'xl',
        borderColor: 'primary.300',
        bg: hoverBgColor
      }}
    >
      {/* Gradient border on hover */}
      <Box
        position="absolute"
        top="0"
        left="0"
        h="4px"
        w="0"
        bgGradient="linear(to-r, primary.400, accent.400)"
        transition="width 0.4s ease"
        style={{ width: isHovered ? '100%' : '0' }}
      />
      
      <Heading 
        fontSize={'xl'} 
        mb={3}
        color={titleColor}
        transition="color 0.3s ease"
      >
        {category.title}
      </Heading>
      
      <Text
        fontSize="sm"
        transition="color 0.3s ease"
      >
        {category.description}
      </Text>
      
      {/* Interactive "learn more" reveal */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="30px"
        bg={isHovered ? 'transparent' : 'linear-gradient(to top, white, transparent)'}
        _dark={{ bg: isHovered ? 'transparent' : 'linear-gradient(to top, gray.800, transparent)' }}
        transition="all 0.3s ease"
      />
    </Box>
  )
}