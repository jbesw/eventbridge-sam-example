const AWS = require('aws-sdk')
AWS.config.update({region: process.env.AWS_REGION})
const eventbridge = new AWS.EventBridge()

exports.lambdaHandler = async (event, context) => {
  // Do some work... processing an invoice! 
  // And now create the event...

  const params = {
    Entries: [ 
      {
        Detail: JSON.stringify({
          "state": "created",
          "id": "123"
        }),
        DetailType: 'New order',
        Source: 'demo.orders',
        Time: new Date 
      }
    ]
  }
  const result = await eventbridge.putEvents(params).promise()

  console.log('--- Params ---')
  console.log(params)
  console.log('--- Response ---')
  console.log(result)
      
}
