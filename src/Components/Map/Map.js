import React, { Component } from "react";
import { compose } from "recompose";
import * as Styles from './MapStyle';
import { AuthUserContext, withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import GeoMap from './LocatedTwo';

import 'leaflet/dist/leaflet.css'


class MapPage extends Component {
 

  render() {
    return (
      <Styles.MappBase>
        
        <AuthUserContext.Consumer>
          {authUser => (
            <GeoMap userId={authUser.uid} Firebase={this.props.Firebase} />
          )}
        </AuthUserContext.Consumer>
      </Styles.MappBase>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(withFirebase,withAuthorization(condition))(MapPage);

