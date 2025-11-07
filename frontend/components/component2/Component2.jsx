import React from 'react';
import {useBase} from '@airtable/blocks/interface/ui';
import {CommonExample1} from '../common';

/**
 * Feature Component 2 - Demonstrates using CommonExample1 with orange variant
 */
export function Component2() {
    const base = useBase();
    const tableCount = base.tables.length;

    return (
        <CommonExample1 title="Base Information" variant="orange">
            <p>Base Name: <strong>{base.name}</strong></p>
            <p className="mt-1">Total Tables: <strong>{tableCount}</strong></p>
            <p className="mt-1 text-xs opacity-75">
                This component uses CommonExample1 with orange variant
            </p>
        </CommonExample1>
    );
}

