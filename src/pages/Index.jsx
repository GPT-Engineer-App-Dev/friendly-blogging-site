import { Container, Text, VStack, Heading, Box, Image, Link, Divider } from "@chakra-ui/react";

const Index = ({ posts }) => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Dive into my thoughts, experiences, and stories. Explore the world through my eyes.
        </Text>
        <Link href="/new-post" color="teal.500" fontSize="xl">
          Add New Post
        </Link>
        <Divider my={6} />
        {posts.length > 0 && (
          <VStack spacing={4} width="100%">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Container>
  );
};

export default Index;