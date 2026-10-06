import { ZodError } from "zod"


export default (err, req, res, next) => {
    let status = null
    let message = null
    if (err instanceof ZodError) {
        status = 422
        message = err.issues[0].message
        console.log(err);
        
    }
    else if (err.status && err.message) {
        status = err.status
        message = err.message
    }
    else {
        status = 500
        message = "server internal error"
    }
    res.status(status).json(message)
}