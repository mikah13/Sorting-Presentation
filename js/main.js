'use-strict'
$(document).ready(() => {
    $('#fullpage').fullpage();
    $(document).on("keydown", (e) => {
        e.preventDefault();
        // if ([37, 38, 39, 40].indexOf(e.which) === -1) {
        //     $.fn.fullpage.moveSectionDown();
        // }
    });
    let slide2Count = 0;
    $(".slide2").click(function() {
        if (slide2Count === 0) {
            $(".slide2-row").append("<h3 style='margin-top:20px;' class='animated fadeInLeft'>Basic & Fundamental Algorithm</h3>");
            slide2Count++;
        } else if (slide2Count === 1) {
            $(".slide2-row").append("<h3 style='margin-top:50px;' class='animated fadeInLeft'>Improve Project Performance</h3>");
            slide2Count++;
        }
    })
    let array = [
        ".number-1",
        ".number-2",
        ".number-3",
        ".number-4",
        ".number-5",
        ".number-6",
        ".number-7"
    ]
    array.forEach(el => {
        $(el).click(function() {
            $(this).addClass("animated flip");
            $(this).css("color", "rgb(73, 74, 73)");
        })
        $(el).hover(function() {
            $(this).css("transform", "scale(1.1,1.1)");
        }, function() {
            $(this).css("transform", "scale(1,1)");
        });

    })

    $("#playAll").click(function() {
        let array = ["#selectionGif", "#bubbleGif", "#insertionGif"];
        array.forEach(el => {
            let src = $(el).attr("src");
            src = src.split("static-").join('');
            $(el).attr("src", src);
        })

    })
    let slide7Count = 0;
    $(".slide7").click(function() {
        if (slide7Count === 0) {
            $("#expectation-1").css("color", "rgb(250, 123, 90)");
            $("#expectation-1").css("background-color", "rgb(68, 65, 65)");
            $("#expectation-1").css("transform", "scale(1.1,1.1)");
            slide7Count++;
        } else if (slide7Count === 1) {
            $("#expectation-1").addClass("animated slideOutDown");
            slide7Count++;
        } else if (slide7Count === 2) {
            $("#expectation-1").remove();
            slide7Count++;
        } else if (slide7Count === 3) {
            $(".slide7-row").prepend("<div class='number-4 sort col-xs-2 animated slideInDown'>1</div>");
            slide7Count++;
        }
    })

    $("div.s8.number-1.col-xs-2").click(function() {
        $("#minVal").remove();
        $(".min-number").append('<h2 id="minVal">Min Value: 3</h2>');
    })

    $("div.s8.number-5.col-xs-2").click(function() {
        $("#minVal").remove();
        $(".min-number").append('<h2 id="minVal">Min Value: 2</h2>');
    })

    $("div.s8.number-7.col-xs-2").click(function() {
        $("#minVal").remove();
        $(".min-number").append('<h2 id="minVal">Min Value: 1</h2>');
    })
    let selectionScenario = 0;
    $("#selection-scenario").click(function() {
        if (selectionScenario === 0) {
            $("#selection-best-case").css("display", "block");
            selectionScenario++;
        }
    })
    let slide10ListCount = 0;
    $("#slide10-list").click(function() {
        if (slide10ListCount === 0) {
            $("#bubble-sort-number4").addClass("bubble-sorted");
            $("#bubble-sort-number2").addClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 1) {
            $("#bubble-sort-number2").addClass("animated slideOutDown");
            slide10ListCount++;
        } else if (slide10ListCount === 2) {
            $("#bubble-sort-number2").remove();
            slide10ListCount++;
        } else if (slide10ListCount === 3) {
            $("#slide10-list .fp-tableCell").prepend("<div id='bubble-sort-number2' class='bubble-unsorted col-xs-2 animated slideInDown'>2</div>")
            slide10ListCount++;
        } else if (slide10ListCount === 4) {
            $("#bubble-sort-number4").removeClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 5) {
            $("#bubble-sort-number4").addClass("bubble-sorted");
            $("#bubble-sort-number5").addClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 6) {
            $("#bubble-sort-number4").removeClass("bubble-sorted");
            $("#bubble-sort-number5").removeClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 7) {
            $("#bubble-sort-number5").addClass("bubble-sorted");
            $("#bubble-sort-number1").addClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 8) {
            $("#bubble-sort-number1").addClass("animated slideOutDown");
            slide10ListCount++;
        } else if (slide10ListCount === 9) {
            $("#bubble-sort-number1").remove();
            slide10ListCount++;
        } else if (slide10ListCount === 10) {
            $("#bubble-sort-number5").before("<div id='bubble-sort-number1' class='bubble-unsorted col-xs-2 animated slideInDown'>1</div>")
            slide10ListCount++;
        } else if (slide10ListCount === 11) {
            $("#bubble-sort-number5").removeClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 12) {
            $("#bubble-sort-number5").addClass("bubble-sorted");
            $("#bubble-sort-number6").addClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 13) {
            $("#bubble-sort-number5").removeClass("bubble-sorted");
            $("#bubble-sort-number6").removeClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 14) {
            $("#bubble-sort-number3").addClass("bubble-sorted");
            $("#bubble-sort-number6").addClass("bubble-sorted");
            slide10ListCount++;
        } else if (slide10ListCount === 15) {
            $("#bubble-sort-number3").addClass("animated slideOutDown");
            slide10ListCount++;
        } else if (slide10ListCount === 16) {
            $("#bubble-sort-number3").remove();
            slide10ListCount++;
        } else if (slide10ListCount === 17) {
            $("#bubble-sort-number6").before("<div id='bubble-sort-number3' class='bubble-unsorted col-xs-2 animated slideInDown'>3</div>")
            slide10ListCount++;
        }

    })
    let bubbleScenario = 0;
    $("#bubble-scenario").click(function() {
        if (bubbleScenario === 0) {
            $("#bubble-best-case").css("display", "block");
            bubbleScenario++;
        }
    })
    let slide11Count = 0;
    $("#slide11-list").click(function() {
        if (slide11Count === 0) {
            $("#insertion-sort-number4").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 1) {
            $("#insertion-sort-number4").removeClass("insertion-picked");
            $("#insertion-sort-number4").addClass("insertion-sorted animated slideInDown");
            slide11Count++;
        } else if (slide11Count === 2) {
            $("#insertion-sort-number2").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 3) {
            $("#insertion-sort-number2").addClass("animated slideOutDown");
            slide11Count++;
        } else if (slide11Count === 4) {
            $("#insertion-sort-number2").remove();
            slide11Count++;
        } else if (slide11Count === 5) {
            $("#insertion-sort-number4").before("<div id='insertion-sort-number2' class='insertion-unsorted col-xs-2 insertion-sorted animated slideInDown'>2</div>")
            slide11Count++;
        } else if (slide11Count === 6) {
            $("#insertion-sort-number5").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 7) {
            $("#insertion-sort-number5").removeClass("insertion-picked");
            $("#insertion-sort-number5").addClass("insertion-sorted animated slideInDown");
            slide11Count++;
        } else if (slide11Count === 8) {
            $("#insertion-sort-number1").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 9) {
            $("#insertion-sort-number1").addClass("animated slideOutDown");
            slide11Count++;
        } else if (slide11Count === 10) {
            $("#insertion-sort-number1").remove();
            slide11Count++;
        } else if (slide11Count === 11) {
            $("#insertion-sort-number2").before("<div id='insertion-sort-number1' class='insertion-unsorted col-xs-2 insertion-sorted animated slideInDown'>1</div>")
            slide11Count++;
        } else if (slide11Count === 12) {
            $("#insertion-sort-number6").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 13) {
            $("#insertion-sort-number6").removeClass("insertion-picked");
            $("#insertion-sort-number6").addClass("insertion-sorted animated slideInDown");
            slide11Count++;
        } else if (slide11Count === 14) {
            $("#insertion-sort-number3").addClass("insertion-picked");
            slide11Count++;
        } else if (slide11Count === 15) {
            $("#insertion-sort-number3").addClass("animated slideOutDown");
            slide11Count++;
        } else if (slide11Count === 16) {
            $("#insertion-sort-number3").remove();
            slide11Count++;
        } else if (slide11Count === 17) {
            $("#insertion-sort-number4").before("<div id='insertion-sort-number3' class='insertion-unsorted col-xs-2 insertion-sorted animated slideInDown'>3</div>")
            slide11Count++;
        }
    })

    let insertionScenario = 0;
    $("#insertion-scenario").click(function() {
        if (insertionScenario === 0) {
            $("#insertion-best-case").css("display", "block");
            insertionScenario++;
        }
    })
})
