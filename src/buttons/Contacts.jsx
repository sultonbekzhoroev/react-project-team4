import React from "react"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FormGroup} from "reactstrap";
import {Form} from "reactstrap";
import {Input } from "reactstrap";
import {Label } from "reactstrap";
import { Button } from "reactstrap";
function Contacts(){
    return(
        <div className='nav-container'>
         <h1>Contact us</h1>
         <Form className='address-form'>
         <FormGroup>
                 <Input
                 placeholder="Name" type="text"/>
             </FormGroup>
             <FormGroup>
                 <Input
                 placeholder="Last name" type="text"/>
             </FormGroup>
             <FormGroup>
                 <Input
                 placeholder="email" type="email"/>
             </FormGroup>
             <FormGroup>
                 <Input
                 placeholder="phone number" type="text"/>
             </FormGroup>
             <FormGroup>
             <Label for="text">
                 Leave a message 
             </Label>
             <Input name="text" type="textarea"/>
             </FormGroup>
             <Button>
                 Submit
             </Button>
         </Form>
         <div className="icon">
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large"/>
          <FacebookIcon fontSize="large"/>
          </div>
        </div>
    
    )
}
export default Contacts
