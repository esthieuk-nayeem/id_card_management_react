import React from 'react'
import { Grid ,Header as SHeader , Segment, Form , Button  } from 'semantic-ui-react'

import Header from '../../components/Headers'


const RegisterUI = ({form:{onChange,form,registerFormValid, onSubmit}}) => {

 


  return (

    <div>
    <Header/>

    <Grid centered>
        <Grid.Column style={{maxWidth: 550, marginTop: 20}}>

        <SHeader> Signup Here </SHeader>

        <Segment>

            <Form>
                <Form.Field>
                    <Form.Input 
                    value = {form.username || ""}
                    onChange = {onChange}
                    name= "username"
                    placeholoder= "Username"
                    label = "Username"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                    value = {form.firstname || ""}
                    onChange = {onChange}
                    name= "firstname"
                    placeholoder= "First Name"
                    label = "First Name"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                    value = {form.lastname || ""}
                    onChange = {onChange}
                    name= "lastname"
                    placeholoder= "Last Name"
                    label = "Last Name"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                    value = {form.email || ""}
                    onChange = {onChange}
                    name= "email"
                    type = "email"
                    placeholoder= "Email"
                    label = "Email"
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                    value = {form.password || ""}
                    onChange = {onChange}
                    name= "password"
                    type='password'
                    placeholoder= "Password"
                    label = "Password"
                    />
                </Form.Field>

                <Button onClick={onSubmit} disabled={registerFormValid} fluid primary >
                    Submit
                </Button>
                
            </Form>

            
            
        </Segment>

        </Grid.Column>
    </Grid>


  
</div>
  )

}

export default RegisterUI