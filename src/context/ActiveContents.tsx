// ActiveContents.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Context의 타입 정의
interface ActiveContentsType {
  activeContent: number;
  setActiveContent: React.Dispatch<React.SetStateAction<number>>;
}

// 초기값 설정 (undefined로 시작하고 Provider에서 값 제공)
const ActiveContents = createContext<ActiveContentsType | undefined>(undefined);

// Provider 컴포넌트
export const ActiveContentsProvider = ({ children }: { children: ReactNode }) => {
  const [activeContent, setActiveContent] = useState<number>(0);

  return (
    <ActiveContents.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ActiveContents.Provider>
  );
};

// 커스텀 훅으로 Context 사용
export const useActiveContent = () => {
  const context = useContext(ActiveContents);
  if (!context) {
    throw new Error('useActiveContent must be used within a ActiveContentsProvider');
  }
  return context;
};
