import { useEffect, useRef, type ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

import { useStack } from "../../context/StackContext";

interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const { stacks } = useStack();
  const contentsRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (contentsRef.current) {
      if (stacks.length > 0) {
        contentsRef.current.inert = true;
      } else {
        contentsRef.current.inert = false;
      }
    }
  }, [stacks]);
  return (
    <>
      <Header />
      <Nav />
      <main className="contents" id="Contents" ref={contentsRef}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
