function sponsor_fetch(){
    fetch('https://console.ssssssss.org.cn/sponsor').then(res => res.json().then(json => {
        const tbody = document.querySelector('#sponsorTable tbody')
        json.forEach(item => {
            if(item[2].startsWith('[')){
                item[2] = item[2].replace(/\[(.*?)\]\((.*?)\)/, `<a href="$2">$1</a>`)
            }
            tbody.innerHTML = tbody.innerHTML + `<tr>${item.map(it => `<td>${it}</td>`).join('')}</tr>`
        })
    }))
}
setInterval(function(){
    try {
        adsbygoogle.push({})
    } catch(e){

    }
}, 500)


var timer = setInterval(() => {
	const element = document.querySelector('.qrcode-tfsc')
	if(element){
		if(element.getAttribute('style')){
			clearInterval(timer)
		} else {
			element.setAttribute('style', `height:117px; background-image: url(/magic-api/ad/qrcode-${Math.floor(Math.random() * 2) + 1}.png)`)
		}
	}
	
}, 100)
			