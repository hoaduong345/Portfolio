import { Button, HStack, Menu, MenuButton, MenuItem, MenuList, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common');
  const activeColor = useColorModeValue('primary.500', 'primary.300');
  const bgColor = useColorModeValue('primary.50', 'whiteAlpha.200');
  const hoverBgColor = useColorModeValue('primary.100', 'whiteAlpha.300');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton 
        as={Button} 
        variant="solid" 
        size="md" 
        rightIcon={<IoMdArrowDropdown />} 
        leftIcon={<IoLanguage color={activeColor} />}
        px={3}
        py={2}
        bg={bgColor}
        _hover={{ bg: hoverBgColor }}
        borderWidth="1px"
        borderColor={i18n.language === 'vi' ? 'primary.300' : activeColor}
        fontWeight="bold"
        color={activeColor}
        boxShadow="sm"
        borderRadius="md"
        transition="all 0.2s"
      >
        <Box as="span" fontWeight="bold">
          {i18n.language === 'vi' ? 'Tiếng Việt' : 'English'}
        </Box>
      </MenuButton>
      <MenuList minW="140px" shadow="lg" borderColor={activeColor} borderWidth="1px">
        <MenuItem 
          onClick={() => changeLanguage('en')}
          fontWeight={i18n.language === 'en' ? 'bold' : 'normal'}
          color={i18n.language === 'en' ? activeColor : 'inherit'}
          bg={i18n.language === 'en' ? bgColor : 'transparent'}
          _hover={{ bg: hoverBgColor }}
        >
          <Box mr={2}>🇺🇸</Box>
          <Text>{t('languageSwitcher.en')}</Text>
        </MenuItem>
        <MenuItem 
          onClick={() => changeLanguage('vi')}
          fontWeight={i18n.language === 'vi' ? 'bold' : 'normal'}
          color={i18n.language === 'vi' ? activeColor : 'inherit'}
          bg={i18n.language === 'vi' ? bgColor : 'transparent'}
          _hover={{ bg: hoverBgColor }}
        >
          <Box mr={2}>🇻🇳</Box>
          <Text>{t('languageSwitcher.vi')}</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}