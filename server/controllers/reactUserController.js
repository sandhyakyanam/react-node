const userModel = require('../models/reactUseModel');


async function addUser(req, res) {
    try{
        let userdata = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phonenumber : req.body.phonenumber,
            profilephoto : req.file.filename,
            status : req.body.status 
        }
        insertedData = await userModel.insertUser(userdata);
        if(insertedData.affectedRows && insertedData.insertId)
        {
            res.status(200).json({
                'message': 'User added successfully'
            })
        }else {
            res.status(500).json({
                message: 'User has not added successfully'
            })
        }
    }catch(err){
        res.status(500).json({
            messgae: 'Not uploaded Successfully',
            err: err.message
        })
    }
   
}
async function getUsers(req, res) {

    try {
        const getuserdata = await userModel.getAllUserInfo();
        if (getuserdata) {
            res.status(200).json({
                message: 'User Data Found',
                data : getuserdata
            })
        } else {
            res.status(500).json({
                message: 'User Data Not Found'
            })
        }
        
    } catch (err) {
        req.status(500).json({
            messgae: 'No User Data Found',
            err: err.message
        })
    }
}
async function editUser(req,res)
{
    try{
       const userid = req.params.id;

       if(userid)
       {
          checkUserExists = await userModel.checkUserExists(userid);
          if(checkUserExists[0].id)
          {
            let userdata = {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                phonenumber : req.body.phonenumber,
                profilephoto : req.file.filename,
                password : req.body.password,
                status : req.body.status,
                id : userid
            }
            editData = await userModel.editUserData(userdata); 
          }
       }

    }
    catch (err){
      res.status(500).json({
        message : 'Something went wrong',
        err : err.message
      })
    }
}
module.exports = { addUser, getUsers, editUser}