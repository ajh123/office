import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  DrawerProps,
  Button,
  FluentProvider,
  webLightTheme,
  makeStyles,
  shorthands,
  tokens,
  useId,
  DrawerHeaderNavigation,
  Toolbar,
  ToolbarButton,
  Link,
} from "@fluentui/react-components";
import { GridDots24Filled } from "@fluentui/react-icons";

interface Props {
    children?: React.ReactNode
}

const useStyles = makeStyles({
    content: {
        ...shorthands.flex(1),
        ...shorthands.padding("16px"),

        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    toolbar: {
        justifyContent: "space-between",
    },

    navbar: {
        justifyContent: "space-between",
        backgroundColor: tokens.colorBrandBackground
    },

    back_link_icon: {
        display: "inline-block"
    },

    main: {
        display: "flex"
    }
});

export const AppBase = ({ children }: Props) => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <FluentProvider theme={webLightTheme}>
            <Toolbar className={styles.navbar}>
                <ToolbarButton
                    color={tokens.colorNeutralForeground1Static}
                    aria-label="App launcher"
                    appearance="subtle"
                    icon={<GridDots24Filled color={tokens.colorNeutralForegroundInverted}/>}
                    onClick={() => setIsOpen(!isOpen)}
                />

            </Toolbar>

            <div className={styles.main}>
                <OverlayDrawer
                    size={"small"}
                    open={isOpen}
                    onOpenChange={(_, { 
                        open: open
                    }) => setIsOpen(open)}
                >
                    <DrawerHeader>
                        <DrawerHeaderNavigation>
                            <Toolbar className={styles.toolbar}>
                                <ToolbarButton
                                    aria-label="Close the app launcher"
                                    appearance="subtle"
                                    icon={<GridDots24Filled/>}
                                    onClick={() => setIsOpen(!isOpen)}
                                />

                                <Link href={"/app/home"}>
                                    <span>Miners Online Office</span> 
                                </Link>
                            </Toolbar>
                        </DrawerHeaderNavigation>
                        <DrawerHeaderTitle>Apps</DrawerHeaderTitle>
                    </DrawerHeader>
            
                    <DrawerBody>
                        <p>Drawer content</p>
                    </DrawerBody>
                </OverlayDrawer>
        
                <div className={styles.content}>
                    { children }
                </div>
            </div>
        </FluentProvider>
    );
};