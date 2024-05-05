import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => (
  <VStack color="black" backgroundColor="white" borderRadius="xl">
    <Image boxSize="100%" src={imageSrc} alt={title} borderRadius="xl" />
    <VStack
      align="start"
      spacing={4}
      p={4}
      backgroundColor="white"
      borderRadius="xl"
    >
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text noOfLines={2}>{description}</Text>
      <HStack spacing={2} >
        <Text fontWeight="bold">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  </VStack>
);

export default Card;
