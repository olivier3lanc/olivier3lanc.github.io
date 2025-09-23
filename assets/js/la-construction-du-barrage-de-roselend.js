window.addEventListener('load', function() {
    const elVuesAeriennesBefore = document.querySelector('#avant-apres-vues-aeriennes .icv__label-before');
    const elVuesAeriennesAfter = document.querySelector('#avant-apres-vues-aeriennes .icv__label-after');
    if (elVuesAeriennesBefore !== null && elVuesAeriennesAfter !== null) {
        elVuesAeriennesBefore.innerHTML = '1950-1965';
        elVuesAeriennesAfter.innerHTML = '2025';
    }
})
