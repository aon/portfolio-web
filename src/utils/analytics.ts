export const trackGithubSocial = () => {
  trackEvent("github_opened");
};
export const trackTwitterSocial = () => {
  trackEvent("twitter_opened");
};
export const trackLinkedinSocial = () => {
  trackEvent("linkedin_opened");
};

export const trackEvent = (event: string) => {
  fetch(`https://nullitics.com/n.gif?u=${getCurrentUri()}:${event}`);
};

export const getCurrentUri = () => encodeURI(location.href);
