import data from './data.json' assert { type: 'json' };

const container = document.querySelector("#container")

data.map(el => {
    let element;
    element = /*HTML*/`
        <div class="main-js" id="item">
            <div class="header">
                <div class="title">
                    <h2>dfbdbxfgfg</h2>
                    <p class="total-follows">dfgndgdgdfg</p>
                </div>
                <div class="button">
                    <p class="dark-word"></p>
                </div>
            </div>
        </div>
    `
    container.innerHTML += element

    el.item.map(info => {
        if (info.type === "followers-stadistics"){
            element = /*HTML*/`
            <p class="dark-word">${info.followersCount}</p>
            `
        } else if (info.type === "general-stadistics"){
            element = /*HTML*/`
            <p class="dark-word">${info.followersCount}</p>
            `
        }

        container.innerHTML += element
    })
    
})
