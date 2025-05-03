import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  chakra,
  shouldForwardProp,
  useColorModeValue,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaArrowRight, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export function Hero() {
  const { t } = useTranslation('hero');
  
  // Define background gradient for light and dark modes
  const heroBg = useColorModeValue(
    'linear(to-br, white, primary.50 80%)', // Light mode gradient
    'linear(to-br, #111827 0%, #1D4ED8 100%)' // Dark mode gradient (Deep blue to brighter blue)
  );

  // Define background colors for decorative circles
  const primaryCircleBg = useColorModeValue("primary.50", "#1E3A8A"); // Darker blue for dark mode
  const accentCircleBg = useColorModeValue("accent.50", "#064E3B"); // Darker accent for dark mode
  
  // Define text colors for dark mode
  const headingColorDark = "white";
  const textColorDark = "gray.300"; // Lighter gray for readability

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg={heroBg}
      py={{ base: 20, md: 32 }}
      as="section"
    >
      {/* Soft geometric background circles */}
      <Box
        position="absolute"
        top="-100px"
        left="-100px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg={primaryCircleBg}
        opacity={0.25}
        filter="blur(8px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-120px"
        right="-120px"
        w="500px"
        h="500px"
        borderRadius="full"
        bg={accentCircleBg}
        opacity={0.18}
        filter="blur(12px)"
        zIndex={0}
      />
      <Container maxW={'6xl'} position="relative" zIndex={1}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
        >
          <Stack spacing={8} maxW="2xl">
            <Stack spacing={4}>
              <Heading
                as="h1"
                size="4xl"
                fontWeight="bold"
                lineHeight="1.2"
                bgGradient="linear(to-r, primary.500, accent.500)"
                bgClip="text"
              >
                {t('title')}
              </Heading>
              <Flex align="center" gap={2}>
                <Icon as={FaCode} color="primary.500" _dark={{ color: "primary.300" }} />
                <Heading
                  as="h2"
                  size="2xl"
                  fontWeight="semibold"
                  color="gray.600"
                  _dark={{ color: headingColorDark }} // Use defined dark mode color
                >
                  {t('jobTitle')}
                </Heading>
              </Flex>
            </Stack>
            <Text
              fontSize="xl"
              color="gray.600"
              _dark={{ color: textColorDark }} // Use defined dark mode color
              maxW="2xl"
            >
              {t('description')}
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button
                  size="lg"
                  colorScheme="primary"
                  rightIcon={<FaArrowRight />}
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.2s"
                >
                  {t('buttons.contact')}
                </Button>
              </ScrollLink>
              <Stack direction="row" spacing={4}>
                <Button
                  as="a"
                  href="https://github.com/hoaduong345"
                  target="_blank"
                  size="lg"
                  variant="outline"
                  leftIcon={<FaGithub />}
                  colorScheme="primary"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition="all 0.2s"
                >
                  {t('buttons.github')}
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/hoa-truong-705156292/"
                  target="_blank"
                  size="lg"
                  variant="outline"
                  leftIcon={<FaLinkedin />}
                  colorScheme="primary"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition="all 0.2s"
                >
                  {t('buttons.linkedin')}
                </Button>
              </Stack>
            </Stack>
          </Stack>

          {/* 3D Card Effect */}
          <Box
            position="relative"
            display={{ base: 'none', md: 'block' }}
            w="400px"
            h="400px"
            transform="perspective(1000px) rotateY(15deg)"
            transition="transform 0.5s"
            _hover={{ transform: 'perspective(1000px) rotateY(0deg)' }}
          >
            <Box
              position="absolute"
              w="full"
              h="full"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              borderRadius="2xl"
              boxShadow="xl"
              p={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap={4}
              transform="translateZ(20px)"
              transition="all 0.3s ease"
            >
              <Box
                w="200px"
                h="200px"
                borderRadius="full"
                bgGradient={useColorModeValue(
                  "linear(to-br, primary.500, accent.500)",
                  "linear(to-br, primary.600, accent.600)"
                )}
                opacity={0.8}
                position="relative"
                overflow="hidden"
                boxShadow={useColorModeValue(
                  "0 8px 20px rgba(66, 133, 244, 0.3)",
                  "0 8px 20px rgba(59, 117, 217, 0.3)"
                )}
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  fontSize="6xl"
                  color="white"
                  opacity={0.9}
                >
                  <FaCode />
                </Box>
              </Box>
              <Text 
                fontSize="xl" 
                fontWeight="bold" 
                textAlign="center"
                color={useColorModeValue("gray.700", "gray.200")}
              >
                {t('cardText')}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
