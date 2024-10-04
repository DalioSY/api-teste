import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema, root } from '../graphql/userSchema';

const router = Router();

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

export default router;
