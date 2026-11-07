export type AnalyticsEvent =
  | "page_view"
  | "apply_click"
  | "application_started"
  | "application_submitted"
  | "pricing_viewed"
  | "curriculum_viewed";

export function track(event: AnalyticsEvent, metadata: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("founder-school:analytics", { detail: { event, metadata } }));
  if (process.env.NODE_ENV === "development") console.info("[analytics demo]", event, metadata);
}
