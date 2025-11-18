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
async function checkUserExists(id)
{
   try{
     const [rows] = await db.query("SELECT id FROM users where id = ?",[id]);
     return rows;
   } catch(err)
   {
      throw err;
   }
}
async function editUserData(requestdata)
{
    try{
        const [rows] = await db.query(
            "UPDATE users SET firstname = ?, lastname = ?, email = ?, phonenumber = ?, status = ?, profilephoto = ? WHERE id = ?",
            [requestdata.firstname, requestdata.lastname, requestdata.email, requestdata.phonenumber, requestdata.status, requestdata.profilephoto, requestdata.id]
          );
    }catch(err)
    {
        throw err;
    }
}
module.exports = {insertUser, getAllUserInfo, checkUserExists,editUserData}