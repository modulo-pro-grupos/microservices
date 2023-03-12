import "../styles/App.css"
import { Input, Button } from "@nextui-org/react"
import Table from "./Table"
import Nav from "./Navbar"
import img from "../img/products.jpg"
import instance from "../app/axios"
import Alert from '@mui/material/Alert'
import { AlertTitle } from "@mui/material"


const Main = () => {
  const handleButton = () => {
    const name       = document.querySelector('#name').value
    const department = document.querySelector('#department').value
    const amount     = document.querySelector('#amount').value
    const expiration = document.querySelector('#expiration').value
    const price      = document.querySelector('#price').value
    let product = {
      name,
      department,
      amount,
      expiration,
      price
    }
    instance.post('/newpro', product)
    .then((res) => {
      alert(res.data.message)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  return (
    <div className="grid"> 
      <Nav />
      <div className="container-form sign-up">
        <div className="welcome-back">
          <div className="message">
						<img src={img} alt="" />
          </div>
        </div>

        <form action="" className="form">
          <h2>Create Product</h2>
          <input type="text" placeholder="Name"       id="name"      />
          <input type="text" placeholder="Department" id="department"/>
          <input type="text" placeholder="Amount"     id="amount"    />
          <input type="text" placeholder="yyyy/mm/dd" id="expiration"/>
          <input type="text" placeholder="Price"      id="price"     />
          <Button 
            shadow 
            color="secondary" 
            auto
            onPress={handleButton}
          >
            Register
          </Button>
        </form>
      </div>

			<div className="table">
				<Table />
			</div>
    </div>
  )
}

export default Main
