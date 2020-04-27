import React, { useEffect, useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import axios from 'axios';
import CastMember from './CastMember/CastMember';
import classes from './Cast.module.css'
const Cast = () => {
    const { newestState, dispatch } = useContext(MovieContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const localStorageCast = JSON.parse(localStorage.getItem('filteredCastArray'))
    console.log(localStorageCast, 'castdasdasdads')
    return (
        <>
            <div className={classes.CastMembersLabel}>Cast Members</div>
            <div className={classes.CastMembersContainer}>
                {localStorageCast.cast.map(cast => {
                    return <CastMember
                        key={cast.id}
                        id={cast.id}
                        image={'https://image.tmdb.org/t/p/w500' + cast.profile_path}
                        name={cast.name}
                        character={cast.character}
                    />
                })}
            </div>
        </>
    );
};

export default Cast;