import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';


import Button from '../components/Button';
import theme, { Box, Text } from '../components/Theme';
import authApi from '../api/auth'
import { AuthNavParamList } from '../navigation/AuthNav';
import useAuth from '../auth/useAuth';
import { StyleSheet, TextInput } from 'react-native';

type Props = NativeStackScreenProps<AuthNavParamList, 'Signup'>;

const Signup = ({ navigation, route }: Props): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const { login } = useAuth();

    const handleSignup = async () => {
        if (firstName.length < 1) {
            return Toast.show({
                type: 'error',
                text1: 'First name not defined',
                text2: 'Please input your first name',
                visibilityTime: 3000
            });
        }

        if (lastName.length < 1) {
            return Toast.show({
                type: 'error',
                text1: 'Last name not defined',
                text2: 'Please input your last name',
                visibilityTime: 3000
            });
        }

        if (phone.length < 1) {
            return Toast.show({
                type: 'error',
                text1: 'phone not defined',
                text2: 'Please input your phone',
                visibilityTime: 3000
            });
        }

        if (email.length < 1) {
            return Toast.show({
                type: 'error',
                text1: 'Email not defined',
                text2: 'Please input your email',
                visibilityTime: 3000
            });
        }

        if (password.length < 6) {
            return Toast.show({
                type: 'error',
                text1: 'Password Length',
                text2: 'Password must be more than 6 characters',
                visibilityTime: 3000
            });
        }

        if (password != confirmPassword) {
            return Toast.show({
                type: 'error',
                text1: 'Password Do Not Match',
                text2: 'Your password do not match',
                visibilityTime: 3000
            });
        }

        try {
            setLoading(true);
            const result = await authApi.signup({
                phone,
                email,
                password,
                firstName,
                lastName,
            });
    
            await login({
                auth: result.data.auth,
                profile: result.data.profile,
                access_token: result.data.access_token,
                refresh_token: result.data.refresh_token,
            });
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'Register Success',
                text2: 'You have been registered and logged in!',
                visibilityTime: 3000
            });

        } catch (error: any) {
            console.log(
                'Error signing up user profile',
                JSON.stringify(error.response.data.message)
            );
            setLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Server Error!',
                text2:
                    JSON.stringify(error.response.data.message) ||
                    'We cannot process your request now',
                visibilityTime: 3000
            })
        }
        navigation.navigate('Otp');
    };

        return (
            <Box style={styles.container}>
                <Box>
                    <Text variant="title1" style={{ marginTop: 100, marginBottom: 20 }}> Sign Up</Text>
                </Box>
                <Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="First Name"
                        returnKeyType="done"
                        onChangeText={(e) => setFirstName(e)}
                    />
                </Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        returnKeyType="done"
                        onChangeText={(e) => setLastName(e)}
                    />
                </Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone"
                        returnKeyType="done"
                        onChangeText={(e) => setPhone(e)}
                    />
                </Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        returnKeyType="done"
                        onChangeText={(e) => setEmail(e)}
                    />
                </Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        returnKeyType="done"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}
                    />
                </Box>
                <Box>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        returnKeyType="done"
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(e) => setConfirmPassword(e)}
                    />
                </Box>
                </Box>
                <Box style={styles.button}>
                    <Button
                        type="primary"
                        label="Create Account"
                        onPress={handleSignup}
                        loading={loading}
                    />
                </Box>
          </Box>
      );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.bg1,
        flex: 1,
        alignItems: 'center'
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
    button: {
        marginTop: 100
    }
})

export default Signup;


