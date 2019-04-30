$(function(){

    $('#first_product').hover(function()
    {
        $('#first_product').css({
          "height": "70%",
        }),
        
        $('#show_button1').show()
        
    },
    function(){
        $('#first_product').css({
            "height": "60%"
          }),
        
        $('#show_button1').hide()
          
    })
})

$(function(){

    $('#second_product').mouseover(function()
    {
        $('#second_product').css({
          "height": "70%",
        }),
        
        $('#show_button2').show()

    }),
    $('#second_product').mouseout(function(){
        $('#second_product').css({
            "height": "60%"
        })
        $('#show_button2').hide()
    })
})

$(function(){

    $('#third_product').mouseover(function()
    {
        $('#third_product').css({
          "height": "70%",
        }),
        
        $('#show_button3').show()

    }),
    $('#third_product').mouseout(function(){
        $('#third_product').css({
            "height": "60%"
        })
        $('#show_button3').hide()
    })
})