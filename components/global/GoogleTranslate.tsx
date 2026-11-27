"use client";

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    const hideGoogleUi = () => {
      document
        .querySelectorAll<HTMLElement>(".skiptranslate")
        .forEach((el) => {
          el.style.setProperty("display", "none", "important");
        });
    };

    hideGoogleUi();

    // Amati body — Google inject UI-nya async, jadi harus continuous
    const observer = new MutationObserver(hideGoogleUi);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="google_translate_element"
      hidden
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}