import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:#f6f6f6;
    padding-top:2.815rem;
`

export const Head = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#ffffff;
    display:flex;
    padding:.3125rem 0;
    justify-content:space-between;
    height:2.8125rem;
    z-index:10;
    margin-bottom: 20px;
    a {
        font-size: 17px;
        padding: 0 10px 0 10px;
        color: #313131;
        :nth-child(1){
            color: #06c584;
            font-weight: bold;
        }
        &.active {
            color: #06c584;
            border-bottom: 2px solid #06c584;
            font-weight: bold;
        }
    }
`

export const Navbar = styled.div`
    background-color: #06c584;
    height: 140px;
    position: relative;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 180px;
        height: 40px;
        margin-top: -20px;
        margin-left: -90px;
    }
`