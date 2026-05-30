export const formatFileSize = (bytes: number): string => {
  const BYTES = 1024;

  if (bytes < BYTES) return `${bytes} B`;

  const units = ["KiB", "MiB", "GiB"];
  let size = bytes / BYTES;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= BYTES;
    unitIndex++;
  }

  return `${size.toFixed(2)} ${units[unitIndex]}`;
};
