const { green } = require("colors");
const mongoose = require("mongoose");

const connectToDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_DB);
        console.log(
            "connection database : ",
            connect.connection.host.cyan.bold.underline,
            connect.connection.name.bgYellow.bold.underline);
    } catch (err) {
        console.log(err.red.bold.underline);
        process.exit(1);
    }
};

module.exports = connectToDb;