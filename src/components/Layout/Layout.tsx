import React from "react";
import { css } from "@emotion/react";

export type CommonsProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: CommonsProps) {
  return <div>{children}</div>;
}

function Side({ children }: CommonsProps) {
  return <aside css={sidebarStyle}>{children}~</aside>;
}

function Main({ children }: CommonsProps) {
  return <div css={mainStyle}>{children}~</div>;
}

Layout.Side = Side;
Layout.Main = Main;

const sidebarStyle = css`
  width: 16.25rem;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 3rem 0 3rem 3rem;
`;

const mainStyle = css`
  margin-left: 18.25rem;
  padding: 3rem 0;
  /* width: calc(100% - 16.25rem);
  height: 100%;
  display: flex;
  background-color: #efefef; */
`;
