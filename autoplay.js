var audios = document.getElementsByTagName("audio");
// Apply to all audio tags
for (var i = 0; i < audios.length; i++) {
    var el = audios[i];

    // When finished, play the next one
    el.addEventListener('ended', ((innerI) => function(e) {
        var targetI = innerI + 1;
        if (targetI >= audios.length) {
            targetI = 0;
        }
        var targetAudioElement = audios[targetI];
        targetAudioElement.pause();
        targetAudioElement.currentTime = 0;
        targetAudioElement.play();
    })(i));

    // Only play one at a time
    el.addEventListener('play', ((innerI) => function(e) {
        for (var j = 0; j < audios.length; j++) {
            if (innerI == j) {
                continue;
            }
            var targetAudioElement = audios[j];
            targetAudioElement.pause();
            targetAudioElement.currentTime = 0;
        }
    })(i));
}