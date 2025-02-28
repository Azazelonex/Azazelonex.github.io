function getRandomGreeting() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');

    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            console.error(xhr.response);
        } else {
            for (let i = 0; i < +xhr.response; i++) {
                console.log('Hello World');
            }
        }
    });
}

function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
) {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });

    xhr.send(body);

    xhr.addEventListener('load', () => {
        if (xhr.status != 200 && xhr.status != 201 && xhr.status != 204) {
            callback(xhr.response);
        } else {
            callback(null, xhr.response);
        }
    });
}

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects/?prob=20', {
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    

    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
    const { id } = received; 

    const extension = { age: 33 };

    sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
        body: JSON.stringify(extension),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        }
    }, (err) => {
        if (err) {
            console.error(err);
            return;
        }        

        sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {},
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`User with id ${id} was deleted`);
                }
            }
        );
    }
    );
}
);