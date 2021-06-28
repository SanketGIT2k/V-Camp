import React from 'react'

function VideoDisplayInterface() {

    const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
  path: '/peerjs',
  host: '/',
  port: '443'
})

const myVideo = document.createElement('video')
myVideo.controls = true
myVideo.muted = true;


const myScreen = document.createElement('video')
myScreen.controls = true
myVideo.muted = true;

const peers = {}

let myVideoStream

let myScreenStream

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream;

  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')


    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
    console.log(userId)
  })
  // input value
  let text = $("input");
  // when press enter send message
  $('html').keydown(function (e) {
    if (e.which == 13 && text.val().length !== 0) {
      socket.emit('message', text.val());
      text.val('')
    }
  });
  socket.on("createMessage", message => {
    $("ul").append(`<li class="message"><b>user</b><br/>${message}</li>`);
    scrollToBottom()
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {

    currentPeer = call.peerConnection

    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

// SCREEN STREAM

function addScreenStream(screen, stream) {
  screen.srcObject = stream
  screen.addEventListener('loadedmetadata', () => {
    screen.play()
  })
  videoGrid.append(screen)
}



const scrollToBottom = () => {
  var d = $('.main__chat_window');
  d.scrollTop(d.prop("scrollHeight"));
}


const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
}

const playStop = () => {
  console.log('object')
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo()
  } else {
    setStopVideo()
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
}

const screenStop = () => {
  console.log('object')
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setScreenShareOn()
    console.log["Screen share eneabled"]
  } else {
    setScreenShareOff()
    myVideoStream.getVideoTracks()[0].enabled = true;
    console.log["Screen share disabled"]
  }
}

const setMuteButton = () => {
  const html = `
    <i class="fas fa-microphone"></i>
    <span>Mute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html;
}

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html;
}

const setStopVideo = () => {
  const html = `
    <i class="fas fa-video"></i>
    <span>Stop Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;
}

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;
}

const setScreenShareOn = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>
  `
  document.querySelector('.main__screen_button').innerHTML = html;
}

const setScreenShareOff = () => {
  const html = `
    <i class="fas fa-video"></i>
    <span>Stop Video</span>
  `
  document.querySelector('.main__screen_button').innerHTML = html;
}

// const screenShare = () => {
//   console.log('ss init')
//   // let enabled = navigator.mediaDevices.getDisplayMedia()[0].enabled;
//   // if (enabled) {
//     let scShare;
//     scShare = navigator.mediaDevices.getDisplayMedia();
//     videoGrid.append(scShare)
//     setScreenShare()

//     navigator.mediaDevices.getDisplayMedia({video: {cursor: "always"}, audio: {echoCancellation :true, noiseSuppression: true}}
//     ).then((stream)=>{
//       videoGrid.append(scShare)
//     setScreenShare()
//       })

//   // } else {
//   //   setScreenShare()
// //     navigator.mediaDevices.getDisplayMedia()[0].enabled = true;
// //   }
// // }
// }


const screenShare = () => {

  // document.getElementById("screen-share").addEventListener('click', (e) =>{

  navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: { echoCancellation: true, noiseSuppression: true } }
  ).then((stream) => {
    myScreenStream = stream;

    addVideoStream(myVideo, stream);
    myPeer.on('call', call => {
      call.answer(stream)
      const video = document.createElement('video')


      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
        call.peerConnection.getSenders()[1].replaceTrack(video)
      })

      call.on('close', () => {
        video.remove()
      })

    })

    setStopVideo();




    // sender.replaceTrack(videoTrack).kind

    // videoGrid.append(sender)

    // })
    // .catch((err) =>{
    //   console.log("Unale to get a display" + err)
    // })

  })

}

async function screenSharing() {

  navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: { echoCancellation: true, noiseSuppression: true } }
  ).then((stream) => {
    myScreenStream = stream;

    addVideoStream(myScreen, stream)
    myPeer.on('call', call => {
      call.answer(stream)
      const video = document.createElement('video')


      call.on('stream', userVideoStream => {
        addVideoStream(video, userVideoStream)
      })

      socket.on('user-connected', userId => {
        connectToNewUser(userId, stream)
        console.log(userId)
      })


    })

  })
}

const stopMeeting = () => {
  //   myPeer.on('disconnect', disconnect =() =>{
  //       window.close()
  //   })
  window.close()
}

    return (
        <div>
            
        </div>
    )
}

export default VideoDisplayInterface
