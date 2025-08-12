import { type ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import FloatingMenu from "../organisms/FloatingMenu";
import ScrollTopButton from "../molecules/ScrollTopButton";

// import { useStack } from "../../context/StackContext";
interface CommonLayoutProps {
  children: ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  // const { stacks } = useStack();
  // const contentsRef = useRef<HTMLElement | null>(null);
  // useEffect(() => {
  //   if (contentsRef.current) {
  //     if (stacks.length > 0) {
  //       contentsRef.current.inert = true;
  //     } else {
  //       contentsRef.current.inert = false;
  //     }
  //   }
  // }, [stacks]);
  return (
    <main className="contents" id="Contents">
      <Header />
      <FloatingMenu />
      {children}
      <Footer />
      <ScrollTopButton />
    </main>
  );
};

export default CommonLayout;
