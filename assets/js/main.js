'use strict';
(function(){
    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('.flavors-container span');
        elements.forEach((element, k) => {
            let index = k - (elements.length - 1) / 2;
            element.style = `
                transform: translate(0, ${2 * Math.abs(index) * Math.abs(index) * 1.5}px) rotate(${1.7 * index}deg);
                opacity: 1;
                font-size: ${1.4 - 0.08 * Math.abs(index)}em
            `;
        });

        const icecream = document.querySelector('.ice-cream');

        document.querySelector('.flavors-container').addEventListener('click', function (evt) {
            if(!evt.target.classList.contains('flavor-choice')) return;
            if(evt.target.classList.contains('selected')) return;

            document.querySelector('.flavors-container .pointer')?.remove();
            document.querySelector('.flavor-choice.selected')?.classList.remove('selected');

            evt.target.classList.add('selected');

            if(evt.target.dataset.flavor) icecream.src = `assets/images/icecreams/${evt.target.dataset.flavor}.png`;

            icecream.animate([
                {
                    transform: 'scale(1.12) rotate(7deg)'
                },
                {
                    transform: 'scale(1) rotate(0)'
                }
            ], {
                duration: 280
            })
        });
    });
})();