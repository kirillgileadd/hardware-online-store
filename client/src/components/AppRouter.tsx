import React, {FC} from 'react';
import {Routes, Route} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";

const AppRouter: FC = () => {
    const isAuth = false

    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {isAuth && privateRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={<Shop/>}/>
        </Routes>
    );
};

export default AppRouter;