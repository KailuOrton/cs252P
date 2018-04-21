import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
  res.send('works!!!!');
});

app.listen(constants.PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(
			`
    Server is running on port: ${constants.PORT}
    ---
    Running on ${process.env.NODE_ENV}
    `,
		);
    console.log(constants);
  }
});