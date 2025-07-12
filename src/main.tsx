import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, miniApp, viewport } from "@telegram-apps/sdk";
const data = JSON.stringify({
  eventType: "web_app_request_fullscreen",
  eventData: {
    is_visible: true,
  },
});

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      window.parent.postMessage(data, "https://web.telegram.org");
      console.log("Mini App готово");
    }

    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
      viewport.isFullscreen();
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
