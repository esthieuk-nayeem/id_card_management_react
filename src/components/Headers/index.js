import React from 'react'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import logo from "../../assets/images/naztech2.png";
import { Link, useLocation } from 'react-router-dom';


const Header = ()  => {

  const {pathname} = useLocation();

  console.log("location", pathname)

  return (
    <Menu style={{background: 'white'}} secondary pointing>
   

        <Image as={Link} to="/"  src={logo} width={150}/>
        <Menu.Item as={Link} to="/" style={{color:'blue',fontSize:22}}>Employee ID card Management</Menu.Item>
        
        {pathname === "/"  &&(
        <Menu.Item position='right'>
          <Button as={Link} to="/employee/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Employee
          </Button>
          </Menu.Item>)}

          {pathname === "/" && (

        <Menu.Item><Button color='red' basic icon>
            <Icon name="log out"></Icon>
            Logout
          </Button></Menu.Item>
          )}
         
    </Menu>
  )
}

export default Header