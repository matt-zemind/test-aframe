AFRAME.registerComponent('seek-video-on-box-click', {
    init: function () {
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
    },
    play: function () {

    },
    pause: function () {

    },
    onClick: function (evt) {
        var video = this.el.sceneEl.querySelector('a-videosphere');
        if (!video) { return; }
        var videoMat = video.components.material.material.map.image;
        if (!videoMat) { return; }
        videoMat.currentTime = 5;
        console.log("Video seeked to 5 seconds")
    }
});