import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        w={["400px", "1440px"]}
        h="100vh"
        d="flex"
        justifyContent="center"
        alignItems="center"
        bgImage={`/assets/pattern-background-desktop.svg`}
        bgRepeat="no-repeat"
        bgColor="brand.200"
      >
        <Box
          bgColor="white"
          w={["350px", "450px"]}
          d="flex"
          overflow="hidden"
          flexDirection="column"
          alignItems="center"
          rounded="3xl"
        >
          <Image src={`/assets/illustration-hero.svg`} />
          <Box w={["90%", "80%"]}>
            <Box w={["90%", "80%"]} textAlign="center" mx="auto">
              <Heading size="lg" fontWeight="black" mt="2.5rem">
                Order Summary
              </Heading>
              <Text color="brand.300" mt="1.5rem">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </Text>
            </Box>
            <Box
              d="flex"
              p={6}
              bgColor="brand.100"
              rounded="xl"
              mt="1.5rem"
              mb={2}
            >
              <Image src={`/assets/icon-music.svg`} w="48px" h="48px" />
              <Box ml={5}>
                <Heading as="h2" size="sm" fontWeight="bold">
                  Annual Plan
                </Heading>
                <Text color="brand.300" mt={1}>
                  $59.99/year
                </Text>
              </Box>
              <Link
                ml="auto"
                alignSelf="center"
                color="brand.400"
                fontSize="0.9rem"
                fontWeight="bold"
                textDecoration="underline"
                cursor={["", "pointer"]}
                transition="all .5s ease"
                _hover={{ color: "brandH.100", textDecoration: "none" }}
              >
                Change
              </Link>
            </Box>
            <Button
              w="100%"
              mt="1.5rem"
              p={6}
              bgColor="brand.400"
              color="white"
              rounded="xl"
              boxShadow="0px 10px 25px hsla(245, 75%, 52%, 0.035), 0px 15px 30px hsla(245, 75%, 52%, 0.2)"
              //boxShadow="0px 1px 1px hsla(245, 75%, 62%, 0.035), 0px 15px 25px hsla(245, 75%, 62%, 0.2)"
              cursor={["", "pointer"]}
              transition="background-color .5s ease"
              _hover={["", { bgColor: "brandH.100" }]}
              _active={{ bgColor: "brandH.100" }}
            >
              Proceed to Payment
            </Button>
            <Link
              d="block"
              mt="2rem"
              mb="2.5rem"
              color="brand.300"
              fontWeight="bold"
              textAlign="center"
              textDecoration="none"
              cursor={["", "pointer"]}
              transition="color .5s ease"
              _hover={{ color: "brand.500" }}
            >
              Cancel Order
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
