import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button, NavItem, NavLink, Dropdown, Badge } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { doLogout, getCurrentDetail, isLoggedIn } from '../authentication/Login';
import { FaShoppingCart } from 'react-icons/fa'

import { toast } from 'react-toastify';
import { CartState } from '../context/Context';
import { AiFillDelete } from "react-icons/ai";

const ScrapYardNavbar = () => {
  let num = 0;


  const {
    state: { cart },
    dispatch,
  } = CartState();

  let navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentDetail)
  }, [login])

  const logout = () => {
    doLogout(() => {
      setLogin(false)
      navigate("/home");
      toast.success("Logout");
    })
  }
  return (
    <>

      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/home">ScrapYard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="">
            {
              login && (
                <>


                  <Dropdown >
                    <Dropdown.Toggle variant="secondary">
                      <FaShoppingCart color="white" fontSize="25px" />
                      {/* <Badge className='badge-secondary'>{10}</Badge>*/}
                      <span className="badge badge-light">{cart.length}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                      {cart.length > 0 ?
                        (<>
                          <table class="table" >
                            <thead class="thead-dark">
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
                          <Link to="/Cart">
                            <Button className="btn btn-dark" style={{ width: "95%", margin: "0 10px" }}>
                              Go To Cart
                            </Button>
                          </Link>
                        </>) :
                        (<span style={{ padding: 10 }}
                        >Cart is Empty !</span>)}

                    </Dropdown.Menu>
                  </Dropdown>


                  <Button onClick={logout} variant="secondary">Logout</Button>
                  <NavItem>
                    <NavLink>
                      {user.email}
                    </NavLink>
                  </NavItem>
                </>
              )
            }
            {
              !login && (
                <>
                  <Button as={Link} to="/logi" variant="secondary">Login</Button>
                  <Button as={Link} to="/signup" variant="secondary">SignUp</Button>
                </>
              )
            }

          </Nav>
        </Container>
      </Navbar>
      <Outlet />

    </>


  )
}

export default ScrapYardNavbar