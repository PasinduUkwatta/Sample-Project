import React, { Component } from "react";
import axios from "axios"

class PaymentDetails extends Component {



    constructor(props) {
        super (props)

        this.state ={
            paymenttype:'',
            paymentamount:'',
            paymentemail:'',
            paymentownername:'',
          
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.history.push('/')
        console.log(this.state)
        axios.post('/payment',this.state)
            .then(response => {
                console.log(response)
                 if(response.data =="Payment Details successfully Entered Into the Database"){
                    this.props.history.push('/')
                    console.log("Thank you For the Payment")
                }
                else{
                    this.props.history.push('/payment')
                    console.log("Please Try Again with Valid Email")

                }
            })
            .catch(error => {
                console.log(error)
            }
            
        )

        }
    
   
    render() {
        const{paymenttype,paymentamount,paymentemail,paymentownername} = this.state

        return (
            <div>
               <div>
               <br /><br /><br /><br /><br />
               <br /><br /><br /><br /><br />
               <br /><br /><br /><br /><br />
               <h3>Previous Payment Details </h3>
           
            
               </div>             
                <div>
                <br />
                <button type="submit" className="btn btn-primary btn-block" action ="detail">Submit Payment Details</button>

                </div>
            </div>
           
                
            
        )
    }
}


export default (PaymentDetails)
