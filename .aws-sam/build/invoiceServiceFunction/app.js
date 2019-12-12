// The Invoice Service Lambda function 

exports.lambdaHandler = async (event) => {

    /* The event contains the order info
       ...
       Does work to create an invoice  */
    console.log('Got an event!')
    console.log(event)
    return {
      'statusCode': 200
    }
}


