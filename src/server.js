/* eslint-disable prettier/prettier */
import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 App is running at port ${port}...`);
});
