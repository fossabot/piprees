const contactFormClickedStatus = {
  email: false,
  message: false,
  button: false,
}

const summaryClickedStatus = {}

const themeToggleClickedStatus = {
  light: false,
  dark: false,
}

export function contactFormClicked(id) {
  try {
    if (contactFormClickedStatus[id] === false) {
      contactFormClickedStatus[id] = true
      window.toastedAnalytics.emit('contactFormClicked', { id })
    }
  } catch (error) {
    console.warn('Analytics:contactFormClicked', error)
  }
}

export function linkClicked(id, url) {
  try {
    window.toastedAnalytics.emit('clicked', { id, url })
  } catch (error) {
    console.warn('Analytics:linkClicked', error)
  }
}

export function summaryClicked(id) {
  try {
    if (summaryClickedStatus[id] == null) {
      summaryClickedStatus[id] = true
      window.toastedAnalytics.emit('summaryClicked', { id })
    }
  } catch (error) {
    console.warn('Analytics:summaryClicked', error)
  }
}

export function themeToggleClicked(mode) {
  try {
    if (themeToggleClickedStatus[mode] === false) {
      themeToggleClickedStatus[mode] = true
      window.toastedAnalytics.emit('themeToggleClicked', { mode })
    }
  } catch (error) {
    console.warn('Analytics:themeToggleClicked', error)
  }
}
