const {ApolloServer, gql} = require("apollo-server");


// our type definitions
const typeDefs = gql`

    scalar Date

    type SkiDay {
        id: ID!
        date: Date!
        moutain: String!
        conditions: Conditions
    }

    enum Conditions {
        POWDER
        HEAVY
        ICE
        THIN
    }

    type Query {
        totalDays: Int!
        allDays: [SkiDay!]!
    }

    input AddDayInput {
        date: Date!
        mountain: String!
        conditions: Conditions
    }
    type Mutation {
        addDay(input: AddDayInput!): SkiDay
        removeDay(id: ID!): SkiDay!

    }
`;

// creating appolo server here
const server = new ApolloServer ({
    typeDefs,
    mocks: true
});

// listen 
server.listen().then(({url}) => {
    console.log(`server is running ${url}`);
});