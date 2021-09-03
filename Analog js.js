    //             FORMULA OF ROTATION

    //  For Hour Hand = 12 hrs - 360 degree
    //                 1 hrs - 360/12 = 30 degree

    //                @for h hours  = 30h + m/2     {60 min - 30 degree
    //                                               1min - 1/2 degree
    //                                               for m minute = m/2 degree} -->
    // <!-- For Minute Hand = 60 min - 360 degree
    //                        1 min - 6 degree
    //                        @m min - 6m degree -->

    // <!-- For Second Hand = 60 sec - 360 degree
    //                        1 sec - 6 degree
    //                       @s sec - 6s degree 


setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);
