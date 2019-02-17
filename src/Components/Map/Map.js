import React, { Component } from "react";
import { compose } from "recompose";
import * as Styles from './MapStyle';
import { AuthUserContext, withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import GeoMap from './LocatedTwo';


class MapPage extends Component {
 

  render() {
    return (
      <Styles.Mapp>
        <h1>Map</h1>
        <AuthUserContext.Consumer>
          {authUser => (
            <GeoMap userId={authUser.uid} Firebase={this.props.Firebase} />
          )}
        </AuthUserContext.Consumer>
      </Styles.Mapp>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(withFirebase,withAuthorization(condition))(MapPage);

