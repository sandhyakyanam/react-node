const db = require('../config/db');

async function insertUser(requestdata)
{

    try{
        const [rows] = await db.query("INSERT INTO users (firstname,lastname,email,phonenumber,status,profilephoto) VALUES (? , ? , ?, ?, ?, ?)",[requestdata.firstname,requestdata.lastname,requestdata.email,requestdata.phonenumber,requestdata.status,requestdata.profilephoto]);
        return rows;
    }catch(err)
    {
        throw err;
    }
}
async function getAllUserInfo() {
   try {
      const [rows] = await db.query("SELECT * FROM users");
      return rows;
    } catch (err) {
        throw err;
    }
}
module.exports = {insertUser, getAllUserInfo}