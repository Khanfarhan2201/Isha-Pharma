import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax"; // ✅ Import ParallaxProvider
import "flowbite/dist/flowbite.min.css";

// Delay Flowbite initialization until after mount
function initFlowbiteOnMount() {
  if (typeof window !== "undefined") {
    import("flowbite")
      .then((module) => {
        module.initFlowbite();
      })
      .catch((err) => console.error("Flowbite initialization failed:", err));
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider> {/* ✅ Wrap App inside */}
      <App />
    </ParallaxProvider>
  </React.StrictMode>
);

initFlowbiteOnMount(); // ✅ Call separately outside render
