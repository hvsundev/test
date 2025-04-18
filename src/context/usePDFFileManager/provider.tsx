import React, { useEffect, useState } from "react";
import PDFContext from "@/context/usePDFFileManager/context.ts";
import { useDialog } from "@/context/useDialog";

export const PDFProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { showToast } = useDialog();
  const [PDFFile, setPDFFile] = useState<File | null>(null);
  const [stamps, setStamps] = useState<string[]>([]);
  const [scale, setScale] = useState<number>(0.5);
  const [selectedStampIndex, setSelectedStampIndex] = useState<number>(-1);
  const [selectedPDFIndex, setSelectedPDFIndex] = useState<number>(0);
  const [canvasSize, setCanvasSize] = useState({
    FABRIC_CANVAS_WIDTH: 0,
    FABRIC_CANVAS_HEIGHT: 0,
  });
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const addStamp = (stamp: string) => {
    if (!stamp) return;

    if (stamps.length < 5) {
      setStamps((prev) => [...prev, stamp]);
    } else {
      showToast({
        type: "warning",
        message: "최대 5개까지 업로드 할 수 있어요",
      });
    }
  };

  const deleteStamp = (index: number) => {
    setStamps((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });

    setSelectedStampIndex((prevIndex) =>
      prevIndex === index ? -1 : prevIndex > index ? prevIndex - 1 : prevIndex,
    );
  };

  const handleInitialize = () => {
    setPDFFile(null);
    setSelectedPDFIndex(0);
    setSelectedStampIndex(-1);
    setScale(0.5);
  };

  return (
    <PDFContext.Provider
      value={{
        PDFFile,
        setPDFFile,
        stamps,
        addStamp,
        deleteStamp,
        selectedStampIndex,
        setSelectedStampIndex,
        selectedPDFIndex,
        setSelectedPDFIndex,
        handleInitialize,
        scale,
        setScale,
        canvasSize,
        setCanvasSize,
        isDownloading,
        setIsDownloading,
      }}
    >
      {children}
    </PDFContext.Provider>
  );
};
