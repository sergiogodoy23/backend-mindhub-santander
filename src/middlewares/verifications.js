


const verifications = {
    // verifyAuth: (req, res, next) => {
        
    //     if (req.isAuthenticated()) {
    //         next()
    //     } else {
    //         res.send("No estas autenticado")
    //     }

    // },

   verifyId: (req, res, next) => {
        
     const {id} = req.params;

        if(!id){
            return res.status(400).json({
                message: "Id are required"
            })
        }
        next()
    },


    verifyData: (req, res, next) => {

        const events = req.body

        if (!events) {
            return res.status(400).json({
                message: "events required"
            })
        }
        
        next()
    },
}

module.exports = verifications