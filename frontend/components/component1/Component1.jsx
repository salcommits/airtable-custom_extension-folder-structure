import React from 'react';
import {useRecords, useBase} from '@airtable/blocks/interface/ui';
import {CommonExample1} from '../common';

/**
 * Feature Component 1 - Demonstrates using CommonExample1 with green variant
 */
export function Component1() {
    const base = useBase();
    const table = base.tables[0];
    const records = useRecords(table);

    return (
        <CommonExample1 title="Records Overview" variant="green">
            <p>Table: <strong>{table.name}</strong></p>
            <p className="mt-1">Total Records: <strong>{records.length}</strong></p>
            <p className="mt-1 text-xs opacity-75">
                This component uses CommonExample1 with green variant
            </p>
        </CommonExample1>
    );
}

