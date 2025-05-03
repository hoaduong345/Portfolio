import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export function Motivation() {
  const { t } = useTranslation('motivation');
  
  // Match the exact same background color as other components
  const bgColor = useColorModeValue("white", "#1a1a1a");
  const paragraphColor = useColorModeValue("gray.600", "gray.300");
  const accentColor = "teal.400"; 
  
  return (
    <Container maxW={"7xl"} id="motivation" bg={bgColor}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        mb={8}
        textAlign="center"
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
      
      <VStack spacing={6} align="stretch" py={{ base: 10, md: 14 }}>
        {/* Card with motivation content */}
        <Box
          position="relative"
          p={8}
          borderRadius="lg"
          boxShadow="md"
          bg={useColorModeValue("white", "gray.800")}
        >
          {/* Left quote mark */}
          <Box position="absolute" top={8} left={8} color={accentColor} fontSize="4xl">
            <FaQuoteLeft />
          </Box>
          
          {/* Content with padding for quote marks */}
          <Box px={12} pt={12} pb={12}>
            {/* Introduction italicized */}
            <Text fontStyle="italic" fontSize="lg" mb={6} color={accentColor}>
              {t('paragraphs.intro')}
            </Text>

            {/* Main paragraphs */}
            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.background')}
            </Text>

            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.experience')}
            </Text>

            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.passion')}
            </Text>

            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.strengths')}
            </Text>

            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.learning')}
            </Text>

            <Text fontSize="md" mb={4} color={paragraphColor}>
              {t('paragraphs.closing')}
            </Text>

            {/* Thank you italicized */}
            <Text fontStyle="italic" fontSize="lg" mt={6} color={accentColor}>
              {t('paragraphs.thank')}
            </Text>
          </Box>

          {/* Right quote mark */}
          <Box position="absolute" bottom={8} right={8} color={accentColor} fontSize="4xl">
            <FaQuoteRight />
          </Box>
        </Box>
      </VStack>
    </Container>
  );
}