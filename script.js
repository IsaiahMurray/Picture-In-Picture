const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media stream, pass video element, then play the video
const selectMediaStream = async () => {
  try {
      //Wait for user to select which screen/media to share
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();

    //Pass the media stream to the video src
    videoElement.srcObject = mediaStream;

    //When the video has loaded its metadata, play the video
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener('click', async() => {
    //Diasble button
    button.disabled = true;

    //Start p.i.p
    await videoElement.requestPictureInPicture();
    
    //Reset button
    button.disabled = false;
});


selectMediaStream();