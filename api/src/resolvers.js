/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

const NEW_PET = "NEW_PET"

module.exports = {
  Query: {
    pets(_, payload = {}, context) {
      return context.models.Pet.findMany(payload.input) || []
    },

    pet(_, payload = {}, context) {
      return context.models.Pet.findOne({ id: payload.id })
    }
  },
  Mutation: {
    newPet(_, payload = {}, context) {
      const pet = context.models.Pet.create(payload.input)

      context.pubsub.publish(NEW_PET, {
        newPet: pet
      })

      return pet
    },
  },
  Subscription: {
    newPet: {
      subscribe: (_, __, context) => context.pubsub.asyncIterator(NEW_PET)
    }
  }
}
