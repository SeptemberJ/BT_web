/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap-setclasses !*/
;
!function(aa,R,K){function N(a,b){return typeof a===b
}function Q(){var h,p,f,m,g,d,c;
for(var b in F){if(F.hasOwnProperty(b)){if(h=[],p=F[b],p.name&&(h.push(p.name.toLowerCase()),p.options&&p.options.aliases&&p.options.aliases.length)){for(f=0;
f<p.options.aliases.length;
f++){h.push(p.options.aliases[f].toLowerCase())
}}for(m=N(p.fn,"function")?p.fn():p.fn,g=0;
g<h.length;
g++){d=h[g],c=d.split("."),1===c.length?A[c[0]]=m:(!A[c[0]]||A[c[0]] instanceof Boolean||(A[c[0]]=new Boolean(A[c[0]])),A[c[0]][c[1]]=m),Y.push((m?"":"no-")+c.join("-"))
}}}}function L(c){var d=G.className,a=A._config.classPrefix||"";
if(af&&(d=d.baseVal),A._config.enableJSClass){var b=new RegExp("(^|\\s)"+a+"no-js(\\s|$)");
d=d.replace(b,"$1"+a+"js$2")
}A._config.enableClasses&&(d+=" "+a+c.join(" "+a),af?G.className.baseVal=d:G.className=d)
}function W(a,b){return !!~(""+a).indexOf(b)
}function ae(){return"function"!=typeof R.createElement?R.createElement(arguments[0]):af?R.createElementNS.call(R,"http://www.w3.org/2000/svg",arguments[0]):R.createElement.apply(R,arguments)
}function V(a){return a.replace(/([a-z])-([a-z])/g,function(c,d,b){return d+b.toUpperCase()
}).replace(/^-/,"")
}function Z(a,b){return function(){return a.apply(b,arguments)
}
}function I(c,f,a){var d;
for(var b in c){if(c[b] in f){return a===!1?c[b]:(d=f[c[b]],N(d,"function")?Z(d,a||f):d)
}}return !1
}function ab(a){return a.replace(/([A-Z])/g,function(b,c){return"-"+c.toLowerCase()
}).replace(/^ms-/,"-ms-")
}function O(){var a=R.body;
return a||(a=ae(af?"svg":"body"),a.fake=!0),a
}function ac(n,x,a,b){var y,h,g,m,w="modernizr",p=ae("div"),v=O();
if(parseInt(a,10)){for(;
a--;
){g=ae("div"),g.id=b?b[a]:w+(a+1),p.appendChild(g)
}}return y=ae("style"),y.type="text/css",y.id="s"+w,(v.fake?v:p).appendChild(y),v.appendChild(p),y.styleSheet?y.styleSheet.cssText=n:y.appendChild(R.createTextNode(n)),p.id=w,v.fake&&(v.style.background="",v.style.overflow="hidden",m=G.style.overflow,G.style.overflow="hidden",G.appendChild(v)),h=x(p,n),v.fake?(v.parentNode.removeChild(v),G.style.overflow=m,G.offsetHeight):p.parentNode.removeChild(p),!!h
}function U(d,b){var c=d.length;
if("CSS" in aa&&"supports" in aa.CSS){for(;
c--;
){if(aa.CSS.supports(ab(d[c]),b)){return !0
}}return !1
}if("CSSSupportsRule" in aa){for(var a=[];
c--;
){a.push("("+ab(d[c])+":"+b+")")
}return a=a.join(" or "),ac("@supports ("+a+") { #modernizr { position: absolute; } }",function(f){return"absolute"==getComputedStyle(f,null).position
})
}return K
}function X(t,i,b,P){function r(){w&&(delete q.style,delete q.modElem)
}if(P=N(P,"undefined")?!1:P,!N(b,"undefined")){var E=U(t,b);
if(!N(E,"undefined")){return E
}}for(var w,a,x,l,C,z=["modernizr","tspan"];
!q.style;
){w=!0,q.modElem=ae(z.shift()),q.style=q.modElem.style
}for(x=t.length,a=0;
x>a;
a++){if(l=t[a],C=q.style[l],W(l,"-")&&(l=V(l)),q.style[l]!==K){if(P||N(b,"undefined")){return r(),"pfx"==i?l:!0
}try{q.style[l]=b
}catch(m){}if(q.style[l]!=C){return r(),"pfx"==i?l:!0
}}}return r(),!1
}function H(g,l,d,h,f){var c=g.charAt(0).toUpperCase()+g.slice(1),b=(g+" "+k.join(c+" ")+c).split(" ");
return N(l,"string")||N(l,"undefined")?X(b,l,h,f):(b=(g+" "+j.join(c+" ")+c).split(" "),I(b,l,d))
}function D(b,c,a){return H(b,K,K,c,a)
}var Y=[],F=[],M={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(b,c){var a=this;
setTimeout(function(){c(a[b])
},0)
},addTest:function(b,c,a){F.push({name:b,fn:c,options:a})
},addAsyncTest:function(a){F.push({name:null,fn:a})
}},A=function(){};
A.prototype=M,A=new A;
var G=R.documentElement,af="svg"===G.nodeName.toLowerCase(),ad="Moz O ms Webkit",k=M._config.usePrefixes?ad.split(" "):[];
M._cssomPrefixes=k;
var j=M._config.usePrefixes?ad.toLowerCase().split(" "):[];
M._domPrefixes=j;
var J={elem:ae("modernizr")};
A._q.push(function(){delete J.elem
});
var q={style:J.elem.style};
A._q.unshift(function(){delete q.style
}),M.testAllProps=H,M.testAllProps=D,A.addTest("flexbox",D("flexBasis","1px",!0)),A.addTest("flexboxlegacy",D("boxDirection","reverse",!0)),A.addTest("flexboxtweener",D("flexAlign","end",!0)),A.addTest("flexwrap",D("flexWrap","wrap",!0)),Q(),L(Y),delete M.addTest,delete M.addAsyncTest;
for(var B=0;
B<A._q.length;
B++){A._q[B]()
}aa.Modernizr=A
}(window,document);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.5",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.5",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")?(j.prop("checked")&&(i=!1),d.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==j.prop("type")&&(j.prop("checked")!==this.$element.hasClass("active")&&(i=!1),this.$element.toggleClass("active")),j.prop("checked",this.$element.hasClass("active")),i&&j.trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")
}};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),f(b.target).is('input[type="radio"]')||f(b.target).is('input[type="checkbox"]')||b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.5",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var p=this.getItemIndex(k),o="prev"==l&&0===p||"next"==l&&p==this.$items.length-1;
if(o&&!this.options.wrap){return k
}var n="prev"==l?-1:1,m=(p+n)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},j.prototype.slide=function(v,u){var t=this.$element.find(".item.active"),s=u||this.getItemForDirection(v,t),r=this.interval,q="next"==v?"left":"right",p=this;
if(s.hasClass("active")){return this.sliding=!1
}var o=s[0],n=g.Event("slide.bs.carousel",{relatedTarget:o,direction:q});
if(this.$element.trigger(n),!n.isDefaultPrevented()){if(this.sliding=!0,r&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(s)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:o,direction:q});
return g.support.transition&&this.$element.hasClass("slide")?(s.addClass(v),s[0].offsetWidth,t.addClass(q),s.addClass(q),t.one("bsTransitionEnd",function(){s.removeClass([v,q].join(" ")).addClass("active"),t.removeClass(["active",q].join(" ")),p.sliding=!1,setTimeout(function(){p.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(t.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(a)),r&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&/show|hide/.test(a)&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g('[data-toggle="collapse"][href="#'+a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.5",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":k.data();
j.call(c,a)
})
}(jQuery),+function(j){function i(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function p(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=i(g),b={relatedTarget:this};
c.hasClass("open")&&(a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&j.contains(c[0],a.target)||(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b))))
}))
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.5",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=i(q),b=c.hasClass("open");
if(p(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click",p);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)
}return !1
}},l.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var s=j(this);
if(t.preventDefault(),t.stopPropagation(),!s.is(".disabled, :disabled")){var r=i(s),q=r.hasClass("open");
if(!q&&27!=t.which||q&&27==t.which){return 27==t.which&&r.find(m).trigger("focus"),s.trigger("click")
}var f=" li:not(.disabled):visible a",b=r.find(".dropdown-menu"+f);
if(b.length){var a=b.index(t.target);
38==t.which&&a>0&&a--,40==t.which&&a<b.length-1&&a++,~a||(a=0),b.eq(a).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",p).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.5",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(d){f(d.target).is(i.$element)&&(i.ignoreBackdropClick=!0)
})
}),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f(document.createElement("div")).addClass("modal-backdrop "+j).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",f.proxy(function(b){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.adjustDialog()
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){var d=window.innerWidth;
if(!d){var c=document.documentElement.getBoundingClientRect();
d=c.right-Math.abs(c.left)
}this.bodyIsOverflowing=document.body.clientWidth<d,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.tooltip"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.tooltip",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.5",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){if(this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(f.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector){throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
}for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusin"==a.type?"focus":"hover"]=!0),d.tip().hasClass("in")||"in"==d.hoverState?void (d.hoverState="in"):(clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.isInStateTrue=function(){for(var b in this.inState){if(this.inState[b]){return !0
}}return !1
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),a instanceof f.Event&&(d.inState["focusout"==a.type?"focus":"hover"]=!1),d.isInStateTrue()?void 0:(clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide())
},h.prototype.show=function(){var D=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(D);
var C=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(D.isDefaultPrevented()||!C){return
}var B=this,A=this.tip(),z=this.getUID(this.type);
this.setContent(),A.attr("id",z),this.$element.attr("aria-describedby",z),this.options.animation&&A.addClass("fade");
var y="function"==typeof this.options.placement?this.options.placement.call(this,A[0],this.$element[0]):this.options.placement,x=/\s?auto?\s?/i,w=x.test(y);
w&&(y=y.replace(x,"")||"top"),A.detach().css({top:0,left:0,display:"block"}).addClass(y).data("bs."+this.type,this),this.options.container?A.appendTo(this.options.container):A.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);
var v=this.getPosition(),u=A[0].offsetWidth,t=A[0].offsetHeight;
if(w){var s=y,r=this.getPosition(this.$viewport);
y="bottom"==y&&v.bottom+t>r.bottom?"top":"top"==y&&v.top-t<r.top?"bottom":"right"==y&&v.right+u>r.width?"left":"left"==y&&v.left-u<r.left?"right":y,A.removeClass(s).addClass(y)
}var c=this.getCalculatedOffset(y,v,u,t);
this.applyPlacement(c,y);
var a=function(){var b=B.hoverState;
B.$element.trigger("shown.bs."+B.type),B.hoverState=null,"out"==b&&B.leave(B)
};
f.support.transition&&this.$tip.hasClass("fade")?A.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top+=u,z.left+=t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=f(this.$tip),c=f.Event("hide.bs."+this.type);
return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();
null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));
var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},l,j,i,k)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.right&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){if(!this.$tip&&(this.$tip=f(this.options.template),1!=this.$tip.length)){throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
}return this.$tip
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),a?(d.inState.click=!d.inState.click,d.isInStateTrue()?d.enter(d):d.leave(d)):d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type),b.$tip&&b.$tip.detach(),b.$tip=null,b.$arrow=null,b.$viewport=null
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.popover"),b="object"==typeof a&&a;
(c||!/destroy|hide/.test(a))&&(c||i.data("bs.popover",c=new h(this,b)),"string"==typeof a&&c[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.5",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(b,a){this.$body=f(document.body),this.$scrollElement=f(f(b).is(document.body)?window:b),this.options=f.extend({},e.DEFAULTS,a),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",f.proxy(this.process,this)),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.5",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a=this,j="offset",i=0;
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),f.isWindow(this.$scrollElement[0])||(j="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var c=f(this),k=c.data("target")||c.attr("href"),d=/^#./.test(k)&&f(k);
return d&&d.length&&d.is(":visible")&&[[d[j]().top+i,k]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){a.offsets.push(this[0]),a.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(void 0===m[j+1]||i<m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.5",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.5",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=p?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=Math.max(f(document).height(),f(document.body).height());
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b:b(jQuery)
}(function(v){function u(z){var y=z||window.event,x=n.call(arguments,1),w=0,k=0,i=0,f=0,e=0,d=0;
if(z=v.event.fix(y),z.type="mousewheel","detail" in y&&(i=-1*y.detail),"wheelDelta" in y&&(i=y.wheelDelta),"wheelDeltaY" in y&&(i=y.wheelDeltaY),"wheelDeltaX" in y&&(k=-1*y.wheelDeltaX),"axis" in y&&y.axis===y.HORIZONTAL_AXIS&&(k=-1*i,i=0),w=0===i?k:i,"deltaY" in y&&(i=-1*y.deltaY,w=i),"deltaX" in y&&(k=y.deltaX,0===i&&(w=-1*k)),0!==i||0!==k){if(1===y.deltaMode){var c=v.data(this,"mousewheel-line-height");
w*=c,i*=c,k*=c
}else{if(2===y.deltaMode){var a=v.data(this,"mousewheel-page-height");
w*=a,i*=a,k*=a
}}if(f=Math.max(Math.abs(i),Math.abs(k)),(!q||q>f)&&(q=f,s(y,f)&&(q/=40)),s(y,f)&&(w/=40,k/=40,i/=40),w=Math[w>=1?"floor":"ceil"](w/q),k=Math[k>=1?"floor":"ceil"](k/q),i=Math[i>=1?"floor":"ceil"](i/q),l.settings.normalizeOffset&&this.getBoundingClientRect){var A=this.getBoundingClientRect();
e=z.clientX-A.left,d=z.clientY-A.top
}return z.deltaX=k,z.deltaY=i,z.deltaFactor=q,z.offsetX=e,z.offsetY=d,z.deltaMode=0,x.unshift(z,w,k,i),r&&clearTimeout(r),r=setTimeout(t,200),(v.event.dispatch||v.event.handle).apply(this,x)
}}function t(){q=null
}function s(d,c){return l.settings.adjustOldDeltas&&"mousewheel"===d.type&&c%120===0
}var r,q,p=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel" in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],n=Array.prototype.slice;
if(v.event.fixHooks){for(var m=p.length;
m;
){v.event.fixHooks[p[--m]]=v.event.mouseHooks
}}var l=v.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener){for(var a=o.length;
a;
){this.addEventListener(o[--a],u,!1)
}}else{this.onmousewheel=u
}v.data(this,"mousewheel-line-height",l.getLineHeight(this)),v.data(this,"mousewheel-page-height",l.getPageHeight(this))
},teardown:function(){if(this.removeEventListener){for(var a=o.length;
a;
){this.removeEventListener(o[--a],u,!1)
}}else{this.onmousewheel=null
}v.removeData(this,"mousewheel-line-height"),v.removeData(this,"mousewheel-page-height")
},getLineHeight:function(a){var f=v(a),e=f["offsetParent" in v.fn?"offsetParent":"parent"]();
return e.length||(e=v("body")),parseInt(e.css("fontSize"),10)||parseInt(f.css("fontSize"),10)||16
},getPageHeight:function(a){return v(a).height()
},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};
v.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")
},unmousewheel:function(b){return this.unbind("mousewheel",b)
}})
});
!function(a){"undefined"!=typeof module&&module.exports?module.exports=a:a(jQuery,window,document)
}(function(a){!function(d){var e="function"==typeof define&&define.amd,b="undefined"!=typeof module&&module.exports,f="https:"==document.location.protocol?"https:":"http:",c="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js";
e||(b?require("jquery-mousewheel")(a):a.event.special.mousewheel||a("head").append(decodeURI("%3Cscript src="+f+"//"+c+"%3E%3C/script%3E"))),d()
}(function(){var aJ,aO="mCustomScrollbar",a2="mCS",aP=".mCustomScrollbar",aU={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:!0,autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},aL=0,aR={},aK=window.attachEvent&&!window.addEventListener?1:0,aZ=!1,aY=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],aI={init:function(b){var b=a.extend(!0,{},aU,b),f=aX.call(this);
if(b.live){var d=b.liveSelector||this.selector||aP,g=a(d);
if("off"===b.live){return void aQ(d)
}aR[d]=setTimeout(function(){g.mCustomScrollbar(b),"once"===b.live&&g.length&&aQ(d)
},500)
}else{aQ(d)
}return b.setWidth=b.set_width?b.set_width:b.setWidth,b.setHeight=b.set_height?b.set_height:b.setHeight,b.axis=b.horizontalScroll?"x":aN(b.axis),b.scrollInertia=b.scrollInertia>0&&b.scrollInertia<17?17:b.scrollInertia,"object"!=typeof b.mouseWheel&&1==b.mouseWheel&&(b.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),b.mouseWheel.scrollAmount=b.mouseWheelPixels?b.mouseWheelPixels:b.mouseWheel.scrollAmount,b.mouseWheel.normalizeDelta=b.advanced.normalizeMouseWheelDelta?b.advanced.normalizeMouseWheelDelta:b.mouseWheel.normalizeDelta,b.scrollButtons.scrollType=aW(b.scrollButtons.scrollType),aV(b),a(f).each(function(){var m=a(this);
if(!m.data(a2)){m.data(a2,{idx:++aL,opt:b,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:m.css("direction"),cbOffsets:null,trigger:null});
var q=m.data(a2),j=q.opt,h=m.data("mcs-axis"),k=m.data("mcs-scrollbar-position"),p=m.data("mcs-theme");
h&&(j.axis=h),k&&(j.scrollbarPosition=k),p&&(j.theme=p,aV(j)),aH.call(this),a("#mCSB_"+q.idx+"_container img:not(."+aY[2]+")").addClass(aY[2]),aI.update.call(null,m)
}})
},update:function(b,c){var d=b||aX.call(this);
return a(d).each(function(){var h=a(this);
if(h.data(a2)){var m=h.data(a2),g=m.opt,k=a("#mCSB_"+m.idx+"_container"),f=[a("#mCSB_"+m.idx+"_dragger_vertical"),a("#mCSB_"+m.idx+"_dragger_horizontal")];
if(!k.length){return
}m.tweenRunning&&ae(h),h.hasClass(aY[3])&&h.removeClass(aY[3]),h.hasClass(aY[4])&&h.removeClass(aY[4]),ah.call(this),a3.call(this),"y"===g.axis||g.advanced.autoExpandHorizontalScroll||k.css("width",aF(k.children())),m.overflowed=az.call(this),al.call(this),g.autoDraggerLength&&a0.call(this),ay.call(this),aS.call(this);
var j=[Math.abs(k[0].offsetTop),Math.abs(k[0].offsetLeft)];
"x"!==g.axis&&(m.overflowed[0]?f[0].height()>f[0].parent().height()?ag.call(this):(aj(h,j[0].toString(),{dir:"y",dur:0,overwrite:"none"}),m.contentReset.y=null):(ag.call(this),"y"===g.axis?an.call(this):"yx"===g.axis&&m.overflowed[1]&&aj(h,j[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==g.axis&&(m.overflowed[1]?f[1].width()>f[1].parent().width()?ag.call(this):(aj(h,j[1].toString(),{dir:"x",dur:0,overwrite:"none"}),m.contentReset.x=null):(ag.call(this),"x"===g.axis?an.call(this):"yx"===g.axis&&m.overflowed[0]&&aj(h,j[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),c&&m&&(2===c&&g.callbacks.onImageLoad&&"function"==typeof g.callbacks.onImageLoad?g.callbacks.onImageLoad.call(this):3===c&&g.callbacks.onSelectorChange&&"function"==typeof g.callbacks.onSelectorChange?g.callbacks.onSelectorChange.call(this):g.callbacks.onUpdate&&"function"==typeof g.callbacks.onUpdate&&g.callbacks.onUpdate.call(this)),ab.call(this)
}})
},scrollTo:function(b,c){if("undefined"!=typeof b&&null!=b){var d=aX.call(this);
return a(d).each(function(){var o=a(this);
if(o.data(a2)){var g=o.data(a2),j=g.opt,f={trigger:"external",scrollInertia:j.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},h=a.extend(!0,{},f,c),m=aa.call(this,b),k=h.scrollInertia>0&&h.scrollInertia<17?17:h.scrollInertia;
m[0]=aT.call(this,m[0],"y"),m[1]=aT.call(this,m[1],"x"),h.moveDragger&&(m[0]*=g.scrollRatio.y,m[1]*=g.scrollRatio.x),h.dur=k,setTimeout(function(){null!==m[0]&&"undefined"!=typeof m[0]&&"x"!==j.axis&&g.overflowed[0]&&(h.dir="y",h.overwrite="all",aj(o,m[0].toString(),h)),null!==m[1]&&"undefined"!=typeof m[1]&&"y"!==j.axis&&g.overflowed[1]&&(h.dir="x",h.overwrite="none",aj(o,m[1].toString(),h))
},h.timeout)
}})
}},stop:function(){var b=aX.call(this);
return a(b).each(function(){var c=a(this);
c.data(a2)&&ae(c)
})
},disable:function(b){var c=aX.call(this);
return a(c).each(function(){var d=a(this);
if(d.data(a2)){d.data(a2);
ab.call(this,"remove"),an.call(this),b&&ag.call(this),al.call(this,!0),d.addClass(aY[3])
}})
},destroy:function(){var b=aX.call(this);
return a(b).each(function(){var k=a(this);
if(k.data(a2)){var f=k.data(a2),h=f.opt,d=a("#mCSB_"+f.idx),g=a("#mCSB_"+f.idx+"_container"),j=a(".mCSB_"+f.idx+"_scrollbar");
h.live&&aQ(h.liveSelector||a(b).selector),ab.call(this,"remove"),an.call(this),ag.call(this),k.removeData(a2),e(this,"mcs"),j.remove(),g.find("img."+aY[2]).removeClass(aY[2]),d.replaceWith(g.contents()),k.removeClass(aO+" _"+a2+"_"+f.idx+" "+aY[6]+" "+aY[7]+" "+aY[5]+" "+aY[3]).addClass(aY[4])
}})
}},aX=function(){return"object"!=typeof a(this)||a(this).length<1?aP:this
},aV=function(d){var g=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],b=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],h=["minimal","minimal-dark"],c=["minimal","minimal-dark"],f=["minimal","minimal-dark"];
d.autoDraggerLength=a.inArray(d.theme,g)>-1?!1:d.autoDraggerLength,d.autoExpandScrollbar=a.inArray(d.theme,b)>-1?!1:d.autoExpandScrollbar,d.scrollButtons.enable=a.inArray(d.theme,h)>-1?!1:d.scrollButtons.enable,d.autoHideScrollbar=a.inArray(d.theme,c)>-1?!0:d.autoHideScrollbar,d.scrollbarPosition=a.inArray(d.theme,f)>-1?"outside":d.scrollbarPosition
},aQ=function(b){aR[b]&&(clearTimeout(aR[b]),e(aR,b))
},aN=function(b){return"yx"===b||"xy"===b||"auto"===b?"yx":"x"===b||"horizontal"===b?"x":"y"
},aW=function(b){return"stepped"===b||"pixels"===b||"step"===b||"click"===b?"stepped":"stepless"
},aH=function(){var A=a(this),j=A.data(a2),q=j.opt,b=q.autoExpandScrollbar?" "+aY[1]+"_expand":"",o=["<div id='mCSB_"+j.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+j.idx+"_scrollbar mCS-"+q.theme+" mCSB_scrollTools_vertical"+b+"'><div class='"+aY[12]+"'><div id='mCSB_"+j.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+j.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+j.idx+"_scrollbar mCS-"+q.theme+" mCSB_scrollTools_horizontal"+b+"'><div class='"+aY[12]+"'><div id='mCSB_"+j.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],B="yx"===q.axis?"mCSB_vertical_horizontal":"x"===q.axis?"mCSB_horizontal":"mCSB_vertical",y="yx"===q.axis?o[0]+o[1]:"x"===q.axis?o[1]:o[0],z="yx"===q.axis?"<div id='mCSB_"+j.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",x=q.autoHideScrollbar?" "+aY[6]:"",v="x"!==q.axis&&"rtl"===j.langDir?" "+aY[7]:"";
q.setWidth&&A.css("width",q.setWidth),q.setHeight&&A.css("height",q.setHeight),q.setLeft="y"!==q.axis&&"rtl"===j.langDir?"989999px":q.setLeft,A.addClass(aO+" _"+a2+"_"+j.idx+x+v).wrapInner("<div id='mCSB_"+j.idx+"' class='mCustomScrollBox mCS-"+q.theme+" "+B+"'><div id='mCSB_"+j.idx+"_container' class='mCSB_container' style='position:relative; top:"+q.setTop+"; left:"+q.setLeft+";' dir="+j.langDir+" /></div>");
var k=a("#mCSB_"+j.idx),d=a("#mCSB_"+j.idx+"_container");
"y"===q.axis||q.advanced.autoExpandHorizontalScroll||d.css("width",aF(d.children())),"outside"===q.scrollbarPosition?("static"===A.css("position")&&A.css("position","relative"),A.css("overflow","visible"),k.addClass("mCSB_outside").after(y)):(k.addClass("mCSB_inside").append(y),d.wrap(z)),aG.call(this);
var w=[a("#mCSB_"+j.idx+"_dragger_vertical"),a("#mCSB_"+j.idx+"_dragger_horizontal")];
w[0].css("min-height",w[0].height()),w[1].css("min-width",w[1].width())
},aF=function(b){return Math.max.apply(Math,b.map(function(){return a(this).outerWidth(!0)
}).get())
},a3=function(){var c=a(this),d=c.data(a2),f=d.opt,b=a("#mCSB_"+d.idx+"_container");
f.advanced.autoExpandHorizontalScroll&&"y"!==f.axis&&b.css({position:"absolute",width:"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(b[0].getBoundingClientRect().right+0.4)-Math.floor(b[0].getBoundingClientRect().left),position:"relative"}).unwrap()
},aG=function(){var d=a(this),h=d.data(a2),j=h.opt,c=a(".mCSB_"+h.idx+"_scrollbar:first"),g=ac(j.scrollButtons.tabindex)?"tabindex='"+j.scrollButtons.tabindex+"'":"",b=["<a href='#' class='"+aY[13]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+aY[14]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+aY[15]+"' oncontextmenu='return false;' "+g+" />","<a href='#' class='"+aY[16]+"' oncontextmenu='return false;' "+g+" />"],f=["x"===j.axis?b[2]:b[0],"x"===j.axis?b[3]:b[1],b[2],b[3]];
j.scrollButtons.enable&&c.prepend(f[0]).append(f[1]).next(".mCSB_scrollTools").prepend(f[2]).append(f[3])
},ah=function(){var d=a(this),h=d.data(a2),j=a("#mCSB_"+h.idx),c=d.css("max-height")||"none",g=-1!==c.indexOf("%"),b=d.css("box-sizing");
if("none"!==c){var f=g?d.parent().height()*parseInt(c)/100:parseInt(c);
"border-box"===b&&(f-=d.innerHeight()-d.height()+(d.outerHeight()-d.innerHeight())),j.css("max-height",Math.round(f))
}},a0=function(){var q=a(this),f=q.data(a2),g=a("#mCSB_"+f.idx),j=a("#mCSB_"+f.idx+"_container"),b=[a("#mCSB_"+f.idx+"_dragger_vertical"),a("#mCSB_"+f.idx+"_dragger_horizontal")],h=[g.height()/j.outerHeight(!1),g.width()/j.outerWidth(!1)],m=[parseInt(b[0].css("min-height")),Math.round(h[0]*b[0].parent().height()),parseInt(b[1].css("min-width")),Math.round(h[1]*b[1].parent().width())],k=aK&&m[1]<m[0]?m[0]:m[1],p=aK&&m[3]<m[2]?m[2]:m[3];
b[0].css({height:k,"max-height":b[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":m[0]+"px"}),b[1].css({width:p,"max-width":b[1].parent().width()-10})
},ay=function(){var d=a(this),h=d.data(a2),j=a("#mCSB_"+h.idx),c=a("#mCSB_"+h.idx+"_container"),g=[a("#mCSB_"+h.idx+"_dragger_vertical"),a("#mCSB_"+h.idx+"_dragger_horizontal")],b=[c.outerHeight(!1)-j.height(),c.outerWidth(!1)-j.width()],f=[b[0]/(g[0].parent().height()-g[0].height()),b[1]/(g[1].parent().width()-g[1].width())];
h.scrollRatio={y:f[0],x:f[1]}
},aE=function(d,c,f){var b=f?aY[0]+"_expanded":"",g=d.closest(".mCSB_scrollTools");
"active"===c?(d.toggleClass(aY[0]+" "+b),g.toggleClass(aY[1]),d[0]._draggable=d[0]._draggable?0:1):d[0]._draggable||("hide"===c?(d.removeClass(aY[0]),g.removeClass(aY[1])):(d.addClass(aY[0]),g.addClass(aY[1])))
},az=function(){var d=a(this),g=d.data(a2),h=a("#mCSB_"+g.idx),c=a("#mCSB_"+g.idx+"_container"),f=null==g.overflowed?c.height():c.outerHeight(!1),b=null==g.overflowed?c.width():c.outerWidth(!1);
return[f>h.height(),b>h.width()]
},ag=function(){var d=a(this),h=d.data(a2),j=h.opt,c=a("#mCSB_"+h.idx),g=a("#mCSB_"+h.idx+"_container"),b=[a("#mCSB_"+h.idx+"_dragger_vertical"),a("#mCSB_"+h.idx+"_dragger_horizontal")];
if(ae(d),("x"!==j.axis&&!h.overflowed[0]||"y"===j.axis&&h.overflowed[0])&&(b[0].add(g).css("top",0),aj(d,"_resetY")),"y"!==j.axis&&!h.overflowed[1]||"x"===j.axis&&h.overflowed[1]){var f=dx=0;
"rtl"===h.langDir&&(f=c.width()-g.outerWidth(!1),dx=Math.abs(f/h.scrollRatio.x)),g.css("left",f),b[1].css("left",dx),aj(d,"_resetX")
}},aS=function(){function c(){d=setTimeout(function(){a.event.special.mousewheel?(clearTimeout(d),ad.call(f[0])):c()
},100)
}var f=a(this),g=f.data(a2),b=g.opt;
if(!g.bindEvents){if(ai.call(this),b.contentTouchScroll&&ax.call(this),aw.call(this),b.mouseWheel.enable){var d;
c()
}ak.call(this),at.call(this),b.advanced.autoScrollOnFocus&&aD.call(this),b.scrollButtons.enable&&af.call(this),b.keyboard.enable&&av.call(this),g.bindEvents=!0
}},an=function(){var d=a(this),h=d.data(a2),j=h.opt,c=a2+"_"+h.idx,g=".mCSB_"+h.idx+"_scrollbar",b=a("#mCSB_"+h.idx+",#mCSB_"+h.idx+"_container,#mCSB_"+h.idx+"_container_wrapper,"+g+" ."+aY[12]+",#mCSB_"+h.idx+"_dragger_vertical,#mCSB_"+h.idx+"_dragger_horizontal,"+g+">a"),f=a("#mCSB_"+h.idx+"_container");
j.advanced.releaseDraggableSelectors&&b.add(a(j.advanced.releaseDraggableSelectors)),h.bindEvents&&(a(document).unbind("."+c),b.each(function(){a(this).unbind("."+c)
}),clearTimeout(d[0]._focusTimeout),e(d[0],"_focusTimeout"),clearTimeout(h.sequential.step),e(h.sequential,"step"),clearTimeout(f[0].onCompleteTimeout),e(f[0],"onCompleteTimeout"),h.bindEvents=!1)
},al=function(f){var j=a(this),m=j.data(a2),d=m.opt,h=a("#mCSB_"+m.idx+"_container_wrapper"),b=h.length?h:a("#mCSB_"+m.idx+"_container"),g=[a("#mCSB_"+m.idx+"_scrollbar_vertical"),a("#mCSB_"+m.idx+"_scrollbar_horizontal")],k=[g[0].find(".mCSB_dragger"),g[1].find(".mCSB_dragger")];
"x"!==d.axis&&(m.overflowed[0]&&!f?(g[0].add(k[0]).add(g[0].children("a")).css("display","block"),b.removeClass(aY[8]+" "+aY[10])):(d.alwaysShowScrollbar?(2!==d.alwaysShowScrollbar&&k[0].css("display","none"),b.removeClass(aY[10])):(g[0].css("display","none"),b.addClass(aY[10])),b.addClass(aY[8]))),"y"!==d.axis&&(m.overflowed[1]&&!f?(g[1].add(k[1]).add(g[1].children("a")).css("display","block"),b.removeClass(aY[9]+" "+aY[11])):(d.alwaysShowScrollbar?(2!==d.alwaysShowScrollbar&&k[1].css("display","none"),b.removeClass(aY[11])):(g[1].css("display","none"),b.addClass(aY[11])),b.addClass(aY[9]))),m.overflowed[0]||m.overflowed[1]?j.removeClass(aY[5]):j.addClass(aY[5])
},ar=function(d){var c=d.type;
switch(c){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return d.target.ownerDocument!==document?[d.originalEvent.screenY,d.originalEvent.screenX,!1]:[d.originalEvent.pageY,d.originalEvent.pageX,!1];
case"touchstart":case"touchmove":case"touchend":var f=d.originalEvent.touches[0]||d.originalEvent.changedTouches[0],b=d.originalEvent.touches.length||d.originalEvent.changedTouches.length;
return d.target.ownerDocument!==document?[f.screenY,f.screenX,b>1]:[f.pageY,f.pageX,b>1];
default:return[d.pageY,d.pageX,!1]
}},ai=function(){function B(f){var d=q.find("iframe");
if(d.length){var g=f?"auto":"none";
d.css("pointer-events",g)
}}function j(l,g,m,d){if(q[0].idleTimer=A.scrollInertia<233?250:0,k.attr("id")===w[1]){var f="x",h=(k[0].offsetLeft-g+d)*z.scrollRatio.x
}else{var f="y",h=(k[0].offsetTop-l+m)*z.scrollRatio.y
}aj(s,h.toString(),{dir:f,drag:!0})
}var k,v,b,s=a(this),z=s.data(a2),A=z.opt,y=a2+"_"+z.idx,w=["mCSB_"+z.idx+"_dragger_vertical","mCSB_"+z.idx+"_dragger_horizontal"],q=a("#mCSB_"+z.idx+"_container"),c=a("#"+w[0]+",#"+w[1]),x=A.advanced.releaseDraggableSelectors?c.add(a(A.advanced.releaseDraggableSelectors)):c;
c.bind("mousedown."+y+" touchstart."+y+" pointerdown."+y+" MSPointerDown."+y,function(r){if(r.stopImmediatePropagation(),r.preventDefault(),aB(r)){aZ=!0,aK&&(document.onselectstart=function(){return !1
}),B(!1),ae(s),k=a(this);
var i=k.offset(),p=ar(r)[0]-i.top,n=ar(r)[1]-i.left,l=k.height()+i.top,g=k.width()+i.left;
l>p&&p>0&&g>n&&n>0&&(v=p,b=n),aE(k,"active",A.autoExpandScrollbar)
}}).bind("touchmove."+y,function(h){h.stopImmediatePropagation(),h.preventDefault();
var g=k.offset(),f=ar(h)[0]-g.top,d=ar(h)[1]-g.left;
j(v,b,f,d)
}),a(document).bind("mousemove."+y+" pointermove."+y+" MSPointerMove."+y,function(h){if(k){var g=k.offset(),f=ar(h)[0]-g.top,d=ar(h)[1]-g.left;
if(v===f){return
}j(v,b,f,d)
}}).add(x).bind("mouseup."+y+" touchend."+y+" pointerup."+y+" MSPointerUp."+y,function(d){k&&(aE(k,"active",A.autoExpandScrollbar),k=null),aZ=!1,aK&&(document.onselectstart=null),B(!0)
})
},ax=function(){function a7(b){if(!a1(b)||aZ||ar(b)[2]){return void (aJ=0)
}aJ=1,q=0,bh=0,Y.removeClass("mCS_touch_action");
var d=H.offset();
bg=ar(b)[0]-d.top,Q=ar(b)[1]-d.left,a5=[ar(b)[0],ar(b)[1]]
}function a8(p){if(a1(p)&&!aZ&&!ar(p)[2]&&(p.stopImmediatePropagation(),!bh||q)){a6=aq();
var u=bb.offset(),d=ar(p)[0]-u.top,s=ar(p)[1]-u.left,g="mcsLinearOut";
if(t.push(d),V.push(s),a5[2]=Math.abs(ar(p)[0]-a5[0]),a5[3]=Math.abs(ar(p)[1]-a5[1]),J.overflowed[0]){var k=G[0].parent().height()-G[0].height(),b=bg-d>0&&d-bg>-(k*J.scrollRatio.y)&&(2*a5[3]<a5[2]||"yx"===a4.axis)
}if(J.overflowed[1]){var h=G[1].parent().width()-G[1].width(),m=Q-s>0&&s-Q>-(h*J.scrollRatio.x)&&(2*a5[2]<a5[3]||"yx"===a4.axis)
}b||m?(p.preventDefault(),q=1):(bh=1,Y.addClass("mCS_touch_action")),bi="yx"===a4.axis?[bg-d,Q-s]:"x"===a4.axis?[null,Q-s]:[bg-d,null],H[0].idleTimer=250,J.overflowed[0]&&X(bi[0],U,g,"y","all",!0),J.overflowed[1]&&X(bi[1],U,g,"x",c,!0)
}}function bc(b){if(!a1(b)||aZ||ar(b)[2]){return void (aJ=0)
}aJ=1,b.stopImmediatePropagation(),ae(Y),a9=aq();
var d=bb.offset();
bf=ar(b)[0]-d.top,bd=ar(b)[1]-d.left,t=[],V=[]
}function Z(l){if(a1(l)&&!aZ&&!ar(l)[2]){l.stopImmediatePropagation(),q=0,bh=0,be=aq();
var v=bb.offset(),g=ar(l)[0]-v.top,p=ar(l)[1]-v.left;
if(!(be-a6>30)){K=1000/(be-a9);
var h="mcsEaseOut",k=2.5>K,b=k?[t[t.length-2],V[V.length-2]]:[0,0];
N=k?[g-b[0],p-b[1]]:[g-bf,p-bd];
var m=[Math.abs(N[0]),Math.abs(N[1])];
K=k?[Math.abs(N[0]/4),Math.abs(N[1]/4)]:[K,K];
var s=[Math.abs(H[0].offsetTop)-N[0]*ba(m[0]/K[0],K[0]),Math.abs(H[0].offsetLeft)-N[1]*ba(m[1]/K[1],K[1])];
bi="yx"===a4.axis?[s[0],s[1]]:"x"===a4.axis?[null,s[1]]:[s[0],null],L=[4*m[0]+a4.scrollInertia,4*m[1]+a4.scrollInertia];
var f=parseInt(a4.contentTouchScroll)||0;
bi[0]=m[0]>f?bi[0]:0,bi[1]=m[1]>f?bi[1]:0,J.overflowed[0]&&X(bi[0],L[0],h,"y",c,!1),J.overflowed[1]&&X(bi[1],L[1],h,"x",c,!1)
}}}function ba(d,b){var f=[1.5*b,2*b,b/1.5,b/2];
return d>90?b>4?f[0]:f[3]:d>60?b>3?f[3]:f[2]:d>30?b>8?f[1]:b>6?f[0]:b>4?b:f[2]:b>8?b:f[3]
}function X(g,f,h,b,k,d){g&&aj(Y,g.toString(),{dur:f,scrollEasing:h,dir:b,overwrite:k,drag:d})
}var bg,Q,bf,bd,a9,a6,be,N,K,bi,L,q,bh,Y=a(this),J=Y.data(a2),a4=J.opt,j=a2+"_"+J.idx,bb=a("#mCSB_"+J.idx),H=a("#mCSB_"+J.idx+"_container"),G=[a("#mCSB_"+J.idx+"_dragger_vertical"),a("#mCSB_"+J.idx+"_dragger_horizontal")],t=[],V=[],U=0,c="yx"===a4.axis?"none":"all",a5=[],F=H.find("iframe"),I=["touchstart."+j+" pointerdown."+j+" MSPointerDown."+j,"touchmove."+j+" pointermove."+j+" MSPointerMove."+j,"touchend."+j+" pointerup."+j+" MSPointerUp."+j];
H.bind(I[0],function(b){a7(b)
}).bind(I[1],function(b){a8(b)
}),bb.bind(I[0],function(b){bc(b)
}).bind(I[2],function(b){Z(b)
}),F.length&&F.each(function(){a(this).load(function(){ao(this)&&a(this.contentDocument||this.contentWindow.document).bind(I[0],function(b){a7(b),bc(b)
}).bind(I[1],function(b){a8(b)
}).bind(I[2],function(b){Z(b)
})
})
})
},aw=function(){function c(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0
}function g(f,d,h){q.type=h&&k?"stepped":"stepless",q.scrollAmount=10,aM(b,f,d,"mcsLinearOut",h?60:null)
}var k,b=a(this),j=b.data(a2),v=j.opt,q=j.sequential,t=a2+"_"+j.idx,p=a("#mCSB_"+j.idx+"_container"),m=p.parent();
p.bind("mousedown."+t,function(d){aJ||k||(k=1,aZ=!0)
}).add(document).bind("mousemove."+t,function(h){if(!aJ&&k&&c()){var d=p.offset(),f=ar(h)[0]-d.top+p[0].offsetTop,i=ar(h)[1]-d.left+p[0].offsetLeft;
f>0&&f<m.height()&&i>0&&i<m.width()?q.step&&g("off",null,"stepped"):("x"!==v.axis&&j.overflowed[0]&&(0>f?g("on",38):f>m.height()&&g("on",40)),"y"!==v.axis&&j.overflowed[1]&&(0>i?g("on",37):i>m.width()&&g("on",39)))
}}).bind("mouseup."+t,function(d){aJ||(k&&(k=0,g("off",null)),aZ=!1)
})
},ad=function(){function g(x,v){if(ae(k),!aA(k,x.target)){var c="auto"!==f.mouseWheel.deltaFactor?parseInt(f.mouseWheel.deltaFactor):aK&&x.deltaFactor<100?100:x.deltaFactor||100;
if("x"===f.axis||"x"===f.mouseWheel.axis){var s="x",w=[Math.round(c*p.scrollRatio.x),parseInt(f.mouseWheel.scrollAmount)],q="auto"!==f.mouseWheel.scrollAmount?w[1]:w[0]>=b.width()?0.9*b.width():w[0],n=Math.abs(a("#mCSB_"+p.idx+"_container")[0].offsetLeft),l=m[1][0].offsetLeft,i=m[1].parent().width()-m[1].width(),o=x.deltaX||x.deltaY||v
}else{var s="y",w=[Math.round(c*p.scrollRatio.y),parseInt(f.mouseWheel.scrollAmount)],q="auto"!==f.mouseWheel.scrollAmount?w[1]:w[0]>=b.height()?0.9*b.height():w[0],n=Math.abs(a("#mCSB_"+p.idx+"_container")[0].offsetTop),l=m[0][0].offsetTop,i=m[0].parent().height()-m[0].height(),o=x.deltaY||v
}"y"===s&&!p.overflowed[0]||"x"===s&&!p.overflowed[1]||((f.mouseWheel.invert||x.webkitDirectionInvertedFromDevice)&&(o=-o),f.mouseWheel.normalizeDelta&&(o=0>o?-1:1),(o>0&&0!==l||0>o&&l!==i||f.mouseWheel.preventDefault)&&(x.stopImmediatePropagation(),x.preventDefault()),aj(k,(n-o*q).toString(),{dir:s}))
}}if(a(this).data(a2)){var k=a(this),p=k.data(a2),f=p.opt,h=a2+"_"+p.idx,b=a("#mCSB_"+p.idx),m=[a("#mCSB_"+p.idx+"_dragger_vertical"),a("#mCSB_"+p.idx+"_dragger_horizontal")],j=a("#mCSB_"+p.idx+"_container").find("iframe");
j.length&&j.each(function(){a(this).load(function(){ao(this)&&a(this.contentDocument||this.contentWindow.document).bind("mousewheel."+h,function(c,d){g(c,d)
})
})
}),b.bind("mousewheel."+h,function(c,d){g(c,d)
})
}},ao=function(d){var c=null;
try{var f=d.contentDocument||d.contentWindow.document;
c=f.body.innerHTML
}catch(b){}return null!==c
},aA=function(c,f){var g=f.nodeName.toLowerCase(),b=c.data(a2).opt.mouseWheel.disableOver,d=["select","textarea"];
return a.inArray(g,b)>-1&&!(a.inArray(g,d)>-1&&!a(f).is(":focus"))
},ak=function(){var d=a(this),g=d.data(a2),h=a2+"_"+g.idx,c=a("#mCSB_"+g.idx+"_container"),f=c.parent(),b=a(".mCSB_"+g.idx+"_scrollbar ."+aY[12]);
b.bind("touchstart."+h+" pointerdown."+h+" MSPointerDown."+h,function(i){aZ=!0
}).bind("touchend."+h+" pointerup."+h+" MSPointerUp."+h,function(i){aZ=!1
}).bind("click."+h,function(j){if(a(j.target).hasClass(aY[12])||a(j.target).hasClass("mCSB_draggerRail")){ae(d);
var p=a(this),i=p.find(".mCSB_dragger");
if(p.parent(".mCSB_scrollTools_horizontal").length>0){if(!g.overflowed[1]){return
}var m="x",o=j.pageX>i.offset().left?-1:1,k=Math.abs(c[0].offsetLeft)-0.9*o*f.width()
}else{if(!g.overflowed[0]){return
}var m="y",o=j.pageY>i.offset().top?-1:1,k=Math.abs(c[0].offsetTop)-0.9*o*f.height()
}aj(d,k.toString(),{dir:m,scrollEasing:"mcsEaseInOut"})
}})
},aD=function(){var d=a(this),g=d.data(a2),h=g.opt,c=a2+"_"+g.idx,f=a("#mCSB_"+g.idx+"_container"),b=f.parent();
f.bind("focusin."+c,function(m){var j=a(document.activeElement),k=f.find(".mCustomScrollBox").length,l=0;
j.is(h.advanced.autoScrollOnFocus)&&(ae(d),clearTimeout(d[0]._focusTimeout),d[0]._focusTimer=k?(l+17)*k:0,d[0]._focusTimeout=setTimeout(function(){var p=[aC(j)[0],aC(j)[1]],q=[f[0].offsetTop,f[0].offsetLeft],n=[q[0]+p[0]>=0&&q[0]+p[0]<b.height()-j.outerHeight(!1),q[1]+p[1]>=0&&q[0]+p[1]<b.width()-j.outerWidth(!1)],r="yx"!==h.axis||n[0]||n[1]?"all":"none";
"x"===h.axis||n[0]||aj(d,p[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:r,dur:l}),"y"===h.axis||n[1]||aj(d,p[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:r,dur:l})
},d[0]._focusTimer))
})
},at=function(){var c=a(this),d=c.data(a2),f=a2+"_"+d.idx,b=a("#mCSB_"+d.idx+"_container").parent();
b.bind("scroll."+f,function(g){(0!==b.scrollTop()||0!==b.scrollLeft())&&a(".mCSB_"+d.idx+"_scrollbar").css("visibility","hidden")
})
},af=function(){var d=a(this),h=d.data(a2),j=h.opt,c=h.sequential,g=a2+"_"+h.idx,b=".mCSB_"+h.idx+"_scrollbar",f=a(b+">a");
f.bind("mousedown."+g+" touchstart."+g+" pointerdown."+g+" MSPointerDown."+g+" mouseup."+g+" touchend."+g+" pointerup."+g+" MSPointerUp."+g+" mouseout."+g+" pointerout."+g+" MSPointerOut."+g+" click."+g,function(k){function m(l,n){c.scrollAmount=j.snapAmount||j.scrollButtons.scrollAmount,aM(d,l,n)
}if(k.preventDefault(),aB(k)){var i=a(this).attr("class");
switch(c.type=j.scrollButtons.scrollType,k.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===c.type){return
}aZ=!0,h.tweenRunning=!1,m("on",i);
break;
case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===c.type){return
}aZ=!1,c.dir&&m("off",i);
break;
case"click":if("stepped"!==c.type||h.tweenRunning){return
}m("on",i)
}}})
},av=function(){function y(n){function i(h,f){b.type=m.keyboard.scrollType,b.scrollAmount=m.snapAmount||m.keyboard.scrollAmount,"stepped"===b.type&&j.tweenRunning||aM(g,h,f)
}switch(n.type){case"blur":j.tweenRunning&&b.dir&&i("off",null);
break;
case"keydown":case"keyup":var d=n.keyCode?n.keyCode:n.which,r="on";
if("x"!==m.axis&&(38===d||40===d)||"y"!==m.axis&&(37===d||39===d)){if((38===d||40===d)&&!j.overflowed[0]||(37===d||39===d)&&!j.overflowed[1]){return
}"keyup"===n.type&&(r="off"),a(document.activeElement).is(x)||(n.preventDefault(),n.stopImmediatePropagation(),i(r,d))
}else{if(33===d||34===d){if((j.overflowed[0]||j.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type){ae(g);
var u=34===d?-1:1;
if("x"===m.axis||"yx"===m.axis&&j.overflowed[1]&&!j.overflowed[0]){var o="x",c=Math.abs(w[0].offsetLeft)-0.9*u*v.width()
}else{var o="y",c=Math.abs(w[0].offsetTop)-0.9*u*v.height()
}aj(g,c.toString(),{dir:o,scrollEasing:"mcsEaseInOut"})
}}else{if((35===d||36===d)&&!a(document.activeElement).is(x)&&((j.overflowed[0]||j.overflowed[1])&&(n.preventDefault(),n.stopImmediatePropagation()),"keyup"===n.type)){if("x"===m.axis||"yx"===m.axis&&j.overflowed[1]&&!j.overflowed[0]){var o="x",c=35===d?Math.abs(v.width()-w.outerWidth(!1)):0
}else{var o="y",c=35===d?Math.abs(v.height()-w.outerHeight(!1)):0
}aj(g,c.toString(),{dir:o,scrollEasing:"mcsEaseInOut"})
}}}}}var g=a(this),j=g.data(a2),m=j.opt,b=j.sequential,k=a2+"_"+j.idx,z=a("#mCSB_"+j.idx),w=a("#mCSB_"+j.idx+"_container"),v=w.parent(),x="input,textarea,select,datalist,keygen,[contenteditable='true']",q=w.find("iframe"),p=["blur."+k+" keydown."+k+" keyup."+k];
q.length&&q.each(function(){a(this).load(function(){ao(this)&&a(this.contentDocument||this.contentWindow.document).bind(p[0],function(c){y(c)
})
})
}),z.attr("tabindex","0").bind(p[0],function(c){y(c)
})
},aM=function(C,j,k,w,b){function v(h){var c="stepped"!==z.type,p=b?b:h?c?d/1.5:y:1000/60,f=h?c?7.5:40:2.5,F=[Math.abs(x[0].offsetTop),Math.abs(x[0].offsetLeft)],i=[A.scrollRatio.y>10?10:A.scrollRatio.y,A.scrollRatio.x>10?10:A.scrollRatio.x],E="x"===z.dir[0]?F[1]+z.dir[1]*i[1]*f:F[0]+z.dir[1]*i[0]*f,g="x"===z.dir[0]?F[1]+z.dir[1]*parseInt(z.scrollAmount):F[0]+z.dir[1]*parseInt(z.scrollAmount),t="auto"!==z.scrollAmount?g:E,l=w?w:h?c?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",r=h?!0:!1;
return h&&17>p&&(t="x"===z.dir[0]?F[1]:F[0]),aj(C,t.toString(),{dir:z.dir[0],scrollEasing:l,dur:p,onComplete:r}),h?void (z.dir=!1):(clearTimeout(z.step),void (z.step=setTimeout(function(){v()
},p)))
}function D(){clearTimeout(z.step),e(z,"step"),ae(C)
}var A=C.data(a2),B=A.opt,z=A.sequential,x=a("#mCSB_"+A.idx+"_container"),q="stepped"===z.type?!0:!1,d=B.scrollInertia<26?26:B.scrollInertia,y=B.scrollInertia<1?17:B.scrollInertia;
switch(j){case"on":if(z.dir=[k===aY[16]||k===aY[15]||39===k||37===k?"x":"y",k===aY[13]||k===aY[15]||38===k||37===k?-1:1],ae(C),ac(k)&&"stepped"===z.type){return
}v(q);
break;
case"off":D(),(q||A.tweenRunning&&z.dir)&&v(!0)
}},aa=function(b){var c=a(this).data(a2).opt,d=[];
return"function"==typeof b&&(b=b()),b instanceof Array?d=b.length>1?[b[0],b[1]]:"x"===c.axis?[null,b[0]]:[b[0],null]:(d[0]=b.y?b.y:b.x||"x"===c.axis?null:b,d[1]=b.x?b.x:b.y||"y"===c.axis?null:b),"function"==typeof d[0]&&(d[0]=d[0]()),"function"==typeof d[1]&&(d[1]=d[1]()),d
},aT=function(A,j){if(null!=A&&"undefined"!=typeof A){var k=a(this),v=k.data(a2),b=v.opt,u=a("#mCSB_"+v.idx+"_container"),B=u.parent(),z=typeof A;
j||(j="x"===b.axis?"x":"y");
var y="x"===j?u.outerWidth(!1):u.outerHeight(!1),x="x"===j?u[0].offsetLeft:u[0].offsetTop,w="x"===j?"left":"top";
switch(z){case"function":return A();
case"object":var q=A.jquery?A:a(A);
if(!q.length){return
}return"x"===j?aC(q)[1]:aC(q)[0];
case"string":case"number":if(ac(A)){return Math.abs(A)
}if(-1!==A.indexOf("%")){return Math.abs(y*parseInt(A)/100)
}if(-1!==A.indexOf("-=")){return Math.abs(x-parseInt(A.split("-=")[1]))
}if(-1!==A.indexOf("+=")){var g=x+parseInt(A.split("+=")[1]);
return g>=0?0:Math.abs(g)
}if(-1!==A.indexOf("px")&&ac(A.split("px")[0])){return Math.abs(A.split("px")[0])
}if("top"===A||"left"===A){return 0
}if("bottom"===A){return Math.abs(B.height()-u.outerHeight(!1))
}if("right"===A){return Math.abs(B.width()-u.outerWidth(!1))
}if("first"===A||"last"===A){var q=u.find(":"+A);
return"x"===j?aC(q)[1]:aC(q)[0]
}return a(A).length?"x"===j?aC(a(A))[1]:aC(a(A))[0]:(u.css(w,A),void aI.update.call(null,k[0]))
}}},ab=function(u){function B(){return clearTimeout(G[0].autoUpdate),0===y.parents("html").length?void (y=null):void (G[0].autoUpdate=setTimeout(function(){return I.advanced.updateOnSelectorChange&&(D=z(),D!==k)?(E(3),void (k=D)):(I.advanced.updateOnContentResize&&(A=[G.outerHeight(!1),G.outerWidth(!1),q.height(),q.width(),L()[0],L()[1]],(A[0]!==d[0]||A[1]!==d[1]||A[2]!==d[2]||A[3]!==d[3]||A[4]!==d[4]||A[5]!==d[5])&&(E(A[0]!==d[0]||A[1]!==d[1]),d=A)),I.advanced.updateOnImageLoad&&(H=C(),H!==K&&(G.find("img").each(function(){F(this)
}),K=H)),void ((I.advanced.updateOnSelectorChange||I.advanced.updateOnContentResize||I.advanced.updateOnImageLoad)&&B()))
},I.advanced.autoUpdateTimeout))
}function C(){var b=0;
return I.advanced.updateOnImageLoad&&(b=G.find("img").length),b
}function F(c){function f(i,h){return function(){return h.apply(i,arguments)
}
}function b(){this.onload=null,a(c).addClass(aY[2]),E(2)
}if(a(c).hasClass(aY[2])){return void E()
}var g=new Image;
g.onload=f(g,b),g.src=c.src
}function z(){I.advanced.updateOnSelectorChange===!0&&(I.advanced.updateOnSelectorChange="*");
var b=0,c=G.find(I.advanced.updateOnSelectorChange);
return I.advanced.updateOnSelectorChange&&c.length>0&&c.each(function(){b+=a(this).height()+a(this).width()
}),b
}function E(b){clearTimeout(G[0].autoUpdate),aI.update.call(null,y[0],b)
}var y=a(this),J=y.data(a2),I=J.opt,G=a("#mCSB_"+J.idx+"_container");
if(u){return clearTimeout(G[0].autoUpdate),void e(G[0],"autoUpdate")
}var D,A,H,q=G.parent(),j=[a("#mCSB_"+J.idx+"_scrollbar_vertical"),a("#mCSB_"+J.idx+"_scrollbar_horizontal")],L=function(){return[j[0].is(":visible")?j[0].outerHeight(!0):0,j[1].is(":visible")?j[1].outerWidth(!0):0]
},k=z(),d=[G.outerHeight(!1),G.outerWidth(!1),q.height(),q.width(),L()[0],L()[1]],K=C();
B()
},am=function(c,b,d){return Math.round(c/b)*b-d
},ae=function(b){var c=b.data(a2),d=a("#mCSB_"+c.idx+"_container,#mCSB_"+c.idx+"_container_wrapper,#mCSB_"+c.idx+"_dragger_vertical,#mCSB_"+c.idx+"_dragger_horizontal");
d.each(function(){ap.call(this)
})
},aj=function(D,J,K){function N(b){return E&&U.callbacks[b]&&"function"==typeof U.callbacks[b]
}function G(){return[U.callbacks.alwaysTriggerOffsets||W>=y[0]+V,U.callbacks.alwaysTriggerOffsets||-F>=W]
}function M(){var d=[O[0].offsetTop,O[0].offsetLeft],f=[z[0].offsetTop,z[0].offsetLeft],b=[O.outerHeight(!1),O.outerWidth(!1)],c=[Q.height(),Q.width()];
D[0].mcs={content:O,top:d[0],left:d[1],draggerTop:f[0],draggerLeft:f[1],topPct:Math.round(100*Math.abs(d[0])/(Math.abs(b[0])-c[0])),leftPct:Math.round(100*Math.abs(d[1])/(Math.abs(b[1])-c[1])),direction:K.dir}
}var E=D.data(a2),U=E.opt,R={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:U.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},K=a.extend(R,K),A=[K.dur,K.drag?0:K.dur],Q=a("#mCSB_"+E.idx),O=a("#mCSB_"+E.idx+"_container"),L=O.parent(),I=U.callbacks.onTotalScrollOffset?aa.call(D,U.callbacks.onTotalScrollOffset):[0,0],P=U.callbacks.onTotalScrollBackOffset?aa.call(D,U.callbacks.onTotalScrollBackOffset):[0,0];
if(E.trigger=K.trigger,(0!==L.scrollTop()||0!==L.scrollLeft())&&(a(".mCSB_"+E.idx+"_scrollbar").css("visibility","visible"),L.scrollTop(0).scrollLeft(0)),"_resetY"!==J||E.contentReset.y||(N("onOverflowYNone")&&U.callbacks.onOverflowYNone.call(D[0]),E.contentReset.y=1),"_resetX"!==J||E.contentReset.x||(N("onOverflowXNone")&&U.callbacks.onOverflowXNone.call(D[0]),E.contentReset.x=1),"_resetY"!==J&&"_resetX"!==J){switch(!E.contentReset.y&&D[0].mcs||!E.overflowed[0]||(N("onOverflowY")&&U.callbacks.onOverflowY.call(D[0]),E.contentReset.x=null),!E.contentReset.x&&D[0].mcs||!E.overflowed[1]||(N("onOverflowX")&&U.callbacks.onOverflowX.call(D[0]),E.contentReset.x=null),U.snapAmount&&(J=am(J,U.snapAmount,U.snapOffset)),K.dir){case"x":var z=a("#mCSB_"+E.idx+"_dragger_horizontal"),q="left",W=O[0].offsetLeft,y=[Q.width()-O.outerWidth(!1),z.parent().width()-z.width()],k=[J,0===J?0:J/E.scrollRatio.x],V=I[1],F=P[1],H=V>0?V/E.scrollRatio.x:0,j=F>0?F/E.scrollRatio.x:0;
break;
case"y":var z=a("#mCSB_"+E.idx+"_dragger_vertical"),q="top",W=O[0].offsetTop,y=[Q.height()-O.outerHeight(!1),z.parent().height()-z.height()],k=[J,0===J?0:J/E.scrollRatio.y],V=I[0],F=P[0],H=V>0?V/E.scrollRatio.y:0,j=F>0?F/E.scrollRatio.y:0
}k[1]<0||0===k[0]&&0===k[1]?k=[0,0]:k[1]>=y[1]?k=[y[0],y[1]]:k[0]=-k[0],D[0].mcs||(M(),N("onInit")&&U.callbacks.onInit.call(D[0])),clearTimeout(O[0].onCompleteTimeout),(E.tweenRunning||!(0===W&&k[0]>=0||W===y[0]&&k[0]<=y[0]))&&(au(z[0],q,Math.round(k[1]),A[1],K.scrollEasing),au(O[0],q,Math.round(k[0]),A[0],K.scrollEasing,K.overwrite,{onStart:function(){K.callbacks&&K.onStart&&!E.tweenRunning&&(N("onScrollStart")&&(M(),U.callbacks.onScrollStart.call(D[0])),E.tweenRunning=!0,aE(z),E.cbOffsets=G())
},onUpdate:function(){K.callbacks&&K.onUpdate&&N("whileScrolling")&&(M(),U.callbacks.whileScrolling.call(D[0]))
},onComplete:function(){if(K.callbacks&&K.onComplete){"yx"===U.axis&&clearTimeout(O[0].onCompleteTimeout);
var b=O[0].idleTimer||0;
O[0].onCompleteTimeout=setTimeout(function(){N("onScroll")&&(M(),U.callbacks.onScroll.call(D[0])),N("onTotalScroll")&&k[1]>=y[1]-H&&E.cbOffsets[0]&&(M(),U.callbacks.onTotalScroll.call(D[0])),N("onTotalScrollBack")&&k[1]<=j&&E.cbOffsets[1]&&(M(),U.callbacks.onTotalScrollBack.call(D[0])),E.tweenRunning=!1,O[0].idleTimer=0,aE(z,"hide")
},b)
}}}))
}},au=function(M,A,E,Q,F,I,C){function H(){j.stop||(k||G.call(),k=aq()-y,B(),k>=j.time&&(j.time=k>j.time?k+L-(k-j.time):k+L-1,j.time<k+1&&(j.time=k+1)),j.time<Q?j.id=J(H):K.call())
}function B(){Q>0?(j.currVal=z(j.time,R,P,Q,F),q[A]=Math.round(j.currVal)+"px"):q[A]=E+"px",D.call()
}function O(){L=1000/60,j.time=k+L,J=window.requestAnimationFrame?window.requestAnimationFrame:function(b){return B(),setTimeout(b,0.01)
},j.id=J(H)
}function N(){null!=j.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(j.id):clearTimeout(j.id),j.id=null)
}function z(g,d,h,b,l){switch(l){case"linear":case"mcsLinear":return h*g/b+d;
case"mcsLinearOut":return g/=b,g--,h*Math.sqrt(1-g*g)+d;
case"easeInOutSmooth":return g/=b/2,1>g?h/2*g*g+d:(g--,-h/2*(g*(g-2)-1)+d);
case"easeInOutStrong":return g/=b/2,1>g?h/2*Math.pow(2,10*(g-1))+d:(g--,h/2*(-Math.pow(2,-10*g)+2)+d);
case"easeInOut":case"mcsEaseInOut":return g/=b/2,1>g?h/2*g*g*g+d:(g-=2,h/2*(g*g*g+2)+d);
case"easeOutSmooth":return g/=b,g--,-h*(g*g*g*g-1)+d;
case"easeOutStrong":return h*(-Math.pow(2,-10*g/b)+1)+d;
case"easeOut":case"mcsEaseOut":default:var c=(g/=b)*g,f=c*g;
return d+h*(0.499999999999997*f*c+-2.5*c*c+5.5*f+-6.5*c+4*g)
}}M._mTween||(M._mTween={top:{},left:{}});
var L,J,C=C||{},G=C.onStart||function(){},D=C.onUpdate||function(){},K=C.onComplete||function(){},y=aq(),k=0,R=M.offsetTop,q=M.style,j=M._mTween[A];
"left"===A&&(R=M.offsetLeft);
var P=E-R;
j.stop=0,"none"!==I&&N(),O()
},aq=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()
},ap=function(){var d=this;
d._mTween||(d._mTween={top:{},left:{}});
for(var c=["top","left"],f=0;
f<c.length;
f++){var b=c[f];
d._mTween[b].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(d._mTween[b].id):clearTimeout(d._mTween[b].id),d._mTween[b].id=null,d._mTween[b].stop=1)
}},e=function(c,b){try{delete c[b]
}catch(d){c[b]=null
}},aB=function(b){return !(b.which&&1!==b.which)
},a1=function(c){var b=c.originalEvent.pointerType;
return !(b&&"touch"!==b&&2!==b)
},ac=function(b){return !isNaN(parseFloat(b))&&isFinite(b)
},aC=function(c){var b=c.parents(".mCSB_container");
return[c.offset().top-b.offset().top,c.offset().left-b.offset().left]
};
a.fn[aO]=function(b){return aI[b]?aI[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):aI.init.apply(this,arguments)
},a[aO]=function(b){return aI[b]?aI[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist"):aI.init.apply(this,arguments)
},a[aO].defaults=aU,window[aO]=!0,a(window).load(function(){a(aP)[aO](),a.extend(a.expr[":"],{mcsInView:a.expr[":"].mcsInView||function(d){var f,b,g=a(d),c=g.parents(".mCSB_container");
if(c.length){return f=c.parent(),b=[c[0].offsetTop,c[0].offsetLeft],b[0]+aC(g)[0]>=0&&b[0]+aC(g)[0]<f.height()-g.outerHeight(!1)&&b[1]+aC(g)[1]>=0&&b[1]+aC(g)[1]<f.width()-g.outerWidth(!1)
}},mcsOverflow:a.expr[":"].mcsOverflow||function(b){var c=a(b).data(a2);
if(c){return c.overflowed[0]||c.overflowed[1]
}}})
})
})
});