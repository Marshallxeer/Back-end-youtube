class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somthing want wrong",
        error =[],
        statusCode =""
    ){
        super(message)
        this.statusCode = statusCode
        this.data =null 
        this.message=message
        this.success=false;
        this.error= this.error

        if (stack) {
            this.stack=stack
        } else {
            error.captureStackTrace(this,this.constructor)
        }
    }
}

        export {ApiError}