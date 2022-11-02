import { RNFetchBlobReadStream } from "rn-fetch-blob"

export interface IReqJob {
    config: IJobConfig,
    data_file: RNFetchBlobReadStream
}

export interface IJobConfig {
    type: 'transcription',
    transcription_config: ITranscriptionConfig
}

interface ITranscriptionConfig {
    operating_point: 'enhanced',
    language: 'pt' | 'en'
}

export interface IResponseJob {
    id: string
}