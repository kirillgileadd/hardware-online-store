import React, {FC, useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes, RouteName} from "../routes";
import {Context, ContextInterface} from "../index";

const AppRouter: FC = () => {
    const isAuth = false
    const {user} = useContext(Context) as ContextInterface


    return (
        <Routes>
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {isAuth && privateRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={<Navigate to={RouteName.SHOP}/>}/>
        </Routes>
    );
};

export default AppRouter;