const graphql = require("graphql");
var _ = require("lodash");

// model
const User = require("./model/user");
const Hobby = require("./model/hobby");
const Post = require("./model/post");

// dummy data
// var usersData = [
//     {id: '1', name: 'Bob', age:36, profession:'actor'},
//     {id: '2', name: 'Ana', age:6, profession:'actor'},
//     {id: '3', name: 'Rangi', age:76, profession:'actor'}
// ];

// var hobbiesData = [
//     {id: '1', title: 'running', description:'bal bla bla 1', userId: '3'},
//     {id: '2', title: 'cleaning', description:'bal bla bla 2', userId: '3'},
//     {id: '55', title: 'washing', description:'bal bla bla 55', userId: '3'},
//     {id: '12', title: 'singing', description:'bal bla bla 12', userId: '1'}
// ]

// var postData = [
//     {id: '1', comment:'bal bla bla 1', userId: '1'},
//     {id: '2', comment:'bal bla bla 2', userId: '2'},
//     {id: '3', comment:'bal bla bla 3', userId: '2'},
// ]

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

//create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "  Documentation for user...",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },

    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({ userId: parent.id });
        // return _.filter(postData, {userId: parent.id})
      },
    },

    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return Hobby.find({ userId: parent.id });
        // return _.filter(hobbiesData, {userId: parent.id})
      },
    },
  }),
});

const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "  Documentation for hobby...",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLInt },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById({ userId: parent.id });
        // return _.find(usersData, {id: parent.userId})
      },
    },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "  Documentation for POST...",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById({ userId: parent.id });
        // return _.find(usersData, {id: parent.userId})
      },
    },
  }),
});

//RootQuery
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },

      resolve(parent, args) {
        return User.findById({ userId: parent.id });
        // return _.find(usersData, {id: args.id});
        // return data from a datasource
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find({});
      },
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return Hobby.findById(args.id);
      },
    },
    hobbies: {
      type: new GraphQLList(HobbyType),
      resolve(parent, args) {
        return Hobby.find({ id: args.userId });
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        return Post.findById(args.id);
        // return _.find(postData, {id: args.id});
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find({});
      },
    },
  },
});

//mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    CreateUser: {
      type: UserType,
      args: {
        //id: {type: GraphQLID}
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        profession: { type: GraphQLString },
      },

      resolve(parent, args) {
        let user = User({
          name: args.name,
          age: args.age,
          profession: args.profession,
        });
        return user.save();
      },
    },
    CreatePost: {
      type: PostType,
      args: {
        comment: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },

      resolve(parent, args) {
        let post = Post({
          comment: args.comment,
          userId: args.userId,
        });
        return post.save();
      },
    },
    CreateHobby: {
      type: HobbyType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        userId: { type: new GraphQLNonNull(GraphQLString) },
      },

      resolve(parent, args) {
        let hobby = Hobby({
          title: args.title,
          description: args.description,
          userId: args.userId,
        });
        return hobby.save();
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
