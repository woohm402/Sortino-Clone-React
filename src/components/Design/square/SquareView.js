import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SquareView.css';

class SquareView extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className='sqWrapper'>
                <div className='sqSummary'>
                    <img id='clImg' src={data.logoImg} alt='limg' />
                    <img id='clTxt' src={data.logoTxt} alt='ltxt' />
                    <div className='header'>
                        <Link to='/design' onClick={this.showHeader}><div className='backButton'>X</div></Link>
                        <Link to='/design' className='nextButton'><div>NEXT PROJECT</div></Link>
                    </div>
                </div>
                <div className='sqContent'>
                    <h1 className='content'>내용내용내용<br/>내용내용내용<br/>내용내용내용</h1>
                </div>
            </div>
        );
    }
}

export default SquareView;