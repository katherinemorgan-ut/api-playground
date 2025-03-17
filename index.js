// Dad joke API 
(
    async () => {
        const url = 'https://icanhazdadjoke.com/';

        //JSON response
        const response = await fetch(url, {
            headers: {
                'User-Agent':'My Library (https://github.com/katherinemorgan-ut/api-playground)',
                'accept': 'application/json',
            },
        })

        const dadJoke = await response.json();
        console.log(dadJoke.joke);

        //Plain Text repsonse
        // const responsePlainText = await fetch(url, {
        //     headers: {
        //         'User-Agent':'My Library (https://github.com/katherinemorgan-ut/api-playground)',
        //         'accept': 'text/html',
        //     }
        // })

        // const secondDadJoke = response.body;
        // console.log(secondDadJoke);
    }
)();