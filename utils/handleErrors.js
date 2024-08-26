const handleErrors = (res, message, statusCode = 500) => {
    res.status(statusCode).json({
      success: false,
      message,
    });
  };
  
  export default handleErrors;
  