/*
FRAMES PER SECOND

With given minutes find the number of frames shown per minute based on frames per second

*/

const framesPerSecond = (minutes, frames) =>(minutes*frames*60 );

console.log(`At 30fps how many frames number of frames shown in 10 mins: ${framesPerSecond(10,30)}` );