import { track } from "@vercel/analytics";

export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    track(eventName, properties);
  };

  const trackContactFormSubmit = (success: boolean) => {
    trackEvent("contact_form_submit", { success });
  };

  const trackProjectView = (projectTitle: string) => {
    trackEvent("project_view", { project: projectTitle });
  };

  const trackResumeDownload = () => {
    trackEvent("resume_download");
  };

  const trackSocialLinkClick = (platform: string) => {
    trackEvent("social_link_click", { platform });
  };

  return {
    trackEvent,
    trackContactFormSubmit,
    trackProjectView,
    trackResumeDownload,
    trackSocialLinkClick,
  };
};