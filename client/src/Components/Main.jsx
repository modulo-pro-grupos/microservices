import "../styles/App.css"
import { Input, Button } from "@nextui-org/react"
import Table from "./Table"
import Nav from "./Navbar"
import img from "../img/products.jpg"

const Main = () => {
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
          <input type="text" placeholder="Name"      />
          <input type="text" placeholder="Department"/>
          <input type="text" placeholder="Amount"    />
          <input type="text" placeholder="Expiration" value="yyyy/mm/dd"/>
          <input type="text" placeholder="Price"     />
          <Button shadow color="secondary" auto>
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
