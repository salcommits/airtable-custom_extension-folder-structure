import React from 'react';
import {useBase} from '@airtable/blocks/interface/ui';
import {Component1} from '../components/component1';
import {Component2} from '../components/component2';
import {CommonExample1, CommonExample2} from '../components/common';
import {useExampleHook} from '../hooks/useExampleHook';
import {formatExample} from '../utils/formatExample';

export function App() {
    const base = useBase();
    const exampleValue = useExampleHook();
    const formattedText = formatExample('Airtable Interface Extension');

    return (
        <div className="w-full h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-6">
                <header className="border-b border-gray-200 dark:border-gray-700 pb-4">
                    <h1 className="text-3xl font-bold">{formattedText}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Base: {base.name} | Status: {exampleValue}
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Common Components Demo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CommonExample1 title="Welcome Card" variant="blue">
                            <p>This is a reusable card component with customizable variants.</p>
                            <p className="mt-2">Props: title, variant, children</p>
                        </CommonExample1>
                        
                        <CommonExample2 
                            title="Key Features" 
                            items={[
                                'Prop-driven components',
                                'Multiple color variants',
                                'Dark mode support',
                                'Fully reusable',
                            ]}
                            icon="✓"
                        />
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Feature Components</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        These components demonstrate reusing CommonExample1 with different props
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Component1 />
                        <Component2 />
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">All Color Variants</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        CommonExample1 supports 13 color variants
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <CommonExample1 title="Red Variant" variant="red">
                            <p>Great for errors or warnings</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Yellow Variant" variant="yellow">
                            <p>Perfect for alerts or highlights</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Indigo Variant" variant="indigo">
                            <p>Professional and modern</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Pink Variant" variant="pink">
                            <p>Fun and vibrant</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Teal Variant" variant="teal">
                            <p>Calm and refreshing</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Cyan Variant" variant="cyan">
                            <p>Bright and energetic</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Rose Variant" variant="rose">
                            <p>Elegant and subtle</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Emerald Variant" variant="emerald">
                            <p>Rich and natural</p>
                        </CommonExample1>
                        
                        <CommonExample1 title="Slate Variant" variant="slate">
                            <p>Neutral and clean</p>
                        </CommonExample1>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Mixed Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CommonExample1 title="Purple Variant" variant="purple">
                            <p>Same component, different color scheme.</p>
                        </CommonExample1>
                        
                        <CommonExample2 
                            title="Tables in Base" 
                            items={base.tables.map(t => t.name)}
                            icon="📊"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

