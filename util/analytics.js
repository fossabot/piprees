const contactFormClickedStatus = {
  email: false,
  message: false,
  button: false
};

const summaryClickedStatus = {};

export function contactFormClicked(id) {
  try {
    if (contactFormClickedStatus[id] === false) {
      contactFormClickedStatus[id] = true;
      window.toastedAnalytics.emit('contactFormClicked', { id });
    }
  } catch (error) {
    console.warn(error);
  }
}

export function linkClicked(id, url) {
  try {
    window.toastedAnalytics.emit('clicked', { id, url });
  } catch (error) {
    console.warn(error);
  }
}

export function summaryClicked(id) {
  if (summaryClickedStatus[id] == null) {
    summaryClickedStatus[id] = true;
    window.toastedAnalytics.emit('summaryClicked', { id });
  }
}
