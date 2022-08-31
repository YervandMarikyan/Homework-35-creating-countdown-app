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

const days = document.querySelector("#day #d");
const hours = document.querySelector("#hour #h");
const minutes = document.querySelector("#minute #m");
const seconds = document.querySelector("#sec #s");
const end = document.querySelector("#end h1");
const title = document.querySelector("#title");


function countdown(day, month) {
	const deadline = new Date(2022, month, day);

	const timer = setInterval(() => {
		let now = new Date();
		let different = Date.parse(deadline) - Date.parse(now);

		days.innerText = different > 0 ? Math.floor(different / 1000 / 60 / 60 / 24) : "00";
		hours.innerText = different > 0 ? Math.floor((different / 1000 / 60 / 60) % 24) : "00";		
		minutes.innerText = different > 0 ? Math.floor((different / 1000 / 60) % 60) : "00";
		seconds.innerText = different > 0 ? Math.floor((different / 1000) % 60) : "00";

		if(different <= 0) {
			clearInterval(timer);
			title.remove();
			end.textContent = "Promotion Ended";
		}
	}, 1000);
}

countdown(30, 8);
