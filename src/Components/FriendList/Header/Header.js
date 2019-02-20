import React from 'react';
import * as Styles from './HeaderStyles';
import Search from '../Search/Search';




class Header extends React.Component{

    state={
        search: true,
    }
    // kollar om search baren ska visas eller inte
    activetSearch = () =>{
        
        this.setState({
            search: !this.state.search,
        })
    }

    render(){

        let display = (
            <Styles.Header>
            <i  onClick={this.activetSearch} className="fas fa-search"></i>
            <h2  onClick={this.activetSearch}>Sök</h2>
            </Styles.Header>
        )
        const searchState = this.state.search;
        
        return (
             searchState ? display : 
             <Search 
             searchFriend={(event) => this.props.searchFriend(event)}
             clearSearch={() => this.props.clearSearch()}
             searched={this.props.searched}
             />
        )
    }
}
export default Header;