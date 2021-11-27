const bcrypt = require('bcrypt')


const hashAndSalt = ( password ) =>{

    const saltRound = 10
    
    bcrypt.hash(password, saltRound, (err, hash) => {
        
        
        
    })
    
}


const storehash = hashAndSalt("123456789")

console.log(storehash)