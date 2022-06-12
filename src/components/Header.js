
import React from 'react'
import { Nav, Container, FormControl, Navbar, Dropdown, Badge, CarouselItem } from 'react-bootstrap'
import {BsMinecart} from 'react-icons/bs'
const Header = () => {
  return (


    <div>
        <Navbar bg='dark' variant='dark' style={{ height : 80 }}  >
            <Container>
  <Navbar.Brand>
    <a href='/'>Shopping cart</a>
  </Navbar.Brand>
  <Navbar.Text className='search'>
    <FormControl style={{ width:400 }} placeholder='Search a product' className='m-auto' />

    

  </Navbar.Text>

  <Nav>
    <Dropdown alignRight></Dropdown>

    <Dropdown.Toggle variant="success" id="dropdown-basic">
        <BsMinecart color='white' fontSize="25px" />
        <Badge>{4}</Badge>
    </Dropdown.Toggle>

    <Dropdown.Menu style={{manWidth:370}}>
        <span style={{padding:10}}>Cart is Empty</span>
    </Dropdown.Menu>
  </Nav>
            </Container>
        </Navbar>


    </div>

  )
}

export default Header
