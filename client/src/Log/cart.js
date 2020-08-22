import React from 'react'
import step from '../Images/steps.png'
import '../Components/class.css'
import firebase,{rdb } from '../firebase'
import Razorpay from 'razorpay'

class MyCart extends React.Component {
    state = {
        cart: [],
        total_amount:0,
    }

    componentDidMount() {
        const razorpay = new Razorpay({
            key_id: 'rzp_test_hTjjOef8p7eYTN',
            key_secret: 'JWCALceNpTHpdu5utAvbhEb5',
        })
        const options = {
            amount: (500 * 100).toString(),
            currency:"INR",
            receipt: "r",
            payment_capture: 1
        }

        try {
            var order_created = []
            
            razorpay.orders.create(options, function(err, order) {
                order_created.push(order)
              });
              console.log(order_created)
        }catch(e){
            console.log(e)
        }
        
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                rdb.ref().child("carts").child(user.uid).on('value', snap =>{
                    var item = []
                    snap.forEach(doc=>{
                        item.push(doc.val())
                    })
                    this.setState({cart:item})

                    //getting total amount
                    var total = 0;
                    for(var i = 0; i < item.length ; i++){
                        total = total + item[i].price;
                    }
                    this.setState({total_amount:total})
                    //
                })
            }
        })
    }

    deleteItem = (title) => {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                rdb.ref().child("carts").child(user.uid).child(title).remove();
            }
        })
    }

    createOrder = () => {
        var payment = firebase.functions().httpsCallable('payment');
        payment({amount: 1000, reciept: "This is reciept"})
    }

    render() {
        if (this.state.cart.length === 0) {
            return (
                <div className="sticky" >
                    <div className="grad" >
                        Book Now
                    </div>
                    <img src={step} width="350px" alt="s" />
                </div>
            )
        }

        return (
            <div className="sticky" >
                <div className="grad" >
                    Your Cart
                </div>
                <div style={{ padding: "10px", border: "solid 1px grey", borderTop: "none", minHeight: "60vh", borderRadius: "0px 0px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                    <div>
                        {
                            this.state.cart &&
                            this.state.cart.map(item => {
                                return <div className="cart-item" >
                                    <div>
                                        <img src={item.image} alt="s" width="100px" />
                                    </div>
                                    <div style={{ width: "200px", marginLeft: "5px" }} >
                                        <div>
                                            {item.title}
                                        </div>
                                        <div className="class-button" style={{ width: "fit-content", color: "#f05f7f" }} onClick={()=>{this.deleteItem(item.title)}} >
                                            - DELETE
                                        </div>
                                        <div style={{fontSize:"12px",margin:"10px 0px"}} >
                                            <b>Mode:</b> {item.mode}
                                        </div>
                                        <div style={{fontSize:"12px"}}>
                                            <b>Type:</b> {item.type}
                                        </div>
                                    </div>
                                    <div>
                                        &#8377;{item.price}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }} >
                            <div>
                                <b>Total</b>
                            </div>
                            <div>
                                &#8377;{this.state.total_amount}
                            </div>
                        </div>
                        <div className="class-checkout-button" onClick={() => { console.log(this.state.cart) }} >
                            CHECKOUT
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;