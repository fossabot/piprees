import LightSwitch from '../styles/lightswitch.module.css';
import useLocalStorage from '../hooks/useLocalStorage.js'

import { themeToggleClicked } from '../util/analytics.js';

export default function LightSwitchComponent() {
  const defaultIsDark = process.browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultIsDark ? 'dark' : 'light');
  const themeIsDark = theme === 'dark';
  const themeIcon = themeIsDark ? '🌤️' : '🌖';
  const tbemeMode = themeIsDark ? 'light' : 'dark';

  if (process.browser) {
    document.documentElement.classList.add(themeIsDark ? 'theme-light' : 'theme-dark');
    document.documentElement.classList.remove(!themeIsDark ? 'theme-light' : 'theme-dark');
  }


  const toggleTheme = () => {
    document.documentElement.classList.add(themeIsDark ? 'theme-light' : 'theme-dark');
    document.documentElement.classList.remove(!themeIsDark ? 'theme-light' : 'theme-dark');
    themeToggleClicked(tbemeMode);
    setTheme(tbemeMode);
  };

  return (
    <div class={LightSwitch.Wrapper}>
      <button type="button" class={LightSwitch.Toggle} onClick={toggleTheme} title={`Change to ${tbemeMode} theme`}>
        {themeIcon}
      </button>
    </div>
  );
}
