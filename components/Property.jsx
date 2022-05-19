import Link from 'next/link';
import Image from 'next/image';
import { Box, Badge, Text } from '@chakra-ui/react';
import millify from 'millify';

import defaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }}) => {
    return (
      <Link href={`/property/${externalID}`} passHref>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" cursor="pointer">
          <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt="house" />  
          <Box p="6" >
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="red">
                {isVerified && 'Verified'}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {rooms} rooms &bull; {baths} baths
              </Box>
            </Box>  
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              >
              {title}
            </Box>  
            <Box>
              {millify(price)}
              <Box as="span" color="gray.600" fontSize="sm">
                  <Text fontWeight="bold">{rentFrequency && `/${rentFrequency}`}</Text>
              </Box>
            </Box>  
          </Box>
        </Box>
      </Link>
    );
}

export default Property;