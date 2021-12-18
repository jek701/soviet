const HiddenInfoWrapper = document.getElementById('hidden-info-wrapper');
const HiddenInfo = document.getElementById('hidden-info');
const HiddenInfoWrapper2 = document.getElementById('hidden-info-wrapper-2');
const HiddenInfo2 = document.getElementById('hidden-info-2');

HiddenInfoWrapper.onclick = () => {
    HiddenInfo.classList.toggle('hidden')
}

HiddenInfoWrapper2.onclick = () => {
    HiddenInfo2.classList.toggle('hidden')
}