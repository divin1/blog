import keys from "keys";

export function pageView(url) {
  window.gtag("config", keys.GOOGLE_ANALYTICS, {
    page_path: url,
  });
}

export function event({ action, params }) {
  window.gtag("event", action, params);
}
