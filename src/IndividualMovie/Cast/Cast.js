import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import axios from 'axios';
import CastMember from './CastMember/CastMember';
import classes from './Cast.module.css'
const Cast = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let localStorageCast = ['item'];
    if (localStorage.getItem('filteredCastArray') !== null) {
        localStorageCast = JSON.parse(localStorage.getItem('filteredCastArray'))
    }

    return (
        <>
            <div className={classes.CastMembersLabel}>Cast Members</div>
            <div className={classes.CastMembersContainer}>
                {localStorageCast.map(castMember => {
                    return <CastMember
                        key={Math.random()}
                        id={castMember.id}
                        image={'https://image.tmdb.org/t/p/w500' + castMember.profile_path}
                        name={castMember.name}
                        character={castMember.character}
                    />
                })}
            </div>
        </>
    );
};

export default Cast;