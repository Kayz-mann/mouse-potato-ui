import React, { useState } from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import CommentIcon from '../../svg/CommentIcon';
import LikeIcon from '../../svg/LikeIcon';
import SaveIcon from '../../svg/SaveIcon';
import TimerIcon from '../../svg/TimerIcon';
import theme, { Box, Text } from './Theme';
import PlayIcon from '../../svg/PlayIcon';
import PauseIcon from '../../svg/PauseIcon';



interface Props {
    avatar?: any;
    username: string;
    tagName: string;
    timestamp: string;
    posts?: string;
    timer?: string;
    likes: number;
    comments: string;
    selected?: boolean;
    duration: string;
}


const FeedCard: React.FC<Props> = ({ timer, avatar, username, tagName, timestamp, posts, likes, comments, duration }) => {
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(999);
    const [isPlayBack, setIsPlayBack] = useState<boolean>(false)
    

    const returnInitials = () => {
        const fullName = username.split(' ');
        const firstName = fullName[0];
        const lastName = fullName[fullName.length - 1];

        return `${firstName.charAt(0).toUpperCase()}${lastName.length > 0 ? lastName.charAt(0).toUpperCase() : ''
        }`;

    }

    const handleSave = () => {
        setIsSaved(!isSaved);
    }

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    }

    const handlePlayBack = () => {
        setIsPlayBack(!isPlayBack);
    }



    return (
        <Box style={styles.container}>
          <Box style={styles.iconRow}>
                <Box style={styles.iconFlex}>
                    <Box>
                        {avatar ? (
                        <Image
                            source={avatar} style={styles.image} />
                        ) : (
                            <Box style={styles.iconName}>
                            <Text variant="title1" color="text1">{returnInitials()}</Text>
                            </Box>
                        )}
                    </Box>
                    <Box>
                        <Box>
                            <Text variant="title1" color="text1">{username}</Text>
                            <Text variant="title3" color="text1">@{tagName}</Text>
                        </Box>
                    
                    </Box>
                </Box>
                <Box>
                    <Text variant="title3" color="text2">{timestamp}</Text>
                </Box>   
            </Box>
            <Box style={styles.postRow}>
                <Text variant="title2" color="text2">{posts}</Text>
            <Box
                    
                    style={styles.voiceNoteRow}>
                    {
                        !isPlayBack ?
                            <>
                                <TouchableOpacity onPress={handlePlayBack}>
                                   <PlayIcon />
                                </TouchableOpacity>
                                <Box style={styles.playDuration} />
                                <Text variant="title3" color="primary1">{duration}</Text>
                            </>
                            :
                            <>
                                <TouchableOpacity onPress={handlePlayBack}>
                                   <PauseIcon />
                                </TouchableOpacity>
                                <Box style={styles.playDuration}>
                                    <Box style={styles.playBar} />
                                </Box>
                                <Text variant="title3" color="primary1">{duration}</Text>
                            </>
                    }
                </Box>
            </Box>

            <Box style={styles.bottomRowIcons}>
 
                {timer ? (
                <Box style={styles.flex}>
                    <Box mr="m" style={styles.flex}>
                            <TimerIcon />
                            <Text>{timer} </Text>
                    </Box>
                    <Box mr="m" style={styles.flex}>
                             <CommentIcon />
                            <Text> {comments}</Text>
                    </Box>
                      <TouchableWithoutFeedback onPress={handleLike}>
                            <Box mr="m" style={styles.flex}>
                                    {isLiked ? 
                                    <LikeIcon color={ theme.colors.primary3}/>
                                    : 
                                    <LikeIcon color={ theme.colors.primary1}/>
                                    }
                                <Text> {likeCount}k</Text>     
                            </Box>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={handleSave}>
                            {isSaved ? 
                                <Box>
                                    <SaveIcon color={theme.colors.primary3} />
                                </Box>
                                :
                                <Box>
                                   <SaveIcon color={theme.colors.primary1} />
                                </Box>
                            }
                        </TouchableWithoutFeedback>
                </Box>
                ) : (
                    <Box style={styles.flex}>
                        <Box mr="m" style={styles.flex}>
                            <CommentIcon />
                            <Text> {comments}</Text>
                        </Box>
                        <TouchableWithoutFeedback onPress={handleLike}>
                            <Box mr="m" style={{ flexDirection: 'row' }}>
                                    {isLiked ? 
                                    <LikeIcon color={ theme.colors.primary3}/>
                                    : 
                                    <LikeIcon color={ theme.colors.primary1}/>
                                    }
                                <Text> {likeCount}k</Text>     
                            </Box>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={handleSave}>
                            {isSaved ? 
                                <Box>
                                    <SaveIcon color={theme.colors.primary3} />
                                </Box>
                                :
                                <Box>
                                   <SaveIcon color={theme.colors.primary1} />
                                </Box>
                            }
                        </TouchableWithoutFeedback>
                    </Box>   
                )}
            </Box>
        </Box>
    
    )}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: wp(90)
        },
        iconRow: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 50
        },
        iconFlex: {
            flexDirection: 'row',
        },
        image: {
            width: 60,
            borderRadius: 50,
            height: 62,
            marginRight: 8 
        },
        iconName: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 30,
            marginRight: 8, 
            backgroundColor: theme.colors.primary3 
        },
        postRow: {
            width: wp(84),
            paddingLeft: 50
        },
        voiceNoteRow: {
            paddingVertical: 8,
            flexDirection: 'row',
            alignItems: 'center' 
        },
        playDuration: {
            backgroundColor: theme.colors.primary4,
            width: 207,
            height: 8,
            marginLeft: 4,
            marginRight: 4 
        },
        playBar: {
            backgroundColor: theme.colors.primary3,
            height: 6,
            width: 67
        },
        bottomRowIcons: {
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        },
        flex: {
            flexDirection: 'row'
        }
      });

export default FeedCard;