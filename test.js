var count = 1;
setInterval(function(){
    if(count%4 == 1){
        treem.treemap({
            data : [4,4,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1],
            container : ".parentContainer",
            side : 700,
            unit : "px"
        });
    } else if(count%4 == 2){
        treem.treemap({
            data : [40, 3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1],
            container : ".parentContainer",
            side : 600,
            unit : "px"
        });
    } else if(count%4 == 3){
        treem.treemap({
            data : [40, 30, 20, 1,1,1,1,1,1,1,1,1,1],
            container : ".parentContainer",
            side : 500,
            unit : "px"
        });
    } else if(count%4 == 0) {
        treem.treemap({
            data : [40, 30, 20, 10],
            container : ".parentContainer",
            side : 400,
            unit : "px"
        });
    }
    count++;
}, 1000)



