const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: String!
    username: String
  }

  type Pet {
    id: String!
    createdAt: String!
    name: String!
    type: String!
  }

  input PetInput {
    name: String
    type: String
    id: String
  }

  input NewPetInput {
    name: String!
    type: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(id: String): Pet
  }

  type Mutation {
    newPet(input: NewPetInput): Pet!
  }

  type Subscription {
    newPet: Pet!
  }  
`;

module.exports = typeDefs
