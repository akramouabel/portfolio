const DEBUG = process.env.NODE_ENV === "development";

export function debug(
  scope: string,
  message: string,
  data?: unknown
) {
  if (!DEBUG) return;

  if (data !== undefined) {
    console.log(`[${scope}] ${message}`, data);
  } else {
    console.log(`[${scope}] ${message}`);
  }
}

export function debugError(
  scope: string,
  message: string,
  error?: unknown
) {
  if (error !== undefined) {
    console.error(`[${scope}] ${message}`, error);
  } else {
    console.error(`[${scope}] ${message}`);
  }
}