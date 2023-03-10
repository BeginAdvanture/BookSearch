const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const endPoint = 8;
const result = document.querySelector("#result");
const select = [0,0,0,0,0,0,0,0];

function calResult(){
var pointArray = [
            
        ]
        //8번 emdPoint 만큼 돌 수 있다.
for(let i=0; i<endPoint; i++){
    //a단계에서 select 배열 i번째에숫자가 담기게된다.
    var target = qnaList[i].a[select[i]];
    for(let j=0; j<target.type.length; j++){
        for(let k= 0; k<pointArray.length; k++){
            //target.type은 qnaList의type이고 pointArray의 이름 즉 닭과type의 숫자가 같으면 발류값 1증가해서 select 배열에 담기게 된다.
            if(target.type[j]=== pointArray[k].name){
                //value 증가
                pointArray[k].value +=1;
            }
        }
    }
}
var resultArray = pointArray.sort(function (a,b){
    if(a.value > b.value){
        return -1;
    }
    if(a.value < b.value){
        return 1;
    }
    return 0;
});
let resultword = resultArray[0].key;
return resultword;
}


function setResult(){
    let point = calResult();
    const resultName = document.querySelector('.resultname');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector('#resultImg');
    
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation="fadeOut 1s";

    setTimeout(() => {
        result.style.WebkitAnimation="fadeIn 1s";
        result.style.animation="fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        },450);
        setResult();
        
})}



function addAnswer(answerText,qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    //class에 answerList 추가
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('mx-auto');
    answer.classList.add('py-3');
    answer.classList.add('fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;
    
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for(let i =0; i<children.length; i++){
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 1s";
            children[i].style.animation="fadeOut 1s";
            
        }
        setTimeout(() => {
            select[qIdx] = idx;
            ////
            for(let i =0; i<children.length; i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
        
    }, false);
}

function goNext(qIdx){
    if(qIdx === endPoint){
        goResult();
        return;
    }
    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer,qIdx ,i);
    }
    
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';

}
function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation="fadeOut 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation="fadeIn 1s";
        qna.style.animation="fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        },450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
    

}
//////////////////////////////////

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation="fadeOut 1s";

    setTimeout(() => {
        result.style.WebkitAnimation="fadeIn 1s";
        result.style.animation="fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        },450);


        setResult();
    },);
}



function calResult(){


}



function goResult(){
    pointArray = [];
    for(let i=0; i<endPoint; i++){
        var target = qnaList[i].a[select[i]];
        for(let j=0; j<target.type.length; j++){
            for(let k=0; k<pointArray.length; k++){
                if(target.type[j]===pointArray.name[k]){
                    pointArray[k].value +=1;
                }
            }
        }
    }
    var resultArray = pointArray.sort(function(a,b){
        if(a.value > b.value){
            return -1;
        }
        else if (a.value < b.value){
            return 1;
        }
        else{
            return;
        }
        
    });
    let resultword = resultArray[0].key;
    return resultword;
    
    }

    function setResult(){
        var point = calResult();
        const resultName = document.querySelector('.resultname');
        resultName.innerHTML = infoList[point].name;
        //부하
        var resultImg = document.createElement('img');
        //imgDiv 가 왕
        const imgDiv = document.querySelector('#resultImg');
        var imgUrl = 'img/image' + point + '.png';
        imgDiv.src = imgUrl;
        imgDiv.alt = point;
        imgDiv.appendChild(resultImg);

        const resultDesc = document.querySelector('.resultDesc');
        resultDesc.innerHTML = infoList[point].desc;




    }