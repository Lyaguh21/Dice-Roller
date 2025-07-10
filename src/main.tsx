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

      console.log("Mini App готово");
    }

    if (viewport.requestFullscreen.isAvailable()) {
      await viewport.requestFullscreen();
      viewport.isFullscreen(); // true
    }
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

const data = JSON.stringify({
  eventType: "web_app_exit_fullscreen",
  eventData: {
    is_visible: true,
  },
});

window.parent.postMessage(data, "https://web.telegram.org");

initializeTelegramSDK();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
