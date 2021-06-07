import express, { Router } from 'express';
import resolvers from './resolvers';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.get('/', (req, res) => {
    res.send(
        'Up and running with Graphql. Go to localhost:8080/graphql to visualize it'
    );
});
const root = resolvers;
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.listen(8080, () => {
    console.log('Server running at 8080');
});
