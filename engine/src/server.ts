import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { json } from 'body-parser';
import express from 'express';
import graph from './graphql';

async function start() {
  const app = express();
  await graph.start();

  app.use(cors());
  app.use(json());
  app.use('/graphql', expressMiddleware(graph));

  app.listen(3000, () => {
    console.log('Server is running');
  });
}

start();
