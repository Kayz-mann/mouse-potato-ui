import { createTheme, createText, createBox } from '@shopify/restyle';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const theme = createTheme({
    colors: {
        // background color
        bg1: '#FFFFFF',

        // font and icon colors
        primary1: '#252525',
        primary2: '#F1F1F1',
        primary3: '#FF7543',
        primary4: '#C1C1C1',
        primary5: '#8A8A8A',
        
        text1: '#484A54',
        text2: '#9B9B9B',
    },
        // fonts
        textVariants: {
            title1: {
                fontSize: 16,
                fontFamily: 'OpenSans-Bold',
                fontWeight:'600',
            },
            title2: {
                fontSize: 16,
                fontFamily: 'OpenSans-Regular',
                fontWeight: '400',
                lineHeight: 24,
            },
            title3: {
                fontSize: 12,
                fontFamily: 'OpenSans-Regular',
                fontWeight: '400',
            },
            title4: {
                fontSize: 12,
                fontFamily: 'OpenSans-Bold',
                fontWeight: '600',
            },
            defaults: {
                // We can define defaults for the variant here.
                // This will be applied after the defaults passed to createVariant and before the variant defined below.
            },
    },
    layout: {
        screenWidth: wp(90),
      },

    spacing: {
        xs: 2.5,
        s: 5,
        m: 10,
        l: 15,
        xl: 20,
        xxl: 30,
        xxxl: 40,
      },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
 
    },
    
   



  
)
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
