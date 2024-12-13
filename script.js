function checkCode() {
    const inputCode = document.getElementById("codeInput").value.trim();
    const videoContainer = document.getElementById("videoContainer");
    const header = document.getElementById("header");
    const inputContainer = document.getElementById("input-container");
    const errorMessage = document.getElementById("errorMessage");

    // Construct the video filename based on the code entered
    const videoFileName = inputCode + ".mp4";
    
    // Set the video source
    const videoSource = document.getElementById("videoSource");
    videoSource.src = videoFileName;

    const videoPlayer = document.getElementById("videoPlayer");

    // Clear any previous error handling
    videoPlayer.onerror = function () {
        // If there's an error (e.g., file not found), display an error message
        errorMessage.classList.remove("hidden");
        videoContainer.classList.add("hidden");
    };

    videoPlayer.onloadeddata = function () {
        // If the video successfully loads, hide the error message and show the video
        errorMessage.classList.add("hidden");
        videoContainer.classList.remove("hidden");
        header.style.display = 'none';
        inputContainer.style.display = 'none';
        document.title = "Watch the Video!";
    };

    // Reload the video player to apply the new source
    videoPlayer.load();
}
