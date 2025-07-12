import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { init, miniApp } from "@telegram-apps/sdk";

const initializeTelegramSDK = async () => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log("Mini App готово");
    }

    const data = JSON.stringify({
      eventType: "web_app_request_fullscreen",
    });

    window.parent.postMessage(data, "https://web.telegram.org");
    console.log("Запрос на полноэкранный режим отправлен");
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
