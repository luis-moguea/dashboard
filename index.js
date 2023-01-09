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
                    <h2>${el.title}</h2>
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
            <div class="testing">
            <div >
                <div class="">
                    <div class="follows-info">
                        <div class="">
                            <img src="${info.networkIcon}" alt="">
                            <p>${info.id}</p>
                        </div>
                        <div class="">
                            <h3>${info.followersCount}</h3>
                            <p>${info.followersWord}</p>
                        </div>
                        <div class="">
                            <img src="${info.rowIcon}" alt="">
                            <p>${info.followersMetric + info.day}</p>
                        </div> 
                    </div>
                </div>
            </div>
            </div>
            `
            firstItem.innerHTML += element

    })} else if (el.hero === "general-hero"){

        element = /*HTML*/`
        <div class="main-overview">
            <p class="">
                ${el.view + el.viewDay}
            </p>
        </div>
    `
    view.innerHTML += element

    el.item.map(info => {
            element = /*HTML*/`
            <div class="main-followers">
                <div>
                    <div>
                        <p>${info.metric}</p>
                        <img src="${info.networkIcon}" alt="">
                    </div>
                    <div>
                        <p>${info.metricCount}</p>
                        <div>
                            <img src="${info.rowIcon}" alt="">
                            <p>${info.stadisticMetric}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
             secondItem.innerHTML += element
        })}
    

    })
    

