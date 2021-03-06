import React from 'react'

import { Header } from 'react-native-elements'

export default function HeaderApp({ title, leftButton, rightButton, color }) {
    console.log('HeaderDashBoard')
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            leftComponent={leftButton}
            rightComponent={rightButton}
            centerComponent={{ text: title, style: { color: '#fff', fontSize: 16, fontFamily: 'Montserrat-SemiBold', fontWeight: '600' } }}
            containerStyle={{
                backgroundColor: color,
                justifyContent: 'space-around',
            }}
        />
    )
}
