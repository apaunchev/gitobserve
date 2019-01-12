(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(51)},51:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(0),c=a.n(l),s=a(30),o=a(8),u=a(57),i=a(52),m=a(46),d=a(58),p=a(14),E=a(15),h=a(18),f=a(16),b=a(19),g=a(5),v=a(10),R=a.n(v),N=a(17),y=function(){var e=Object(N.a)(R.a.mark(function e(t,a){var n,r;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({query:t})});case 2:if(!(n=e.sent).ok){e.next=11;break}return e.next=6,n.json();case 6:if(!(r=e.sent).errors){e.next=9;break}throw new Error(r.errors[0].message);case 9:if(!r.data){e.next=11;break}return e.abrupt("return",r.data);case 11:throw new Error("Error communicating with GitHub");case 12:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e?"after: ".concat(e):"";return"\n      query {\n        viewer {\n          watching(\n            first: 100\n            ".concat(t,"\n          ) {\n            edges {\n              cursor\n              node {\n                id\n                name\n                url\n                owner {\n                  login\n                  avatarUrl(size: 96)\n                }\n                createdAt\n              }\n            }\n            totalCount\n            pageInfo {\n              hasNextPage\n            }\n          }\n        }\n      }\n    ")},O=function(e){return"\n    query {\n      nodes (ids: ".concat(JSON.stringify(e),") {\n        id\n        ... on Repository {\n          pullRequests(\n            last: 50\n            states: [OPEN]\n            orderBy: { field: CREATED_AT, direction: DESC }\n          ) {\n            edges {\n              node {\n                id\n                number\n                title\n                url\n                createdAt\n                updatedAt\n                repository {\n                  nameWithOwner\n                  url\n                }\n                author {\n                  avatarUrl(size: 96)\n                  login\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")},k=function(e,t){return{type:"REQUEST_PULL_REQUESTS_SUCCESS",data:e,watchedRepos:t}},x=a(55),w=function(e){var t,a=e.number,n=e.title,r=e.url,l=e.createdAt,s=e.author,o=e.repository,u=new Date;return c.a.createElement("div",{className:"Box-row Box-row--hover-gray d-flex"},s.avatarUrl&&c.a.createElement("div",{className:"pr-3"},c.a.createElement("img",{className:"avatar",src:s.avatarUrl,width:"48",height:"48",alt:""})),c.a.createElement("div",{className:"flex-auto"},c.a.createElement("a",{href:o.url,className:"muted-link h4 pr-1"},o.nameWithOwner),c.a.createElement("a",{href:r,className:"link-gray-dark no-underline h4"},n),c.a.createElement("div",{className:"text-gray"},"#",a," opened"," ",c.a.createElement("span",{title:l},(t=l,Object(x.a)(t,u,{addSuffix:!0})))," by"," ",c.a.createElement("a",{href:s.url,className:"muted-link"},s.login))))},_=function(e){var t=e.type,a=e.children;return c.a.createElement("div",{className:"flash flash-full".concat(t?"flash-".concat(t):null)},a)},T=a(53),A=function(e){var t=e.pullRequests,a=new Date,n=t.length||0,r=t.filter(function(e){return Object(T.a)(new Date(e.createdAt),a)}).length||0,l=t.filter(function(e){return Object(T.a)(new Date(e.updatedAt),a)}).length||0;return c.a.createElement("div",{className:"d-flex mb-4"},c.a.createElement("div",{className:"col-4 p-2 border text-center"},c.a.createElement("h3",{className:"f4 text-gray-light"},"Total open"),c.a.createElement("span",{className:"f1"},n)),c.a.createElement("div",{className:"col-4 p-2 border text-center"},c.a.createElement("h3",{className:"f4 text-gray-light"},"Opened this month"),c.a.createElement("span",{className:"f1"},r)),c.a.createElement("div",{className:"col-4 p-2 border text-center"},c.a.createElement("h3",{className:"f4 text-gray-light"},"Updated this month"),c.a.createElement("span",{className:"f1"},l)))},j=a(23),C=a(4),U={repo:"",author:"",orderBy:"updatedAt"},L=Object(o.b)(function(e){return{filters:e.dashboard.filters}},function(e){return{setFilters:function(t){e(function(e){return{type:"SET_FILTERS",filters:e}}(t))},dispatch:e}})(function(e){var t=function(t){e.setFilters(Object(C.a)({},e.filters,Object(j.a)({},t.target.name,t.target.value)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"text-gray mr-2"},"Show:"),function(){var a=r.a.chain(e.pullRequests).map(function(e){return e.author}).uniqBy("login").value();return c.a.createElement("select",{className:"form-select select-sm mr-2",name:"author",value:e.filters.author,onChange:t},c.a.createElement("option",{value:""},"all authors"),a.map(function(e){var t=e.login;return c.a.createElement("option",{key:t,value:t},t)}))}(),function(){var a=r.a.chain(e.pullRequests).map(function(e){return e.repoName}).uniqBy().value();return c.a.createElement("select",{className:"form-select select-sm mr-2",name:"repo",value:e.filters.repo,onChange:t},c.a.createElement("option",{value:""},"all repositories"),a.map(function(e){return c.a.createElement("option",{key:e,value:e},e)}))}(),c.a.createElement("span",{className:"text-gray mr-2"},"Order by:"),c.a.createElement("select",{className:"form-select select-sm mr-2",name:"orderBy",value:e.filters.orderBy,onChange:t},c.a.createElement("option",{value:"updatedAt"},"recently updated"),c.a.createElement("option",{value:"createdAt"},"newest")),c.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.setFilters(U)}},"Reset"))}),I=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).updateInterval=null,a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.selectedRepos.length>0&&(this.props.requestPullRequests(this.props.selectedRepos,this.props.token),this.props.autoRefreshEnabled&&(this.updateInterval=setInterval(function(){e.props.requestPullRequests(e.props.selectedRepos,e.props.token)},60*this.props.autoRefreshInterval*1e3)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.updateInterval)}},{key:"render",value:function(){var e=this.props,t=e.selectedRepos,a=e.pullRequests,n=e.filteredPullRequests,r=e.loading,l=e.githubError,s=e.requestPullRequests,o=e.token,u=e.autoRefreshEnabled;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},c.a.createElement("div",{className:"container-lg d-flex flex-items-center"},c.a.createElement("div",{className:"flex-auto"},c.a.createElement("h1",{className:"h3"},"Dashboard")),c.a.createElement("div",null,c.a.createElement(m.a,{to:"/settings",className:"btn mr-2"},c.a.createElement(g.h,{icon:g.f})," Settings")))),c.a.createElement("main",{className:"App-main"},c.a.createElement("div",{className:"container-lg py-4"},t.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{pullRequests:a}),c.a.createElement("div",{className:"Box"},c.a.createElement("div",{className:"Box-header d-flex flex-items-center"},c.a.createElement("div",{className:"flex-auto d-flex flex-items-center"},c.a.createElement(L,{pullRequests:a})),c.a.createElement("div",{className:"d-flex flex-items-center"},u&&c.a.createElement("span",{className:"text-gray mr-2 f6"},"Auto refresh"," ",c.a.createElement(m.a,{to:"/settings/dashboard"},"enabled"),"."),c.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return s(t,o)}},c.a.createElement(g.h,{icon:g.g})," Sync"))),r?c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"Loading...")):null,l?c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",c.a.createElement(m.a,{to:"/settings/account"},"token")," is set correctly and try again.")):null,r||l||n.length?null:c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"No pull requests were found.")),!r&&!l&&n.length>0?n.map(function(e){return c.a.createElement(w,Object.assign({key:e.id},e))}):null)):c.a.createElement(_,null,"You have not selected any"," ",c.a.createElement(m.a,{to:"/settings/repositories"},"repositories")," yet."))))}}]),t}(c.a.PureComponent);I.defaultProps={selectedRepos:[],token:null,pullRequests:[],loading:!1,githubError:null};var q=function(e,t){var a=e;return t.repo&&(a=r.a.filter(a,function(e){return e.repoName===t.repo})),t.author&&(a=r.a.filter(a,function(e){return e.author.login===t.author})),a=r.a.orderBy(a,t.orderBy,"desc")},P=Object(o.b)(function(e){return{selectedRepos:e.settings.selectedRepos,token:e.settings.token,autoRefreshEnabled:e.settings.autoRefreshEnabled,autoRefreshInterval:e.settings.autoRefreshInterval,githubError:e.dashboard.githubError,loading:e.dashboard.loading,pullRequests:e.dashboard.pullRequests,filteredPullRequests:q(e.dashboard.pullRequests,e.dashboard.filters)}},function(e){return{requestPullRequests:function(t,a){e(function(e,t){return function(){var a=Object(N.a)(R.a.mark(function a(n,r){var l,c,s;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=r().watchedRepos.repos,a.prev=1,n({type:"REQUEST_PULL_REQUESTS_LOADING"}),c=O(e),a.next=6,y(c,t);case 6:s=a.sent,n(k(s,l)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"REQUEST_PULL_REQUESTS_FAILURE",error:a.t0});case 13:case"end":return a.stop()}},a,this,[[1,10]])}));return function(e,t){return a.apply(this,arguments)}}()}(t,a))},dispatch:e}})(I),B=a(54),G=a(56),D=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).input=c.a.createRef(),a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.token,n=t.setToken;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Subhead"},c.a.createElement("h2",{className:"Subhead-heading"},"Account")),c.a.createElement("p",null,"You need to add a Personal Access Token in order to access GitHub data."),c.a.createElement("ol",{className:"pl-3"},c.a.createElement("li",null,"Go to"," ",c.a.createElement("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},"Personal Access Tokens")," ","and click ",c.a.createElement("b",null,"Generate new token"),"."),c.a.createElement("li",null,"Enter a description, select the ",c.a.createElement("code",null,"repo")," scope, then click"," ",c.a.createElement("b",null,"Generate token"),"."),c.a.createElement("li",null,"Copy the given token and add it below.")),c.a.createElement("form",{className:"my-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Token",ref:this.input,onChange:function(){return n(e.input.current.value)},value:a})))}}]),t}(l.Component);D.defaultProps={token:null};var F=Object(o.b)(function(e){return{token:e.settings.token}},function(e){return{setToken:function(t){return e(function(e){return{type:"SET_TOKEN",value:e}}(t))},dispatch:e}})(D),Q=a(20),H=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.requestWatchedRepos(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.token,a=e.loading,n=e.githubError,r=e.watchedRepos,l=e.selectedRepos,s=e.selectAllRepos,o=e.resetSelectedRepos,u=e.toggleRepoSelection,i=e.requestWatchedRepos;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Subhead"},c.a.createElement("h2",{className:"Subhead-heading"},"Repositories")),c.a.createElement("p",{className:"mb-4"},"Select the repositories you wish to monitor on the dashboard."," ",c.a.createElement("strong",null,"Only repositories you are"," ",c.a.createElement("a",{href:"https://github.com/watching"},"watching")," are listed here.")),c.a.createElement("div",{className:"Box"},c.a.createElement("div",{className:"Box-header py-2 d-flex flex-items-center"},c.a.createElement("h3",{className:"Box-title"},"Selected repositories"," ",c.a.createElement("span",{className:"Counter Counter--gray-dark"},l.length)),c.a.createElement("div",{className:"flex-auto text-right"},c.a.createElement("div",{className:"BtnGroup"},c.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return s(r.map(function(e){return e.id}))}},"Select all"),c.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return o()}},"Reset")),c.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return i(t)}},c.a.createElement(g.h,{icon:g.g})," Sync"))),a?c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"Loading...")):null,n?c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",c.a.createElement(m.a,{to:"/settings/account"},"token")," is set correctly and try again.")):null,a||n||r.length?null:c.a.createElement("div",{className:"blankslate blankslate-clean-background"},c.a.createElement("p",null,"You are not watching any repositories currently.")),!a&&!n&&r.length>0?r.map(function(e){var t=e.id,a=e.name,n=e.url,r="repo-".concat(t),s=l.includes(t);return c.a.createElement("div",{className:"Box-row Box-row--hover-gray d-flex flex-items-center py-2 px-3",key:t},c.a.createElement("div",{className:"form-checkbox flex-auto my-0"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",id:r,onChange:function(){return u(t)},checked:s})," ",a)),c.a.createElement("a",{className:"btn btn-sm btn-outline",href:n},c.a.createElement(g.h,{icon:g.c,size:14})," Open on GitHub"))}):null))}}]),t}(c.a.PureComponent);H.defaultProps={watchedRepos:[],loading:!1,githubError:null,selectedRepos:[],token:null};var W=Object(o.b)(function(e){return{watchedRepos:e.watchedRepos.repos,loading:e.watchedRepos.loading,githubError:e.watchedRepos.githubError,selectedRepos:e.settings.selectedRepos,token:e.settings.token}},function(e){return{requestWatchedRepos:function(t){return e(function(e){return function(){var t=Object(N.a)(R.a.mark(function t(a){var n,r,l,c,s;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"REQUEST_WATCHED_REPOS_LOADING"}),n=S(),t.next=5,y(n,e);case 5:if(r=t.sent,l=r.viewer.watching.edges,!r.viewer.watching.pageInfo.hasNextPage){t.next=18;break}c=!0;case 9:if(!c){t.next=18;break}return n=S(l[l.length-1].cursor),t.next=13,y(n,e);case 13:s=t.sent,l=[].concat(Object(Q.a)(l),Object(Q.a)(s.viewer.watching.edges)),c=s.viewer.watching.pageInfo.hasNextPage,t.next=9;break;case 18:l=l.map(function(e){return{id:e.node.id,name:e.node.name,url:e.node.url,owner:e.node.owner,createdAt:e.node.createdAt}}),a({type:"REQUEST_WATCHED_REPOS_SUCCESS",data:l}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),a({type:"REQUEST_WATCHED_REPOS_FAILURE",error:t.t0});case 25:case"end":return t.stop()}},t,this,[[0,22]])}));return function(e){return t.apply(this,arguments)}}()}(t))},toggleRepoSelection:function(t){return e(function(e){return{type:"TOGGLE_REPO_SELECTION",id:e}}(t))},selectAllRepos:function(t){return e(function(e){return{type:"SELECT_ALL_REPOS",repoIds:e}}(t))},resetSelectedRepos:function(){return e({type:"RESET_SELECTED_REPOS"})},dispatch:e}})(H),J=Object(o.b)(function(e){return{autoRefreshEnabled:e.settings.autoRefreshEnabled,autoRefreshInterval:e.settings.autoRefreshInterval}},function(e){return{toggleAutoRefresh:function(){return e({type:"TOGGLE_AUTO_REFRESH"})},setAutoRefreshInterval:function(t){return e(function(e){return{type:"SET_AUTO_REFRESH_INTERVAL",interval:e}}(t))},dispatch:e}})(function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Subhead"},c.a.createElement("h2",{className:"Subhead-heading"},"Dashboard")),c.a.createElement("form",null,c.a.createElement("div",{className:"form-checkbox"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:e.autoRefreshEnabled,onChange:e.toggleAutoRefresh})," ","Auto refresh dashboard every",c.a.createElement("select",{className:"form-select select-sm ml-1",value:e.autoRefreshInterval,onChange:function(t){return e.setAutoRefreshInterval(t.target.value)}},c.a.createElement("option",{value:"1"},"1 minute"),c.a.createElement("option",{value:"5"},"5 minutes"),c.a.createElement("option",{value:"10"},"10 minutes"),c.a.createElement("option",{value:"30"},"30 minutes"))),c.a.createElement("p",{className:"note"},"Refreshes the dashboard with new pull requests periodically."))))}),z=function(e){var t=e.match;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},c.a.createElement("div",{className:"container-lg d-flex flex-items-center"},c.a.createElement("div",{className:"flex-auto"},c.a.createElement("h1",{className:"h3"},"Settings")),c.a.createElement("div",null,c.a.createElement(m.a,{to:"/",className:"btn btn-primary"},c.a.createElement(g.h,{icon:g.a})," Save")))),c.a.createElement("main",{className:"App-main"},c.a.createElement("div",{className:"container-lg py-4 d-flex"},c.a.createElement("div",{className:"col-3 pr-4"},c.a.createElement("nav",{className:"menu"},c.a.createElement(B.a,{to:"".concat(t.url,"/dashboard"),className:"menu-item",activeClassName:"selected"},c.a.createElement(g.h,{icon:g.b})," Dashboard"),c.a.createElement(B.a,{to:"".concat(t.url,"/account"),className:"menu-item",activeClassName:"selected"},c.a.createElement(g.h,{icon:g.d})," Account"),c.a.createElement(B.a,{to:"".concat(t.url,"/repositories"),className:"menu-item",activeClassName:"selected"},c.a.createElement(g.h,{icon:g.e})," Repositories"))),c.a.createElement("div",{className:"col-9"},c.a.createElement(d.a,null,c.a.createElement(i.a,{path:"".concat(t.url,"/dashboard"),component:J}),c.a.createElement(i.a,{path:"".concat(t.url,"/account"),component:F}),c.a.createElement(i.a,{path:"".concat(t.url,"/repositories"),component:W}),c.a.createElement(i.a,{exact:!0,path:"".concat(t.url),render:function(){return c.a.createElement(G.a,{to:"".concat(t.url,"/dashboard")})}}))))))},Y=function(){return c.a.createElement("main",{className:"App-main"},c.a.createElement("div",{className:"container-lg py-4"},c.a.createElement("div",{className:"blankslate"},c.a.createElement("h3",null,"Not found"),c.a.createElement("p",null,"The page you are looking for could not be found."))))},K=(a(48),function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header p-3 bg-gray-dark text-white"},c.a.createElement("div",{className:"container-lg d-flex flex-items-center"},c.a.createElement("h1",{className:"flex-auto h2"},c.a.createElement(m.a,{to:"/",className:"text-white"},"GitObserve")))),c.a.createElement(d.a,null,c.a.createElement(i.a,{exact:!0,path:"/",component:P}),c.a.createElement(i.a,{path:"/settings",component:z}),c.a.createElement(i.a,{component:Y})))}),M=function(e){var t=e.store;return c.a.createElement(o.a,{store:t},c.a.createElement(u.a,null,c.a.createElement(i.a,{path:"/",component:K})))},V=a(12),X=(a(50),a(32)),Z={pullRequests:[],filters:{repo:"",author:"",orderBy:"updatedAt"},loading:!1,githubError:null},$={repos:[],loading:!1,githubError:null},ee={token:"",selectedRepos:[],autoRefreshEnabled:!1,autoRefreshInterval:"5"},te=Object(V.c)({dashboard:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_PULL_REQUESTS_LOADING":return Object(C.a)({},t,{loading:!0,githubError:null});case"REQUEST_PULL_REQUESTS_SUCCESS":return Object(C.a)({},t,{pullRequests:(e=a.data,r.a.chain(e.nodes).filter(function(e){return e}).map(function(e){return r.a.map(e.pullRequests.edges,"node")}).flatten().map(function(e){return Object(C.a)({},e,{repoName:e.repository.nameWithOwner})}).orderBy("updatedAt").reverse().value()),loading:!1,githubError:null});case"REQUEST_PULL_REQUESTS_FAILURE":return Object(C.a)({},t,{pullRequests:[],githubError:a.error,loading:!1});case"SET_FILTERS":return Object(C.a)({},t,{filters:a.filters});default:return t}},watchedRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_WATCHED_REPOS_LOADING":return Object(C.a)({},e,{loading:!0,githubError:null});case"REQUEST_WATCHED_REPOS_SUCCESS":return Object(C.a)({},e,{repos:t.data,githubError:null,loading:!1});case"REQUEST_WATCHED_REPOS_FAILURE":return Object(C.a)({},e,{repos:[],githubError:t.error,loading:!1});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(C.a)({},e,{token:t.value});case"TOGGLE_REPO_SELECTION":return e.selectedRepos.includes(t.id)?Object(C.a)({},e,{selectedRepos:e.selectedRepos.filter(function(e){return e!==t.id})}):Object(C.a)({},e,{selectedRepos:[].concat(Object(Q.a)(e.selectedRepos),[t.id])});case"SELECT_ALL_REPOS":return Object(C.a)({},e,{selectedRepos:Object(Q.a)(t.repoIds)});case"RESET_SELECTED_REPOS":return Object(C.a)({},e,{selectedRepos:[]});case"TOGGLE_AUTO_REFRESH":return Object(C.a)({},e,{autoRefreshEnabled:!e.autoRefreshEnabled});case"SET_AUTO_REFRESH_INTERVAL":return Object(C.a)({},e,{autoRefreshInterval:t.interval});default:return e}}}),ae=function(){var e=function(){try{var e=localStorage.getItem("go_state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),t=[X.a];return Object(V.d)(te,e,V.a.apply(void 0,t))}();ae.subscribe(Object(n.throttle)(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("go_state",t)}catch(a){}}({settings:ae.getState().settings,dashboard:ae.getState().dashboard,watchedRepos:ae.getState().watchedRepos})}),1e3),Object(s.render)(c.a.createElement(M,{store:ae}),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.11b40160.chunk.js.map