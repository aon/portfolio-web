export const trackEmailSocial = () => trackEvent("email_opened");
export const trackGithubSocial = () => trackEvent("github_opened");
export const trackTwitterSocial = () => trackEvent("twitter_opened");
export const trackLinkedinSocial = () => trackEvent("linkedin_opened");

export const trackEvent = (event: string) => {
  fetch(`https://nullitics.com/n.gif?u=${getCurrentUri()}:${event}`, {
    mode: "no-cors",
  });
};

export const getCurrentUri = () => encodeURI(location.origin);
