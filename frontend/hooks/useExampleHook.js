import {useState, useEffect} from 'react';

/**
 * Example custom hook demonstrating the hooks pattern
 * @returns {string} A simple example value
 */
export function useExampleHook() {
    const [value, setValue] = useState('Loading...');

    useEffect(() => {
        // Simulate async operation
        const timer = setTimeout(() => {
            setValue('Ready!');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return value;
}

