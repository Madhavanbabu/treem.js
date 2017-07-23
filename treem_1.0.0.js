//treem.js
(function(){
    // root here is the window object
    var root = this;
    var prevTreeMap = root.treem;

    // method to reuse the object if already created
    var treem = function(obj) {
        if (obj instanceof treem) return obj;
        if (!(this instanceof treem)) return new treem(obj);
    };
    // with exports - mainly when used with Node JS
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = treem;
        }
        exports.treem = treem;
    } else {
        root.treem = treem;
    }

    // version
    treem.VERSION = "1.0.0";

    // method to create the treemap
    treem.treemap = function(options){
        if(!options) return;
        var pnts = options.data || [];
        var container = options.container;
        if(!container) return;
        // side of the square (treemap)
        var inpHt = inpWd = options.side || 500;
        var unt = options.unit || "px";
        // properties of the available space
        var space = {
            height: inpHt,
            width: inpWd
        };
        var parentCls = ".tr-mp";
        var childCls = "tr-mp-sn";
        var containerElm = $(container);
        // clear the container
        containerElm.html('');
        // create the parent element to hold the list of child blocks
        createElem({
            width : space.width,
            height : space.height,
            parentElm : containerElm,
            childCls : parentCls.substr(1),
            unt : unt
        });
        // parent element's object
        var holderElm = $(parentCls);
        // area of available space
        var avlArea = space.height * space.width;

        // Object to hold the next block position
        var nxtPs = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };

        // percentags array length
        var arrLen = pnts.length;

        // iterate the percentages array
        for(var i=1; i<=arrLen; i++){
            var perntg, ht, wd, ar; 
            // to get dynamic color value and also avoiding white
            var colorVal = '#' + (Math.floor(Math.random() * 1000 + 1000)+'').substr(1,3);
            perntg = pnts[i-1];
            
            if(i%4 == 1){
                ht = space.height - (nxtPs.top + nxtPs.bottom);
                wd = (avlArea * (perntg/100)) / ht;
                // append to the parent div 
                createElem({
                    width : wd,
                    height : ht,
                    top : nxtPs.top,
                    left : nxtPs.left,
                    colorVal : colorVal,
                    parentElm : holderElm,
                    childCls : childCls,
                    unt : unt,
                    percentage : perntg
                });                       
                // add width to left property
                nxtPs.left = nxtPs.left + wd;

            } else if(i%4 == 2){
                wd = space.width - (nxtPs.left + nxtPs.right);
                ht = (avlArea * (perntg/100)) / wd;
                // append to the parent div
                createElem({
                    width : wd,
                    height : ht,
                    top : nxtPs.top,
                    right : nxtPs.right,
                    colorVal : colorVal,
                    parentElm : holderElm,
                    childCls : childCls,
                    unt : unt,
                    percentage : perntg
                });
                // add height to top property
                nxtPs.top = nxtPs.top + ht;

            } else if(i%4 == 3){
                ht = space.height - (nxtPs.top + nxtPs.bottom);
                wd = (avlArea * (perntg/100)) / ht;
                // append to the parent div
                createElem({
                    width : wd,
                    height : ht,
                    right : nxtPs.right,
                    bottom : nxtPs.bottom,
                    colorVal : colorVal,
                    parentElm : holderElm,
                    childCls : childCls,
                    unt : unt,
                    percentage : perntg
                });
                // add width to right property
                nxtPs.right = nxtPs.right + wd;

            } else if(i%4 == 0){
                wd = space.width - (nxtPs.left + nxtPs.right);
                ht = (avlArea * (perntg/100)) / wd;
                // append to the parent div
                createElem({
                    width : wd,
                    height : ht,
                    left : nxtPs.left,
                    bottom : nxtPs.bottom,
                    colorVal : colorVal,
                    parentElm : holderElm,
                    childCls : childCls,
                    unt : unt,
                    percentage : perntg
                });
                // add height to the bottom property
                nxtPs.bottom = nxtPs.bottom + ht;
            }   
        }
    }
    /**
     * Method to create the new element and insert it into the parent container
     * 
     * @param {*Object} inp 
     */
    function createElem(inp){
        $("<div/>",{
            "class": inp.childCls,
            css: {
                width: inp.width + inp.unt,
                height: inp.height + inp.unt,
                left: inp.left + inp.unt,
                top: inp.top + inp.unt,
                right: inp.right + inp.unt,
                bottom: inp.bottom + inp.unt,
                background: inp.colorVal 
            },
            "title" : inp.percentage
        }).appendTo( inp.parentElm );
    }
}.call(this));