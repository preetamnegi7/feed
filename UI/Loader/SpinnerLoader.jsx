import React, { Component } from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const DIV = styled.div`
    margin: auto;
    width: 10%;
    height: 10%;
    padding: 20%;
`

class SpinnerLoader extends Component {
    render() {
        return (
            <DIV>
                <Spin size='large' />
            </DIV>
        );
    }
}

export default SpinnerLoader;