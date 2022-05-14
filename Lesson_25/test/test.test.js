const sendHttpRequest = require('../sendHttpRequest');
const axios = require('axios');
const searchJsonschema = require('../testData/searchSchema.json');
const imageJsonschema = require('../testData/imageSchema.json');
const newsJsonschema = require('../testData/newsSchema.json');
const videoJsonschema = require('../testData/videoSchema.json');
const serpJsonschema = require('../testData/serpSchema.json');
const schoralJsonschema = require('../testData/scholarSchema.json');
const crawlJsonschema = require('../testData/crawlSchema.json');

describe('Search API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        await expect(response).toBeValidSchema(searchJsonschema);
    });
});

describe('Image API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/image/q=tesla',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/image/q=tesla',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/image/q=tesla',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidSchema(imageJsonschema);
    })
});

describe('News API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/news/q=president+united+states',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/news/q=president+united+states',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/news/q=president+united+states',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidSchema(newsJsonschema);
    })
});

describe('Video API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/video/q=iphone+reviews',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidSchema(videoJsonschema);
    })
});

describe('SERP API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',
            headers: {
                'content-type': 'application/json',
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            },
            data: '{"query":"q=google+search+api&num=100","website":"https://rapidapi.com"}'
        };      
        response = await sendHttpRequest(conf, 'POST');
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',
            headers: {
                'content-type': 'application/json',
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            },
            data: '{"query":"q=google+search+api&num=100","website":"https://rapidapi.com"}'
        };      
        response = await sendHttpRequest(conf, 'POST');
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',
            headers: {
                'content-type': 'application/json',
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'US',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            },
            data: '{"query":"q=google+search+api&num=100","website":"https://rapidapi.com"}'
        };      
        response = await sendHttpRequest(conf, 'POST');
        console.log(response);
        await expect(response).toBeValidSchema(serpJsonschema);
    })
});

describe('Scholar API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/scholar/q=high+frequency+trading',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'CA',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/scholar/q=high+frequency+trading',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'CA',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/scholar/q=high+frequency+trading',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'CA',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        await expect(response).toBeValidSchema(schoralJsonschema);
    });
});

describe('Crawl API tests', () => {

    let response;

    test('check status code', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/crawl/q=best+iphone&num=100',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(200);
    })

    test('check status code 403', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/crawl/q=best+iphone&num=100',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4d'
            }
        }
        response = await sendHttpRequest(conf);
        console.log(response);
        await expect(response).toBeValidStatusCode(403);
        await expect(response.data.message).toEqual('You are not subscribed to this API.');
    })

    test('validate json schema', async() => {
        const conf = {
            url: 'https://google-search3.p.rapidapi.com/api/v1/crawl/q=best+iphone&num=100',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': '5c4c2e40famsh19e3bb364dfbb01p1442b6jsna5463387a4da'
            }
        }
        response = await sendHttpRequest(conf);
        await expect(response).toBeValidSchema(crawlJsonschema);
    });
});