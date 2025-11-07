import React from 'react';

const variantStyles = {
    blue: {
        container: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
        title: 'text-blue-900 dark:text-blue-100',
        content: 'text-blue-700 dark:text-blue-300',
    },
    green: {
        container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
        title: 'text-green-900 dark:text-green-100',
        content: 'text-green-700 dark:text-green-300',
    },
    purple: {
        container: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
        title: 'text-purple-900 dark:text-purple-100',
        content: 'text-purple-700 dark:text-purple-300',
    },
    orange: {
        container: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
        title: 'text-orange-900 dark:text-orange-100',
        content: 'text-orange-700 dark:text-orange-300',
    },
    red: {
        container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
        title: 'text-red-900 dark:text-red-100',
        content: 'text-red-700 dark:text-red-300',
    },
    yellow: {
        container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
        title: 'text-yellow-900 dark:text-yellow-100',
        content: 'text-yellow-700 dark:text-yellow-300',
    },
    indigo: {
        container: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
        title: 'text-indigo-900 dark:text-indigo-100',
        content: 'text-indigo-700 dark:text-indigo-300',
    },
    pink: {
        container: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
        title: 'text-pink-900 dark:text-pink-100',
        content: 'text-pink-700 dark:text-pink-300',
    },
    teal: {
        container: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
        title: 'text-teal-900 dark:text-teal-100',
        content: 'text-teal-700 dark:text-teal-300',
    },
    cyan: {
        container: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800',
        title: 'text-cyan-900 dark:text-cyan-100',
        content: 'text-cyan-700 dark:text-cyan-300',
    },
    rose: {
        container: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',
        title: 'text-rose-900 dark:text-rose-100',
        content: 'text-rose-700 dark:text-rose-300',
    },
    emerald: {
        container: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
        title: 'text-emerald-900 dark:text-emerald-100',
        content: 'text-emerald-700 dark:text-emerald-300',
    },
    slate: {
        container: 'bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-700',
        title: 'text-slate-900 dark:text-slate-100',
        content: 'text-slate-700 dark:text-slate-300',
    },
};

/**
 * Reusable card component with variant styling
 * @param {Object} props
 * @param {string} props.title - Card title
 * @param {string} [props.variant='blue'] - Color variant (blue, green, purple, orange, red, yellow, indigo, pink, teal, cyan, rose, emerald, slate)
 * @param {React.ReactNode} props.children - Card content
 */
export function CommonExample1({title = 'Card Title', variant = 'blue', children}) {
    const styles = variantStyles[variant] || variantStyles.blue;

    return (
        <div className={`p-4 rounded-lg border ${styles.container}`}>
            <h3 className={`font-semibold ${styles.title}`}>{title}</h3>
            <div className={`text-sm mt-2 ${styles.content}`}>
                {children}
            </div>
        </div>
    );
}

