import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('primary.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('primary.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export function Footer() {
  // Background matching with Hero theme gradient
  const bgColor = useColorModeValue('primary.600', 'gray.900');
  
  return (
    <Box
      bg={bgColor}
      color={useColorModeValue("white", "gray.200")}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© {new Date().getFullYear()} Hoa Van Truong. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/hoa-truong-705156292/'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'GitHub'} href={'https://github.com/hoaduong345'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}