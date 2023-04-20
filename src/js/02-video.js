import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
const player = new Player(video);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  const timeRound = Math.round(data.seconds);
  localStorage.setItem(CURRENT_TIME_KEY, timeRound);
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);