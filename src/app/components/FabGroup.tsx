import { useState } from 'react';
import { FAB, Portal } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';

interface FabGroupProps {
    actions: ActionsProps[],
    iconOpen: string,
    iconClose: string
}

export interface ActionsProps {
    icon: string,
    label: string | undefined,
    onPress: () => void
}

export const FabGroup = ({actions, iconOpen, iconClose}: FabGroupProps) => {
    const [state, setState] = useState({ open: false });
    const onStateChange = ({ open }: {open: boolean}) => setState({ open });

    const { open } = state;

    const {theme} = useTheme();

    return (
        <Portal>
            <FAB.Group
                visible
                open={open}
                icon={open ? iconClose : iconOpen}
                theme={theme}
                actions={actions}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        // do something if the speed dial is open
                    }
                }}
            />
        </Portal>
    )
}