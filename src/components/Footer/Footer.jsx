import React from 'react';
import { Panel } from 'react-bootstrap';
import { FooterPanel } from './styled-components/styled';

const Footer = () => {
    return (
        <div>
           <FooterPanel>
                <Panel.Footer>
                
                    <div style={{
                        display: 'inlineBlock'
                    }}>API provided by <a href="https://newsapi.org/" 
                        target="_blank" 
                        style={{color: '#000000',
                        textDecoration: 'none'}}>News API</a></div>

                    <div style={{
                        display: 'inlineBlock'
                    }}>  &copy; Dmitry Andrianov. All right reserved.</div>
                
                </Panel.Footer>
            </FooterPanel> 
        </div>
    );
};

export default Footer;