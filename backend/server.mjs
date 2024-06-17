import express from 'express';
import dbCon from './utilis/db.mjs';
import dotenv from 'dotenv';
import routers from './routes/route.mjs';
import cors from 'cors';

dotenv.config();
const app = express();

// mongodb
dbCon();

//excel-mogodb-connection
app.use(express.json());
app.use(cors()); // pour les données en
// app.use('/', (req, res) => {
//     res.send("hello fuck")
// })
app.use('/api', routers);
// app.use('/get', routers);
// app.use('/update/:id', routers);
// app.use('/deleteUser/:id', routers);
// app.use('/importUser', routers)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
