function showVideo(videoNumber) {
    const videoPaths = [
        "./223 - React 18 Update.mp4", "./224 - React Fundamentals.mp4", "./225 - React Fundamentals 2.mp4",
        "./226 - Hooks vs Classes.mp4", "./223 - React 18 Update.mp4", "./224 - React Fundamentals.mp4",
        "./225 - React Fundamentals 2.mp4", "./226 - Hooks vs Classes.mp4", "./223 - React 18 Update.mp4",
        "./224 - React Fundamentals.mp4"
    ];
    const videoPlayer = document.getElementById("videoPlayer");
    const videoSource = document.getElementById("videoSource");

    videoSource.src = videoPaths[videoNumber - 1];
    videoPlayer.load();
    videoPlayer.play();
}
document.querySelectorAll('.button-panel button').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            button.click();
        }
    });
});