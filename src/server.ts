import { app } from './app';
require("dotenv").config();

app.listen(3333, () => { console.log('Server is running') });
