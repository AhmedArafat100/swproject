//Open-Closed-Princple
class appError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

module.exports=appError;