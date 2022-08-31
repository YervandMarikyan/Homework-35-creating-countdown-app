"use strict";
/*
35.3. ստեղծում եք ֆունկցիա, որը կստանա երկու արգումենտ ՕՐ և ԱՄԻՍ, ըստ դրա գեներացնում եք
	հետհաշվարկի ֆունկցիա թե քանի օր, ժամ, րոպե ու վայրկյան ա մնացել, որ նշված դեյթան հասնի, 
	օրինակ եթե նշեք 12, 31, պետք ա էս օրվանից սկսած մինչև դեկտեմբերի 31ը հետհաշվարկ գնա հետևյալ ֆորմատով

ՕՐ, ԺԱՄ, ՐՈՊԵ, ՎԱՅՐԿՅԱՆ, սա պետք ա ֆռոնտում դնեք ու դինամիկ, այսինքն ֆռոնտում ի սկզբանե ոչինչ պետք ա չլինի 
բացառությամբ 1 հատ դիվի, որի վրա կարող եք հավաքել մնացած լոգիկան

ֆունկցիան պետք ա նաև ունենա ստուգում, որ եթե եկել հասել ենք էդ օրվան, ապա մինուսով չշարունակի իրա 
գործողությունը, այսինքն կամ սաղ 0ներ դնի, կամ էլ գրի, որ վերջացել ա
*/

const mainDiv = document.querySelector("#mainDiv");
const title = document.createElement("h3");
mainDiv.append(title);
title.textContent = "Ակցիայի ավարտին մնացել է";
title.style.cssText = `
	color: rgb(23, 7, 243);
	font-weight: 100;
	font-size: 23px;
	margin: 10px 0px 10px;
	text-align: center;
`;

const days1 = document.createElement("div");
mainDiv.append(days1);
days1.classList.add("divStyle");
days1.innerHTML = `
	<span id="d" class="numStyles"></span>
	<span class="textStyles">Օր</span>
`;

const hours1 = document.createElement("div");
mainDiv.append(hours1);
hours1.classList.add("divStyle");
hours1.innerHTML = `
	<span id="h" class="numStyles"></span>
	<span class="textStyles">Ժամ</span>
`;

const minutes1 = document.createElement("div");
mainDiv.append(minutes1);
minutes1.classList.add("divStyle");
minutes1.innerHTML = `
	<span id="m" class="numStyles"></span>
	<span class="textStyles">Րոպե</span>
`;

const seconds1 = document.createElement("div");
mainDiv.append(seconds1);
seconds1.classList.add("divStyle");
seconds1.innerHTML = `
	<span id="s" class="numStyles"></span>
	<span class="textStyles">Վայրկյան</span>
`;

const end = document.createElement("div");
mainDiv.append(end);
end.innerHTML = `<h1"></h1>`;
end.firstElementChild.style.cssText = `
	color: rgb(23, 7, 243);
	font-weight: 100;
	font-size: 23px;
	margin: 10px 0px 10px;
	text-align: center;
`;
end.style.cssText = `
	text-align: center;
`;

const days = days1.firstElementChild;
const hours = hours1.firstElementChild;
const minutes = minutes1.firstElementChild;
const seconds = seconds1.firstElementChild;

function countdown(day, month) {
	const deadline = new Date(2022, month, day);

	const timer = setInterval(() => {
		let now = new Date();
		let different = Date.parse(deadline) - Date.parse(now);
		console.log(Date.parse(deadline));
		console.log(Date.parse(now));
		console.log(different);
		days.innerText = different > 0 ? Math.floor(different / 1000 / 60 / 60 / 24) : "00";
		hours.innerText = different > 0 ? Math.floor((different / 1000 / 60 / 60) % 24) : "00";		
		minutes.innerText = different > 0 ? Math.floor((different / 1000 / 60) % 60) : "00";
		seconds.innerText = different > 0 ? Math.floor((different / 1000) % 60) : "00";

		if(different <= 0) {
			clearInterval(timer);
			title.remove();
			end.firstElementChild.textContent = "Promotion Ended";
		}
	}, 1000);
}

countdown(10, 8);
