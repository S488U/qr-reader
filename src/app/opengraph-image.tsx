import { ImageResponse } from "next/og";

import { siteConfig } from "../lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: "76px",
              height: "76px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              color: "#09090b",
              borderRadius: "18px",
              fontSize: "42px",
              fontWeight: 900,
            }}
          >
            QR
          </div>
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              maxWidth: "900px",
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Scan QR codes privately in your browser.
          </div>
          <div
            style={{
              maxWidth: "860px",
              color: "#d4d4d8",
              fontSize: "34px",
              lineHeight: 1.3,
            }}
          >
            Upload a QR image and decode it instantly without sending it to a
            server.
          </div>
        </div>
      </div>
    ),
    size
  );
}
