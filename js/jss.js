
var st; //setinterval 담을 변수
function auto(){
    $('.realtime_keyword .list').animate({ //이동하는 동작  //ul
            top:'-26px'
        },2000, function(){ //1초
            $('.realtime_keyword .list').append($('.realtime_keyword  .list li:first'))//append() 마지막에 자식노드로 추가 li:first  li의 첫번째 요소를 마지막으로 보내기 
            $('.realtime_keyword  .list').css('top','-13px')//ul의 css를 top=0px
        })
}

$(document).ready(function(){
    st=setInterval(auto,2000) //auto를 호출 1초 간격으로 작업을 하게 할거야

    $('.lyrics li:gt(0)').hide();//0보다 높은 것은 숨기기

    $('.inde a').on('click',function(e){
        e.preventDefault()
        if($('.lyrics li.on').is(':animated')==false){
            var num=$(this).parent().index()
            var currentNum=$('.inde span.on').parent().index();
            console.log(currentNum)
        }
    })
})