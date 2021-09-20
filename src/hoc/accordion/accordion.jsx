import React, { Component } from 'react';

export default (OriginalComponent) => class accordion extends Component {
     state = {
          openItemId: null
     };

     toggleOpenItem = (openItemId) => ev => {
          this.setState({
               openItemId: openItemId === this.state.openItemId ? null : openItemId
          })
     };

     render () {
          return <OriginalComponent
                    {...this.props}
                    openItemId = {this.state.openItemId}
                    toggleOpenItem = {this.toggleOpenItem} />
     }
};