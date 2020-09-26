const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql;

let lists = [
  {
    id: "1",
    title: "Clean up",
    subtitle: "Clean up is Cool",
    image:
      "https://www.plasticfreejuly.org/wp-content/uploads/2019/05/plastic-free-july_Beach-park-clean-up.png",
  },
  {
    id: "2",
    title: "Create TODO",
    subtitle: "I love TODOS",
    image: "https://i.imgur.com/OvMZBs9.jpg",
  },
{
  id: "3",
  title: "Listen to music",
  subtitle: "Open Spotify, search The Beatles and enjoy",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg/274px-Beatles_ad_1965_just_the_beatles_crop.jpg",
}
];

const ListType = new GraphQLObjectType({
  name: "List",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addList: {
      type: ListType,
      args: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        subtitle: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        lists.push({
          title: args.title,
          subtitle: args.subtitle,
          image: args.image,
        });
      },
    },
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    list: {
      type: ListType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return lists.find((list) => list.id == args.id);
      },
    },
    lists: {
      type: new GraphQLList(ListType),
      resolve(parent, args) {
        return lists;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
