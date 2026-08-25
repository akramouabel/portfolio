export const CALENDLY_CONFIG = {
  url: "https://calendly.com/akramouabel2005/30-minute-consultation",
};

let calendlyScriptPromise: Promise<void> | null = null;

export function loadCalendlyWidget(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(
      new Error("Calendly can only be loaded in the browser.")
    );
  }

  // Inject Calendly CSS stylesheet into document head
  if (!document.querySelector('link[href*="widget.css"]')) {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyScriptPromise) {
    return calendlyScriptPromise;
  }

  calendlyScriptPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      existingScript.addEventListener("error", () => {
        calendlyScriptPromise = null;
        reject(new Error("Failed to load Calendly."));
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => resolve();

    script.onerror = () => {
      calendlyScriptPromise = null;
      reject(new Error("Failed to load Calendly."));
    };

    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
}

export async function openCalendly() {
  await loadCalendlyWidget();

  if (!window.Calendly) {
    throw new Error("Calendly failed to initialize.");
  }

  window.Calendly.initPopupWidget({
    url: CALENDLY_CONFIG.url,
  });
}