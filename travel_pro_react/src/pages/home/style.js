import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color:#f6f6f6;
    padding-top:3.4375rem;
`

export const SearchHeader = styled.div`
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
    .citygps{
        position: relative;
        display: flex;
        justify-content:space-between;
        span{
            font-size: 1.125rem;
            font-weight: 500;
            color: #00c777;
            padding-left: .625rem;
        }
        .img{
            padding: .625rem .625rem 0 .3125rem;
        }     
    }
    .searchgroup{
        flex:1;
        display: flex;
        position:relative;
        height: 1.875rem;
        line-height: 1.875rem;
        border-radius:1.25rem;
        background-color:#f4f4f4;
        border:0;
        padding:.3125rem 0 0 2.5rem;
        h2{
            position: absolute;
            top: 0;
            left: 4rem;
            color: #93989f;
            font-weight: 550;
            font-size:.875rem;
        }
        img{
            width: 1rem;
            height: 1rem;
            position: absolute;
            top: .5rem;
            left: 2.5rem;
        }
    }
    .mine{
        padding-left: .625rem;
        img{
            width: 60%;
        }
    }
`
export const Navbar = styled.div`
    padding: 20px;
    background-color: #fff;
    .list1{
        display: grid;
        grid-template-columns: repeat(4, 25%);
        text-align: center;
        img{
            width: 60px;
            display: inline-block;
        }
        p{
            font-size: 14px;
            padding-top: 8px;
        }
    }
    .list2{
        display: grid;
        grid-template-columns: repeat(5, 20%);
        grid-row-gap: 20px;
        text-align: center;
        img{
            width: 40px;
            display: inline-block;
        } 
    }
`

export const NavWrapper = styled.div`
    background-color: #fff;
    margin-top: 16px;
    .list3{
        display: grid;
        grid-template-columns: repeat(2, 50%);
        li{
            position: relative;
            padding: 16px;
            img{
            position: absolute;
            right: 10px;
            top: 16px;
            width: 50px;
            }
            p{
                color: #ebb73f;
                height: 20px;
                font-size: 2px;
                line-height: 20px;
                border: 1px solid #ebb73f;
                padding: 0 8px;
                display: inline-block;
                border-radius: 16px;
                margin-top: 10px;
            }
        }
    }
    img{
        width: 100%;
    }
`

export const NavList = styled.div`
    background-color: #fff;
    margin-top: 16px;
    h2{
        text-align: center;
        margin-bottom: 16px;
    }
    .hotlist{
        display: grid;
        grid-template-columns: repeat(2, 50%);
        text-align: center;
        li{
            position: relative;
            p{
                position: absolute;
                bottom: 16px;
                left: 16px;
                color: #fff;
                font-family: sans-serif;
            }
            span{
                position: absolute;
                top: 8px;
                left: 8px;
                background: #fc5446;
                color: #fff;
                font-size:14px;
            }
            img{
            width: 100%;
            display: inline-block;
            border-radius:16px;
            padding: 8px;
            }
        }  
    }
    
`
