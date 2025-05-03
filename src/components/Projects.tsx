import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  chakra,
  shouldForwardProp,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { Project } from "../types/Project";
import { motion, isValidMotionProp } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { getProjectsData } from "./projects";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function Projects() {
  const { t, i18n } = useTranslation("projects");
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Lấy dữ liệu dự án từ helper function
  useEffect(() => {
    try {
      setIsLoading(true);
      const data = getProjectsData();
      setProjects(data);
    } catch (error) {
      console.error("Error loading projects:", error);
    } finally {
      setIsLoading(false);
    }
  }, [i18n.language]); // Cập nhật khi ngôn ngữ thay đổi

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Background gradient for projects section synchronized with Hero
  const bgGradient = useColorModeValue(
    'linear(to-br, white, primary.50 80%)',
    'linear(to-br, gray.900, primary.900 80%)'
  );

  const headingColor = useColorModeValue("primary.600", "primary.300");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box id="projects" position="relative" bgGradient={bgGradient}>
      {/* Abstract background shapes for visual interest */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="accent.50"
        opacity={0.3}
        filter="blur(40px)"
        zIndex={0}
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="400px"
        h="400px"
        borderRadius="full"
        bg="primary.50"
        opacity={0.2}
        filter="blur(60px)"
        zIndex={0}
        display={{ base: "none", md: "block" }}
      />

      <Container maxW={"7xl"} position="relative" zIndex={1}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={10}
          pt={16} /* Thay thế padding bên ngoài bằng padding-top cho phần nội dung */
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
              color={headingColor}
              bgGradient="linear(to-r, primary.500, accent.500)"
              bgClip="text"
              fontWeight="bold"
            >
              {t("title")}
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
            <Text color={textColor}>{t("subtitle")}</Text>
          </ChakraBox>
        </Stack>

        <Stack spacing={10}>
          {isLoading
            ? // Hiển thị skeleton khi đang tải dữ liệu
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <Box
                    key={`skeleton-${index}`}
                    bg={useColorModeValue("white", "gray.800")}
                    p={6}
                    rounded={"xl"}
                    boxShadow="md"
                  >
                    <Stack
                      direction={{ base: "column", md: "row" }}
                      spacing={8}
                    >
                      <Skeleton
                        height="250px"
                        width={{ base: "full", md: "300px" }}
                        borderRadius="md"
                      />
                      <Stack flex={1} spacing={5}>
                        <Skeleton height="30px" width="70%" />
                        <HStack>
                          <Skeleton height="24px" width="100px" />
                          <Skeleton height="24px" width="120px" />
                        </HStack>
                        <SkeletonText
                          mt="4"
                          noOfLines={3}
                          spacing="4"
                          skeletonHeight="4"
                        />
                        <Skeleton height="24px" width="40%" />
                        <SkeletonText
                          mt="4"
                          noOfLines={4}
                          spacing="4"
                          skeletonHeight="3"
                        />
                        <Stack direction="row" flexWrap="wrap" spacing={2}>
                          {[1, 2, 3, 4].map((i) => (
                            <Skeleton key={i} height="20px" width="80px" />
                          ))}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Box>
                ))
            : // Hiển thị các dự án khi đã tải xong
              projects.map((project, index) => (
                <ChakraBox
                  key={project.id}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : index % 2 === 0 ? -50 : 50,
                    scale: isVisible ? 1 : 0.95,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.2,
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </ChakraBox>
              ))}
        </Stack>
      </Container>
    </Box>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation("projects");
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  // Đảm bảo rằng project có tất cả thuộc tính cần thiết
  const safeProject = {
    ...project,
    title: project.title || "Project Title",
    description: project.description || "",
    role: project.role || "Role",
    duration: project.duration || "",
    tags: project.tags || [],
    responsibilities: project.responsibilities || [],
  };

  return (
    <Box
      w={"full"}
      bg={bgColor}
      boxShadow={isHovered ? "xl" : "md"}
      rounded={"xl"}
      p={6}
      overflow={"hidden"}
      borderWidth="1px"
      borderColor={isHovered ? "primary.300" : borderColor}
      transition="all 0.3s ease"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transform={isHovered ? "translateY(-8px)" : "none"}
    >
      {/* Animated border effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        height="4px"
        bgGradient="linear(to-r, primary.400, accent.400)"
        width={isHovered ? "100%" : "0%"}
        transition="width 0.4s ease"
      />

      <Stack direction={{ base: "column", md: "row" }} spacing={8}>
        <Box
          w={{ base: "full", md: "300px" }}
          h={{ base: "200px", md: "250px" }}
          pos={"relative"}
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={safeProject.image || "https://via.placeholder.com/800x500"}
            objectFit="cover"
            w="full"
            h="full"
            alt={safeProject.title}
            transition="transform 0.5s ease"
            transform={isHovered ? "scale(1.05)" : "scale(1)"}
            fallback={<Skeleton height="100%" width="100%" />}
          />
          {/* Image overlay on hover */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="rgba(0,0,0,0.5)"
            opacity={isHovered ? 1 : 0}
            transition="opacity 0.3s ease"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button
              colorScheme="primary"
              leftIcon={<FaArrowRight />}
              onClick={() => setIsExpanded(!isExpanded)}
              opacity={isHovered ? 1 : 0}
              transform={isHovered ? "translateY(0)" : "translateY(20px)"}
              transition="all 0.3s ease"
            >
              {t("viewProject")}
            </Button>
          </Box>
        </Box>
        <Stack flex={1} spacing={5}>
          <Heading
            fontSize={"2xl"}
            fontFamily={"body"}
            position="relative"
            display="inline-block"
            transition="color 0.3s ease"
            color={isHovered ? "primary.500" : "inherit"}
            _dark={{ color: isHovered ? "primary.300" : "inherit" }}
          >
            {safeProject.title}
            {/* Animated underline effect */}
            <Box
              position="absolute"
              bottom="-2px"
              left="0"
              height="2px"
              bg="primary.500"
              width={isHovered ? "100%" : "0%"}
              transition="width 0.3s ease"
            />
          </Heading>

          <HStack>
            <Badge
              colorScheme="blue"
              px={2}
              py={1}
              boxShadow={
                isHovered ? "0 0 10px rgba(49, 130, 206, 0.3)" : "none"
              }
              transition="all 0.3s ease"
            >
              {safeProject.role}
            </Badge>
            {safeProject.duration && (
              <Badge
                colorScheme="green"
                px={2}
                py={1}
                boxShadow={
                  isHovered ? "0 0 10px rgba(72, 187, 120, 0.3)" : "none"
                }
                transition="all 0.3s ease"
              >
                {safeProject.duration}
              </Badge>
            )}
          </HStack>

          <Text color={"gray.500"}>{safeProject.description}</Text>

          {safeProject.responsibilities.length > 0 && (
            <Box>
              <Text fontWeight={600} mb={2}>
                {t("responsibilities")}
              </Text>
              <Box as="ul" pl={4}>
                {safeProject.responsibilities.map((responsibility, idx) => (
                  <ChakraBox
                    as="li"
                    key={idx}
                    mb={1}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isExpanded ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
                    }
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    whileHover={{ x: 3 }}
                  >
                    <Text color={"gray.600"} _dark={{ color: "gray.400" }}>
                      {responsibility}
                    </Text>
                  </ChakraBox>
                ))}
              </Box>
            </Box>
          )}

          {safeProject.tags.length > 0 && (
            <Stack direction={"row"} spacing={2} flexWrap="wrap">
              {safeProject.tags.map((tag, idx) => (
                <ChakraBox
                  key={`${tag}-${idx}`}
                  animate={
                    isHovered
                      ? {
                          y: [0, -3, 0],
                          transition: {
                            duration: 0.5,
                            delay: idx * 0.1,
                            repeat: 0,
                          },
                        }
                      : {}
                  }
                >
                  <Badge
                    px={2}
                    py={1}
                    bg={isHovered ? "primary.100" : "primary.50"}
                    color="primary.800"
                    fontWeight={isHovered ? "500" : "400"}
                    boxShadow={isHovered ? "0 2px 5px rgba(0,0,0,0.1)" : "none"}
                    transition="all 0.3s ease"
                  >
                    {tag}
                  </Badge>
                </ChakraBox>
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
