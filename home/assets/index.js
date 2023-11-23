import React from 'react';
import { FluentProvider, webLightTheme, Button } from '@fluentui/react-components';

console.log(window.app);

export function render() {
    return <FluentProvider theme={webLightTheme}>
        Hello app world!
        <Button appearance="primary">I am a button.</Button>
    </FluentProvider>
}