import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation('about');
  const [isLeaderActive, setIsLeaderActive] = useState(false);
  const leaderRef = useRef<HTMLDivElement>(null);

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

  return (
    <Box id="about" bgGradient={bgColor}>
      <Container maxW={"7xl"}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
          mb={8}
          textAlign="center"
          pt={16} /* Thay thế padding bên ngoài bằng padding-top cho phần nội dung */
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "primary.400",
              zIndex: -1,
            }}
          >
            {t('title')}
          </Text>
        </Heading>

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
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text color={"gray.500"}>
              {t('mainContent.paragraph1')}
            </Text>
            <Text color={"gray.500"}>
              {t('mainContent.paragraph2')}
            </Text>
            <Text color={"gray.500"}>
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
        </Stack>
      </Container>
    </Box>
  );
}
