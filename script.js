//用vue動態載入重複資料(當作後端Model)
const vm = Vue.createApp({
  data () {
    return {
      address: '台北市北投區清江路247巷8號1樓',
      tel_number: '(02)2898-6207',
      fax_number: '(02)2898-6132',
      email: 'rainmaster@rainmaster.com',
      message: '專營截水溝',
      year: '2023'
    }
  }
})
vm.mount('body')

//導覽列-產品資訊下拉式選單toggle
const productInfoBtn = document.querySelector('#all_products')
const productInfoMenu = document.querySelector('.all_products_menu')

window.addEventListener('click', (e) => {
  if (e.target === productInfoBtn) {
    productInfoMenu.classList.toggle('toggle')
  } else {
    productInfoMenu.classList.remove('toggle')
  }  
})

//產品各別頁
//3D模型操作提示框去除
$('.remind_box').mouseover(function(){
  $(this).fadeOut(500)
})

//安裝影片輪播
$(".responsive").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="bi bi-arrow-left-circle-fill" style="font-size: 1.2rem; color: #DD2C4C;"></i></button>',
  nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="bi bi-arrow-right-circle-fill" style="font-size: 1.2rem; color: #DD2C4C;"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//產品圖片輪播(各產品頁)
$(".slider").slick({
  arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev pic slick-arrow"><i class="bi bi-arrow-left-circle-fill" style="font-size: 1.2rem; color: #DD2C4C;"></i></button>',
  nextArrow: '<button type="button" class="slick-next pic slick-arrow"><i class="bi bi-arrow-right-circle-fill" style="font-size: 1.2rem; color: #DD2C4C;"></i></button>',
});