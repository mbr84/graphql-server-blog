import { Author, View, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    /* REST API */
    getFortuneCookie() {
      return FortuneCookie.getOne();
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    /* mongodb */
    views(post) {
      return View.findOne({ postId: post.id })
             .then((view) => view.views);
    },
  },

};

export default resolvers;
