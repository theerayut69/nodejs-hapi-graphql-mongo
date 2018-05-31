const schema = `
  type User {
    id: ID!
    email: String!
  }
  type Query {
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User
  }
  schema {
    query: Query
  }
`;

module.exports = schema;