import { useCallback, useRef, useState } from 'react';
import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useLanguage } from '../context/LanguageContext';
import { IDataFile, IJobConfig } from '../interface/ISpeechToText';
import { job, translate } from '../services/api/speechmatics/SpeechToText';

const fs = RNFetchBlob.fs;
const path = Platform.select({
    ios: undefined,
    android: `${fs.dirs.CacheDir}/record.mp3`
});

export const useSpeechToText = () => {

    const { language, transcript, setTranscript } = useLanguage();

    const handleJob = useCallback(async (): Promise<string | Error> => {

        const config: IJobConfig = {
            type: 'transcription',
            transcription_config: {
                operating_point: 'enhanced',
                language: language === 'pt' ? 'pt' : 'en'
            }
        }

        // const data_file = await fs.readStream(path || '', 'base64');

        const data_file:IDataFile = {
            uri: path || '',
            type: 'audio/mpeg3',
            name: "record.mp3",
        }

        const result = await job({ config, data_file});

        if (result instanceof Error) {
            return new Error(result.message);
        } else {
            console.log("API Sucess:", result);
            return result;
        }

    }, []);

    const handleTranscript = useCallback((jobId: string) => {

        translate(jobId)
            .then((result) => {
                if (result instanceof Error) {
                    console.warn(result.message);
                } else {
                    setTranscript(result);
                }
            });

    }, [transcript])

    return {
        handleJob,
        handleTranscript
    }

}