
module.exports = {

    checkDBStatus: ( status )=>{
        switch(status) {
            case 0:
                return ' DISCONNECTED '
            case 1:
                return ' CONNECTED'
            case 2:
                return ' DISCONNECTED'
            default:
                return console.error('An error has occurre')
        }
    }


}