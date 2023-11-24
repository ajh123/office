import React from 'react';
import { FluentProvider, webDarkTheme, Button } from '@fluentui/react-components';

export function render() {
    return <FluentProvider theme={webDarkTheme}>
        Hello app world!
        <Button appearance="primary">I am a button.</Button>
    </FluentProvider>
}