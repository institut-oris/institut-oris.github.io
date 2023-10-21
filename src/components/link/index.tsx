import NextLink, { LinkProps } from 'next/link';

export const Link = ({ children, ...props }: any): JSX.Element => {
  return <NextLink {...props}>{children}</NextLink>;
};
