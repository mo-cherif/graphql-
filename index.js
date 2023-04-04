const {ApolloServer, gql} = require("apollo-server");


// our type definitions
const typeDefs = gql`

    type SkiDay {
        id: ID!
        date: String!
        moutain: String!
    }
    type Query {
        totalDays: Int!
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