import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { FaTwitter } from "react-icons/fa";

export interface TestimonialProps extends CardProps {
  name: string;
  description?: React.ReactNode;
  avatar?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Testimonial = ({
  name,
  description,
  avatar,
  href,
  children,
  ...rest
}: TestimonialProps) => {
  return (
    <Card position="relative" {...rest}>
      <CardHeader
        display="flex"
        flexDirection="row"
        alignItems="center"
        paddingTop={0}
      >
        {avatar ? (
          <Avatar name={name} src={avatar} size="sm" bg="transparent" />
        ) : (
          <></>
        )}
        <Stack spacing="1" {...(avatar ? { ms: "4" } : {})}>
          <Heading fontSize="3xl">{name}</Heading>
          {description ? (
            <Text color="muted" size="xs">
              {description}
            </Text>
          ) : (
            <></>
          )}
        </Stack>
      </CardHeader>
      <CardBody paddingTop={0}>
        {children}
        {href && (
          <Link href={href} position="absolute" top="4" right="4">
            <FaTwitter />
          </Link>
        )}
      </CardBody>
    </Card>
  );
};
