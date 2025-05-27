import { type ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

import { useStack } from "../../context/StackContext";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const { stacks } = useStack();
  return (
    <>
      <Header />
      <Nav />
      <main
        className="contents"
        id="Contents"
        {...{ inert: stacks.length > 0 }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
