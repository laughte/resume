(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],m=0,f=[];m<s.length;m++)r=s[m],n[r]&&f.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},n={app:0},i=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"091e":function(e,t,a){"use strict";var o=a("d313"),n=a.n(o);n.a},1:function(e,t){},2:function(e,t){},2288:function(e,t,a){"use strict";var o=a("d22a"),n=a.n(o);n.a},3:function(e,t){},"383d":function(e,t,a){},4:function(e,t){},"50db":function(e,t,a){},5213:function(e,t,a){"use strict";var o=a("383d"),n=a.n(o);n.a},"53d8":function(e,t,a){"use strict";var o=a("50db"),n=a.n(o);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.mainpageflag,expression:"$store.state.mainpageflag"}],staticClass:"el-icon-edit animated fadeInDown",on:{click:e.showtool}}),a("tool",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.toolflag,expression:"$store.state.toolflag"}],staticClass:"animated fadeIn"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.mainpageflag,expression:"$store.state.mainpageflag"}],staticClass:"main animated fadeInDown"},e._l(e.$store.state.personinfo,function(t,o){return a("transition",{key:o,attrs:{name:"el-zoom-in-center"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.cardshowflag,expression:"cardshowflag"}],staticClass:"perapp"},[a("div",{ref:"mainpage",refInFor:!0,staticClass:"mainpage",class:e.isblur[t.perinfoflag]},[a("HelloWorld",{attrs:{data:t,n:o}}),a("card1",{attrs:{data:t}}),a("card2",{attrs:{data:t}}),a("div",{staticClass:"arstyle"},[a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"}),a("i",{staticClass:"around"})])],1),a("perinfo",{staticClass:"animated",class:e.peranimate[e.$store.state.personinfo[o].perinfoflag],attrs:{data:t,n:o}})],1)])}),1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tool"},[a("el-form",{ref:"form",staticClass:"leftside",attrs:{model:e.form,rules:e.rules,"label-width":"90px"}},[a("h2",[e._v("基本信息")]),a("el-form-item",{attrs:{label:"姓名:",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"年龄:",prop:"age"}},[a("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}})],1),a("el-form-item",{attrs:{label:"手机:",prop:"tel"}},[a("el-input",{model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",e._n(t))},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"email:",prop:"email"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"求职岗位:",prop:"post"}},[a("el-input",{model:{value:e.form.post,callback:function(t){e.$set(e.form,"post",t)},expression:"form.post"}})],1),a("el-form-item",{attrs:{label:"期望薪资:",prop:"salary"}},[a("el-input",{model:{value:e.form.salary,callback:function(t){e.$set(e.form,"salary",t)},expression:"form.salary"}})],1),a("el-form-item",{attrs:{label:"工作时间:",prop:"workWay"}},[a("el-radio-group",{model:{value:e.form.workWay,callback:function(t){e.$set(e.form,"workWay",t)},expression:"form.workWay"}},[a("el-radio",{attrs:{label:"全职"}}),a("el-radio",{attrs:{label:"兼职"}})],1)],1),a("el-form-item",{attrs:{label:"github:"}},[a("el-input",{model:{value:e.form.github,callback:function(t){e.$set(e.form,"github",t)},expression:"form.github"}})],1),a("el-form-item",{attrs:{label:"blog:"}},[a("el-input",{model:{value:e.form.blog,callback:function(t){e.$set(e.form,"blog",t)},expression:"form.blog"}})],1),a("h2",[e._v("工作经验")]),a("el-form-item",{attrs:{label:"公司:"}},[a("el-input",{model:{value:e.work.company,callback:function(t){e.$set(e.work,"company",t)},expression:"work.company"}})],1),a("el-form-item",{attrs:{label:"时间:"}},[a("el-input",{model:{value:e.work.time,callback:function(t){e.$set(e.work,"time",t)},expression:"work.time"}})],1),a("el-form-item",{attrs:{label:"职位:"}},[a("el-input",{model:{value:e.work.post,callback:function(t){e.$set(e.work,"post",t)},expression:"work.post"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.addworkitem}},[e._v("添加工作")]),a("el-button",{on:{click:e.resetwork}},[e._v("重置工作")])],1)],1),a("div",{staticClass:"perapp"},[a("div",{ref:"mainpage",staticClass:"mainpage",class:e.isblur[e.form.perinfoflag]},[a("HelloWorld",{attrs:{data:e.form}}),a("card1",{attrs:{data:e.form}}),a("card2",{attrs:{data:e.form}}),e._m(0)],1),a("perinfo",{staticClass:"animated",class:e.peranimate[e.form.perinfoflag],attrs:{data:e.form}})],1),a("el-form",{ref:"form",staticClass:"rightside",attrs:{"label-position":"left",model:e.form,rules:e.rules,"label-width":"80px"}},[a("h2",[e._v("教育背景")]),a("el-form-item",{attrs:{label:"学校:"}},[a("el-input",{model:{value:e.education.school,callback:function(t){e.$set(e.education,"school",t)},expression:"education.school"}})],1),a("el-form-item",{attrs:{label:"时间:"}},[a("el-input",{model:{value:e.education.time,callback:function(t){e.$set(e.education,"time",t)},expression:"education.time"}})],1),a("el-form-item",{attrs:{label:"专业:"}},[a("el-input",{model:{value:e.education.specialty,callback:function(t){e.$set(e.education,"specialty",t)},expression:"education.specialty"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.addeduitem}},[e._v("添加学校")]),a("el-button",{on:{click:e.resetedu}},[e._v("重置学校")])],1),a("h2",[e._v("工作技能")]),a("el-form-item",{attrs:{label:"技能:"}},[a("el-input",{model:{value:e.skill.name,callback:function(t){e.$set(e.skill,"name",t)},expression:"skill.name"}})],1),a("el-form-item",{attrs:{label:"熟练度:"}},[a("el-slider",{model:{value:e.skill.Proficiency,callback:function(t){e.$set(e.skill,"Proficiency",t)},expression:"skill.Proficiency"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.addskillitem}},[e._v("添加技能")]),a("el-button",{on:{click:e.resetskill}},[e._v("重置技能")])],1),a("h2",[e._v("自我评价")]),a("el-form-item",{attrs:{prop:"evaluation"}},[a("el-input",{attrs:{rows:"5",type:"textarea"},model:{value:e.form.evaluation,callback:function(t){e.$set(e.form,"evaluation",t)},expression:"form.evaluation"}})],1),a("h2",[e._v("职业规划")]),a("el-form-item",{attrs:{prop:"careerPlanning"}},[a("el-input",{attrs:{rows:"6",type:"textarea"},model:{value:e.form.careerPlanning,callback:function(t){e.$set(e.form,"careerPlanning",t)},expression:"form.careerPlanning"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("立即创建")]),a("el-button",{on:{click:e.unSubmit}},[e._v("取消")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"arstyle"},[a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"}),a("div",{staticClass:"around"})])}],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("div",{staticClass:"sanjiaoxing",on:{click:function(t){return e.deleteitem(e.n)}}}),a("h2",{on:{mouseover:function(t){e.data.perinfoflag=!e.data.perinfoflag}}},[e._v(e._s(e.data.name))]),a("br"),a("div",{staticClass:"otheritem"},[a("p",[e._v("\n      前端WEB开发 |\n      "),a("a",{attrs:{href:e.data.blog}},[e._v("BLOG")]),e._v(" |\n      "),a("a",{attrs:{href:e.data.github}},[e._v("GITHUB")])])])])},c=[],u=(a("c5f6"),{name:"HelloWorld",props:{data:Object,n:Number},methods:{deleteitem:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$store.commit("deleteItem",e),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}}),m=u,f=(a("ad8d"),a("2877")),d=Object(f["a"])(m,l,c,!1,null,"278808fa",null),p=d.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card1"},[a("h2",[e._v("求职意向")]),a("hr"),a("div",{staticClass:"ph"},[a("p",[a("b",[e._v("岗位:")]),e._v("\n      "+e._s(e.data.post)+"\n    ")]),a("p",[a("b",[e._v("薪资:")]),e._v("\n      "+e._s(e.data.salary)+"\n    ")]),a("p",[a("b",[e._v("工作时间:")]),e._v("\n      "+e._s(e.data.workWay)+"\n    ")])]),a("h2",[e._v("自我评价")]),a("hr"),a("p",{staticClass:"content"},[e._v(e._s(e.data.evaluation))]),a("h2",[e._v("职业规划")]),a("hr"),a("p",{staticClass:"content"},[e._v(e._s(e.data.careerPlanning))])])},g=[],h={name:"HelloWorld",props:{data:Object}},b=h,y=(a("091e"),Object(f["a"])(b,v,g,!1,null,"2de96908",null)),k=y.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card2"},[a("h2",[e._v("工作经验")]),a("hr"),a("div",{staticClass:"content"},e._l(e.data.workExperience,function(t,o){return a("div",{key:o},[a("strong",[e._v(e._s(t.company))]),a("br"),e._v("\n      "+e._s(t.time)+" | "+e._s(t.post)+"\n    ")])}),0),a("h2",[e._v("教育背景")]),a("hr"),e._l(e.data.education,function(t,o){return a("p",{key:o},[a("strong",[e._v(e._s(t.school))]),a("br"),e._v("\n    时间:"+e._s(t.time)+"\n    "),a("br"),e._v("\n    专业: "+e._s(t.specialty)+"\n  ")])}),a("h2",[e._v("技能熟练度")]),a("hr"),e._l(e.data.skill,function(t){return a("div",{key:t.name},[a("b",[e._v(e._s(t.name))]),a("el-progress",{attrs:{percentage:t.init,"stroke-width":16,"text-inside":!0,status:"exception"}})],1)})],2)},w=[],x=(a("ac6a"),a("1c46"),a("3022"),{name:"HelloWorld",props:{msg:String,data:Object},data:function(){return{}},methods:{setprogress:function(e){var t=0,a=setInterval(function(){t+=1,t===e.Proficiency&&(e.init=e.Proficiency,clearInterval(a))},0)}},mounted:function(){var e=this;setTimeout(function(){e.data.skill.forEach(function(t){e.setprogress(t)})},500)}}),C=x,$=(a("53d8"),Object(f["a"])(C,_,w,!1,null,"39ccfc5e",null)),j=$.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"per"},[a("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.data.perinfoflag=!e.data.perinfoflag}}}),a("h2",[e._v("联系方式")]),a("hr"),a("p",[a("b",[e._v("tel:")]),e._v("\n    "+e._s(e.data.tel)+"\n    "),a("br"),a("b",[e._v("email:")]),e._v("\n    "+e._s(e.data.email)+"\n  ")])])},O=[],S={name:"personinfo",props:{data:Object,n:Number},data:function(){return{}},methods:{}},E=S,W=(a("5213"),Object(f["a"])(E,P,O,!1,null,null,null)),I=W.exports,N={components:{HelloWorld:p,card1:k,card2:j,perinfo:I},data:function(){return{isblur:{true:"bluractive",false:"noblur"},skill:{name:"",init:0,Proficiency:0},education:{school:"",time:"",specialty:""},work:{company:"",time:"",post:""},peranimate:{true:" jackInTheBox",false:"rollOut"},form:{perinfoflag:!1,name:"刘欢",age:27,tel:13627079680,email:"liuziyu36@gmail.com",post:"WEB前端",salary:"5.5k-7.5k",workWay:"全职",careerObjective:"",workExperience:[{company:"苏州今生有约婚纱摄影",time:"2014.7-2015.10",post:"婚纱照美化调修"},{company:"苏州万盟玉栈",time:"2016.3-2017.102016.3-2017.10",post:"设计师"},{company:"赣州米兰婚纱摄影",time:"2017.06-2018.05",post:"婚纱照美化调修"},{company:"喜福文化传播有限公司",time:"2018.10-2019.07",post:"婚纱照美化调修"}],education:[{school:"九江职业技术学院",time:"2011.9~2014.6",specialty:"动漫设计与制作"}],evaluation:"学习能力强,有良好的学习习惯，遇到不懂，意味着新的学习收获适应能力强，有良好的团队精神和团队意识，能积极融团队, 乐于接受和适应新鲜事物对待工作认真负责，能在岗位和团队中汲取养分不断学习，和公司共同进步和成长",careerPlanning:"从毕业到现在做了几年的影楼和设计行业,感觉这些好像并不适合我,因为并不能从中获取成就感,后来接触了编程,从开始的基本的html css js学起慢慢的从中找到了乐趣,便开始计划转行做前端,后来又系统的学习了vue 前端框架, nodejs, python 期间自己也写了些项目以便更深入的学习,从开始到现在学编程也有将近一年的时间了,便想着是时候找个公司来检验我的学习成果了.",skill:[{name:"photoshop",init:0,Proficiency:85},{name:"illustrator",init:0,Proficiency:80},{name:"html&css",init:0,Proficiency:75},{name:"js&nodejs",init:0,Proficiency:65},{name:"python",init:0,Proficiency:60},{name:"vue&vuex&axios",init:0,Proficiency:65}],blog:"myblog/index.html",github:"https://github.com/laughte"},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:9,message:"长度在 2 到 9 个字符",trigger:"blur"}],age:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}],post:[{required:!0,message:"内容不能为空",trigger:"blur"}],salary:[{required:!0,message:"内容不能为空",trigger:"blur"}],tel:[{required:!0,message:"请输入手机号码",trigger:"blur"},{type:"number",message:"号码必须为数字值"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],evaluation:[{required:!0,message:"请输入相关内容",trigger:"blur"},{min:50,max:200,message:"长度在 50 到 200 个字符",trigger:"blur"}],careerPlanning:[{required:!0,message:"请输入相关内容",trigger:"blur"},{min:50,max:200,message:"长度在 50 到 200 个字符",trigger:"blur"}],workWay:[{required:!0,message:"请选择活工作方式",trigger:"change"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$store.state.personinfo.unshift(t.form),t.$store.commit("saveStorageData"),t.form={perinfoflag:!1,workExperience:[],education:[],skill:[]},t.$store.commit("showtool")})},unSubmit:function(){this.$store.commit("showtool")},addworkitem:function(){this.form.workExperience.push(this.work),this.work={}},resetwork:function(){this.form.workExperience=[]},addeduitem:function(){this.form.education.push(this.education),this.education={}},resetedu:function(){this.form.education=[]},addskillitem:function(){this.form.skill.push(this.skill),this.skill={init:0}},resetskill:function(){this.form.skill=[]}}},q=N,B=(a("2288"),Object(f["a"])(q,r,s,!1,null,"047e4598",null)),T=B.exports,H={name:"app",components:{HelloWorld:p,card1:k,card2:j,perinfo:I,tool:T},data:function(){return{cardshowflag:!1,peranimate:{true:" jackInTheBox",false:"rollOut"},isblur:{true:"bluractive",false:"noblur"}}},methods:{showtool:function(){this.$store.commit("showtool")},changeflag:function(){this.cardshowflag=!0}},computed:{linsen:function(){return this.$store.state.personinfo}},watch:{linsen:function(e,t){this.$store.commit("saveStorageData")}},mounted:function(){this.changeflag()},created:function(){this.$store.commit("readStoragedata")}},z=H,D=(a("5c0b"),Object(f["a"])(z,n,i,!1,null,null,null)),J=D.exports,M=a("2f62");o["default"].use(M["a"]);var A=new M["a"].Store({state:{toolflag:!1,mainpageflag:!0,n:0,personinfo:[{perinfoflag:!1,name:"刘欢",age:27,tel:13627079680,email:"liuziyu36@gmail.com",post:"WEB前端",salary:"5.5k-7.5k",workWay:"全职",careerObjective:"",workExperience:[{company:"苏州今生有约婚纱摄影",time:"2014.7-2015.10",post:"婚纱照美化调修"},{company:"苏州万盟玉栈",time:"2016.3-2017.102016.3-2017.10",post:"设计师"},{company:"赣州米兰婚纱摄影",time:"2017.06-2018.05",post:"婚纱照美化调修"},{company:"喜福文化传播有限公司",time:"2018.10-2019.07",post:"婚纱照美化调修"}],education:[{school:"九江职业技术学院",time:"2011.9~2014.6",specialty:"动漫设计与制作"}],evaluation:"学习能力强,有良好的学习习惯，遇到不懂，意味着新的学习收获适应能力强，有良好的团队精神和团队意识，能积极融团队, 乐于接受和适应新鲜事物对待工作认真负责，能在岗位和团队中汲取养分不断学习，和公司共同进步和成长",careerPlanning:"从毕业到现在做了几年的影楼和设计行业,感觉这些好像并不适合我,因为并不能从中获取成就感,后来接触了编程,从开始的基本的html css js学起慢慢的从中找到了乐趣,便开始计划转行做前端,后来又系统的学习了vue 前端框架, nodejs, python 期间自己也写了些项目以便更深入的学习,从开始到现在学编程也有将近一年的时间了,便想着是时候找个公司来检验我的学习成果了.",skill:[{name:"photoshop",init:0,Proficiency:85},{name:"illustrator",init:0,Proficiency:80},{name:"html&css",init:0,Proficiency:75},{name:"js&nodejs",init:0,Proficiency:65},{name:"python",init:0,Proficiency:60},{name:"vue&vuex&axios",init:0,Proficiency:65}],blog:"myblog/index.html",github:"https://github.com/laughte"}]},mutations:{showtool:function(e){e.mainpageflag=!e.mainpageflag,e.toolflag=!e.toolflag},deleteItem:function(e,t){e.personinfo.splice(t,1)},saveStorageData:function(e){var t=JSON.stringify(e.personinfo);localStorage.setItem("personinfo",t)},readStoragedata:function(e){if(localStorage.getItem("personinfo")){var t=localStorage.getItem("personinfo");e.personinfo=JSON.parse(t)}}},actions:{}}),F=a("9483");Object(F["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var G=a("5c96"),L=a.n(G);a("c69f");o["default"].use(L.a);a("d170");o["default"].config.productionTip=!1,new o["default"]({store:A,render:function(e){return e(J)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var o=a("5e27"),n=a.n(o);n.a},"5e27":function(e,t,a){},a586:function(e,t,a){},ad8d:function(e,t,a){"use strict";var o=a("a586"),n=a.n(o);n.a},c69f:function(e,t,a){},d170:function(e,t,a){},d22a:function(e,t,a){},d313:function(e,t,a){}});
//# sourceMappingURL=app.da15ccb6.js.map