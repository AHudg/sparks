import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema/index.js";
import db from "./config/connection.js";

// assigns port and creates the express application
const PORT = process.env.PORT || 3001;
const app = express();

// boilerplate: parses incoming JSON reqs and puts it in req.body
app.use(express.json());
// boilerplate: URL-encoded data will be parsed w/ qs lib allowing nested objs from query strings
// does not filter out ? from the query string
app.use(express.urlencoded({ extended: true }));

// TODO: we check if Node environment is in production, if so express is told to serve any files in React app's buiild directory in client folder
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../client/build")));
//   }

// wildcard GET route- if a location is requested that doesn't have explicit route defined, respond w/ the production-ready REACT code
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

async function startApolloServer() {
  // Create a new instance of the Apollo server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
}

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
