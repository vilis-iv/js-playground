const routes = [
  {
    method: "*",
    path: "/",
    handler: (req, h) => {
      return "INVALID METHOD";
    },
  },
  {
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "MAIN PAGE";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (req, h) => {
      return "INVALID METHOD";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (req, h) => {
      return "ABOUT PAGE";
    },
  },
  {
    method: "*",
    path: `/{any*}`,
    handler: (req, h) => {
      return "INVALID URL";
    },
  },
  {
    method: "GET",
    path: "/users/{username?}",
    handler: (req, h) => {
      const { username = "USER" } = req.params;
      const { lang } = req.query;

      var greet = "ALOO";

      if (lang === "id") {
        greet = "HALO";
      }

      if (lang === "en") {
        greet = "HELLO";
      }

      return `${greet} ${username}`;
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: (req, h) => {
      const { username, password } = req.payload;

      if (password === "00001") {
        return `Welcome ${username}`;
      } else {
        return `Wrong password, user ${username}`;
      }
    },
  },
];

module.exports = routes;
