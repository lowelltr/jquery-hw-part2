"use strict";
$(() => {
  let currentTable = null;


   for (let i = 0; i < 9; i++) {
   $("#table").append(`<div>${(i+1)}</div>`);
  }

  $("#table div").attr("class","tabledivs available");

  $("body").on("click", "#table div.available", (e) => {
    $("#seatform").show();
    $("#seatform #seatforminfo form p").text(`Table Number: ${$(e.target).text()}`);
    currentTable = $(e.target);
  });

  $("body").on("click", "#seatforminfo img:first, #seatforminfo button:first", (e) => {
    $("#seatform").hide();
    if (e.target.tagName === "BUTTON") {
      currentTable
        .removeClass("available")
        .addClass("reserved")
        .data("guest-name",$("input").eq(0).val())
        .data("number-of-guests",$("input").eq(2).val())
        .data("guest-phone-mumber",$("input").eq(1).val())
        console.dir(currentTable.data("number-of-guests"));
    }
  });

    $("body").on("mouseenter", "#table div.reserved", (e) => {
     $(e.target).css("cursor", "not-allowed");
      let name=$(e.target).data("guest-name")
      let party=$(e.target).data('number-of-guests')
  
    $(e.target).prepend(`<p>guest name:${name},size of party:${party}</p>`)


    }) .on("mouseleave","#table div.reserved",(e)=>{
        $("p").remove()
        



    
  });
    
});
  


