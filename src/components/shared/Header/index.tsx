import { css } from "@emotion/react";
import { overlayOrder } from "../../../../styles/themes";
import { MENU_LIST } from "../../../constant";
import { LinkText } from "../LinkText";

export const Header = (): JSX.Element => {
  return (
    <header css={header}>
      <ul css={list}>
        {MENU_LIST.map((item) => (
          <li key={item.title}>
            <LinkText url={item.url}>{item.title}</LinkText>
          </li>
        ))}
      </ul>
    </header>
  );
};

const header = css`
  width: 100vw;
  padding: 20px 40px;
  background: #dbdbdb;
  position: fixed;
  z-index: ${overlayOrder.high};
`;

const list = css`
  display: flex;
  gap: 30px;
  list-style: none;
`;
