import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import theme, { Box, Text } from '../components/Theme';
import { AuthNavParamList } from '../navigation/AuthNav';
import verifyOtp from '../api/auth';
import getOtp from '../api/auth';



type Props = NativeStackScreenProps<AuthNavParamList, 'Otp'>;

const Otp = ({ navigation, route }: Props): JSX.Element => {
    const [requestOtpTitle, setRequestOtpTitle] = useState<string>('Request a New OTP in');
    const [canRequestOtp, setCanRequestOtp] = useState<boolean>(false);
    const [verified, setVerified] = useState(false);

    
    let countDown: number;
    const onEnableOtpRequest = () => {
        // wait after 2 minutes to generate another OTP
        const otpDate = new Date();
        otpDate.setTime(new Date().getTime() + (2 * 60 * 1000))
        const otpTime = otpDate.getTime()

        countDown = window.setInterval(function () {
            const currentTime = new Date().getTime();
            const totalTime = otpTime - currentTime;

            let minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((totalTime % (1000 * 60)) / (1000))
      
            setRequestOtpTitle(`Request a new OTP in ${minutes}: ${seconds}`)

            if (minutes < 1 && seconds < 1) {
                setRequestOtpTitle(`Request a new OTP`)
                setCanRequestOtp(true)
                clearInterval(countDown);
            }
        }, 1000);
    }

    const onTapVerify = () => {
        verifyOtp
    }

    const onTapRequestNewOTP = () => {
        setCanRequestOtp(false)
        getOtp
    }

    if (verifyOtp) {
        navigation.navigate('HomeNav')
    } else {
        setVerified(true);
        onEnableOtpRequest();
    }
    
    // return () => {
    //     clearInterval(countDown)
    // }

    
    // useEffect(() => {
    //     if (verifyOtp) {
    //         navigation.navigate('HomeNav')
    //     } else {
    //         setVerified(true);
    //         onEnableOtpRequest();
    //     }

    //     return () => {
    //         clearInterval(countDown)
    //     }
    // })
    return <Box style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
            <Box>
                <Text>Enter your OTP</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    onPressIn={onTapRequestNewOTP} 
                /> 
            </Box>
  </Box>;
}

const styles = StyleSheet.create({
    container: {

    },
    textInput: {
        height: 50,
        width: 360, 
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.text2,
        marginVertical: 10,
        paddingHorizontal: 15

    },
})

export default Otp;