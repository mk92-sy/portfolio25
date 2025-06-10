import { useEffect, useRef, type ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

import DarkModeButton from "../molecules/DarkModeButton";
import ScrollTopButton from "../molecules/ScrollTopButton";
import { useStack } from "../../context/StackContext";
import { useScroll } from "../../context/ScrollContext";
interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  const { stacks } = useStack();
  const contentsRef = useRef<HTMLElement | null>(null);
  const { top } = useScroll();
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
      <main className="contents" id="Contents" ref={contentsRef}>
        {children}
      </main>
      <Footer />
      {top > 10 && <ScrollTopButton />}
      <DarkModeButton />
    </>
  );
};

export default CommonLayout;
