# EventBridge Lambda-to-Lambda example

This example SAM application creates two Lambda functions, called invoiceService and orderService. It creates a rule that listens for events and routes to the target, invoiceService.

When the orderService function is invoked, it puts a event onto the EventBridge default event bus. This then invokes the invoiceService target.

Important: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the [AWS Pricing page](https://aws.amazon.com/pricing/) for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

```bash
.
├── README.MD                   <-- This instructions file
├── invoiceService              <-- Source code for a lambda function
│   └── app.js                  <-- Main Lambda handler
├── orderService                <-- Source code for a lambda function
│   └── app.js                  <-- Main Lambda handler
│   └── package.json            <-- NodeJS dependencies and scripts
├── template.yaml               <-- SAM template
```

## Requirements

* AWS CLI already configured with Administrator permission
* [NodeJS 12.x installed](https://nodejs.org/en/download/)

## Installation Instructions

1. [Create an AWS account](https://portal.aws.amazon.com/gp/aws/developer/registration/index.html) if you do not already have one and login.

1. From the command line, run:
```
sam build
sam deploy --guided
```
During the guided SAM process, choose the AWS Region where you want to install this application, and allow the permissions required to complete the installation.

## How it works

When the orderFunction service is executed, it sends an event to the default event bus. This event is evaluated by a event rule created by the application. It then triggers the target Lambda function, invoiceFunction.

The purpose of this application is to show how two separate Lambda functions can interact using an event bus, without direct invocation.

==============================================

Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.

SPDX-License-Identifier: MIT-0