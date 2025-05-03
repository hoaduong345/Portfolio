import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    primary: {
      50: '#EBF8FF',
      100: '#D6EAFF',
      200: '#BFD9FF', 
      300: '#94C1FF',
      400: '#6AA5FF',
      500: '#4285F4',  // Main blue
      600: '#3B75D9',
      700: '#2E62C0',
      800: '#214B94',
      900: '#13366D',
    },
    secondary: {
      50: '#F5F7FA',
      100: '#EDF0F5',
      200: '#E2E7EF',
      300: '#CBD3E0',
      400: '#A8B4C8',
      500: '#7D8BA5',  // Main gray
      600: '#5C6B84',
      700: '#3D4A63',
      800: '#2A3447',
      900: '#1A202C',
    },
    accent: {
      50: '#F0FFF4',
      100: '#C6F6D5',
      200: '#9AE6B4',
      300: '#68D391',
      400: '#48BB78',
      500: '#38A169',  // Accent green
      600: '#2F855A',
      700: '#276749',
      800: '#22543D',
      900: '#1C4532',
    },
    gray: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontWeight: '600',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          color: 'white',
          _hover: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
          },
        },
        ghost: {
          color: 'primary.500',
          _hover: {
            bg: 'primary.50',
          },
        },
        link: {
          color: 'primary.500',
          _hover: {
            color: 'primary.600',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: 'secondary.900',
      },
    },
    Card: {
      baseStyle: {
        container: {
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
        }
      }
    },
    Tag: {
      baseStyle: {
        container: {
          bg: 'accent.100',
          color: 'accent.700',
        }
      }
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'secondary.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'gray.100' : 'secondary.900',
      },
      a: {
        color: props.colorMode === 'dark' ? 'accent.400' : 'primary.500',
        _hover: {
          color: props.colorMode === 'dark' ? 'accent.300' : 'primary.600',
        },
      },
    }),
  },
})

export default theme
