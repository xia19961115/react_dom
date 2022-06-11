import styled from 'styled-components'
import { Button as button } from 'antd';
export const Button = styled(button)`
    background-color: #ff0;
    color: #000;
    border:none;
    &:hover{
        background-color: #f00;
    }
`