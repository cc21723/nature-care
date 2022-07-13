function proMenuEff(){
    $('#proMenu ul ul').hide();
        $('#proMenu>ul>li>a').click(function(){
            $(this).next().stop().slideToggle();
    });

}
