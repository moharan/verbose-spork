const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull
} = graphql

// Scalar Type
/*
    String = GraphQLString
    int
    Float
    Boolean
    ID
*/

const Person = new GraphQLObjectType({
    name: 'Person',
    description: 'Represent a person type',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type:  new GraphQLNonNull(GraphQLInt)},
        isMarried: {type:  new GraphQLNonNull(GraphQLBoolean)},
        gpa: {type:  new GraphQLNonNull(GraphQLFloat)},

        justAType: {
            type: Person,
            resolve(parent, args) {
                return parent;
            }
        }
    })
});

// RootQuery
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'Description',
    fields: {
        type: Person,
        resolve(parent, args) {
            let personObj = {
                // id: {type: GraphQLID},
                name: 'Antonio',
                age: 34,
                isMarried: true,
                gpa: 4.0,
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
});