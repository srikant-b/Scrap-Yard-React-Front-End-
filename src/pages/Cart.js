import React from 'react'
import Base from '../components/Base'
import { CartState } from '../context/Context'
import { AiFillDelete } from "react-icons/ai";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cart = () => {
    let num = 0;
    const { state: { cart }, dispatch } = CartState()
    return (
        <>
            <Base></Base>
            <div className="container mt-5 mb-5">
                <h3 className="d-flex justify-content-center fg-default-1">Cart</h3>
            </div>
            {
               cart.length===0?
               (
                <div className="container col-4">
               <Link to="/scrapMaterial">
                <div className="form-group d-grid mt-2 me-2 ms-2 mb-5">
               <Button className="btn " >
                 Please Add Scrap-Material
               </Button>
               </div>
             </Link>
             </div>
             ):
               
               (
            <div className="container col-6">
                <table className="table table-bordered fs-4" >
                    <thead >
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {cart.map(prod => (

                        <tbody key={prod.id}>
                            <tr>
                                <th scope="row">{++num}</th>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td> <AiFillDelete
                                    fontSize="20px"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })
                                    }

                                />
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <div className="form-group d-grid mt-2 me-2 ms-2 mb-5">
                    <Button>Process To Checkout</Button>
                </div>
            </div>
            )}

        </>
    )
}

export default Cart