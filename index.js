import data from './data.json' assert { type: 'json' };

const firstItem = document.querySelector("#first-item")
const secondItem = document.querySelector("#second-item")
const header = document.querySelector("#header")
const view = document.querySelector("#overview")


data.map(el => {
    let element;

if(el.hero === "followers-hero") {
    element = /*HTML*/`
        <div class="main-js" id="item">
            <div class="header-js">
                <div class="title">
                    <h1 class="title--text">${el.title}</h1>
                    <p class="total-follows">${el.followers}</p>
                </div>
                <div class="button">
                    <p class="dark-word">${el.mode}</p>
                </div>
            </div>
        </div>
    `
    header.innerHTML += element

    el.item.map(info => {
            element = /*HTML*/`
        <div class="main__js">
            <div class="main__js__network__color ${info.color}">
                <div class="main__js__network__color ${info.color}"  >
                    <div class="follows-info">
                        <div class="follows-info__header">
                            <img class="follows-info__header--img" src="${info.networkIcon}" alt="network-icon">
                            <p style="${info.color}" class="follows-info__header--text">${info.id}</p>
                        </div>
                        <div class="follows-info__content">
                            <h3 class="follows-info__content--count">${info.followersCount}</h3>
                            <p class="follows-info__content--text">${info.followersWord}</p>
                        </div>
                        <div class="follows-info__footer">
                            <img class="follows-info__footer--img" src="${info.rowIcon}" alt="row">
                            <p class="follows-info__footer--text">${info.followersMetric + info.day}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
            `

        firstItem.innerHTML += element
        const containerColor = document.querySelector("#color").setAttribute("bgcolor", "green")

    })} else if (el.hero === "general-hero"){

        element = /*HTML*/`
        <div class="main-overview">
            <h1 class="main-overview--text">
                ${el.view + el.viewDay}
            </h1>
        </div>
    `
    view.innerHTML += element

    el.item.map(info => {
            element = /*HTML*/`
                <div class="main-general">
                    <div class="main-general__metric">
                        <p>${info.metric}</p>
                        <img src="${info.networkIcon}" alt="id">
                    </div>
                        <div class="main-general__content">
                            <h2 class="main-general__content--count">${info.metricCount}</h2>
                            <div class="main-general__content--cont">
                                <img class="main-general__content--img" src="${info.rowIcon}" alt="row">
                                <p class="main-general__content--text">${info.stadisticMetric}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `

             secondItem.innerHTML += element
        })}
    

    })
    

