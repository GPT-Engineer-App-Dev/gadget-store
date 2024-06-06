import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex align="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
          Electronics Store
        </Link>
        <Spacer />
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
        <Link as={RouterLink} to="/about" color="white" mx={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" color="white" mx={2}>
          Contact
        </Link>
        <Button colorScheme="teal" variant="outline" ml={4}>
          Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;