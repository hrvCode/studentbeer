import React,{Component} from 'react';
import {withAuthorization} from '../Session';
import Avatar from 'react-avatar';
import * as Styles from './ProfileStyle';


// initinal state
// const INITIAL_STATE = {
//     name: '',
//     img: '',
//     profileText: '',
//     civilStatus: '',
//     showMenu: false,
// }

class RelationsStatus extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu(event) {
      
      if (!this.dropdownMenu.contains(event.target)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
        
      }
    }
  
    render() {
      return (
        <div>
          <button onClick={this.showMenu}>
            Relationsstatus
          </button>
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button> Singel </button>
                  <button> Upptagen </button>
                  <button> Inte intresserad </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }

// name i Avatar ska bytas ut mot användarens namn som hämtas från firebase

const profile = () => (

    <Styles.Main>
       <Styles.ContainerLeft>
          <h2>Stephen Hawking</h2>
            <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Stephen Hawking" />
            <RelationsStatus />
       </Styles.ContainerLeft>       
        <Styles.ContainerRight>
            <Styles.ProfileText>
        <div>
        <header>
                <h2>Profil</h2>
            </header>
            <p>
                Skriv din profil text här...
            </p>
        </div>
        </Styles.ProfileText>
        </Styles.ContainerRight>>
    </Styles.Main>
)
const condition = authUser => authUser != null;
export default withAuthorization(condition)(profile);