/* header */

const headerGnb = document.querySelectorAll('.header_wrap')
const lnbBg = document.querySelectorAll('.lnb_bg')
console.log(headerGnb,lnbBg)

/* 초기셋팅 */
for(let i=0;i<lnbBg.length; i++){
    lnbBg[i].style.height = '0';
}

for(let i=0; i<headerGnb.length; i++){
    headerGnb[i].addEventListener('mouseover',()=>{
    lnbBg[i].style.height = '480px'
    })
    headerGnb[i].addEventListener('mouseout',()=>{
        lnbBg[i].style.height = '0'
    })
}

// for(let i=0;i<5;i++){
//     headerGnb[i].addEventListener('mouseover',()=>{
//     lnbBg[i].style.height = '49px'
//     })
//     headerGnb[i].addEventListener('mouseout',()=>{
//     lnbBg[i].style.height = '0'
//     })
// };