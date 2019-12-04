const api = require('./api');

const showPostsForCurrentUser = (userId, cb) => {
  api.getPostsForUser(userId, posts => {
    const postTemplates = posts.map(post => {
      return `
        post.title
        post.body
        post,createdBy
      `;
    });
    cb(postTemplates);
  });
};

const showUserProfile = (userId, cb) => {
  api.getUserById(userId, user => {
    const profile = user.name;
    cb(profile);
  });
};

module.exports = {
  showPostsForCurrentUser,
  showUserProfile,
};
