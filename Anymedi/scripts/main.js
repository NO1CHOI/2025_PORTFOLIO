
// skill 영역 효과
const skillBg = document.querySelectorAll('.skill_intro')
const skillTxt = document.querySelectorAll('.skill_intro .txt_box p')

console.log(skillBg,skillTxt)

//초기설정

skillBg.forEach((obj, idx) => {
    console.log(obj,idx )
    obj.addEventListener('mouseover', () => {
        console.log('선택은됨')
        skillTxt[idx].parentElement.style.transform = 'translateY(-80px)';
        skillTxt[idx].parentElement.style.height = '300px';
        const pEl = skillTxt[idx]; // <p>
        pEl.style.opacity = '1';
        pEl.style.maxHeight = '400px';
        pEl.style.transform = 'translateY(-20px)';
});

    obj.addEventListener('mouseleave', () => {
        skillTxt[idx].parentElement.style.transform = 'translateY(0)';
        skillTxt[idx].parentElement.style.height = '191px';
        const pEl = skillTxt[idx]; // <p>
        pEl.style.opacity = '0';
        pEl.style.maxHeight = '0';
        pEl.style.transform = 'translateY(0)';
    });
});