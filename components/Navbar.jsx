import Link from 'next/link';
import { Flex, Box, useColorModeValue, HStack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg={useColorModeValue('white.100', 'white.900')} boxShadow="lg" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box fontSize="3xl" color="tomato" fontWeight="bold">
            <Link href="/" paddingLeft="2">Houmn't</Link>
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Box>
              <Link href="/search?purpose=for-rent" passHref>For Rent</Link>
            </Box>
            <Box>
              <Link href="/search?purpose=for-sale" passHref>For Sale</Link>
            </Box>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;