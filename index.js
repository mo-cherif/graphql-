const {ApolloServer, gql,MockList} = require("apollo-server");


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

    type removeDayPayload {
        day: SkiDay!
        removed: Boolean
        totalBefore: Int
        totalAfter: Int
    }

    input AddDayInput {
        date: Date!
        mountain: String!
        conditions: Conditions
    }
    type Mutation {
        addDay(input: AddDayInput!): SkiDay
        removeDay(id: ID!): removeDayPayload!

    }
`;

const mocks = {
    Date: () => "1/11/2003",
    String: () => "❤️",
}

// creating appolo server here
const server = new ApolloServer ({
    typeDefs,
    mocks
});

// listen 
server.listen().then(({url}) => {
    console.log(`server is running ${url}`);
}); 