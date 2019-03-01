import React from 'react';
import * as Styles from './HeaderStyles';
import Search from '../Search/Search';




class Header extends React.Component{

    state={
        search: true,
    }
    // kollar om search baren ska visas eller inte
    activateSearch = () =>{
        
        this.setState({
            search: !this.state.search,
        })
    }

    render(){

        let display = (
            <Styles.Header>
                <Styles.HeaderLink onClick={this.activateSearch} >
                    <i className="fas fa-search"></i>
                    <h2>Sök</h2>
                </Styles.HeaderLink>
            </Styles.Header>
        )
        const searchState = this.state.search;
        
        return (
             searchState ? display : 
             <Search
             onClick={this.activateSearch}
             searchFriend={(event) => this.props.searchFriend(event)}
             clearSearch={() => this.props.clearSearch()}
             searched={this.props.searched}
             />
        )
    }
}
export default Header;