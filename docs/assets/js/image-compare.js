const imageCompare = {
    options: {
        addCircle: true,
        smoothing: false,
        showLabels: true
    },
    viewers: {},
    update: function() {
        if (typeof ImageCompare == 'function') {
            document.querySelectorAll(".image-compare").forEach(function(el, index) {
                imageCompare.viewers[`viewer_${index}`] = new ImageCompare(el, imageCompare.options).mount();
            });
            if (document.head.querySelector('#image-compare-style') === null) {
                document.head.insertAdjacentHTML('beforeend', `
                    <style id="image-compare-style">
                        .image-compare {
                            z-index: 1;
                            overflow: hidden;
                            border-radius: 9px;
                        }
                    </style>`)
            }
        }
    }
}
imageCompare.update();