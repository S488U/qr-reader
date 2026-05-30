"use client";

import { useRef, useState } from "react";
import { formatFileSize } from "../lib/formatFileSize";
import decodeQR from "qr/decode.js";
import Result from "./Result";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileSize, setFileSize] = useState<number>(0);
  const [result, setResult] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [hasScanned, setHasScanned] = useState<boolean>(false);

  const onHandleClick = () => {
    fileInputRef.current?.click();
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      console.log("File is processing");
      setFileName(file.name);
      setFileSize(file.size);

      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);

        const { width, height, data } = ctx!.getImageData(
          0,
          0,
          img.width,
          img.height,
        );
        try {
          const res = decodeQR({ width, height, data });
          setResult(res);
          setSuccess(true);
        } catch {
          setResult("");
          setSuccess(false);
        } finally {
          setHasScanned(true);
          URL.revokeObjectURL(img.src);
        }
      };

      img.src = URL.createObjectURL(file);
    } else {
      console.log("No file");
    }
  };

  return (
    <>
      <div
        className="h-75 w-full border border-dashed border-gray-700 rounded-lg text-white p-10 cursor-pointer flex justify-center items-center"
        onClick={onHandleClick}
      >
        <h4 className="text-gray-700 text-2xl">Upload your files here</h4>
      </div>

      <input ref={fileInputRef} type="file" hidden onChange={onHandleChange} />

      {hasScanned && (
        <>
          <div className="h-auto w-full bg-gray-900 rounded-lg py-5 px-4 flex flex-col items-start gap-y-2 mt-5">
            <p>File: {fileName}</p>
            <p>Size: {formatFileSize(fileSize)}</p>
          </div>

          <Result result={result} success={success} />
        </>
      )}
    </>
  );
};

export default Upload;
