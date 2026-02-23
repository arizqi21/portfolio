const {test, expect} = require('playwright/test');

test('API get', async ({request}) => {
    let response = await request.get('https://api.sampleapis.com/avatar/info', {
        headers: {
            'Accept': 'application/json',
            'Accept-Encoding': 'identity'
        }
    });

    let body = await response.text();

    console.log(body);
});