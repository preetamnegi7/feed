import React, { Component } from 'react';
import Articles from '../Articles/Articles';

import { Grid } from 'react-bootstrap';

class Home extends Component {
     render() {
          return (
               <Grid>
                    <Articles />
               </Grid>
               
          );
     }
}

export default Home;