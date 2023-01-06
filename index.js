import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#container")

data.map(el => {
    let element;

if(el.hero === "followers-hero") {
    element = /*HTML*/`
        <div class="main-js" id="item">
            <div class="header">
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
    container.innerHTML += element

    el.item.map(info => {
            element = /*HTML*/`
            <div class="testing">
                    <div class="">
                        <div class="">
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
            `
            container.innerHTML += element

    })} else if (el.hero === "general-hero"){

        element = /*HTML*/`
        <div class="main-overview">
            <p class="">
                ${el.view + el.viewDay}
            </p>
        </div>
    `
    container.innerHTML += element

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
            container.innerHTML += element
        })}
    

    })
    

