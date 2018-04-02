//banner效果
{
    const imgs = document.querySelectorAll(".bar_tupian li");
    const pagers = document.querySelectorAll(".lunbodian li");
    const banner = document.querySelector(".banner");
    const banner_lbtn = document.querySelector(".banner_lbtn");
    const banner_rbtn = document.querySelector(".banner_rbtn");
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            ;
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        };
    });
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        ;
        if (n < 0) {
            n = imgs.length - 1;
        }
        ;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        ;
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
        // console.log(n);
    };
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    let flag = true;
    banner_rbtn.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    };
    banner_lbtn.onclick = function () {
        if (flag) {
            flag = false;
            n -= 2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        })
    })
}
//文字轮播
{
    let n = 0;
    // let flag=true;
    // function move() {
    //     if(flag){
    //         flag=false;
    //         n++;
    //     }
    //     $(".textinner").css({marginTop:-n*97},1000,function () {
    //         flag=true;
    //         if(n>0){
    //             $(".textinner").css({marginTop:-97});
    //         }
    //     })
    // }
    // move();
    // setInterval(move,3000)
    function move() {
        n++;
        if (n === $(".textinner1").length) {
            n = 0;
        }
        if(n<0){
            n=$(".textinner1").length-1;
        }
        $(".textinner").css("transition","all 1s").css({marginTop:-97*n}).eq(n);
    }
    move();
    setInterval(move,2000)
    // $(".textinner").addListener("transitionend",function () {
    //     if(n===2){
    //        n=0;
    //        $(".textinner").css({transition:none});
    //        $(".textinner").css("marginTop",0)
    //     }
    // })
    let inner=document.querySelector(".textinner");
    inner.addEventListener("transitionend",function () {
        if(n===3){
            n=0;
            inner.style.transition="none";
            inner.style.marginTop="-97px";
        }
    })
}
//顶部、侧导航开始
{
    let topbar = document.querySelector(".topbar");
    let leftbar = document.querySelector(".leftbar");
    window.onscroll = function () {
        let st = document.documentElement.scrollTop;
        if (st > 670) {
            topbar.style.display = "block";

        } else {
            topbar.style.display = "none";
        }
        if (st > 2500) {
            leftbar.style.display = "block";
        } else {
            leftbar.style.display = "none";
        }
    }
}

//侧导航开始
{
    let tips = document.querySelectorAll(".tips");
    let containers = document.querySelectorAll(".container");
    let flag = true;
    tips.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = containers[index].offsetTop - 100;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 10;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 250) {
                    flag = true;
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25)
            for (let i = 0; i < tips.length; i++) {
                tips[i].classList.remove("active");
            }
            tips[index].classList.add("active");
        }
    })
    window.addEventListener("scroll", function () {
        if (flag) {
            let st = document.documentElement.scrollTop;
            for (let i = 0; i < containers.length; i++) {
                if (st > containers[i].offsetTop - 200) {
                    for (let i = 0; i < tips.length; i++) {
                        tips[i].classList.remove("active");
                    }
                    tips[i].classList.add("active");
                }
            }
        }
    })
}

//侧导航返回顶部
{
    let totop = document.querySelector(".leftbar-top");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25);
    }
}

//固定栏效果
{
    let totop = document.querySelector(".gd-topbox");
    totop.onclick = function () {
        let st = document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 25);
    }
}
//商品分类
{
    let box = document.querySelector(".topbar-center");
    let tip = document.querySelector(".topbar-left");
    let container = document.querySelector(".topbar-list");
    tip.onmouseenter = function () {
        container.style.display = "block";
    };
    box.onmouseleave = function () {
        container.style.display = "none";
    }
}
//banner标签栏
{
    let tips = document.querySelectorAll(".list1");
    let menus = document.querySelectorAll(".bar-menu");
    let obj = menus[0];
    tips.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.display = "none";
            menus[index].style.display = "block";
            menus[index].style.borderTop = "1px solid #000";
            menus[index].style.borderRight = "1px solid #000";
            menus[index].style.borderBottom = "1px solid #000";
            obj = menus[index];
        }
        ele.onmouseleave = function () {
            menus[index].style.display = "none";
        }
    })
}
//大聚惠效果
{
    let container = document.querySelector(".guanggao3_bottom");
    let inner = document.querySelector(".guanggaoinner");
    let prev = document.querySelector(".djh_lbtn");
    let next = document.querySelector(".djh_rbtn");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    }
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            inner.style.transition = "all 1s";
            inner.style.marginLeft = -1000 * n + "px";
        }
    }
    inner.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            n = 1;
            inner.style.transition = "none";
            inner.style.marginLeft = "-1000px";
        }
        if (n === 0) {
            n = 3;
            inner.style.transition = "none";
            inner.style.marginLeft = "-3000px";
        }
    })
}
//排行榜
{
    let inner = $(".paihanginner")
    let n = 1;
    let flag = true;
    $(".phnext").click(function () {
        if (flag) {
            flag = false;
            n++;
            inner.animate({marginLeft: -n * 390}, 1000, function () {
                flag = true;
                if (n === 4) {
                    inner.css("marginLeft", -390);
                    n = 1;
                }
            })
        }
    })
    $(".phprev").click(function () {
        if (flag) {
            flag = false;
            n--;
            inner.animate({marginLeft: -n * 390}, 1000, function () {
                flag = true;
                if (n === 0) {
                    inner.css("marginLeft", -1170);
                    n = 3;
                }
            })
        }
    })
}
//视频
{
    let inner = $(".spinner");
    let n = 1;
    let flag = true;
    $(".sp_rbtn").click(function () {
        if (flag) {
            flag = false;
            n++;
            inner.animate({marginLeft: -n * 390}, 1000, function () {
                flag = true;
                if (n === 3) {
                    inner.css("marginLeft", -390);
                    n = 1;
                }
            })
        }
    })
    $(".sp_lbtn").click(function () {
        if (flag) {
            flag = false;
            n--;
            inner.animate({marginLeft: -n * 390}, 1000, function () {
                flag = true;
                if (n === 0) {
                    inner.css("marginLeft", -780);
                    n = 2;
                }
            })
        }
    })
}
//网站导航
{
    let tip1 = document.querySelector(".tip1");
    let menu = document.querySelector(".head-menu");
    let box = document.querySelector(".left1");
    let span = document.querySelector(".list-close");
    let btn = document.querySelector(".jiantou");
    tip1.onmouseenter = function () {
        menu.style.display = "block";
        tip1.style.background = "#fff";
        menu.style.background = "#fff";
        tip1.style.borderTop = "1px solid #ddd";
        tip1.style.borderLeft = "1px solid #ddd";
        tip1.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
        // menu.style.height="257px";
    }
    box.onmouseleave = function () {
        // menu.style.height="0";
        menu.style.display = "none";
        tip1.style.background = "";
        tip1.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
    span.onclick = function () {
        menu.style.display = "none";
        menu.style.transition = "all 1s";
    }
}

//商家入驻
{
    let tip = document.querySelector(".yanse");
    let menu = document.querySelector(".head-menu1");
    let box = document.querySelector(".left2");
    let btn = document.querySelector(".jiantou1");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//客户服务
{
    let tip = document.querySelector(".kehu");
    let menu = document.querySelector(".head-menu2");
    let box = document.querySelector(".left3");
    let btn = document.querySelector(".jiantou2");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//我的订单
{
    let tip = document.querySelector(".mydingdan");
    let menu = document.querySelector(".head-menu3");
    let box = document.querySelector(".right2");
    let btn = document.querySelector(".jiantou3");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//我的易购
{
    let tip = document.querySelector(".yigou");
    let menu = document.querySelector(".head-menu4");
    let box = document.querySelector(".yigour");
    let btn = document.querySelector(".jiantou4");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//购物车
{
    let tip = document.querySelector(".shoppingcar");
    let menu = document.querySelector(".head-menu5");
    let box = document.querySelector(".right4");
    let btn = document.querySelector(".jiantou5");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//手机苏宁
{
    let tip = document.querySelector(".phonesun");
    let menu = document.querySelector(".head-menu6");
    let box = document.querySelector(".right7");
    let btn = document.querySelector(".jiantou6");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//topbarcar
{
    let tip = document.querySelector(".shoppingcar1");
    let menu = document.querySelector(".shopping-menu");
    let box = document.querySelector(".topbar-right1");
    let btn = document.querySelector(".jiantou7");
    tip.onmouseenter = function () {
        menu.style.display = "block";
        tip.style.background = "#fff";
        menu.style.background = "#fff";
        tip.style.borderTop = "1px solid #ddd";
        tip.style.borderLeft = "1px solid #ddd";
        tip.style.borderRight = "1px solid #ddd";
        btn.style.transform = "rotate(-180deg)";
        btn.style.transition = "all 0.3s";
    }
    box.onmouseleave = function () {
        menu.style.display = "none";
        tip.style.background = "";
        tip.style.border = "";
        btn.style.transform = "";
        btn.style.transition = "all 0.3s";
    }
}
//消息
{
    let n = 0;
    $(".xiaoxi1").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftIn")
        }
    });
    $(".xiaoxideng").mouseleave(function () {
        n = 1;
        $(".xxmenu").css("display", "none");
    })
}
//理财
{
    let n = 0;
    $(".xiaoxi2").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu1").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftIn")
        }
    });
    $(".xiaoxideng1").mouseleave(function () {
        n = 1;
        $(".xxmenu1").css("display", "none");
    })
}
//足迹
{
    let n = 0;
    $(".xiaoxi3").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu2").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftIn")
        }
    });
    $(".xiaoxideng1").mouseleave(function () {
        n = 1;
        $(".xxmenu2").css("display", "none");
    })
}
//签到
{
    let n = 0;
    $(".qiandao").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu3").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftIn")
        }
    });
    $(".xiaoxideng1").mouseleave(function () {
        n = 1;
        $(".xxmenu3").css("display", "none");
    })
}
//在线咨询
{
    let n = 0;
    $(".soama1").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu4").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftInto")
        }
    });
    $(".saoma").mouseleave(function () {
        n = 1;
        $(".xxmenu4").css("display", "none");
    })
}
//意见反馈
{
    let n = 0;
    $(".soama2").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu5").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftInto")
        }
    });
    $(".xiezi").mouseleave(function () {
        n = 1;
        $(".xxmenu5").css("display", "none");
    })
}
//二维码
{
    $(".soama3").mouseenter(function () {
        $(".gderweima").fadeIn(1000).show();
    })
    $(".gd-ewmbox").mouseleave(function () {
        $(".gderweima").fadeOut(1000).hide();
    })
}
//返回顶部
{
    let n = 0;
    $(".toptip").mouseenter(function () {
        n++;
        if (n > 0) {
            $(".xxmenu6").css("display", "block").fadeIn(1000).css("background", "#FFAA01").css("color", "#383838").addClass("leftInto")
        }
    });
    $(".gd-topbox").mouseleave(function () {
        n = 1;
        $(".xxmenu6").css("display", "none");
    })
}
