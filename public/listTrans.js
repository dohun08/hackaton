/**"값," 형식의 문자열을 리스트의 형태로 반환합니다.*/ 
function listTrans(text){
    return text.slice(0,text.length-1).split(',');
}