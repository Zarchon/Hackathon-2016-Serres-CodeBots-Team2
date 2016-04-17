!function(a,b,c){"use strict";function d(b,c){this._name=e,this.element=b,this.$element=a(b),this.options=a.extend({},a.fn[e].defaults,c),this.$trigger=this.$element.find("."+this.options.btnClass),this.$content=this.$element.find("."+this.options.contentClass),this.init()}var e="dropdown",f=[];d.prototype={init:function(){this.addEvents(),this.options.hidden===!1&&this.open()},open:function(){var b=this;a.fn[e].closeAll(),this.isOpen=!0,this.$element.addClass("is-open"),this.$trigger.addClass("is-active"),a(c).on("click.dropdown",a.proxy(this.toggle,this)),a(c).on("keydown.dropdown",function(a){27===a.keyCode&&b.close()})},close:function(){this.isOpen=!1,this.$element.removeClass("is-open"),this.$trigger.removeClass("is-active"),a(c).off("click.dropdown"),a(c).off("keydown.dropdown")},toggle:function(a){this.isOpen?this.close():this.open(),a.stopPropagation(),a.preventDefault()},center:function(){if(this.options.centerContent){var a=this.$trigger.outerWidth(),b=this.$content.outerWidth();this.$content.css("left",-(Math.abs(a-b)/2))}},addEvents:function(){this.center(),this.$trigger.on("click.dropdown",a.proxy(this.toggle,this)),this.$content.on("click",function(a){a.stopPropagation()})}},a.fn[e]=function(b){return this.each(function(){a.data(this,"plugin_"+e)||f.push(a.data(this,"plugin_"+e,new d(this,b)))})},a.fn[e].defaults={wrapClass:"Dropdown",btnClass:"Dropdown-control",contentClass:"Dropdown-view",centerContent:!1,hidden:!0},a.fn[e].closeAll=function(){a.each(f,function(a,b){b.close()})}}(jQuery,window,document),function(a,b){"use strict";function c(a,b){function c(a){return a.replace(k,function(a,b){return b.toUpperCase()})}function d(a){function b(a){return!isNaN(parseFloat(a))&&isFinite(a)}return"false"===a.toLowerCase()?!1:"true"===a.toLowerCase()?!0:b(a)?parseInt(a,10):a}var e,f,g,h,i=a.attributes,j={},k=/-([\da-z])/gi;for(f=0,e=i.length;e>f;f++)g=i[f].name,g.indexOf("data-"+b)>-1&&(h=c(i[f].name.replace("data-"+b+"-","")),j[h]=d(i[f].value));return j}a(b).on("load",function(){a("[data-tlrk-plugin]").each(function(){var b,d,e=a(this),f=this.getAttribute("data-tlrk-plugin").split(" "),g=f.length;for(d=0;g>d;d++)b=f[d],a.isFunction(a.fn[b])&&e[b](c(this,b.toLowerCase()))})})}(jQuery,window,document);