export default {
  namespaced: true,
  state: () => ({
    name: "송하영",
    email: "merrycoral@gmail.com",
    blog: "blog.naver.com/nagong_ham",
    phone: "010-1234-1234",
    image: require(`~/assets/logo.png`).default,
  }),
};
