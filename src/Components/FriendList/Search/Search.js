import React from 'react'
import * as Styles from './SearchStyle'

const search  = (props) => {
    return(
        <Styles.SearchMain>
            <Styles.Input 
             onChange={(event) => props.searchFriend(event)}
             type="text" 
             name="search"
             placeholder="Sök"
             /* får värde från state i friendlist.js */
             value={props.searched} 
             />
             {/* skickar ner rensa input / state knappen från friendlist.js */}
            <Styles.Button onClick={props.clearSearch}><span>X</span></Styles.Button>
        </Styles.SearchMain>
    )
}

export default search;