import { IReqJob, IResponseJob } from '../../../interface/ISpeechToText';
import { ApiForm } from '../ApiConfig';


const job = async (req:IReqJob): Promise<string | Error> => {

    try {

        const form = new FormData();
        form.append('config', JSON.stringify(req.config));
        form.append('data_file', req.data_file);

        return '5smvkmk6jk';
        // const { data } = await ApiForm.post<IResponseJob>('/jobs', form.getParts(), {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     // transformRequest: () => {
        //     //     return form;
        //     // },
        //     data: form.getParts()
        // });

        // return data?.id;
    } catch (error:any) {
        // console.error(error);
        return new Error(error?.message || 'Erro ao consultar a API');
    }
}

const translate = async (jobId: string): Promise<string | Error> => {
    try {

        if(jobId === '')
            return new Error('JobId não informado');

        const { data } = await ApiForm.get(`/jobs/${jobId}/transcript?format=txt`);

        return data;
    } catch (error: any) {
        return new Error(error?.message || 'Erro ao consultar a API');
    }
}

export {
    job,
    translate
};
