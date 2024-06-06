import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
      <Text fontSize="lg">
        If you have any questions or comments, please don't hesitate to contact us. You can reach us at contact@electronicsstore.com or call us at (123) 456-7890.
      </Text>
    </Box>
  );
};

export default Contact;