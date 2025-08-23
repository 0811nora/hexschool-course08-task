import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelectorAll('.menu-list');

    menuList.forEach(link => {
        link.addEventListener('click', () => {
            
            menuList.forEach(item => {
                item.classList.remove('menu-active');
            });

            link.classList.add('menu-active');
        });
    });
});

const seemMore = document.querySelector(".see-more");
const seemMoreBtn = document.querySelector(".see-more-btn");



seemMoreBtn.addEventListener("click", (e) => {
    seemMore.classList.toggle("d-none");
    

    if (seemMore.classList.contains("d-none")) {
        seemMoreBtn.innerHTML = "隱藏內容";
    } else {
        seemMoreBtn.innerHTML = "展開更多";
    }
});

// 語系資料
const zh = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
    ],
    monthsShort: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
    ],
    today: "今天",
    clear: "清除",
    format: "yyyy/mm/dd",
    timeFormat: "hh:mm aa",
    firstDay: 0,
    };

    // 設定停用日期
    const disabledDate = [
        "2025-08-01", 
        "2025-08-05",
        "2025-08-06",
        "2025-08-07",
        "2025-08-10",
        "2025-08-15",
        "2025-08-16",
        "2025-08-19",
        "2025-08-20",
        "2025-08-24",
        "2025-08-25",
        "2025-08-27",
        "2025-08-29",

    ];

    // 加入月曆
    const dp = new AirDatepicker("#airDatepicker", {
    inline: true,
    locale: zh,
    navTitles: {
        days: `
            <div class="custom-nav-title">
            <span class="nav-year">yyyy 年</span>
            <span class="nav-month">M 月</span>
            </div>
        `,
    },
    showOtherMonths: false,
});
dp.disableDate(disabledDate);


