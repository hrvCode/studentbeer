import React,{Component} from 'react';
import axios from 'axios';

import * as Styles from './ProfileImgStyle'

class ProfileImg extends Component {
    state = {
        selectedFile: null
    }
    
    // fileSelectHandler
    // Används i input, uppdaterar state selectFile med vald fil
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    // fileUploadHanlder
    // Aktiveras genom "Upload File" knappen, skickar vald fil med axios.post till Firebase
    // Ej ännu fungerande, måste ta reda på rätt url

    fileUploadHandler = () => {

        const fd = new FormData('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://beerhunter-d5aab.appspot.com/Profile-Images', fd)
        .then(res => {
            console.log(res);
        });
    }

   render() {
       return (
        <Styles.ProfileImgStyle>
            <input type="file" onChange={this.fileSelectHandler}/>
            <button onClick={this.fileUploadHandler}>Upload File</button>
        </Styles.ProfileImgStyle>
       )
   }
}


export default ProfileImg;