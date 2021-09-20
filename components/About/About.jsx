import React, { Component } from 'react';
import { Jumbotron, Button, Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { H1, P } from './styled-components/styled';
class About extends Component {
     render() {
          return (
               <div>
                    <Grid>
                        <Jumbotron >
                            <H1>News you can trust.<br />All in one place.</H1><br />
                            <P>
                            This website provides the best coverage of current events, curated by editors and personalized for you. Dive into your favorite topics or discover new ones. And stay up to date with rich videos, breaking news notifications, and subscriptions to some of your favorite publications.
                            </P><br />
                            <P> <Link to="/"><Button bsStyle="primary">Read News</Button></Link>  </P>
                        </Jumbotron>
                    </Grid>
               </div>
          );
     }
}

export default About;