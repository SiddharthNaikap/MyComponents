import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import GooglePayButton from "@google-pay/button-react";

import {Form,FormGroup,Label,Col,Button,Input,FormText} from 'reactstrap';
import {Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap';
import {Card,CardTitle,CardText,CardColumns} from 'reactstrap'
import {List} from 'reactstrap'

export default function Wallet (){

    const [balance,setBalance] =useState(0);
    const [amount,setAmount] = useState(0);

 const paymentRequest= {    
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
    {
    type: "CARD",
    parameters: {
    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
    allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
    },
    tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId',
        },
      },
    }
    ],
    merchantInfo: {
    // merchantId: "BCR2DN4TXD44DCY6",
    // merchantName: "Mithra Products"
    merchantId:"siddhumithra@okhdfcbank",
    merchantName: "CT APPointment"
    // merchantId: '17613812255336763067',
    // merchantName: 'Demo Only (you will not be charged)',
    
    },
    transactionInfo: {
    totalPriceStatus: "FINAL",
    totalPriceLabel: "Total",
    checkoutOption: "COMPLETE_IMMEDIATE_PURCHASE",
    totalPrice: amount.toString(),
    currencyCode: "INR",
    countryCode: "IN"
    },
    shippingAddressRequired:true,
    callbackIntents:['PAYMENT_AUTHORIZATION']
    }

const updateBalance =(e) =>{
    setBalance(Number(amount)+Number(balance))
    
  }
//   updateAmount(event){
//     //   this.setState({
//     //     amount:this.state.amount
//     //   })
//     this.state.amount=event.target.value
//     console.log(event.target.value)
//   }

  return(
    <div>
     <CardColumns
     body
     inverse
     style={{
         backgroundColor: '#eef1f1',
         borderColor: '#333',
         width:"62%",
         margin:"auto",
       }}
     >
    <Card
    body
    inverse
    style={{
        backgroundColor: '#04c0c1',
        borderColor: '#333',
        textAlign: 'center'        
      }}
  >
    <CardTitle tag="h1" style={{ textAlign: 'center'}}>
      Wallet Recharge - Wallet Statement
    </CardTitle>
    <CardText tag="h4">
        Wallet Balance :
        <h3>&#8377;{balance}</h3>
    </CardText>
    {/* <Button color="danger">Recharge Wallet</Button> */}
  </Card>
  <Card
   body
   style={{
       backgroundColor: '#f2f2f2',
       borderColor: '#333',
       fontColor:'black',
       textAlign:'center'
       
     }}>

  <Card body style={{margin:"auto",borderColor: '#333',backgroundColor:"#ffffff", position:"relative"}}>
   <Card color="warning" style={{fontSize:"30px", margin:"-16px"}}>Add Money to your wallet</Card>   
                <FormGroup row style={{marginTop:"40px"}}>
                  <Label
                    for="walletAmount"
                    sm={5}
                    
                    >           
                    <h5>Enter Amount :</h5>
                  </Label>
                  <Col sm={7}>
                    <Input
                      id="walletAmount"
                      name="amount"
                      value={amount}
                      placeholder="Enter your Amount"
                      type="number"
                      min="1"
                      onChange={e => setAmount(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <h6>Please Click below button to Recharge your Wallet</h6>
              
                <FormGroup>
                  <Col
                    sm={{
                      offset: 0
                    }}
                  >
                       <GooglePayButton
                        environment="TEST"
                        buttonSizeMode="small"
                        paymentRequest ={paymentRequest}
              
              
                        onLoadPaymentData={paymentData =>{
                         // console.log('TODO: send order to server', paymentData.paymentMethodData,paymentRequest);
                         // alert('TODO: send order to server', paymentData.paymentMethodData,paymentRequest);
                      //    console.log(paymentRequest)
                        }}
                        onPaymentAuthorized={
                            
                          paymentData => {
                            updateBalance()
                            console.log(balance)
                            console.log("Transaction Successful")
                            console.log(`Rupees ${amount} is added to wallet `)
                           // console.log('TODO: send order to server', paymentData.paymentMethodData,paymentRequest);
                            //alert(paymentRequest);
                            // self. close();
                            console.log(paymentData.paymentMethodData)
                            console.log(paymentData)
                            // var nextWin=window.open('http://google.com', '_blank');
                            // nextWin.close();
                            // if(document.URL.match('/\?https://pay.google.com/gp/p/ui/pay/'))
                            //   console.log('matching')
                            // else
                            //   console.log(document.URL)
                            // var newW=window.open('https://pay.google.com/gp/p/ui/pay/')
                            // newW.close()
                          }
                        }
                        
                    />
                  </Col>
                </FormGroup>
                    </Card>
                    
        <Card
        body
        
        style={{
        backgroundColor: '#ffffff',
        borderColor: '#333',
        marginTop:"10px", 
        }}
        >
        <CardTitle tag="h3" style={{ textAlign: 'center'}}>
        Note
        </CardTitle>
        <List type="bullet" style={{ textAlign: 'left',fontSize:"18px"}}>
        <li>
        Balance in the Wallet will be used to book your appointments.
        </li>
        <li>
        Your wallet should have minimum of <b>&#8377;500</b> to book an appointment.
        </li>
        <li>
        Money added to your wallet cannot be refunded, but can be used at any time.
        </li>
        <li>
        Any refundable amount due to appointment cancellation will be added back to your wallet 
        </li>
        </List>
        </Card>
  </Card>

   </CardColumns>
      </div>
    
  )
}
