
import {data} from './data.js';


const firstItem = document.querySelector("#first-item")
const secondItem = document.querySelector("#second-item")


data.map(el => {
    let element;

    el.item.map(info => {

    if(info.type === "followers-stadistics"){
        element = /*HTML*/`
            <div id="test" class="main__js">
                <div class="main__js__network__color">
                    <div class="main__js__network__color" style="background: ${info.backColor};" >
                        <div id="followCard-light" class="follows-info">
                            <div class="follows-info__header">
                                <img class="follows-info__header--img" src="${info.networkIcon}" alt="network-icon">
                                <p class="follows-info__header--text">${info.id}</p>
                            </div>
                            <div class="follows-info__content">
                                <h3 id="followsCount-light" class="follows-info__content--count">${info.followersCount}</h3>
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
            <div id="secondItem-light" class="main-general">
                <div class="main-general__metric">
                    <p>${info.metric}</p>
                    <img src="${info.networkIcon}" alt="id">
                </div>
                <div class="main-general__content">
                    <h2 id="generalCount-light" class="main-general__content--count">${info.metricCount}</h2>
                    <div class="main-general__content--cont">
                        <img class="main-general__content--img" src="${info.rowIcon}" alt="row">
                        <p class="main-general__content--text" style="color: ${info.color};">${info.stadisticMetric}</p>
                    </div>
                </div>
            </div>`

        secondItem.innerHTML += element
    }
    
    
})})
    


const toggleButton = document.querySelector("#button")
const firstCard = document.querySelectorAll(".follows-info")
const secondCard = document.querySelectorAll(".main-general")
const title = document.querySelector("#title-light")
const body = document.querySelector("#body-light")
const overview = document.querySelector("#overview")
const followsCount = document.querySelectorAll(".follows-info__content--count")
const generalCount = document.querySelectorAll(".main-general__content--count")


const test = () => {
    firstCard.forEach(el => {
        el.classList.toggle("follows-info-light")
    })

    title.classList.toggle("title--text-light")

    body.classList.toggle("body-light")

    followsCount.forEach(el => {
        el.classList.toggle("follows-info__content--count-light")
    })

    overview.classList.toggle("main-overview--text-light")

    secondCard.forEach(el => {
        el.classList.toggle("main-general-light")
    })

    generalCount.forEach(el => {
        el.classList.toggle("main-general__content--count-light")
    })

    test()
}

toggleButton.addEventListener("click", test)
