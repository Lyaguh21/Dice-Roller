import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, miniApp, viewport } from "@telegram-apps/sdk";

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
    }

    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
      console.log("Запрошен полноэкранный режим");
    } else {
      const data = JSON.stringify({
        eventType: "web_app_request_fullscreen",
      });
      window.parent.postMessage(data, "https://web.telegram.org");
    }
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

initializeTelegramSDK();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
