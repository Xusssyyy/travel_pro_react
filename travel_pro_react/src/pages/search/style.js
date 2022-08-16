import styled from "styled-components";

export const Wrapper = styled.div`
    /* background-color:#f6f6f6; */
    background-color:#ffffff;
    padding-top:2.8125rem;
    
`

export const SearchHead = styled.div`
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
    .icon{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center; 
        position:relative;
        span{
            font-size:24px;
            color: #06c584;
        }
    }
    .searchwrapper{
        flex:6;
        position:relative;
        border-radius:1.25rem;
        border:.0625rem solid #eaedf1;
        background-color: #eaedf1;
        margin-right: 24px;
        input {
            border:0;
            background-color:transparent;
            padding:.3125rem 0 0 4.5rem;
            font-size:1.125rem;
            font-size:1.0625rem;
        }
        img{
            width: 1rem;
            height: 1rem;
            position: absolute;
            top: .5rem;
            left: 2.5rem;
        }
    }
`

export const NavSearch = styled.div`
    padding: 16px;
    height: 621px;
    h3{
        color: #999999;
    }
    .hot{
        display: grid;
        grid-template-columns: repeat(3, 30%);
        span{
            display: inline;
            font-size: 16px;
            /* 文字居中显示
            display:flex;
            flex-direction: row;
            justify-content: space-around; 
            align-items: center; */
            text-align: center;
            margin: 10px;
            padding: 5px 0 5px 0;
            background-color: #f5f5f5;
        }
    }
`