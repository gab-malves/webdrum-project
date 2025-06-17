const sounds = {
    a: 'sounds/crash.mp3',
    s: 'sounds/tom1.mp3',
    d: 'sounds/snare.mp3',
    g: 'sounds/kickbass.mp3',
    j: 'sounds/tom3.mp3',
    k: 'sounds/tom2.mp3',
    l: 'sounds/crash.mp3'
}
// Função para alterar entre a teclas dos teclados para acionar o som
function playSound(key){
    const sound = sounds[key];
    if (sound){
        new Audio(sound).play();
        animButton(key)
    }
}
// Função para animar os botões na hora de pressionar.
function animButton(key){
    const button = document.querySelector('.' + key);
    if (button){
        button.classList.add('pressed');
        setTimeout(() => button.classList.remove('pressed'), 150);
    }
}
// Função para detectar o click do mouse.
document.querySelectorAll('.drum').forEach(button =>{
    button.addEventListener('click', () =>{
        const key = button.classList[1];
        playSound(key);
    })
})
// Função para detectar o pressionamento da tecla.
document.addEventListener('keydown', event =>{
    playSound(event.key.toLowerCase());
})