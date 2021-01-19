import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Square } from '../../containers/designs';
import './DesignView.css';
import Menubar from '../Menubar/Menubar';

class DesignView extends Component {
    state = {
        onMouse: Array(14).fill(false),
        clicked: Array(14).fill(false),
        hideHeader: false
    }

    overMouse = (i) => {
        if (!isNaN(i)) {
            const onMouse = Array(14).fill(false);
            onMouse[i] = true;
            this.setState({ ...this.state, onMouse: onMouse});
        }
    }

    outMouse = () => {
        this.setState({ ...this.state, onMouse: Array(14).fill(false)});
    }

    handleMove = (e, i) => {
        e.preventDefault();
        const name = this.props.data[i].name;
        const clicked = Array(14).fill(false);
        clicked[i] = true;
        this.setState({...this.state, clicked: clicked, hideHeader: true});
        const { history } = this.props;
        const returnState = (state) => this.setState(state);
        document.body.classList.add('fix');
        setTimeout(function() {
            history.push('/design/' + name);
            returnState({...this.state, clicked: Array(14).fill(false), hideHeader: false});
            document.body.classList.remove('fix');
        }, 2000);
    }

    render() {
        console.log('designView render');
        const design = (
            <div>
                {this.state.hideHeader? null : <Menubar />}
                <div className='design_body' onMouseOut={this.outMouse} >
                    {this.props.data.map((data, i) => {
                        const clickStr = (this.state.clicked[i])? 'ckO':'ckX';
                        const mouseStr = (this.state.onMouse[i])? 'on':'off';
                        const lCls = clickStr + ' box ' + data.size + ' ' + mouseStr;
                        const lnkId = data.name;
                        const imgCN = clickStr + ' ' + mouseStr + ' dlogo';
                        const imgSrc = data.logo;
                        const onMouseOver = () => this.overMouse(i);
                        const handleMove = (e) => this.handleMove(e, i);
                        return (
                            // 현재 스크롤 위치도 내보내줘야 됨
                            <Link key={i} to='#' id={lnkId} className={lCls} onMouseOver={onMouseOver} onClick={handleMove}>
                                <img className={imgCN} src={imgSrc} alt={data.name} />
                            </Link>
                        );
                    })}
                </div>
                {this.state.hideHeader? <div className='sqDVContent' /> : null}
            </div>
        );
        return (
            <Switch>
                <Route exact path='/design/square'><Square /></Route>
                <Route>{design}</Route>
            </Switch>
        );
    }
}

export default DesignView;