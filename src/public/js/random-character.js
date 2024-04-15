function generateRandomString(length){
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += character.charAt(Math.floor(Math.random() * character.length))
    }
    return result
}

document.getElementById('generate-key').addEventListener('click', () => {
    document.getElementById('key').value = generateRandomString(32)
})

document.getElementById('generate-iv').addEventListener('click', () => {
    document.getElementById('iv').value = generateRandomString(16)
})