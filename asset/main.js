let data = [{
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

// Lv1 渲染資料 將data資料透過innerHTML插入到網頁裡，原本一筆一筆的寫，看了講解才發現能用forEach,forEach是陣列方法
// const elTicketCardArea = document.querySelector('.ticketCard-area');
// let str = '';
// data.forEach(function (item) {
//     str += `
// <li class="ticketCard">
//                     <div class="ticketCard-img">
//                         <a href="#">
//                             <img src="${item.imgUrl}" alt="">
//                         </a>
//                         <div class="ticketCard-region">${item.area}</div>
//                         <div class="ticketCard-rank">${item.rate}</div>
//                     </div>
//                     <div class="ticketCard-content">
//                         <div>
//                             <h3>
//                                 <a href="#" class="ticketCard-name">${item.name}</a>
//                             </h3>
//                             <p class="ticketCard-description">
//                             ${item.description}
//                             </p>
//                         </div>
//                         <div class="ticketCard-info">
//                             <p class="ticketCard-num">
//                                 <span><i class="fas fa-exclamation-circle"></i></span>
//                                 剩下最後 <span id="ticketCard-num">${item.group} </span> 組
//                             </p>
//                             <p class="ticketCard-price">
//                                 TWD <span id="ticketCard-price">$${item.price}</span>
//                             </p>
//                         </div>
//                     </div>
//                 </li>
// `
// });


const elTicketCardArea = document.querySelector('.ticketCard-area');
// 一開始先渲染出陣列資料
render();
function render(location) {
    let str = '';
    // filter
    const filterData = data.filter(function (item) {
        if (location === item.area) {
            return item;
        }
        // 全部地區用的 value是空值 if('')=>false
        if (!location) {
            return item;
        } 
    });
    // 判斷完的資料塞回str裡面
    filterData.forEach(function (item) {
        str += `
<li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${item.imgUrl}" alt="">
                        </a>
                        <div class="ticketCard-region">${item.area}</div>
                        <div class="ticketCard-rank">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${item.name}</a>
                            </h3>
                            <p class="ticketCard-description">
                            ${item.description}
                            </p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span><i class="fas fa-exclamation-circle"></i></span>
                                剩下最後 <span id="ticketCard-num">${item.group} </span> 組
                            </p>
                            <p class="ticketCard-price">
                                TWD <span id="ticketCard-price">$${item.price}</span>
                            </p>
                        </div>
                    </div>
                </li>
`
    });
    elTicketCardArea.innerHTML = str;
}


// Lv3  
// 篩選資料用->filter
// 新增資料用->addEventListener
// 「渲染套票列表」「地區篩選」「新增套票」三個主要功能
// 兩個常用的陣列原生方法:forEach、filter

// 如何把新增的一筆放到列表?
// data.push('新增一筆');
const elAddBtn = document.querySelector('.addTicket-btn');

function addCard() {
    // 綁元素
    const elName = document.querySelector('#ticketName');
    const elImgUrl = document.querySelector('#ticketImgUrl');
    const elArea = document.querySelector('#ticketRegion');
    const elDescription = document.querySelector('#ticketDescription');
    const elGroup = document.querySelector('#ticketNum');
    const elPrice = document.querySelector('#ticketPrice');
    const elRate = document.querySelector('#ticketRate');
    // 新增一筆資料，推進data陣列裡
    data.push({
        id: Date.now(), //時間戳，唯一值識別
        name: elName.value,
        imgUrl: elImgUrl.value,
        area: elArea.value,
        description: elDescription.value,
        group: parseInt(elGroup.value),
        price: parseInt(elPrice.value),
        rate: parseInt(elRate.value)
    })
    console.log(data);
    // 新增完清空
    const elForm = document.querySelector('.addTicket-form');
    elForm.reset();
}
elAddBtn.addEventListener('click', addCard);


// 篩選地區=============================================
// filter陣列方法
// 對陣列內的值做篩選
// 會產生新陣列，所以可以用變數接收return的結果
// let array = [1, 2, 4, 6];
// let newArray = array.filter(function (item) {
//     return item !== 6;
// });
// console.log(newArray); //[1,2,4]
const elRegionSearch = document.querySelector('.regionSearch');
elRegionSearch.addEventListener('change', filter);

function filter() {
    console.log(elRegionSearch.value);
    render(elRegionSearch.value);
}