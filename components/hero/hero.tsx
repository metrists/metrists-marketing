import {
  Container,
  Flex,
  FlexProps,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

interface HeroProps extends Omit<FlexProps, "title"> {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex alignItems="center" {...rest}>
      <Container maxW="100%">
        <VStack spacing={[4, null, 8]} alignItems="flex-start" maxW="100%">
          <Text as="h1" textStyle="h1" textAlign="justify" fontSize="7xl">
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="center"
            color="gray.500"
            _dark={{ color: "gray.400" }}
            textAlign={{
              base: "left",
              md: "justify",
            }}
          >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  );
};
