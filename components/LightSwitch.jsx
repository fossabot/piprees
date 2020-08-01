import LightSwitch from '../styles/lightswitch.module.css'
import useLocalStorage from '../hooks/useLocalStorage.js'

import { themeToggleClicked } from '../util/analytics.js'

let hasThemeSet = false
export default function LightSwitchComponent() {
  const defaultIsDark =
    process.browser &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultIsDark ? 'dark' : 'light'
  )

  const themeIsDark = theme === 'dark'
  const themeIcon = themeIsDark ? '🌤️' : '🌖'
  const themeMode = themeIsDark ? 'light' : 'dark'

  if (process.browser && hasThemeSet === false) {
    document.documentElement.classList.add(
      themeIsDark ? 'theme-dark' : 'theme-light'
    )
    hasThemeSet = true
  }

  const toggleTheme = () => {
    document.documentElement.classList.add(
      themeIsDark ? 'theme-light' : 'theme-dark'
    )
    document.documentElement.classList.remove(
      !themeIsDark ? 'theme-light' : 'theme-dark'
    )
    themeToggleClicked(themeMode)
    setTheme(themeMode)
  }

  return (
    <div class={LightSwitch.Wrapper}>
      <button
        type="button"
        class={LightSwitch.Toggle}
        onClick={toggleTheme}
        title={`Switch to ${themeMode} theme`}>
        {themeIcon}
      </button>
    </div>
  )
}
