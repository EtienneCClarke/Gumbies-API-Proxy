import { Router } from "express";
import { validateData } from "../middleware/validation";
import { statsWidgetSchema } from "../schemas/gumbies.schema";
import { ResponseService as rs } from "../services/response";
import { CONFIG } from "../configs/gumbies.config";

const router = Router();

router.post('/widgets/stats-widget', validateData(statsWidgetSchema), async (req, res) => {

    const params = req.originalUrl.split('?')[1].split('&').reduce((acc: any, param: string) => {
        const values = param.split('=');
        acc[values[0]] = values[1];
        return acc;
    }, {});

    const languages = ['en', 'de'];
    const lng = params.lng;

    if(!languages.includes(lng)) {
        rs.send({ error: 'Invalid language' }, 400, req, res);
    };

    const gumbies_req = await fetch(CONFIG.url + '/v2/widgets/stats-widget', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': CONFIG.api_key ?? '',
        },
        body: JSON.stringify(req.body),
    });

    const json = await gumbies_req.json();

    // TODO: Check response and return correct data
    const data = {}

    rs.send(data, 200, req, res);

});

export { router as gumbies };