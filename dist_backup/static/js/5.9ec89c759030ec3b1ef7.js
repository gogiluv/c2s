webpackJsonp([5],{"5JVp":function(t,e,n){var i=n("tGP5");t.exports=i},A588:function(t,e,n){var i=n("y1vT"),o=n("FuDM");t.exports={props:{width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},value:{type:String,default:""},srcPath:{type:String},language:{type:String,default:"c"},theme:{type:String,default:"vs-dark"},options:{type:Object,default:function(){}},highlighted:{type:Array,default:function(){return[{number:0,class:""}]}},changeThrottle:{type:Number,default:0}},mounted:function(){this.fetchEditor()},destroyed:function(){},beforeDestroy:function(){console.log("BeforeDestroy"),void 0!==this.completionItemProvider&&this.completionItemProvider.dispose(),void 0!==this.editor&&(this.editor&&this.editor.dispose(),this.editor.dispose())},computed:{style:function(){var t=this.width,e=this.height;return{width:-1!==t.toString().indexOf("%")?t:t+"px",height:-1!==e.toString().indexOf("%")?e:e+"px"}},editorOptions:function(){return Object.assign({},this.defaults,this.options,{value:this.value,language:this.language,theme:this.theme})}},data:function(){return{defaults:{selectOnLineNumbers:!0,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,glyphMargin:!0}}},watch:{highlighted:{handler:function(t){this.highlightLines(t)},deep:!0},options:{deep:!0,handler:function(t){this.editor&&this.editor.updateOptions(t)}},value:function(t){this.editor&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.editor&&window.monaco.editor.setModelLanguage(this.editor.getModel(),t)},theme:function(t){this.editor&&window.monaco.editor.setTheme(t)}},methods:{getMonaco:function(){return this.editor},focus:function(){this.editor.focus()},highlightLines:function(t){var e=this;this.editor&&t.forEach(function(t){var n=t.class,i=e.$el.querySelector("."+n);i&&i.classList.remove(n);var o=parseInt(t.number);if(!(!e.editor&&o<1||isNaN(o))){var a=e.$el.querySelector('.view-lines [linenumber="'+o+'"]');a&&a.classList.add(n)}})},editorHasLoaded:function(t,e){var n=this;this.editor=t,this.monaco=e,this.editor.onDidChangeModelContent(function(e){return n.codeChangeHandler(t,e)}),this.autoCompleteMonaco(),this.$emit("mounted",t)},codeChangeHandler:function(t){this.codeChangeEmitter?this.codeChangeEmitter(t):(this.codeChangeEmitter=i(function(t){this.$emit("codeChange",t)},this.changeThrottle),this.codeChangeEmitter(t))},autoCompleteMonaco:function(){function t(){return[{label:"Vector2",kind:window.monaco.languages.CompletionItemKind.Class,documentation:"UnityEngine.Vector2",insertText:"Vector2()"},{label:"Vector3",kind:window.monaco.languages.CompletionItemKind.Class,documentation:"UnityEngine.Vector3",insertText:"Vector3()"}]}function e(){return[{label:"Matrix3x3",kind:window.monaco.languages.CompletionItemKind.Class,documentation:"UnityEngine.Matrix3x3",insertText:"Matrix3x3()"},{label:"Matrix4x4",kind:window.monaco.languages.CompletionItemKind.Class,documentation:"UnityEngine.Matrix4x4",insertText:"Matrix4x4()"}]}function n(){return[{label:"UnityEngine",kind:window.monaco.languages.CompletionItemKind.Text,documentation:"UnityEngine",insertText:"UnityEngine;"}]}this.monaco.languages.register({id:"csharp"}),this.completionItemProvider=this.monaco.languages.registerCompletionItemProvider("csharp",{provideCompletionItems:function(i,o){for(var a=i.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:o.lineNumber,endColumn:o.column}),s=[],r=[{regex:/\s*new\s*Ve(\w+)/,proposal:t},{regex:/\s*new\s*Ma(\w+)/,proposal:e},{regex:"using Un",proposal:n}],l=0;l<r.length;++l){a.match(r[l].regex)&&(s=s.concat(s,r[l].proposal()),s=Array.from(new Set(s)))}var c,u=a.match("new Vector2"),d=a.match("new Vector3"),m=a.match("new Matrix3x3"),h=a.match("new Matrix4x4"),p=[],g=[],v=[],f=[];if(u||d){u&&(p=p.concat(p,["down","left","negativeInfinity","one","right","up","zero"]),g=g.concat(g,["magnitude","normalized","sqrMagnitude","x","y"]),v=v.concat(v,["Equals","Normalize","Set","ToString"]),f=f.concat(f,["Angle","ClampMagnitude","Distance","Dot","Lerp","LerpUnclamped","Max","Min","MoveTowards","Perpendicular","Reflect","Scale","SignedAngle","SmoothDamp"])),d&&(p=p.concat(p,["back","down","forward","left","negativeInfinity","one","positiveInfinity","right","up","zero"]),g=g.concat(g,["magnitude","normalized","sqrMagnitude","x","y","z"]),v=v.concat(v,["Equals","Set","ToString"]),f=f.concat(f,["Angle","ClampMagnitude","Cross","Distance","Dot","Lerp","LerpUnclamped","Max","Min","MoveTowards","Normalize","OrthoNormalize","Project","ProjectOnPlane","Reflect","RotateTowards","Scale","SignedAngle","Slerp","SlerpUnclamped","SmoothDamp"])),m&&(p=p.concat(p,["identity"]),v=v.concat(v,["GetDeterminant","Invert","Transpose"]),f=f.concat(f,["MultiplyVector2","MultiplyVector3","MultiplyMatrix3x3","ToString"])),h&&(p=p.concat(p,["identity","zero"]),g=g.concat(g,["decomposeProjection","determinant","inverse","isIdentity","lossyScale","rotation","transpose"]),v=v.concat(v,["GetColumn","GetRow","MultiplyPoint","MultiplyPoint3x4","MultiplyVector","SetColumn","SetRow","SetTRS","ToString","TransformPlane","ValidTRS"]),f=f.concat(f,["Frustum","LookAt","Ortho","Perspective","Rotate","Scale","Translate","TRS"])),p=Array.from(new Set(p)),g=Array.from(new Set(g)),v=Array.from(new Set(v)),f=Array.from(new Set(f));for(c in p)s.push({label:p[c],kind:window.monaco.languages.CompletionItemKind.Text});for(c in g)s.push({label:g[c],kind:window.monaco.languages.CompletionItemKind.Text});for(c in v)s.push({label:v[c],kind:window.monaco.languages.CompletionItemKind.Method});for(c in f)s.push({label:f[c],kind:window.monaco.languages.CompletionItemKind.Method});return s}return s}})},fetchEditor:function(){o.load(this.srcPath,this.createMonaco)},createMonaco:function(){this.editor=window.monaco.editor.create(this.$el,this.editorOptions),this.editor.setValue(this.value),this.editorHasLoaded(this.editor,window.monaco),console.log("create Monaco")},destroyMonaco:function(){void 0!==this.editor&&(console.log("destroy Monaco"),this.editor.dispose())}}}},EECn:function(t,e){},FuDM:function(t,e){t.exports={load:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://as.alipayobjects.com/g/cicada/monaco-editor-mirror/0.6.1/min",e=arguments[1];if(window.monaco)e();else{var n={paths:{vs:t+"/vs"}},i=n.paths.vs+"/loader.js",o=function(){if(window.LOADER_PENDING&&window.require.config(n),window.require(["vs/editor/editor.main"],function(){e()}),window.LOADER_PENDING){window.LOADER_PENDING=!1;var t=window.LOADER_CALLBACKS;if(t&&t.length)for(var i=t.shift();i;)i.fn.call(i.window),i=t.shift()}};if(window.LOADER_PENDING)window.LOADER_CALLBACKS=window.LOADER_CALLBACKS||[],window.LOADER_CALLBACKS.push({window:this,fn:o});else if(void 0===window.require){var a=window.document.createElement("script");a.type="text/javascript",a.src=i,a.addEventListener("load",o),window.document.body.appendChild(a),window.LOADER_PENDING=!0}else o()}}}},NKCg:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{style:this.style})},staticRenderFns:[]};e.a=i},OfF5:function(t,e){},Oulc:function(t,e){},VCUn:function(t,e){},WQH6:function(t,e,n){"use strict";function i(t){return C[t.name].color}Object.defineProperty(e,"__esModule",{value:!0});var o=n("fZjL"),a=n.n(o),s=n("mvHQ"),r=n.n(s),l=n("Dd8w"),c=n.n(l),u=n("NYxO"),d=n("IcnI"),m=n("5JVp"),h={components:{MonacoEditor:n.n(m).a},props:{languages:{},language:{},value:{type:String,default:""}},data:function(){return{codingLanguage:"c",theme:"vs-dark",highlightLines:[{number:0,class:"primary-highlighted-line"},{number:0,class:"secondary-highlighted-line"}],themes:[{label:"vs-dark",value:"vs-dark"},{label:"vs",value:"vs"},{label:"hc-black",value:"hc-black"}]}},mounted:function(){},methods:{onMounted:function(t){this.editor=t,"C++"===this.language?this.codingLanguage="cpp":"C"===this.language?this.codingLanguage="c":"C#"===this.language?this.codingLanguage="csharp":"Java"===this.language?this.codingLanguage="java":"Python2"===this.language?this.codingLanguage="python":"Python3"===this.language&&(this.codingLanguage="python"),console.log("onMounted")},onCodeChange:function(){console.log("onCodeChange"),this.$emit("update:value",this.editor.getValue())},onLangChange:function(t){this.language=t,"C++"===t?t="cpp":"C"===t?t="c":"C#"===t?t="csharp":"Java"===t?t="java":"Python2"===t?t="python":"Python3"===t&&(t="python"),this.codingLanguage=t,this.$emit("changeLang",this.language)},onThemeChange:function(t){}},created:function(){this.options={selectOnLineNumbers:!1},this.editorOptions={value:this.value,language:this.language,theme:this.theme}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"0px 0px 15px 0px"}},[n("Row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("Col",{attrs:{span:10}},[n("div",[n("span",[t._v("Language:")]),t._v(" "),n("Select",{staticClass:"adjust",attrs:{value:t.language},on:{"on-change":t.onLangChange}},t._l(t.languages,function(e){return n("Option",{key:e,attrs:{value:e}},[t._v(t._s(e)+"\n          ")])}))],1)]),t._v(" "),n("Col",{attrs:{span:10}},[n("div",{staticClass:"fl-right"},[n("span",[t._v("Theme:")]),t._v(" "),n("Select",{staticClass:"adjust",on:{"on-change":t.onThemeChange},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}},t._l(t.themes,function(e){return n("Option",{key:e.label,attrs:{value:e.value}},[t._v(t._s(e.label)+"\n          ")])}))],1)])],1),t._v(" "),n("MonacoEditor",{ref:"myEditor",attrs:{height:"480",width:"100%",srcPath:"/static/release_monaco/dev",value:t.value,theme:t.theme,language:t.codingLanguage,editorOptions:t.editorOptions},on:{"update:value":function(e){t.value=e},mounted:t.onMounted,codeChange:t.onCodeChange}})],1)},staticRenderFns:[]},g=n("VU/8")(h,p,!1,function(t){n("OfF5"),n("Oulc"),n("EECn")},"data-v-dfd459d2",null).exports,v=n("VKKs"),f=n("y2MC"),b=n("FN8c"),_=n("8Q2T"),C={AC:{color:"#19be6b"},WA:{color:"#ed3f14"},TLE:{color:"#ff9300"},MLE:{color:"#f7de00"},RE:{color:"#ff6104"},CE:{color:"#80848f"},PAC:{color:"#2d8cf0"}},y={legend:{left:"center",top:"10",orient:"horizontal",data:["AC","WA"]},series:[{name:"Summary",type:"pie",radius:"80%",center:["50%","55%"],itemStyle:{normal:{color:i}},data:[{value:0,name:"WA"},{value:0,name:"AC"}],label:{normal:{position:"inner",show:!0,formatter:"{b}: {c}\n {d}%",textStyle:{fontWeight:"bold"}}}}]},w={legend:{left:"center",top:"10",orient:"horizontal",itemGap:20,data:["AC","RE","WA","TLE","PAC","MLE"]},series:[{name:"Detail",type:"pie",radius:["45%","70%"],center:["50%","55%"],itemStyle:{normal:{color:i}},data:[{value:0,name:"RE"},{value:0,name:"WA"},{value:0,name:"TLE"},{value:0,name:"AC"},{value:0,name:"MLE"},{value:0,name:"PAC"}],label:{normal:{formatter:"{b}: {c}\n {d}%"}},labelLine:{normal:{}}},{name:"Summary",type:"pie",radius:"30%",center:["50%","55%"],itemStyle:{normal:{color:i}},data:[{value:"0",name:"WA"},{value:0,name:"AC",selected:!0}],label:{normal:{position:"inner",formatter:"{b}: {c}\n {d}%"}}}]},I=["-1","-2","0","1","2","3","4","8"],S={name:"Problem",components:{MonacoEditor:g},mixins:[f.a],data:function(){return{statusVisible:!1,captchaRequired:!1,graphVisible:!1,submissionExists:!1,captchaCode:"",captchaSrc:"",contestID:"",problemID:"",submitting:!1,code:"",language:"C",submissionId:"",result:{result:9},problem:{title:"",description:"",hint:"",my_status:"",template:{},languages:[],created_by:{username:""},tags:[]},pie:y,largePie:w,largePieInitOpts:{width:"500",height:"480"}}},beforeRouteEnter:function(t,e,n){var i=v.a.get(Object(b.j)(t.params.problemID,t.params.contestID));i?n(function(t){t.language=i.language,t.code=i.code}):n()},mounted:function(){this.$store.commit(d.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:!1}),this.init()},methods:c()({},Object(u.mapActions)(["changeDomTitle"]),{init:function(){var t=this;this.$Loading.start(),this.contestID=this.$route.params.contestID,this.problemID=this.$route.params.problemID;var e="problem-details"===this.$route.name?"getProblem":"getContestProblem";_.a[e](this.problemID,this.contestID).then(function(e){t.$Loading.finish(),t.$nextTick(function(){window.MathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,"problem-content"])});var n=e.data.data;if(t.changeDomTitle({title:n.title}),_.a.submissionExists(n.id).then(function(e){t.submissionExists=e.data.data}),n.languages=n.languages.sort(),t.problem=n,t.changePie(n),console.log("init:)"),""===t.code){t.language=t.problem.languages[0];var i=t.problem.template;i&&i[t.language]&&(t.code=i[t.language])}},function(){t.$Loading.error()})},changePie:function(t){for(var e in t.statistic_info)-1===I.indexOf(e)&&delete t.statistic_info[e];var n=t.accepted_number,i=[{name:"WA",value:t.submission_number-n},{name:"AC",value:n}];this.pie.series[0].data=i;var o=JSON.parse(r()(i));o[1].selected=!0,this.largePie.series[1].data=o;var s=a()(t.statistic_info).map(function(t){return b.e[t].short});0===s.length&&s.push("AC","WA"),this.largePie.legend.data=s;var l=t.statistic_info[0];delete t.statistic_info[0];var c=[];a()(t.statistic_info).forEach(function(e){c.push({name:b.e[e].short,value:t.statistic_info[e]})}),c.push({name:"AC",value:l}),this.largePie.series[0].data=c},handleRoute:function(t){this.$router.push(t)},onChangeLang:function(t){var e=this;console.log("newLang in onChangeLang: ",t),this.problem.template[t]&&(""===this.code.trim()||this.code===this.problem.template[t]?this.code=this.problem.template[t]:this.$Modal.confirm({content:"The problem has template for "+t+", Do you want to replace your code with template?",onOk:function(){e.code=e.problem.template[t]}})),this.language=t},checkSubmissionStatus:function(){var t=this;this.refreshStatus&&clearTimeout(this.refreshStatus);this.refreshStatus=setTimeout(function e(){var n=t.submissionId;_.a.getSubmission(n).then(function(n){t.result=n.data.data,0!==a()(n.data.data.statistic_info).length?(t.submitting=!1,clearTimeout(t.refreshStatus),t.init()):t.refreshStatus=setTimeout(e,2e3)},function(e){t.submitting=!1,clearTimeout(t.refreshStatus)})},2e3)},submitCode:function(){var t=this;if(""!==this.code.trim()){this.submissionId="",this.result={result:9},this.submitting=!0;var e={problem_id:this.problem.id,language:this.language,code:this.code,contest_id:this.contestID};this.captchaRequired&&(e.captcha=this.captchaCode);var n=function(e,n){t.statusVisible=!0,_.a.submitCode(e).then(function(e){t.submissionId=e.data.data&&e.data.data.submission_id,t.submitting=!1,t.submissionExists=!0,n?t.checkSubmissionStatus():t.$Modal.success({title:"Success",content:"Submit code successfully"})},function(e){t.getCaptchaSrc(),e.data.data.startsWith("Captcha is required")&&(t.captchaRequired=!0),t.submitting=!1,t.statusVisible=!1})};"OI"!==this.contestRuleType||this.OIContestRealTimePermission?n(e,!0):this.submissionExists?this.$Modal.confirm({title:"",content:"<h3>You have submission in this problem, sure to cover it?<h3>",onOk:function(){setTimeout(function(){n(e,!1)},1e3)},onCancel:function(){t.submitting=!1}}):n(e,!1)}else this.$error("Code can not be empty")},onCopy:function(t){this.$success("Code copied")},onCopyError:function(t){this.$error("Failed to copy code")}}),computed:c()({},Object(u.mapGetters)(["problemSubmitDisabled","contestRuleType","OIContestRealTimePermission","contestStatus"]),{contest:function(){return this.$store.state.contest.contest},contestEnded:function(){return this.contestStatus===b.a.ENDED},submissionStatus:function(){return{text:b.e[this.result.result].name,color:b.e[this.result.result].color}},submissionRoute:function(){return this.contestID?{name:"contest-submission-list",query:{problemID:this.problemID}}:{name:"submission-list",query:{problemID:this.problemID}}}}),beforeRouteLeave:function(t,e,n){clearInterval(this.refreshStatus),this.$store.commit(d.b.CHANGE_CONTEST_ITEM_VISIBLE,{menu:!0}),v.a.set(Object(b.j)(this.problem._id,e.params.contestID),{code:this.code,language:this.language}),n()},watch:{$route:function(){this.init()}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-container"},[n("div",{attrs:{id:"problem-main"}},[n("Panel",{attrs:{padding:40,shadow:""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.problem.title))]),t._v(" "),n("div",{staticClass:"markdown-body",attrs:{id:"problem-content"}},[n("p",{staticClass:"title"},[t._v("Description")]),t._v(" "),n("p",{staticClass:"content",domProps:{innerHTML:t._s(t.problem.description)}}),t._v(" "),n("p",{staticClass:"title"},[t._v("Input")]),t._v(" "),n("p",{staticClass:"content",domProps:{innerHTML:t._s(t.problem.input_description)}}),t._v(" "),n("p",{staticClass:"title"},[t._v("Output")]),t._v(" "),n("p",{staticClass:"content",domProps:{innerHTML:t._s(t.problem.output_description)}}),t._v(" "),t._l(t.problem.samples,function(e,i){return n("div",[n("div",{staticClass:"flex-container sample"},[n("div",{staticClass:"sample-input"},[n("p",{staticClass:"title"},[t._v("Sample Input "+t._s(i+1)+"\n                "),n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.input,expression:"sample.input",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"copy"},[n("Icon",{attrs:{type:"clipboard"}})],1)]),t._v(" "),n("pre",[t._v(t._s(e.input))])]),t._v(" "),n("div",{staticClass:"sample-output"},[n("p",{staticClass:"title"},[t._v("Sample Output "+t._s(i+1))]),t._v(" "),n("pre",[t._v(t._s(e.output))])])])])}),t._v(" "),t.problem.hint?n("div",[n("p",{staticClass:"title"},[t._v("Hint")]),t._v(" "),n("Card",{attrs:{"dis-hover":""}},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.problem.hint)}})])],1):t._e(),t._v(" "),t.problem.source?n("div",[n("p",{staticClass:"title"},[t._v("Source")]),t._v(" "),n("p",{staticClass:"content"},[t._v(t._s(t.problem.source))])]):t._e()],2)]),t._v(" "),n("Card",{attrs:{padding:20,id:"submit-code","dis-hover":""}},[n("MonacoEditor",{attrs:{languages:t.problem.languages,language:t.language,value:t.code},on:{"update:language":function(e){t.language=e},"update:value":function(e){t.code=e},changeLang:t.onChangeLang}}),t._v(" "),n("Row",{attrs:{type:"flex",justify:"space-between"}},[n("Col",{attrs:{span:10}},[t.statusVisible?n("div",{staticClass:"status"},[!this.contestID||this.contestID&&t.OIContestRealTimePermission?[n("span",[t._v("Status:")]),t._v(" "),n("Tag",{attrs:{type:"dot",color:t.submissionStatus.color},nativeOn:{click:function(e){t.handleRoute("/status/"+t.submissionId)}}},[t._v("\n              "+t._s(t.submissionStatus.text)+"\n            ")])]:this.contestID&&!t.OIContestRealTimePermission?[n("Alert",{attrs:{type:"success","show-icon":""}},[t._v("Submitted successfully")])]:t._e()],2):0===t.problem.my_status?n("div",[n("Alert",{attrs:{type:"success","show-icon":""}},[t._v("You have solved the problem")])],1):this.contestID&&!t.OIContestRealTimePermission&&t.submissionExists?n("div",[n("Alert",{attrs:{type:"success","show-icon":""}},[t._v("You have submitted a solution.")])],1):t._e(),t._v(" "),t.contestEnded?n("div",[n("Alert",{attrs:{type:"warning","show-icon":""}},[t._v("Contest has ended")])],1):t._e()]),t._v(" "),n("Col",{attrs:{span:12}},[t.captchaRequired?[n("div",{staticClass:"captcha-container"},[t.captchaRequired?n("Tooltip",{attrs:{content:"Click to refresh",placement:"top"}},[n("img",{attrs:{src:t.captchaSrc},on:{click:t.getCaptchaSrc}})]):t._e(),t._v(" "),n("Input",{staticClass:"captcha-code",model:{value:t.captchaCode,callback:function(e){t.captchaCode=e},expression:"captchaCode"}})],1)]:t._e(),t._v(" "),n("Button",{staticClass:"fl-right",attrs:{type:"warning",icon:"edit",loading:t.submitting,disabled:t.problemSubmitDisabled},on:{click:t.submitCode}},[t.submitting?n("span",[t._v("Submitting")]):n("span",[t._v("Submit")])])],2)],1)],1)],1),t._v(" "),n("div",{attrs:{id:"right-column"}},[n("VerticalMenu",{on:{"on-click":t.handleRoute}},[this.contestID?[n("VerticalMenu-item",{attrs:{route:{name:"contest-problem-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"ios-photos"}}),t._v("\n          Problems\n        ")],1),t._v(" "),n("VerticalMenu-item",{attrs:{route:{name:"contest-announcement-list",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"chatbubble-working"}}),t._v("\n          Announcements\n        ")],1)]:t._e(),t._v(" "),!this.contestID||t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{route:t.submissionRoute}},[n("Icon",{attrs:{type:"navicon-round"}}),t._v("\n        Submissions\n      ")],1):t._e(),t._v(" "),this.contestID?[!this.contestID||t.OIContestRealTimePermission?n("VerticalMenu-item",{attrs:{route:{name:"contest-rank",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"stats-bars"}}),t._v("\n          Rankings\n        ")],1):t._e(),t._v(" "),n("VerticalMenu-item",{attrs:{route:{name:"contest-details",params:{contestID:t.contestID}}}},[n("Icon",{attrs:{type:"home"}}),t._v("\n          View Contest\n        ")],1)]:t._e()],2),t._v(" "),n("Card",{attrs:{id:"info"}},[n("div",{staticClass:"header",attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"information-circled"}}),t._v(" "),n("span",{staticClass:"card-title"},[t._v("Information")])],1),t._v(" "),n("ul",[n("li",[n("p",[t._v("ID")]),t._v(" "),n("p",[t._v(t._s(t.problem._id))])]),t._v(" "),n("li",[n("p",[t._v("Time Limit")]),t._v(" "),n("p",[t._v(t._s(t.problem.time_limit)+"MS")])]),t._v(" "),n("li",[n("p",[t._v("Memory Limit")]),t._v(" "),n("p",[t._v(t._s(t.problem.memory_limit)+"MB")])]),t._v(" "),n("li",[n("p",[t._v("Created By")]),t._v(" "),n("p",[t._v(t._s(t.problem.created_by.username))])]),t._v(" "),t.problem.difficulty?n("li",[n("p",[t._v("Level")]),t._v(" "),n("p",[t._v(t._s(t.problem.difficulty))])]):t._e(),t._v(" "),t.problem.total_score?n("li",[n("p",[t._v("Score")]),t._v(" "),n("p",[t._v(t._s(t.problem.total_score))])]):t._e(),t._v(" "),n("li",[n("p",[t._v("Tags")]),t._v(" "),n("p",[n("Poptip",{attrs:{trigger:"hover",placement:"left-end"}},[n("a",[t._v("Show")]),t._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(t.problem.tags,function(e){return n("Tag",{key:e},[t._v(t._s(e))])}))])],1)])])]),t._v(" "),!this.contestID||t.OIContestRealTimePermission?n("Card",{attrs:{id:"pieChart",padding:0}},[n("div",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v(" "),n("span",{staticClass:"card-title"},[t._v("Statistic")]),t._v(" "),n("Button",{attrs:{type:"ghost",size:"small",id:"detail"},on:{click:function(e){t.graphVisible=!t.graphVisible}}},[t._v("Details")])],1),t._v(" "),n("div",{staticClass:"echarts"},[n("ECharts",{attrs:{options:t.pie}})],1)]):t._e()],1),t._v(" "),n("Modal",{model:{value:t.graphVisible,callback:function(e){t.graphVisible=e},expression:"graphVisible"}},[n("div",{attrs:{id:"pieChart-detail"}},[n("ECharts",{attrs:{options:t.largePie,initOptions:t.largePieInitOpts}})],1),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"ghost"},on:{click:function(e){t.graphVisible=!1}}},[t._v("Close")])],1)])],1)},staticRenderFns:[]},M=n("VU/8")(S,E,!1,function(t){n("VCUn")},"data-v-85816162",null);e.default=M.exports},tGP5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("A588"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n("NKCg"),r=n("VU/8")(o.a,s.a,!1,null,null,null);e.default=r.exports}});