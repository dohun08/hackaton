let questList = {0:{ "text" :"쓰레기버리기 면제권", "price" :200}, 
                1:{ "text" : "안마 10분권", "price" : 200},
                2:{"text" : "설거지 강제권", "price" : 100}, 
                3:{"text" : "답변거부권x3", "price" : 140}, 
                4:{"text" : "오늘은 야식", "price" : 1000}};

document.addEventListener('DOMContentLoaded', function() {
    Object.keys(questList).forEach(function(key) {
        let item = questList[key];
        const target = document.getElementById("shop-item");
    
        target.innerHTML += `<shop-article pk="${key}" title="${item.text}" point="${item.price}" disabled="block" pattern="none" onclick="completeQuest(this)"></shop-article>`;
    
        console.log(`Key: ${key}, Text: ${item.text}, Price: ${item.price}`);
    });
});

let clg1 = db.run(`Select * from users`);
console.log(clg1);