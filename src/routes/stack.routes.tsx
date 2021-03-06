import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';

const sTackRoutes = createStackNavigator();

//pilha de navegação
const AppRoutes: React.FC = () => (
    <sTackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: colors.white
            },
        }}
    >
        <sTackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />
        <sTackRoutes.Screen 
            name="UserIdentification"
            component={UserIdentification}
        />
        <sTackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />
    </sTackRoutes.Navigator>
)

export default AppRoutes;