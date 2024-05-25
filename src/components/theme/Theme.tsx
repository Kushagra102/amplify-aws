"use client"

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

import outputs from '../../../amplify_outputs.json';

Amplify.configure(outputs);

const Theme = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;
