import { Container, VStack, Heading, Box, Image, Text, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Welcome to Electronics Store</Heading>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
          <Image src="https://via.placeholder.com/600x300" alt="Featured Product" mb={4} />
          <Heading as="h3" size="md" mb={2}>Featured Product</Heading>
          <Text mb={2}>Check out our latest and greatest product, now available at a special price!</Text>
          <Text fontWeight="bold" mb={4}>$499</Text>
          <Button colorScheme="teal">Shop Now</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;