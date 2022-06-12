import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import theme, { Box, Text } from '../components/Theme';

import { AuthNavParamList } from '../navigation/AuthNav';

type Props = NativeStackScreenProps<AuthNavParamList, 'Signin'>;

const Signin = ({ navigation, route }: Props): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    

    const handleSignin = () => {

    }
    return (
        <Box style={{ marginTop: 100, backgroundColor: theme.colors.bg1}}>
            <Box>
                <Text style={{ marginHorizontal: 30 }}> Sign in</Text>
            </Box>
            <Box>
                <TextInput
                    type="input"
                    placeholder="Email"
                    returnKeyType="done"
                    Icon={undefined}
                />
            </Box>
            <Box>
                <TextInput
                    type="input"
                    placeholder="Password"
                    secured
                    returnKeyType="done"
                    autoCorrect={false}
                    autoCapitalize="none"
                    Icon={undefined}
                />
            </Box>
            <Button
              type="primary"
              label="Create Account"
              onPress={handleSignin}
              loading={loading}
            />
      </Box>
  );
}

export default Signin;