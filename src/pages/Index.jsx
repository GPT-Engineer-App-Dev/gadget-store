import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    description: "Latest model with advanced features",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    description: "High performance laptop for professionals",
    image: "/images/laptop.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$199",
    description: "Stay connected on the go",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Headphones",
    price: "$149",
    description: "Noise-cancelling over-ear headphones",
    image: "/images/headphones.jpg",
  },
  {
    id: 5,
    name: "Camera",
    price: "$499",
    description: "Capture your moments in high definition",
    image: "/images/camera.jpg",
  },
  {
    id: 6,
    name: "Tablet",
    price: "$299",
    description: "Portable and powerful tablet",
    image: "/images/tablet.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Hero Section */}
      <Box bg="gray.100" p={10} textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="xl" mb={6}>
          Your one-stop shop for the latest electronics
        </Text>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </Box>

      {/* Featured Products */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={6}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.slice(0, 3).map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text fontSize="lg" color="teal.600" mb={2}>
                  {product.price}
                </Text>
                <Text>{product.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Latest Arrivals */}
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={6}>
          Latest Arrivals
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.slice(3).map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text fontSize="lg" color="teal.600" mb={2}>
                  {product.price}
                </Text>
                <Text>{product.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box bg="gray.200" p={4} textAlign="center">
        <Flex justify="center" mb={4}>
          <Link to="/about">
            <Button variant="link" mx={2}>
              About Us
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="link" mx={2}>
              Contact
            </Button>
          </Link>
        </Flex>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;