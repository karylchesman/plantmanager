import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';

const Routes = () => (

    //container de navegação
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;