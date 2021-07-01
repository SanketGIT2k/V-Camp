const { response } = require('express');
const express = require('express');
const router = express.Router()
const signupTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.Password, saltPassword);

    const signedUpUser = new signupTemplateCopy({
        FullName : request.body.FullName,
        UserName : request.body.UserName,
        emailid : request.body.emailid,
        role : request.body.usertype,
        pin: request.body.pin,
        Password : securePassword,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/signup', async (request,response) => {

    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(request.body.Password, saltPassword);
    const email = request.query.email
    const password = request.query.password
    const usertype = request.query.usertype
    const signedInUser = await signupTemplateCopy.find({
        $and:[{"emailid":email},{"role":usertype}]
    })
    response.json(signedInUser)

})



module.exports = router