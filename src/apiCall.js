const getQuote = () => {
    return fetch('https://api.kanye.rest/')
    .then(response => checkResponse(response))
    
}

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(`You don't got the answers. Come back later.`)
    } else {
        return response.json()
    }
}

export { getQuote }