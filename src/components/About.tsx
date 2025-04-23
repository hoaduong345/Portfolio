import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Stack,
    Text
} from '@chakra-ui/react'

export function About() {
  return (
    <Container maxW={'7xl'} id="about" py={16}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'primary.400',
                zIndex: -1,
              }}>
              About Me
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            I'm a Full Stack Developer and Team Leader with expertise in building modern web applications,
            particularly E-commerce platforms and Booking Systems. My experience includes leading development
            teams and contributing directly to project implementation.
          </Text>
          <Text color={'gray.500'}>
            I excel in both frontend and backend development, using technologies like Angular, React, Node.js,
            and NestJS. My approach combines technical skills with strong communication abilities, allowing me
            to collaborate effectively with team members and stakeholders.
          </Text>
          <Text color={'gray.500'}>
            As a team leader, I focus on mentoring team members, conducting thorough code reviews, and ensuring
            project requirements are met with high-quality deliverables. I'm passionate about creating robust,
            user-friendly applications that solve real business problems.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Developer Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}