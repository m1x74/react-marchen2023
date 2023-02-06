import React from 'react';

import {Albums} from "../../components";
import css from './albums.module.css';

export const AlbumsPage = () => {
    return (
        <div className={css.albums}>
           <Albums/>
        </div>
    );
};

