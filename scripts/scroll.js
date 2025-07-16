// 전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical',
    mousewheel:true,
    behavier:'smooth',
})

//디자인 bnr
const bnrwrap = new Swiper('#bnr',{
    slidesPerView:3,
    spaceBetween:20,
    autoplay:{delay:0,},
    speed:5000,
    loop:true,
})
//디자인 sns
const snswrap = new Swiper('#sns',{
    slidesPerView:5,
    spaceBetween:20,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})
//디자인 youtube
const youtubewrap = new Swiper('#youtube',{
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})
//디자인 스플레시 이미지
const eventwrap = new Swiper('#event',{
    slidesPerView:6,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

//디자인 디테일 이미지
const detailwrap = new Swiper('#detil_container',{
    slidesPerView:4,
    spaceBetween:30,
    loop:true,
    navigation:{
        nextEl:'#left_btn',
        prevEl:'#right_btn',
    },
})


//프로젝트 클릭 시 팝업 실행 (클릭한 이미지가 팝업 이미지로 교체)
const bnrProject = document.querySelectorAll('#bnr .swiper-slide')
const snsProject = document.querySelectorAll('#sns .swiper-slide')
const youtubeProject = document.querySelectorAll('#youtube .swiper-slide')
const eventProject = document.querySelectorAll('#event .swiper-slide')
const detailProject = document.querySelectorAll('#detil_container .swiper-slide')
const popup = document.querySelector('.popup_bg')
console.log(bnrProject,snsProject,youtubeProject,eventProject,detailProject,popup)

//bnr 팝업 실행
for(let bnr of bnrProject){
    bnr.addEventListener('click',()=>{
        //console.log('확인')
        popup.style.display = 'block';
        popup.children[0].children[0].src = bnr.children[0].src
    })
    popup.addEventListener('click',()=>{
        popup.style.display = 'none';
    })
}

//sns 팝업 실행
for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        //console.log('확인')
        popup.style.display = 'block';
        popup.children[0].children[0].src = sns.children[0].src
    })
    popup.addEventListener('click',()=>{
        popup.style.display = 'none';
    })
}

//youtube 팝업 실행
for(let youtube of youtubeProject){
    youtube.addEventListener('click',()=>{
        //console.log('확인')
        popup.style.display = 'block';
        popup.children[0].children[0].src = youtube.children[0].src
    })
    popup.addEventListener('click',()=>{
        popup.style.display = 'none';
    })
}

//event 팝업 실행
for(let splash of eventProject){
    splash.addEventListener('click',()=>{
        //console.log('확인')
        popup.style.display = 'block';
        popup.children[0].children[0].src = splash.children[0].src
    })
    popup.addEventListener('click',()=>{
        popup.style.display = 'none';
    })
}

//event 팝업 실행
for(let detail of detailProject){
    detail.addEventListener('click',()=>{
        //console.log('확인')
        popup.style.display = 'block';
        popup.children[0].children[0].src = detail.children[0].src
    })
    popup.addEventListener('click',()=>{
        popup.style.display = 'none';
    })
}



//sns 프로젝트 클릭 시 팝업 실행 (클릭한 이미지가 팝업 이미지로 교체)
// const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide')
// const popup = document.querySelector('.popup_bg')
// console.log(snsProject,popup)

// for(let sns of snsProject){
//     sns.addEventListener('click',()=>{
//         // console.log('확인') //콘솔확인
//         popup.style.display = 'block';
//         popup.children[0].children[0].src = sns.children[0].src
//         // 팝업 실행 시 전체 수직 swiper 스크롤 기능 막기
//         wrap.mousewheel.disable(); // 스크롤 풀기 enable()
//     })
//     popup.addEventListener('click',()=>{
//         popup.style.display = 'none';
//         wrap.mousewheel.enable();
//     })
// }