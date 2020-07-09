import React, { useRef, useState } from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

import YoutubePlayer from "react-native-youtube-iframe";

const Profile = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  return (
    <View>
      <Text>Profile</Text>
      <YoutubePlayer
        ref={playerRef}
        height={300}
        width={400}
        videoId={"VD_U7_WvZ-Y"}
        play={playing}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log("ready")}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={50}
        playbackRate={1}
        initialPlayerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true,
        }}
      />
    </View>
  );
};

export default Profile;
