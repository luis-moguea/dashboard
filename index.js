
import {data} from './data.js';


const firstItem = document.querySelector("#first-item")
const secondItem = document.querySelector("#second-item")


data.map(el => {
    let element;

    el.item.map(info => {

    if(info.type === "followers-stadistics"){
        element = /*HTML*/`
            <div class="main__js">
                <div class="main__js__network__color">
                    <div class="main__js__network__color" style="background: ${info.backColor};" >
                        <div class="follows-info">
                            <div class="follows-info__header">
                                <img class="follows-info__header--img" src="${info.networkIcon}" alt="network-icon">
                                <p class="follows-info__header--text">${info.id}</p>
                            </div>
                            <div class="follows-info__content">
                                <h3 class="follows-info__content--count">${info.followersCount}</h3>
                                <p class="follows-info__content--text">${info.followersWord}</p>
                            </div>
                            <div class="follows-info__footer">
                                <img class="follows-info__footer--img" src="${info.rowIcon}" alt="row">
                                <p class="follows-info__footer--text" style="color: ${info.color};">${info.followersMetric + info.day}</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>`
    
        firstItem.innerHTML += element
        
    } else if (info.type === "general-stadistics") {
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
                        <p class="main-general__content--text" style="color: ${info.color};">${info.stadisticMetric}</p>
                    </div>
                </div>
            </div>`

        secondItem.innerHTML += element
    }
    
})})
    

