import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menubar.css';

const data = [
    { to: '/design', name: 'DESIGN' },
    { to: '/photography', name: 'PHOTOGRAPHY' },
    { to: '/writing', name: 'WRITING' },
    { to: '/speaking', name: 'SPEAKING' },
    { to: '/about', name: 'ABOUT' },
    { to: '/contact', name: 'CONTACT' },
]

class Menubar extends Component {
    state = {
        active: Array(6).fill(false)
    }
    onMouse = (i) => {
        const active = Array(6).fill(false);
        active[i] = true;
        this.setState({ active: active });
    }
    onMouseOut = () => { this.setState({ active: Array(6).fill(false) }) }
    
    render() {
        return (
            <div className='Menubar' onMouseOut={this.onMouseOut}>
                <div className='logo_link'>
                    <Link to='/'><img className='logo' src={require('../../assets/joshua-sortino-signature-animated.gif')} alt='logo' /></Link>
                </div>
                <div className='menus'>
                    {data.map((item, i) => {
                        const onMouse = () => { this.onMouse(i) };
                        const cn = this.state.active[i] + ' menu';
                        const acn = 'activeMenu';
                        return (
                            <NavLink className={cn} activeClassName={acn} to={item.to} key={i} onMouseOver={onMouse}>
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Menubar;