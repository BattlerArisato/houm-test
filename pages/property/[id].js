import { Box, Flex, Badge, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import { baseURL, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/Imagescrollbar';

const PropertyDetails = ({ propertyDetails: {price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => {
  return (
    <Box maxW="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="red">
            {isVerified && 'Verified'}
          </Badge>
          <Flex align="center" w="300px" justifyContent="space-between" color="blue.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm" textTransform="uppercase" ml="2">
            <FaBed /> {rooms} rooms &bull; <FaBath /> {baths} baths &bull; <BsGridFill /> {millify(area)} sqft
          </Flex>
          <Box ml="10">
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Box>
        <Box mt="1" as="h4" lineHeight="tight" noOfLines={1}>
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">{title}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold" as="span" color="gray.600" fontSize="sm">
            {millify(price)}{rentFrequency && `/${rentFrequency}`}
          </Text>
        </Box>
        <Box mt="10" w="500px" borderTop="1px" borderBottom="1px" borderColor="gray.100">
          <Text fontSize="lg" fontWeight="semibold" color="gray.600">
            Description
          </Text>
        </Box>
        <Box mt="10">
          <Text lineHeight="2" color="gray.600">{description}</Text>
        </Box>
        <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between" mt="10">
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities.length && <Text fontSize="2xl" fontWeight="black" mt="5">Ammenities</Text>}
            <Flex flexWrap="wrap">
              {amenities.map((item) => (
                item.amenities.map((amenity) => (
                  <Text
                    fontWeight="bold"
                    color="red.400"
                    fontSize="l" p="2"
                    bg="gray.200" m="1"
                    borderRadius="5"
                    key={amenity.text}
                  >
                    {amenity.text}
                  </Text>
                ))
              ))}
            </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseURL}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data
    }
  }
}