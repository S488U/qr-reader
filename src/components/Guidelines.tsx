import Heading from "./Heading";
import CloseGuidelines from "./CloseGuidelines";

const Guidelines = () => {
  return (
    <CloseGuidelines>
      <div>
        <Heading title="What does this website do?" />
        <p className="text-gray-500">
          This website scans your QR code directly in your browser. Your image
          is never uploaded to any server everything stays on your device.
        </p>
      </div>
    </CloseGuidelines>
  );
};

export default Guidelines;
