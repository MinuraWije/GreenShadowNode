import express from 'express';
import vehicleRoutes from "./routes/vehicleRoutes"
import equipmentRoutes from "./routes/equipmentRoutes"
import logRoutes from "./routes/logRoutes"
import staffRoutes from "./routes/staffRoutes"
import fileUpload from "express-fileupload";

const app =  express();
app.use(express.json());

app.use(fileUpload());

app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', vehicleRoutes);
app.use('/api', equipmentRoutes);
app.use('/api', logRoutes);
app.use('/api', staffRoutes);

app.listen(3000, () => {
    console.log("Server started on port 3000");
});