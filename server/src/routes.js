module.exports = (app) => {
  app.route("/singup").get((req, res) => {
    res.send("singup route");
  });

  app.route("/login").get((req, res) => {
    res.send("Login route");
  });

};
