const express = require('express');
const cors = require('cors');
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.json({ message: "Test"})
})

const db = require("./app/models");
const Role = db.role;
const dbConfig = require("./app/config/db.config")
db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}` , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Succesfully connected to MongoDB.");
        initial()
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    })

require("./app/routes/auth.routes");
require("./app/routes/user.routes");
require("./app/routes/product.routes");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});


function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'admin'
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles")
            });
        }
    });
}