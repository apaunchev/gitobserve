(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n,r=a(29),c=a(0),l=a.n(c),s=a(30),o=a(10),i=a(55),u=a(51),m=a(45),d=a(58),p=a(15),E=a(16),h=a(19),b=a(17),g=a(20),f=a(4),v=a(9),N=a.n(v),R=a(18),k=function(){var e=Object(R.a)(N.a.mark(function e(t,a){var n,r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({query:t})});case 2:if(!(n=e.sent).ok){e.next=11;break}return e.next=6,n.json();case 6:if(!(r=e.sent).errors){e.next=9;break}throw new Error(r.errors[0].message);case 9:if(!r.data){e.next=11;break}return e.abrupt("return",r.data);case 11:throw new Error("Error communicating with GitHub");case 12:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e?"after: ".concat(e):"";return"\n      query {\n        viewer {\n          watching(\n            first: 100\n            ".concat(t,"\n          ) {\n            edges {\n              cursor\n              node {\n                id\n                name\n                url\n                owner {\n                  login\n                  avatarUrl\n                }\n                createdAt\n              }\n            }\n            totalCount\n            pageInfo {\n              hasNextPage\n            }\n          }\n        }\n      }\n    ")},y=function(e){return"\n    query {\n      nodes (ids: ".concat(JSON.stringify(e),") {\n        id\n        ... on Repository {\n          pullRequests(\n            last: 50\n            states: [OPEN]\n            orderBy: { field: CREATED_AT, direction: DESC }\n          ) {\n            edges {\n              node {\n                id\n                number\n                title\n                url\n                createdAt\n                updatedAt\n                repository {\n                  nameWithOwner\n                  url\n                }\n                author {\n                  avatarUrl\n                  login\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")},O=function(e,t){return{type:"REQUEST_PULL_REQUESTS_SUCCESS",data:e,watchedRepos:t}},x=a(56),w=a(54),_={label:"Fresh",classNames:"bg-green"},T={label:"Stale",classNames:"bg-purple"},j=function(e){var t=e.number,a=e.title,n=e.url,r=e.createdAt,c=e.updatedAt,s=e.author,o=e.repository,i=new Date,u=function(e){var t=Object(x.a)(new Date(e),new Date);return t>=-7?_:t<=-30?T:void 0}(c);return l.a.createElement("div",{className:"Box-row Box-row--hover-gray d-flex"},s.avatarUrl&&l.a.createElement("div",null,l.a.createElement("img",{className:"avatar",src:s.avatarUrl,width:"48",height:"48",alt:""})),l.a.createElement("div",{className:"flex-auto px-3"},l.a.createElement("a",{href:o.url,className:"muted-link h4 pr-1"},o.nameWithOwner),l.a.createElement("a",{href:n,className:"link-gray-dark no-underline h4"},a),l.a.createElement("div",{className:"text-gray"},"#",t," opened"," ",l.a.createElement("span",{title:r},Object(w.a)(r,i)," ago")," by"," ",l.a.createElement("a",{href:s.url,className:"muted-link"},s.login),u?l.a.createElement("span",{className:"d-inline-block ml-2 label box-shadow-none text-normal rounded-1 f6 tooltipped tooltipped-sw ".concat(u.classNames),"aria-label":"Last updated ".concat(Object(w.a)(c,i)," ago")},u.label):null)))},A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={sortField:"updatedAt",sortDirection:"desc"},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.selectedRepos.length>0&&this.props.requestPullRequests(this.props.selectedRepos,this.props.token)}},{key:"render",value:function(){var e=this.state,t=e.sortField,a=e.sortDirection,n=this.props,r=n.selectedRepos,c=n.pullRequests,s=n.loading,o=n.githubError,i=n.requestPullRequests,u=n.token,d=[];return c.length>0&&(d=c.sort(function(e,n){var r=new Date(e[t]),c=new Date(n[t]);return"desc"===a?c-r:r-c})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"h3"},"Dashboard")),l.a.createElement("div",null,l.a.createElement(m.a,{to:"/settings",className:"btn mr-2"},l.a.createElement(f.h,{icon:f.f})," Settings")))),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4"},l.a.createElement("div",{className:"Box"},l.a.createElement("div",{className:"Box-header d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto d-flex flex-items-center"},l.a.createElement("span",{className:"d-inline-flex flex-items-center mr-3 text-bold"},l.a.createElement(f.h,{icon:f.b,size:20,className:"pr-1"}),c.length," Pull Requests"),l.a.createElement("span",{className:"d-inline-flex flex-items-center text-bold"},l.a.createElement(f.h,{icon:f.e,size:20,className:"pr-1"}),r.length," Repositories")),l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return i(r,u)}},l.a.createElement(f.h,{icon:f.g})," Sync")),r.length?null:l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"You have not ",l.a.createElement(m.a,{to:"/settings"},"selected")," any repositories yet.")),r.length>0&&s?l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"Loading...")):null,r.length>0&&o?l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",l.a.createElement(m.a,{to:"/settings/account"},"token")," is set correctly and try again.")):null,r.length>0&&!s&&!o&&!c.length?l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"No pull requests were found for your"," ",l.a.createElement(m.a,{to:"/settings"},"selected repositories"),".")):null,s||o||!d.length?null:d.map(function(e){return l.a.createElement(j,Object.assign({key:e.id},e))})))))}}]),t}(l.a.PureComponent),C=Object(o.b)(function(e){return{selectedRepos:e.settings.selectedRepos,githubError:e.dashboard.githubError,loading:e.dashboard.loading,pullRequests:e.dashboard.pullRequests,token:e.settings.token}},function(e){return{requestPullRequests:function(t,a){e(function(e,t){return function(){var a=Object(R.a)(N.a.mark(function a(n,r){var c,l,s;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=r().watchedRepos.repos,a.prev=1,n({type:"REQUEST_PULL_REQUESTS_LOADING"}),l=y(e),a.next=6,k(l,t);case 6:s=a.sent,n(O(s,c)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"REQUEST_PULL_REQUESTS_FAILURE",error:a.t0});case 13:case"end":return a.stop()}},a,this,[[1,10]])}));return function(e,t){return a.apply(this,arguments)}}()}(t,a))},dispatch:e}})(A),U=a(53),L=a(57),P=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).input=l.a.createRef(),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.token,n=t.setToken;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Subhead"},l.a.createElement("h2",{className:"Subhead-heading"},"Account")),l.a.createElement("p",null,"Add a Personal Access Token in order to access repositories data from GitHub's API."),l.a.createElement("ol",{className:"pl-3"},l.a.createElement("li",null,"Go to"," ",l.a.createElement("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},"Personal Access Tokens")," ","and click ",l.a.createElement("b",null,"Generate new token"),"."),l.a.createElement("li",null,"Enter a description, select the ",l.a.createElement("code",null,"repo")," scope, then click"," ",l.a.createElement("b",null,"Generate token"),"."),l.a.createElement("li",null,"Copy the given token and add it below.")),l.a.createElement("form",{className:"my-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Token",ref:this.input,onChange:function(){return n(e.input.current.value)},value:a})))}}]),t}(c.Component),D=Object(o.b)(function(e){return{token:e.settings.token}},function(e){return{setToken:function(t){return e(function(e){return{type:"SET_TOKEN",value:e}}(t))},dispatch:e}})(P),q=a(13),G=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.requestWatchedRepos(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.token,a=e.loading,n=e.githubError,r=e.watchedRepos,c=e.selectedRepos,s=e.selectAllRepos,o=e.resetSelectedRepos,i=e.toggleRepoSelection,u=e.requestWatchedRepos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Subhead"},l.a.createElement("h2",{className:"Subhead-heading"},"Repositories")),l.a.createElement("p",{className:"mb-4"},"Select the repositories you wish to monitor on the dashboard."," ",l.a.createElement("strong",null,"Only repositories you are"," ",l.a.createElement("a",{href:"https://github.com/watching"},"watching")," are listed here.")),l.a.createElement("div",{className:"Box"},l.a.createElement("div",{className:"Box-header py-2 d-flex flex-items-center"},l.a.createElement("h3",{className:"Box-title"},"Selected repositories"," ",l.a.createElement("span",{className:"Counter Counter--gray-dark"},c.length)),l.a.createElement("div",{className:"flex-auto text-right"},l.a.createElement("div",{className:"BtnGroup"},l.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return s(r.map(function(e){return e.id}))}},"Select all"),l.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return o()}},"Reset")),l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return u(t)}},l.a.createElement(f.h,{icon:f.g})," Sync"))),a?l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"Loading...")):null,n?l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",l.a.createElement(m.a,{to:"/settings/account"},"token")," is set correctly and try again.")):null,a||n||r.length?null:l.a.createElement("div",{className:"blankslate blankslate-clean-background"},l.a.createElement("p",null,"You are not watching any repositories currently.")),!a&&!n&&r.length>0?r.map(function(e){var t=e.id,a=e.name,n=e.url,r="repo-".concat(t),s=c.includes(t);return l.a.createElement("div",{className:"Box-row Box-row--hover-gray d-flex flex-items-center py-2 px-3",key:t},l.a.createElement("div",{className:"form-checkbox flex-auto my-0"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",id:r,onChange:function(){return i(t)},checked:s})," ",a)),l.a.createElement("a",{className:"btn btn-sm btn-outline",href:n},l.a.createElement(f.h,{icon:f.c,size:14})," Open on GitHub"))}):null))}}]),t}(l.a.PureComponent),I=Object(o.b)(function(e){return{watchedRepos:e.watchedRepos.repos,loading:e.watchedRepos.loading,githubError:e.watchedRepos.githubError,selectedRepos:e.settings.selectedRepos,token:e.settings.token}},function(e){return{requestWatchedRepos:function(t){return e(function(e){return function(){var t=Object(R.a)(N.a.mark(function t(a){var n,r,c,l,s;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"REQUEST_WATCHED_REPOS_LOADING"}),n=S(),t.next=5,k(n,e);case 5:if(r=t.sent,c=r.viewer.watching.edges,!r.viewer.watching.pageInfo.hasNextPage){t.next=18;break}l=!0;case 9:if(!l){t.next=18;break}return n=S(c[c.length-1].cursor),t.next=13,k(n,e);case 13:s=t.sent,c=[].concat(Object(q.a)(c),Object(q.a)(s.viewer.watching.edges)),l=s.viewer.watching.pageInfo.hasNextPage,t.next=9;break;case 18:c=c.map(function(e){return{id:e.node.id,name:e.node.name,url:e.node.url,owner:e.node.owner,createdAt:e.node.createdAt}}),a({type:"REQUEST_WATCHED_REPOS_SUCCESS",data:c}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),a({type:"REQUEST_WATCHED_REPOS_FAILURE",error:t.t0});case 25:case"end":return t.stop()}},t,this,[[0,22]])}));return function(e){return t.apply(this,arguments)}}()}(t))},toggleRepoSelection:function(t){return e(function(e){return{type:"TOGGLE_REPO_SELECTION",id:e}}(t))},selectAllRepos:function(t){return e(function(e){return{type:"SELECT_ALL_REPOS",repoIds:e}}(t))},resetSelectedRepos:function(){return e({type:"RESET_SELECTED_REPOS"})},dispatch:e}})(G),Q=function(e){var t=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"h3"},"Settings")),l.a.createElement("div",null,l.a.createElement(m.a,{to:"/",className:"btn btn-primary"},l.a.createElement(f.h,{icon:f.a})," Save")))),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4 d-flex"},l.a.createElement("div",{className:"col-3 pr-4"},l.a.createElement("nav",{className:"menu"},l.a.createElement(U.a,{to:"".concat(t.url,"/account"),className:"menu-item",activeClassName:"selected"},l.a.createElement(f.h,{icon:f.d})," Account"),l.a.createElement(U.a,{to:"".concat(t.url,"/repositories"),className:"menu-item",activeClassName:"selected"},l.a.createElement(f.h,{icon:f.e})," Repositories"))),l.a.createElement("div",{className:"col-9"},l.a.createElement(u.a,{exact:!0,path:"".concat(t.url),render:function(){return l.a.createElement(L.a,{to:"".concat(t.url,"/account")})}}),l.a.createElement(u.a,{path:"".concat(t.url,"/account"),component:D}),l.a.createElement(u.a,{path:"".concat(t.url,"/repositories"),component:I})))))},B=function(){return l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4"},l.a.createElement("div",{className:"blankslate"},l.a.createElement("h3",null,"Not found"),l.a.createElement("p",null,"The page you are looking for could not be found."))))},F=(a(47),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header p-3 bg-gray-dark text-white"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("h1",{className:"flex-auto h2"},l.a.createElement(m.a,{to:"/",className:"text-white"},"GitObserve")))),l.a.createElement(d.a,null,l.a.createElement(u.a,{exact:!0,path:"/",component:C}),l.a.createElement(u.a,{path:"/settings",component:Q}),l.a.createElement(u.a,{component:B})))}),H=function(e){var t=e.store;return l.a.createElement(o.a,{store:t},l.a.createElement(i.a,null,l.a.createElement(u.a,{path:"/",component:F})))},W=a(14),J=(a(49),a(32)),z=a(7),K={pullRequests:[],loading:!1,githubError:null},M={repos:[],loading:!1,githubError:null},Y={token:null,selectedRepos:[]},V=Object(W.c)({dashboard:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_PULL_REQUESTS_LOADING":return Object(z.a)({},t,{loading:!0,githubError:null});case"REQUEST_PULL_REQUESTS_SUCCESS":return n=a.data.nodes.filter(function(e){return e}).map(function(e){return e.pullRequests.edges.map(function(e){return e.node})}),n=(e=[]).concat.apply(e,Object(q.a)(n)),Object(z.a)({},t,{pullRequests:n,loading:!1,githubError:null});case"REQUEST_PULL_REQUESTS_FAILURE":return Object(z.a)({},t,{pullRequests:[],githubError:a.error,loading:!1});default:return t}},watchedRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_WATCHED_REPOS_LOADING":return Object(z.a)({},e,{loading:!0,githubError:null});case"REQUEST_WATCHED_REPOS_SUCCESS":return Object(z.a)({},e,{repos:t.data,githubError:null,loading:!1});case"REQUEST_WATCHED_REPOS_FAILURE":return Object(z.a)({},e,{repos:[],githubError:t.error,loading:!1});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(z.a)({},e,{token:t.value});case"TOGGLE_REPO_SELECTION":return e.selectedRepos.includes(t.id)?Object(z.a)({},e,{selectedRepos:e.selectedRepos.filter(function(e){return e!==t.id})}):Object(z.a)({},e,{selectedRepos:[].concat(Object(q.a)(e.selectedRepos),[t.id])});case"SELECT_ALL_REPOS":return Object(z.a)({},e,{selectedRepos:Object(q.a)(t.repoIds)});case"RESET_SELECTED_REPOS":return Object(z.a)({},e,{selectedRepos:[]});default:return e}}}),X=function(){var e=function(){try{var e=localStorage.getItem("go_state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),t=[J.a];return Object(W.d)(V,e,W.a.apply(void 0,t))}();X.subscribe(Object(r.throttle)(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("go_state",t)}catch(a){}}({settings:X.getState().settings,dashboard:X.getState().dashboard,watchedRepos:X.getState().watchedRepos})}),1e3),Object(s.render)(l.a.createElement(H,{store:X}),document.getElementById("root"))}},[[33,2,1]]]);
//# sourceMappingURL=main.71a2e2cf.chunk.js.map