import React from 'react'
import '../CSS/Pages/Cart.css'
import Footer from '../Components/Footer'
import firebase, { rdb } from '../firebase'
import MyAppBar from '../Components/AppBar'
import MappBar from '../Components/mAppBar'
import { Button } from '@material-ui/core'


function loadScript(src) {
	return new Promise((resolve) => {
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


class CartPage extends React.Component {
    state = {
        cart: [],
        user: null,
        total_amount: 0,
    }

    displayRazorpay = async () => {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:4000/pidgin/cart', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: "rzp_test_YkaGnE7ZDrAhTW",
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name:"Name",
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                rdb.ref().child("carts").child(user.uid).on('value', snap => {
                    var item = []
                    snap.forEach(doc => {
                        item.push(doc.val())
                    })
                    this.setState({ cart: item })

                    //getting total amount
                    var total = 0;
                    for (var i = 0; i < item.length; i++) {
                        total = total + item[i].price;
                    }
                    this.setState({ total_amount: total })
                    //
                })
            }
        })
    }

    render() {

        return (
            <React.Fragment>
                <MyAppBar/>
                <div className="mobile" >
                    <MappBar/>
                </div>
                <div className="wrap" style={{ backgroundColor: "white" }} >
                    <div className="cart-container" >
                        <div style={{ borderBottom: "solid 1px #202020", padding: "20px 0px" }} >
                            <h1>
                                Your CART
                        </h1>
                        </div>

                        <table className="cart-items" >
                            <tr className="cart-items-header" >
                                <th>
                                    Name Of The Course
                                    </th>
                                <th>
                                    Number Of Students
                                    </th>
                                <th>
                                    Total Price
                                    </th>
                            </tr>
                            {
                                this.state.cart &&
                                this.state.cart.map(item => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                <input defaultValue={1} />
                                            </td>
                                            <td>
                                                {item.price}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        <div className="wrap" >
                            <Button onClick={this.displayRazorpay} >
                                Pay
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mobile" >

                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default CartPage;