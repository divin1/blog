import keys from "keys";

class Analytics {
  constructor() {
    this.enabled = false;
  }

  init(localStorage) {
    const storedPreference = localStorage.getItem("analytics-enabled");
    this.enabled =
      storedPreference === null ? false : JSON.parse(storedPreference);
  }

  pageView(url) {
    if (!this.enabled) return;
    window.gtag("config", keys.GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }

  event({ action, params }) {
    if (!this.enabled) return;
    window.gtag("event", action, params);
  }
}

export default new Analytics();
