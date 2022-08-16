import styled from 'styled-components'

export const NavList = styled.div`
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    top: -15px;
    width: 95%;
    margin: auto;
    padding-bottom: 50px;
    h2{
        padding: 10px;
        border-bottom: 1px solid #ececec;
    }
    .hotlist{
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 10px;
        border-bottom: 1px solid #ececec;
        img{
            width: 100%;
            height:120px;
        }
        .name{
            color: #333333;
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0 10px 10px 10px;
        }
        .score{
            color: #06c584;
            margin-left: 10px;
            margin-bottom: 10px;
            border: 1px solid #dcdcdc;
        }
        .address{
            color: #333333;
            font-size: 10px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            padding: 0 10px 10px 10px;
        }
        .price{
            color: #ff664b;
            font-size: 18px;
            margin-left: 10px;
            border: 1px solid #ffded0;
        }
    }
`