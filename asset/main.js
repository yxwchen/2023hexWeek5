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

// Lv1 將data資料透過innerHTML插入到網頁裡
const elTicketCardArea = document.querySelector('.ticketCard-area');

elTicketCardArea.innerHTML = `
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${data[0].imgUrl}"
                                alt="">
                        </a>
                        <div class="ticketCard-region">${data[0].area}</div>
                        <div class="ticketCard-rank">${data[0].rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${data[0].name}</a>
                            </h3>
                            <p class="ticketCard-description">
                            ${data[0].description}
                            </p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span><i class="fas fa-exclamation-circle"></i></span>
                                剩下最後 <span id="ticketCard-num">${data[0].group} </span> 組
                            </p>
                            <p class="ticketCard-price">
                                TWD <span id="ticketCard-price">$${data[0].price}</span>
                            </p>
                        </div>
                    </div>
                </li>
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${data[1].imgUrl}"
                                alt="">
                        </a>
                        <div class="ticketCard-region">${data[1].area}</div>
                        <div class="ticketCard-rank">${data[1].rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${data[1].name}</a>
                            </h3>
                            <p class="ticketCard-description">
                            ${data[1].description}
                            </p>
                        </div>
                        <div class="ticketCard-info">
                            <div class="ticketCard-num">
                                <p>
                                    <span><i class="fas fa-exclamation-circle"></i></span>
                                    剩下最後 <span id="ticketCard-num"> ${data[1].group} </span> 組
                                </p>
                            </div>
                            <p class="ticketCard-price">
                                TWD <span id="ticketCard-price">$${data[1].price}</span>
                            </p>
                        </div>
                    </div>
                </li>
                <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${data[2].imgUrl}"
                                alt="">
                        </a>
                        <div class="ticketCard-region">${data[2].area}</div>
                        <div class="ticketCard-rank">${data[2].rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h3>
                                <a href="#" class="ticketCard-name">${data[2].name}</a>
                            </h3>
                            <p class="ticketCard-description">
                            ${data[2].description}
                            </p>
                        </div>
                        <div class="ticketCard-info">
                            <div class="ticketCard-num">
                                <p>
                                    <span><i class="fas fa-exclamation-circle"></i></span>
                                    剩下最後 <span id="ticketCard-num"> ${data[2].group} </span> 組
                                </p>
                            </div>
                            <p class="ticketCard-price">
                                TWD <span id="ticketCard-price">$${data[2].price}</span>
                            </p>
                        </div>
                    </div>
                </li>
`;

// Lv3  
// 新增資料
const elAddTicketBtn = document.querySelector('.addTicket-btn');
elAddTicketBtn.addEventListener('click', () => {
    // console.log(`aa`);
    addData()
})

// function addData(){

// }

const elRegionSearch = document.querySelector('.regionSearch');

elRegionSearch.addEventListener("change", (event) => {
    const result = document.querySelector('.result');
    result.textContent = `你選的地區是${event.target.value}`;
});