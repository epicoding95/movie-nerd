import React from 'react';
import classes from './CastMember.module.css';
import { Link } from 'react-router-dom'
import NoLogo from '../../../assets/images/nologo.png'
const CastMember = ({ id, image, name, character }) => {
    if (image.toString().includes('null')) {
        image = NoLogo
    }


    return (
        <div>
            <div className={classes.CastMemberContainer}>
                <div >
                    <img
                        style={{ height: '12rem', width: '8rem' }} src={image} alt='actor image'></img>
                </div>
            </div>
            <div className={classes.RealName}>{name}</div>
            <div className={classes.CharacterName}>{character}</div>
        </div>
    );
};

export default CastMember;