import React from 'react';
import { Button, Text } from '@fluentui/react-components';
import { AppBase } from '../../assets/app_base.tsx';
// import type { PersonaProps } from "@fluentui/react-components";

export function render() {
    return <AppBase>
        <Text>Hello app world!</Text>
        <Button appearance="primary">I am a button.</Button>
    </AppBase>
}