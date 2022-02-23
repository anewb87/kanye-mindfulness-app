const getQuote = () => {
    return fetch('https://api.kanye.rest/')
    .then(response => checkResponse(response))
}

const getUser = () => {
    return fetch('http://localhost:4020/')
    .then(response => checkResponse(response))
}

const updateUser = (newPost) => {
    return fetch('http://localhost:4020/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
    .then(response => checkResponse(response))
}


const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`You don't got the answers. Come back later.`)
    } else {
        return response.json()
    }
}

export { getQuote, getUser, updateUser }