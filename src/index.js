const app = require('./app')

const port = 4000

app.listen(port, () => [
    console.log(`Running on port http://localhost:${port}`)
])