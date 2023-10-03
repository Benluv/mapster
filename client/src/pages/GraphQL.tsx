import DefaultLayout from "../layouts/DefaultLayout";
import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { Link, Route } from "react-router-dom";
import client from "../utils";

const GET_FEED = gql`
    query GetFeed {
        feed {
            id
            url
            description
            comments {
            id
            body
            }
        }
}
`

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_FEED)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>

    return data.feed.map(({ id, url, description, comments }: any) => (
        <div key={id}>
            {/* returns http://localhost:5173/url instead of url itself */}
            <a href={url}  target="_blank" className='text-xl'>{url}</a>
            <p>{description}</p>
            {comments.map(({ id, body }: any) => (
                <div key={id}>
                    <p>{body}</p>
                </div>
            ))}
            <br/>
        </div>
        ))
}

export default function GraphQL () {
    return (
        <>
            <DefaultLayout>
                <ApolloProvider client={client}>
                    <div>
                        <h2>My first Apollo app 🚀</h2>
                        <br/>
                        <DisplayLocations />
                    </div>
                </ApolloProvider>
            </DefaultLayout>
        </>
    )
}