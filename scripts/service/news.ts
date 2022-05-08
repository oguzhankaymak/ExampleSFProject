import { createServiceCallObject } from 'service';
import getCurrentEnvironment from 'lib/getCurrentEnvironment';
import config from 'config.json';
import { Category, INewsResponse } from 'types';

const { serviceUrl } = config.environments[getCurrentEnvironment()];

const sc = createServiceCallObject(serviceUrl);

const page_size = 20

export async function getNews(category: Category, page: number): Promise<INewsResponse> {
    try {
        const response = await sc.request(category +"&pageSize="+page_size+"&page="+page , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (err) {
        throw err;
    }
}
