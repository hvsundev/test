import { ReactNode } from "react";
import * as S from "@/components/shared/layout/styles.tsx";

type LayoutProps = {
  children: {
    fileUploader: ReactNode;
    PDFViewer: ReactNode;
  };
};

const Layout = ({ children }: LayoutProps) => {
  const { fileUploader, PDFViewer } = children;

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.FileUploaderWrapper>{fileUploader}</S.FileUploaderWrapper>
        <S.PDFViewerWrapper>{PDFViewer}</S.PDFViewerWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default Layout;
