import React from 'react'
import logo from '../Images/app_bg.png'
import firebase from '../firebase'

function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script')
        script.src = src

        script.onload = () => {
            resolve(true)
        }

        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export default function Payment() {

    async function displayRazorpay() {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if(!res){
            alert('Page not loaded. Are you online?');
            return
        }

        var getData = firebase.functions().httpsCallable('payment');
        getData({amount:1,receipt:'receipt'}).then(function(result){
            const options = {
                "key": "rzp_test_hTjjOef8p7eYTN", // Enter the Key ID generated from the Dashboard
                "amount": result.data.amount, 
                "currency": "INR",
                "name": "Pidgin",
                "description": "Test Transaction",
                "image": logo,
                "order_id": result.data.order_id,
                "handler": function (response) {
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
                "theme": {
                    "color": "#51F086"
                }
            };

            const paymentObject = new window.Razorpay(options)

            paymentObject.open()
        }).catch(function(error){
            console.log(error)
        })

        
    }

    return (
        <React.Fragment>
            <div className='wrap' >
                <div>
                    <button onClick={displayRazorpay} >
                        Pay
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}