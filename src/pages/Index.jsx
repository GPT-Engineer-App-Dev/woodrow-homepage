import { Box, Flex, Heading, Text, Image, VStack, SimpleGrid } from '@chakra-ui/react';
import { FaMedal, FaImage } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h1" size="2xl" mb={2}>Woodrow Wilson</Heading>
        <Text fontSize="lg">28th President of the United States</Text>
      </Flex>
      <VStack spacing={8}>
        <Box w="full" bg="gray.100" p={5} borderRadius="lg">
          <Heading as="h2" size="xl" mb={3}><FaMedal /> Achievements</Heading>
          <Text fontSize="md">
            Woodrow Wilson was awarded the Nobel Peace Prize in 1919 for his efforts in ending the First World War and establishing the League of Nations to ensure lasting peace.
          </Text>
        </Box>
        <Box w="full" bg="gray.100" p={5} borderRadius="lg">
          <Heading as="h2" size="xl" mb={3}><FaImage /> Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="path/to/image1.jpg" alt="Image 1" boxSize="200px" />
            <Image src="path/to/image2.jpg" alt="Image 2" boxSize="200px" />
            <Image src="path/to/image3.jpg" alt="Image 3" boxSize="200px" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;