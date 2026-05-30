import Button from "./Button";
import Copy from "./Copy";

interface ResultProp {
  result?: string;
  success: boolean;
}

const Result = ({ result, success }: ResultProp) => {
  const isValidUrl = (str: string): boolean => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const isLink = result ? isValidUrl(result) : false;

  return (
    <div
      className={`w-full mt-5 rounded-lg p-5 px-4 break-all relative ${!success ? "bg-red-900" : "bg-green-700"}`}
    >
      {result ? (
        <>
          <div className="flex flex-row gap-2">
            <Copy result={result} />

            {isLink && (    
              <Button
                title="Open Link"
                className="bg-blue-600 text-sm"
                onClick={() =>
                  window.open(result, "_blank", "noopener noreferrer")
                }
              />
            )}
          </div>
          <p className="break-all font-[monospace] text-sm mt-2  ">{result}</p>
        </>
      ) : (
        <p>No result found, upload image with QR code!</p>
      )}
    </div>
  );
};

export default Result;
