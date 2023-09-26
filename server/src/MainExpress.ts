import express, { Express, Request, Response, Application } from 'express'
import dotenv from 'dotenv'
// import { graphqlHTTP } from 'express-graphql'

//Environment Variables
console.log('Hello World!')
dotenv.config()

const app: Application = express()
const port = process.env.PORT || 8000

const dbURI = process.env.MONGODB_URI || ''

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server running on cool port ${port}`)
})