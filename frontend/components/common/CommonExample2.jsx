import React from 'react';

/**
 * Reusable list card component
 * @param {Object} props
 * @param {string} props.title - List title
 * @param {Array<string>} props.items - Array of items to display
 * @param {string} [props.icon='•'] - Bullet icon
 */
export function CommonExample2({title = 'List', items = [], icon = '•'}) {
    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            <ul className="mt-3 space-y-2">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="mr-2">{icon}</span>
                            <span>{item}</span>
                        </li>
                    ))
                ) : (
                    <li className="text-sm text-gray-500 dark:text-gray-400 italic">No items</li>
                )}
            </ul>
        </div>
    );
}

