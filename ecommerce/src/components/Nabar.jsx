import React from 'react'
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';


const Container = styled.div`
 height: 60px;  


`


const Logo = styled.h1`
font-weight: bold;
text-align: center;
`

const Langauage = styled.div`
font-size: 14px;
cursor:pointer;

`

const Wrapper = styled.span`
display: flex;
padding: 10pa 20px;
justify-content: space-between;
align-items:center;


`

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items:center;
margin-left: 25px;
padding: 5px;

`
const Input = styled.input`
border: none;

`

const Left = styled.div`
flex:1;
display: flex;
align-items:center;
`
const Center = styled.div`
flex:1;
`
const Right = styled.div`
display:flex;
flex:1;
justify-content: flex-end;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: poinert;
margin-left: 25px;


`

const Nabar = () => {
    return (
        <Container>

            <Wrapper>

                <Left>
                    <Langauage>
                        EN
                   </Langauage>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center><Logo>
                    ECOM
                </Logo>
                </Center>
                <Right>
                    <MenuItem>Register </MenuItem>
                    <MenuItem>Signin </MenuItem>
                    <MenuItem> <Badge badgeContent={1} color="secondary">
                        <ShoppingCartOutlined />
                    </Badge></MenuItem>
                </Right>


            </Wrapper>
        </Container>
    )
}

export default Nabar
