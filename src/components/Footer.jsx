import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={4} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={4}>
        <Text>&copy; {new Date().getFullYear()} Electronics Store. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2}><FaFacebook /></Link>
          <Link href="#" mx={2}><FaTwitter /></Link>
          <Link href="#" mx={2}><FaInstagram /></Link>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Privacy Policy</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;