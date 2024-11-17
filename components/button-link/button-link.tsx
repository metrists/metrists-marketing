import { Button, ButtonProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export type ButtonLinkProps = Pick<LinkProps, "href"> &
  ButtonProps & {
    linkProps?: Partial<LinkProps>;
  };

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  linkProps = {},
  ...props
}) => {
  return (
    <NextLink {...linkProps} href={href} passHref>
      <Button {...props}>{children}</Button>
    </NextLink>
  );
};
