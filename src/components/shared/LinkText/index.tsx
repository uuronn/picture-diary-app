import { css } from "@emotion/react";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

interface LinkTextProps extends ComponentPropsWithRef<"a"> {
  url: string;
}

export const LinkText = ({ children, url }: LinkTextProps): JSX.Element => {
  return (
    <Link href={url}>
      <a css={link}>{children}</a>
    </Link>
  );
};

const link = css`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
