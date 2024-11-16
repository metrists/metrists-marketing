import * as React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  VisuallyHidden,
  Text,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";

export interface LogoProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

import siteConfig from "data/config";

export const Logo = ({ href = "/", onClick }: LogoProps) => {
  let logo;
  if (siteConfig.logo) {
    logo = (
      <HStack>
        <Box as={siteConfig.logo} height="32px" mt="-4px" />
        <Text
          _hover={{
            textDecoration: "none",
          }}
        >
          {siteConfig.seo?.title}
        </Text>
      </HStack>
    );
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    );
  }

  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  );
};
