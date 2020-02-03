AFRAME.registerComponent('loop-video-on-box-click', {
    schema: {
        time: { default: 3 },
        colorON: { default: "#FFFFFF" },
        colorOFF: { default: "#000000" }
    },
    init: function () {
        this.onClick = this.onClick.bind(this);
        this.el.addEventListener('click', this.onClick);
        this.video = this.el.sceneEl.querySelector('a-videosphere');
        this.looping = true;
        this.el.setAttribute('color', this.data.colorON);
    },
    play: function () {
    },
    pause: function () {
    },
    tick: function () {
        if (!this.video) { return; }
        var time = this.video.components.material.data.src.currentTime;
        if (this.looping && time >= this.data.time) {
            console.log("loop");
            var videoMat = this.video.components.material.material.map.image;
            if (!videoMat) { return; }
            videoMat.currentTime = 0;
        }
        //console.log(this.video.components.material.data.src.currentTime);
    },
    onClick: function (evt) {
        this.looping = !this.looping;
        if (this.looping) {
            this.el.setAttribute('color', this.data.colorON);
        } else {
            this.el.setAttribute('color', this.data.colorOFF);
        }
    }
});