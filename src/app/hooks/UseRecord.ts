import { useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSet, AudioSourceAndroidType, AVEncoderAudioQualityIOSType, AVEncodingOption, OutputFormatAndroidType, PlayBackType, RecordBackType } from "react-native-audio-recorder-player";
import RNFetchBlob from "rn-fetch-blob";


interface State {
    isLoggingIn?: boolean;
    recordSecs?: number;
    recordTime?: string;
    currentPositionSec?: number;
    currentDurationSec?: number;
    playTime?: string;
    duration?: string;
}

// const [state, setState] = useState<State>({
//     isLoggingIn: false,
//     recordSecs: 0,
//     recordTime: '00:00:00',
//     currentPositionSec: 0,
//     currentDurationSec: 0,
//     playTime: '00:00:00',
//     duration: '00:00:00',
// });

const dirs = RNFetchBlob.fs.dirs;
const path = Platform.select({
    ios: undefined,
    android: `${dirs.CacheDir}/record.mp3`
});

const audioRecorderPlayer: AudioRecorderPlayer = new AudioRecorderPlayer();
audioRecorderPlayer.setSubscriptionDuration(0.1);

const onStartRecord = async (): Promise<void> => {

    if (Platform.OS === 'android') {
        try {
            const grants = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
            ]);

            if (
                grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                PermissionsAndroid.RESULTS.GRANTED &&
                grants['android.permission.RECORD_AUDIO'] ===
                PermissionsAndroid.RESULTS.GRANTED
            ) {
                console.log('permissions granted');
            } else {
                console.log('All required permissions not granted');

                return;
            }

        } catch (error) {
            console.warn(error);

            return;
        }
    }

    const audioSet: AudioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
        OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };

    console.log('Start recorder');
    const uri = await audioRecorderPlayer.startRecorder(
        path,
        audioSet,
    );

    audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        // console.log('record-back', e);
        // setState({
        //     recordSecs: e.currentPosition,
        //     recordTime: audioRecorderPlayer.mmssss(
        //         Math.floor(e.currentPosition),
        //     ),
        // });
    });

};

const onStopRecord = async (): Promise<void> => {
    console.log('Stop record');
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    // setState({
    //     recordSecs: 0,
    //     recordTime: ''
    // });
};

const onStartPlayer = async ():Promise<void> => {
    const file = await audioRecorderPlayer.startPlayer(path);

    audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
        // setState({
        //     currentPositionSec: e.currentPosition,
        //     currentDurationSec: e.duration,
        //     playTime: audioRecorderPlayer.mmssss(
        //         Math.floor(e.currentPosition)
        //     ),
        //     duration: audioRecorderPlayer.mmssss(Math.floor(e.duration))
        // });
    });

};

const onStopPlay = async ():Promise<void> => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
};

export {
    onStartRecord,
    onStopRecord,
    onStartPlayer,
    onStopPlay
};
