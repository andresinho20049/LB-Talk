import { useCallback, useState } from 'react';
import { ActionsProps, FabGroup } from "./FabGroup";

import { onStartPlayer, onStartRecord, onStopPlay, onStopRecord } from '../hooks/UseRecord';
import { Snackbar } from 'react-native-paper';

interface State {
    isLoggingIn: boolean;
    recordSecs: number;
    recordTime: string;
    currentPositionSec: number;
    currentDurationSec: number;
    playTime: string;
    duration: string;
}

export const RecordActions = () => {

    const [recording, setRecording] = useState(false);

    const handleRecord = useCallback(() => {
        onStartRecord();
        setRecording(true);
    }, [recording]);

    const handleStopRecord = useCallback(() => {
        onStopRecord();
        setRecording(false);
    }, [recording]);

    const actions: ActionsProps[] = [
        {
            icon: 'clipboard-play',
            label: undefined,
            onPress: () => onStartPlayer(),
        },
        {
            icon: 'record-rec',
            label: undefined,
            onPress: () => handleRecord(),
        }
    ]

    return (
        <>
            {!recording && <FabGroup iconOpen="menu-open" iconClose="backburger" actions={actions} />}
            <Snackbar
                visible={recording}
                onDismiss={handleStopRecord}
                action={{
                    label: 'Stop',
                    icon: 'stop-circle-outline',
                    onPress: () => setRecording(false)
                }}
            >
                Gravando audio!
            </Snackbar>
        </>
    )
}

