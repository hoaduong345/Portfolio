import React, { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  IconButton,
  useColorMode,
  Container,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll'

const NavLink = ({ children, to }: { children: React.ReactNode, to: string }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    activeClass="active"
  >
    <Button
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      variant="ghost"
    >
      {children}
    </Button>
  </ScrollLink>
)

const Links = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
]

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex={100}
      bg={useColorModeValue(
        scrolled ? 'white' : 'transparent',
        scrolled ? 'gray.800' : 'transparent'
      )}
      boxShadow={scrolled ? 'sm' : 'none'}
      transition="background-color 0.3s, box-shadow 0.3s"
    >
      <Container maxW={'container.xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontWeight="bold" fontSize="xl">DH</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}
