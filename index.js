function fetchData() {
    sendGetRequest(`https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR03Tr6Tu2tUhOv76hg8St2G9spt-LSG_-h3n7GXyUPHhKs9s69khTFFhNI`, function(data) {
        let corona = data
        console.log(corona)
        let htmlcorona = `
            <div id="vietnam">
                <h1>Việt Nam</h1>
                <div class="vietnammini">Số ca nhiễm: ${corona.data.vietnam.cases}</div>
                <div class="vietnammini">Số ca hồi phục: ${corona.data.vietnam.recovered}</div>
                <div class="vietnammini">Số ca tử vong: ${corona.data.vietnam.deaths}</div>
            </div>
            <div id="global">
                <h1>Thế giới</h1>
                <div class="globalmini">Số ca nhiễm: ${corona.data.global.cases}</div>
                <div class="globalmini">Số ca hồi phục: ${corona.data.global.recovered}</div>
                <div class="globalmini">Số ca tử vong: ${corona.data.global.deaths}</div>
            </div>
        `
        document.getElementById("content").insertAdjacentHTML("beforeend" , htmlcorona)
        
    })
}

fetchData();


