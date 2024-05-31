'use client';
import { useState, useEffect } from 'react';
import { ThemeContext } from '@/app/utilities/context/mycontext';
import { themes } from '@/app/utilities/themes/mythemes';
import Navbar from './navbar';

export default function MyApp({ Component, pageProps }:{Component: any, pageProps: any}) {
    const [theme, setTheme] = useState(themes.light);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(JSON.parse(savedTheme));
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    ...theme,
                }}
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    );
}
