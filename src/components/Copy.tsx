"use client";
import { useState } from "react";
import Button from "./Button";

const Copy = ({ result = "" }: { result?: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const onHandleClick = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error("Error: Failed to Copy Text \n" + e);
    }
  };

  return (
    <Button
      onClick={onHandleClick}
      title={copied ? "Copied" : "Copy"}
      className="bg-black text-white text-sm"
    />
  );
};

export default Copy;
