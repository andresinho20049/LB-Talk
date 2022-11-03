import { IReqJob } from '../../../interface/ISpeechToText';
import { ApiForm, configBase } from '../ApiConfig';


const job = async (req: IReqJob): Promise<string | Error> => {

    try {

        var form = new FormData();
        form.append('config', JSON.stringify(req.config));
        form.append('data_file', req.data_file);

        // Axios request form-data tem muitos conflitos com React Native
        // [https://github.com/axios/axios/issues/1321]

        // ApiForm.defaults.headers.post['Content-Type'] = 'multipart/form-data';

        // const { data } = await ApiForm.post(`/jobs?`, form, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     }
        // })

        const url = `${configBase.baseURL}/jobs?`;
        const token = configBase.headers.Authorization;

        console.log(url);

        const data = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            },
            method: 'POST',
            body: form
        }).then((res) => res.json());

        return data?.id;
    } catch (error: any) {
        console.error(error);
        return new Error(error?.message || 'Erro ao consultar a API');
    }
}

const translate = async (jobId: string): Promise<string | Error> => {
    try {

        if (!jobId || jobId === '')
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

