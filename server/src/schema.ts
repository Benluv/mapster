import { makeExecutableSchema } from '@graphql-tools/schema'
import type { Link } from '@prisma/client' // npx prisma migrate dev
import type { GraphQLContext } from './context'

const typeDefinitions = /* GraphQL */ `
    type Query {
        info: String!
        feed: [Link!]!
        link(id: ID): Link
        comment(id: ID!): Comment
    }

    type Link {
        id: ID!
        description: String!
        url: String!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        body: String!
        link: Link
    }

    type Mutation {
        postLink(url: String!, description: String!): Link!
        postCommentOnLink(linkId: ID!, body: String!): Comment!
    }
`

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: async (parent: unknown, args: {}, context: GraphQLContext) => context.prisma.link.findMany(),
        // like the above structure a bit better
        async comment(parent: unknown, args: { id: string }, context: GraphQLContext) {
            return context.prisma.comment.findUnique({
                where: { id: parseInt(args.id)}
            })
        },
        async link (parent: unknown, args: { id: string }, context: GraphQLContext) {
            return context.prisma.link.findUnique({
                where: { id: parseInt(args.id)}
            })
        }
    },
    Link: {
        id: (parent: Link) => parent.id,
        description: (parent: Link) => parent.description,
        url: (parent: Link) => parent.url,
        comments(parent: Link, args: {}, context: GraphQLContext) {
            return context.prisma.comment.findMany({
                where: { linkId: parent.id }
            })
        }
    },
    Comment: {
        link(parent: Link, args: {}, context: GraphQLContext) {
            return context.prisma.link.findFirst()
        }
    },
    Mutation: {
        async postLink(
            parent: unknown, 
            args: { description: string; url: string },
            context: GraphQLContext
        ) {

            const newLink = await context.prisma.link.create({
                data: {
                    url: args.url,
                    description: args.description
                }
            })
            return newLink
        },
        async postCommentOnLink(
            parent: unknown,
            args: { linkId: string, body: string },
            context: GraphQLContext
        ) {
            const newComment = await context.prisma.comment.create({
                data: {
                    linkId: parseInt(args.linkId),
                    body: args.body,
                }
            })

            return newComment
        }
    }
}

export const schema = makeExecutableSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})