import * as Font from 'expo-font';


export const fetchFonts = () => {
    return Font.loadAsync({
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    // 'opensans-italic': require('../assets/fonts/OpenSans-Italic.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf')
    });
    };