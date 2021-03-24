import path from 'path';
import express from 'express';
import reload from 'livereload';
import db from './database/initializeDB.js';
import apiRoutes from './routes/apiRoutes.js';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;
const staticFolder = 'public';

// Add some auto-reloading to our server
const liveReloadServer = reload.createServer();
liveReloadServer.watch(path.join(__dirname, staticFolder));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));

app.use('/api', apiRoutes);

async function bootServer() {
  try {
    const mysql = await db.sequelizeDB;
    await mysql.sync();
    app.listen(PORT, () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
