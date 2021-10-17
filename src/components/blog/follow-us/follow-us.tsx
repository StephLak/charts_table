import { Box, Flex, Image } from "@chakra-ui/react";
import { Social } from "../../footer/footer-data";
import { coloredSocials } from "./follow-us-data";

function FollowUs() {
  return (
    <Flex
      w="100%"
      py="5%"
      px={{ base: "5%", sm: "10%" }}
      minH="10rem"
      bgColor="white"
      flexDir="column"
    >
      <Box
        mb="0.8rem"
        fontSize={{ base: "xs", md: "sm", xl: "md" }}
        fontWeight="medium"
      >
        Follow us on social media
      </Box>
      <Box mb="3rem" fontSize={{ base: "xx-small", md: "xs", xl: "sm" }}>
        Stay updated with the latest on all things Paymyrent
      </Box>
      <Flex>
        {coloredSocials.map((social: Social) => (
          <Image
            mr={{ base: "1rem", md: "2rem" }}
            key={social.key}
            h={{ base: "1.2rem", md: "1.5rem", xl: "2rem" }}
            w={{ base: "1.2rem", md: "1.5rem", xl: "2rem" }}
            src={social.image}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default FollowUs;