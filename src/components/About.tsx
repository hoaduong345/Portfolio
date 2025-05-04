import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./About.css";

// Add ChakraBox for animations
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function About() {
  const { t } = useTranslation('about');
  const [isLeaderActive, setIsLeaderActive] = useState(false);
  const leaderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Add IntersectionObserver for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Handle mouse move for leader element hover effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (leaderRef.current) {
      const rect = leaderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      leaderRef.current.style.setProperty("--mouse-x", `${x}px`);
      leaderRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Toggle leader content visibility
  const toggleLeaderContent = () => {
    setIsLeaderActive(!isLeaderActive);
  };

  // Background color based on color mode - synchronized with Hero section
  const bgColor = useColorModeValue(
    'linear(to-br, white, primary.50 80%)',
    'linear(to-br, gray.900, primary.900 80%)'
  );

  // New heading color variables for consistency
  const headingColor = useColorModeValue("primary.600", "primary.300");

  return (
    <Box id="about" bgGradient={bgColor}>
      <Container maxW={"7xl"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={8}
          pt={16}
        >
          <ChakraBox
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : -20,
            }}
            transition="all 0.5s"
          >
            <Heading
              fontSize={"3xl"}
              fontWeight={600}
              bgGradient="linear(to-r, primary.500, accent.500)"
              bgClip="text"
              color={headingColor}
            >
              {t('title')}
            </Heading>
          </ChakraBox>
          <ChakraBox
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : -10,
            }}
            transition="all 0.5s 0.2s"
          >
            <Text 
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {t('subtitle')}
            </Text>
          </ChakraBox>
        </Stack>

        {/* Leader Interactive Element - Moved to the top */}
        <div
          className={`leader-container ${isLeaderActive ? "active" : ""}`}
          ref={leaderRef}
          onMouseMove={handleMouseMove}
          onClick={toggleLeaderContent}
        >
          <h3 className="leader-title">
            <span className="leader-icon">🚀</span>
            {t('leaderSection.title')}
          </h3>
          <div className="leader-content">
            <Text mb={4}>
              {t('leaderSection.paragraph1')}
            </Text>
            <Text mb={4}>
              {t('leaderSection.paragraph2')}
            </Text>
            <div className="leader-traits">
              <span className="leader-trait">{t('leaderSection.traits.trait1')}</span>
              <span className="leader-trait">{t('leaderSection.traits.trait2')}</span>
              <span className="leader-trait">{t('leaderSection.traits.trait3')}</span>
              <span className="leader-trait">{t('leaderSection.traits.trait4')}</span>
              <span className="leader-trait">{t('leaderSection.traits.trait5')}</span>
            </div>

            <Flex className="leader-cta" mt={5} justify="center">
              <div className="leader-image-text">{t('leaderSection.cta')}</div>
            </Flex>
          </div>
        </div>

        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
          direction={{ base: "column", md: "row" }}
        ></Stack>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              {t('mainContent.paragraph1')}
            </Text>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              {t('mainContent.paragraph2')}
            </Text>
            <Text color={useColorModeValue("gray.600", "gray.400")}>
              {t('mainContent.paragraph3')}
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              className="leader-image-container"
            >
              <div className="leader-image-overlay">
                <div className="leader-image-text">{t('imageText')}</div>
              </div>
            </Box>
          </Flex>
      </Container>
    </Box>
  );
}
