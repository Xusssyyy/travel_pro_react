import styled from "styled-components"

export const Navbar = styled.div`
    padding: 8px;
    background-color: #fff;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    .list1{
        display: grid;
        grid-template-columns: repeat(4, 25%);
        text-align: center;
        img{
            width: 30px;
            display: inline-block;
        }
    }
`