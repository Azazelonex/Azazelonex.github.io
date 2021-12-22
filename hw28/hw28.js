//first

//fetch
function userFetch(...args) {
    return fetch (...args)
        .then(response => {

            if (!response.ok) {
                return response.text()
                    .then((message) => {
                        throw new Error(message);
                    });
            }

            const contentType = response.headers.get('Content-Type');

            if (contentType === 'application/json; charset=utf-8') {
                return response.json();
            } else {
                return response.text();
            }
        });
}

userFetch('/unstable?maxRandom=20&prob=50')
    .then((value) => {
        for (let i = value; i > 0; i -= 1) {
            console.log("Hello World");
            }
    })
    .catch((err) => {
        console.log(err.message);
    });

// async & await

async function sendRequest() {
    try {
        const request = await userFetch('/unstable?maxRandom=20&prob=50')
        .then((value) => {
            for (let i = value; i > 0; i -= 1) {
                console.log("Hello World");
                }
        });
        
    } catch (err) {
        console.log(err.message);
    }
}

//Second

const obj = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}
//fetch

userFetch(
    '/objects/?prob=20',
    {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(obj)
    })
    .then((user) => userFetch(
        `/objects/${user.id}?prob=20`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({...user, age: 33})
        }))
    .then((user) => {
        return userFetch(
        `/objects/${user.id}?prob=20`,
        {
            method: "DELETE",
           
        })})
    .then(() => {
            console.log('User deleted');
        })
    .catch((err) => {
        console.log(err.message);
    });
    

// async & await

async function sendRequest() {
    try {

        let user = await userFetch(
            '/objects/?prob=20',
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(obj)
            });
            
        user = await userFetch(
            `/objects/${user.id}?prob=20`, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify({...user, age: 33})
            });

        user = await userFetch(
            `/objects/${user.id}?prob=20`,
            {
                method: "DELETE",
               
            });
            
        console.log(`User deleted`);

    } catch(err) {
        console.log(err.message);
    }
}

//Third

const users = [
    {
        firstName: 'Luk',
        lastName: 'Skayuoker',
    },
    {
        firstName: 'Boba',
        lastName: 'Fet',
    },
    {
        firstName: 'Jaja',
        lastName: 'Binks',
    },
];

//fetch
Promise.all(
    users.map(user => userFetch('/objects?prob=5', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, 
        body: JSON.stringify(user)
    }))
)
.then((user) =>{
    Promise.all(
        [1, 2, 3].map((user) => userFetch('/unstable?maxRandom=100?prob=5'))
    )
})
.then((user) =>{
    Promise.all(
        savedUsers.map((user, index) => userFetch(`/objects/${user.id}?prob=5`, 
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }, 
            body: JSON.stringify({...user, age: ages[index]})
        }))
    );
})
.then(() => {
    userFetch('/stable?maxRandom=2?prob=5');
})
.then(() => {
    Promise.all(
        updatedUsers
        .filter((user, index) => index !== luckyUserIndex)
        .map((user, index) => userFetch(`/objects/${user.id}?prob=5`, 
        {
            method: 'DELETE',
        }))
    );
})

.catch((err) => {
    console.log(err.message);
});


// async & await

async function sendRequest() {
    try {
        const savedUsers = await Promise.all(
            users.map((user) => userFetch('/objects?prob=5', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify(user)
            }))
        );

        const ages =  await Promise.all(
            [1, 2, 3].map((user) => userFetch('/unstable?maxRandom=100?prob=5'))
        );

        const updatedUsers = await Promise.all(
            savedUsers.map((user, index) => userFetch(`/objects/${user.id}?prob=5`, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }, 
                body: JSON.stringify({...user, age: ages[index]})
            }))
        );

        const luckyUserIndex = await userFetch('/stable?maxRandom=2?prob=5');

        await Promise.all(
            updatedUsers
            .filter((user, index) => index !== luckyUserIndex)
            .map((user, index) => userFetch(`/objects/${user.id}?prob=5`, 
            {
                method: 'DELETE',
            }))
        );
    } catch (err) {
        console.log(err.message);
    }

}