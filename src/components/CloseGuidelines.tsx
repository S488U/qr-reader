"use client";

import { useSyncExternalStore } from "react";
import Button from "./Button";

const STORAGE_KEY = "hide-guidelines";
const STORAGE_EVENT = "guidelines-storage-change";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(STORAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(STORAGE_EVENT, callback);
  };
};

const getSnapshot = () => localStorage.getItem(STORAGE_KEY) !== "true";
const getServerSnapshot = () => false;

const CloseGuidelines = ({ children }: { children: React.ReactNode }) => {
  const isVisible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const closeView = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event(STORAGE_EVENT));
  };

  if (!isVisible) return null;

  return (
    <div className="border border-gray-600 rounded-lg px-4 py-3 mb-10 flex flex">
      {children}
      <Button
        className="text-2xl bg-gray-700 px-6 hover:bg-red-800 cursor-pointer"
        onClick={closeView}
        title="X"
      />
    </div>
  );
};

export default CloseGuidelines;
