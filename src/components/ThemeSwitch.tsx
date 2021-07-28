import {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {BiSun, BiMoon} from 'react-icons/bi';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="rounded"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && theme === 'dark' ? <BiSun /> : <BiMoon />}
    </button>
  );
};
