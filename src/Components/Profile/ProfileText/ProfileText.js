import React,{Component} from 'react';

import * as Styles from './ProfileTextStyle'

class ProfileText extends Component {
    state = {
        placeholderText: "Skriv din profiltext här..."
    }

    render() {
        return (
         <Styles.ProfileTextStyle>
          <div>
          <header>
                  <h2>Profil</h2>
              </header>
              <p>
                  Skriv din profil text här...
                  Dummy text, ska uppdateras med state
              </p>
          </div>
         </Styles.ProfileTextStyle>
        )
    }
 }

export default ProfileText;