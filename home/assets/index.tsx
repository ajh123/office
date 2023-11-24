import React from 'react';
import { FluentProvider, webLightTheme, Button, Text } from '@fluentui/react-components';
import { Persona } from "@fluentui/react-components";
// import type { PersonaProps } from "@fluentui/react-components";

export function render() {
    return <FluentProvider theme={webLightTheme}>
        <Text>Hello app world!</Text>
        <Button appearance="primary">I am a button.</Button>
        <Text/>
        <Persona
            name="Banana Man"
            secondaryText="Busy"
            presence={{ status: "busy" }}
            // avatar={{
            //     image: {
            //     src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
            //     },
            // }}
        />
    </FluentProvider>
}