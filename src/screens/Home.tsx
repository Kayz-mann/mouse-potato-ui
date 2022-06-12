import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import theme, { Box, Text } from '../components/Theme';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { HomeNavParamList } from '../navigation/HomeNav';
import LogoIcon from '../../svg/LogoIcon';
import SmallPlayIcon from '../../svg/SmallPlayIcon';
import ListEmpty from '../components/ListEmpty'
import FeedCard from '../components/FeedCard';
import { data } from '../components/feedData';
import VoiceNoteButton from '../components/VoiceNoteButton';



const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.bg1,
    alignItems: 'center',
  },
  layout: {
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
  },
  feed: {
    height: 700
  }

});


// type Props = NativeStackScreenProps<HomeNavParamList, 'HomeScreen'>;

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Box style={styles.container}>
      <Box style={styles.layout}>
          <Box style={styles.header}>
            <LogoIcon />
            <Text variant="title1" color="primary1">Dwight's Feed</Text> 
            <SmallPlayIcon  />
          </Box>
          <Box style={styles.feed}>
              <FlatList
                data={data} 
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => {
                  if (loading) {
                    return <ActivityIndicator />;
                  }
                  return (
                    <ListEmpty />
                  )
                }}
                renderItem={({ item }) => (
                  <FeedCard
                    posts={item.posts}
                    username={item.username}
                    tagName={item.tagName}
                    timestamp={item.timestamp}
                    timer={item.timer}
                    // likes={item.likes}
                    comments={item.comments}
                    duration={item.duration}
                  />

                )}
              />
          </Box>
        <Box>
       </Box>
      </Box>
      <Box style={{ paddingLeft: 300, marginTop: 620, position: 'absolute' }}>
        <VoiceNoteButton onLongPress={() => alert('Voice Recording')} />
      </Box>
    </Box>
  );
};

export default Home;
