import React,{Component} from 'react';

import * as Styles from './ProfileRelationshipStatusStyle'

class RelationshipStatus extends Component {
    state = {
        selectedStatus: null 
    
    };

    render() {
        return (
         <Styles.ProfileRelationshipStatusStyle>
                <form>
                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="RelationshipStatusRadio"
                        value="option1"
                        checked={true}
                        className="form-check-input"
                        />
                        Singel
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="RelationshipStatusRadio"
                        value="option2"
                        className="form-check-input"
                        />
                        Upptagen
                    </label>
                    </div>

                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="RelationshipStatusRadio"
                        value="option3"
                        className="form-check-input"
                        />
                        För full för att få upp den
                    </label>
                    </div>

                    <div className="form-group">
                    <button className="btn btn-primary mt-2" type="submit">
                        Spara
                    </button>
                    </div>
                </form>
         </Styles.ProfileRelationshipStatusStyle>
        )
    }
 }
    
export default RelationshipStatus;