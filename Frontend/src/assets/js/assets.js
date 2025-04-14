import bell_icon from '../../../public/icons/bell.png'
import home_icon from '../../../public/icons/home.png'
import like_icon from '../../../public/icons/like.png'
import loop_icon from '../../../public/icons/loop.png'
import mic_icon from '../../../public/icons/mic.png'
import next_icon from '../../../public/icons/next.png'
import play_icon from '../../../public/icons/play.png'
import pause_icon from '../../../public/icons/pause.png'
import plays_icon from '../../../public/icons/plays.png'
import prev_icon from '../../../public/icons/prev.png'
import search_icon from '../../../public/icons/search.png'
import shuffle_icon from '../../../public/icons/shuffle.png'
import speaker_icon from '../../../public/icons/speaker.png'
import stack_icon from '../../../public/icons/stack.png'
import zoom_icon from '../../../public/icons/zoom.png'
import plus_icon from '../../../public/icons/plus.png'
import arrow_icon from '../../../public/icons/arrow.png'
import mini_player_icon from '../../../public/icons/mini-player.png'
import queue_icon from '../../../public/icons/queue.png'
import volume_icon from '../../../public/icons/volume.png'
import arrow_right from '../../../public/icons/right_arrow.png'
import arrow_left from '../../../public/icons/left_arrow.png'
import spotify_logo from '../../../public/icons/spotify_logo.png'
import clock_icon from '../../../public/icons/clock_icon.png'
import img1 from '../../../public/img/img2.jpg'
import img2 from '../../../public/img/img2.jpg'
import img3 from '../../../public/img/img3.jpg'
import img4 from '../../../public/img/img4.jpg'
import img5 from '../../../public/img/img5.jpg'
import img6 from '../../../public/img/img6.jpg'
import img7 from '../../../public/img/img7.jpg'
import img8 from '../../../public/img/img8.jpg'
import img9 from '../../../public/img/img9.jpg'
import img10 from '../../../public/img/img10.jpg'
import img11 from '../../../public/img/img11.jpg'
import img12 from '../../../public/img/img12.jpg'
import img13 from '../../../public/img/img13.jpg'
import img14 from '../../../public/img/img14.jpg'
import img15 from '../../../public/img/img15.jpg'
import img16 from '../../../public/img/img16.jpg'
import song1 from  '../../../public/audio/song1.mp3'
import song2 from  '../../../public/audio/song2.mp3'
import song3 from  '../../../public/audio/song3.mp3'

export const icons = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon 
}

export const assets = {
    sidebar: {
       top: [{ title: "Home", icons: home_icon}, {title: "Search", icons: search_icon}],
       bottom: {
         title: {
            0: [{title: "Your Library", icons:  stack_icon}],
            1: [{first: arrow_right, second: plus_icon}]
         },
         adv: [
            {
                title: "Create your first playlist",
                par: "it's easy we will help you",
                btn: "Crate Playlist",
            },
            {
                title: "Let's findsome podcasts to follow",
                par: "well keep you update on new episodes",
                btn: "Browse podcasts",
            }
         ]
       }   
    },

    player: [{icon: shuffle_icon}, {icon: prev_icon}, {icon: play_icon}, {icon: next_icon}, {icon: loop_icon}],

    icons_setting_1: [{icon: plays_icon}, {icon: mic_icon}, {icon: queue_icon}, {icon: speaker_icon}, {icon: volume_icon}],
    icons_setting_2: [{icon: mini_player_icon}, {icon:zoom_icon}]
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 India",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#22543d"
    },
    {   
        id:2,
        name: "Trending India",
        image: img10,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#742a2a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Song One",
        image: img1,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:00"
    },
    {
        id:1,
        name: "Song Two",
        image: img2,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:20"
    },
    {
        id:2,
        name: "Song Three",
        image: img3,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:32"
    },
    {
        id:3,
        name: "Song Four",
        image: img4,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:50"
    },
    {
        id:4,
        name: "Song Five",
        image: img5,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"3:10"
    },
    {
        id:5,
        name: "Song Six",
        image: img14    ,
        file:song3,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:45"
    },
    {
        id:6,
        name: "Song Seven",
        image: img7,
        file:song1,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:18"
    },
    {
        id:7,
        name: "Song Eight",
        image: img12,
        file:song2,
        desc:"Put a smile on your face with these happy tunes",
        duration:"2:35"
    }
]