import { plugin } from "config";

export function pageView(url) {
  window.gtag("config", plugin.GOOGLE_ANALYTICS, {
    page_path: url,
  });
}

export function event({ action, params }) {
  window.gtag("event", action, params);
}
