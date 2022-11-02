import { useCallback, useState } from 'react';
import { ActionsProps, FabGroup } from "./FabGroup";

import { Snackbar } from 'react-native-paper';
import { onStartPlayer, onStartRecord, onStopRecord } from '../hooks/UseRecord';
import { useSpeechToText } from '../hooks/UseSpeechToText';

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
    const { handleJob, handleTranscript } = useSpeechToText();

    const handleRecord = useCallback(() => {
        onStartRecord();
        setRecording(true);
    }, [recording]);

    const handleStopRecord = useCallback(() => {
        onStopRecord();
        
        if(recording)
            setRecording(false);

        handleJob()
            .then((result) => {
                if (result instanceof Error) {
                    console.log(result);
                    console.warn(result.message);
                    return;
                } else {
                    handleTranscript(result);
                }
            });

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

