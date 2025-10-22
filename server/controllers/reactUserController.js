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
module.exports = { addUser }