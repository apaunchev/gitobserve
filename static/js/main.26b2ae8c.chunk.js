(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(63)},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),l=a.n(r),s=a(36),c=a(7),o=a(8),i=a(24),u=(a(53),function(e){var t=e.children;return l.a.createElement("div",{className:"blankslate blankslate-clean-background"},t)}),d=function(){return l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4"},l.a.createElement(u,null,l.a.createElement("h3",null,"Not found"),l.a.createElement("p",null,"The page you are looking for could not be found."))))},m=a(12),p=a(13),E=a(15),h=a(14),f=a(16),b=a(3),g=a(66),v=a(65),R=a(68),O=a(10),S=a.n(O),y=a(21),w=function(){var e=Object(y.a)(S.a.mark(function e(t,a){var n,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({query:t})});case 2:if(!(n=e.sent).ok){e.next=11;break}return e.next=6,n.json();case 6:if(!(r=e.sent).errors){e.next=9;break}throw new Error(r.errors[0].message);case 9:if(!r.data){e.next=11;break}return e.abrupt("return",r.data);case 11:throw new Error("Error communicating with GitHub");case 12:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),N=function(){return"\n    {\n      viewer {\n        login\n        avatarUrl(size: 96)\n      }\n    }\n  "},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e?"after: ".concat(e):"";return"\n      query {\n        viewer {\n          watching(\n            first: 100\n            ".concat(t,"\n          ) {\n            edges {\n              cursor\n              node {\n                id\n                name\n                url\n                owner {\n                  login\n                  avatarUrl(size: 96)\n                }\n                createdAt\n              }\n            }\n            totalCount\n            pageInfo {\n              hasNextPage\n            }\n          }\n        }\n      }\n    ")},_=function(e){return"\n    query {\n      nodes (ids: ".concat(JSON.stringify(e),") {\n        id\n        ... on Repository {\n          pullRequests(\n            last: 50\n            states: [OPEN]\n          ) {\n            edges {\n              node {\n                id\n                number\n                title\n                url\n                createdAt\n                updatedAt\n                repository {\n                  nameWithOwner\n                  url\n                }\n                author {\n                  avatarUrl(size: 96)\n                  login\n                  url\n                }\n                reviewRequests(last: 50) {\n                  edges {\n                    node {\n                      requestedReviewer {\n                        ... on User {\n                          login\n                          avatarUrl(size: 96)\n                        }\n                        ... on Team {\n                          name\n                          avatarUrl(size: 96)\n                        }\n                      }\n                    }\n                  }\n                }\n                reviews(last: 50) {\n                  edges {\n                    node {\n                      createdAt\n                      state\n                      author {\n                        login\n                        avatarUrl(size: 96)\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")},x=function(e){return"\n    query {\n      nodes (ids: ".concat(JSON.stringify(e),") {\n        id\n        ... on Repository {\n          name\n          url\n          releases(last: 5) {\n            edges {\n              node {\n                id\n                name\n                publishedAt\n                description\n                url\n                author {\n                  login\n                  avatarUrl(size: 96)\n                  url\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")},j=function(e,t){return{type:"REQUEST_PULL_REQUESTS_SUCCESS",newPrs:e,oldPrs:t}},T=function(e){return{type:"SET_FILTERS",filters:e}},U=function(e){var t=e.type,a=e.children;return l.a.createElement("div",{className:"flash flash-full".concat(t?"flash-".concat(t):null)},a)},I=a(30),A=a(2),C={repo:"",author:"",orderBy:"updatedAt",reviewState:"",searchQuery:""},L=Object(c.b)(function(e){return{filters:e.pulls.filters}},function(e){return{setFilters:function(t){e(T(t))},dispatch:e}})(function(e){var t=function(t){e.setFilters(Object(A.a)({},e.filters,Object(I.a)({},t.target.name,t.target.value)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"text-gray mr-2"},"Show (",e.pullRequests.length,"):"),function(){var a=Object(n.chain)(e.pullRequests).countBy(function(e){return e.author.login}).toPairs().orderBy(1,"desc").fromPairs().value();return l.a.createElement("select",{className:"form-select select-sm mr-2",name:"author",value:e.filters.author,onChange:t,style:{width:"130px"}},l.a.createElement("option",{value:""},"all authors"),Object.keys(a).map(function(e){return l.a.createElement("option",{key:e,value:e},e," (",a[e],")")}))}(),function(){var a=Object(n.chain)(e.pullRequests).countBy(function(e){return e.repoName}).toPairs().orderBy(1,"desc").fromPairs().value();return l.a.createElement("select",{className:"form-select select-sm mr-2",name:"repo",value:e.filters.repo,onChange:t,style:{width:"130px"}},l.a.createElement("option",{value:""},"all repositories"),Object.keys(a).map(function(e){return l.a.createElement("option",{key:e,value:e},e," (",a[e],")")}))}(),l.a.createElement("span",{className:"text-gray mr-2"},"Order by:"),l.a.createElement("select",{className:"form-select select-sm mr-2",name:"orderBy",value:e.filters.orderBy,onChange:t,style:{width:"130px"}},l.a.createElement("option",{value:"updatedAt"},"recently updated"),l.a.createElement("option",{value:"createdAt"},"recently created")),l.a.createElement("button",{className:"btn btn-sm",onClick:function(){return e.setFilters(C)}},"Reset"))}),q=a(67),P=a(64),Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?Object(q.a)(Object(P.a)(e),{addSuffix:t}):null},D={"review requested":"bg-blue text-white","changes requested":"Label--orange",approved:"bg-green text-white",commented:"bg-yellow text-gray",pending:"Label--gray",dismissed:"bg-red text-white","no request":"Label--gray"},W=Object(c.b)(function(e){return{filters:e.pulls.filters}})(function(e){var t=e.title,a=e.url,n=e.createdAt,r=e.updatedAt,s=e.author,c=e.repository,o=e.reviewState,i=e.approvals,u=e.isNew,d=e.filters,m="Box-row Box-row--hover-gray d-flex";return u&&(m+=" Box-row--unread"),l.a.createElement("div",{className:m},s.avatarUrl&&l.a.createElement("div",{className:"pr-3"},l.a.createElement("a",{href:s.url,className:"d-block tooltipped tooltipped-se","aria-label":"Opened by ".concat(s.login)},l.a.createElement("img",{className:"avatar rounded-1",src:s.avatarUrl,width:"48",height:"48",alt:""}))),l.a.createElement("div",{className:"flex-auto"},l.a.createElement("a",{href:c.url,className:"muted-link h4 pr-1"},c.nameWithOwner),l.a.createElement("a",{href:a,className:"link-gray-dark no-underline h4"},t),l.a.createElement("div",{className:"text-gray"},l.a.createElement("span",null,l.a.createElement(b.k,{icon:b.a})," ",d&&"updatedAt"===d.orderBy&&r?l.a.createElement("span",null,"Updated"," ",l.a.createElement("span",{title:r},Q(r))):d&&"createdAt"===d.orderBy&&n?l.a.createElement("span",null,"Opened ",l.a.createElement("span",{title:n},Q(n))):null),l.a.createElement("span",{className:"ml-2"},l.a.createElement(b.k,{icon:b.j})," ",i," ",1===i?"approval":"approvals"),o?l.a.createElement("span",{className:"Label ml-2 ".concat(D[o])},o):null)))}),H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleReviewStateChange=function(e){e.preventDefault(),a.props.setFilters(Object(A.a)({},a.props.filters,{reviewState:e.target.dataset.reviewState}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filters,a=e.setFilters;return l.a.createElement("div",{className:"subnav d-flex"},l.a.createElement("nav",{className:"subnav-links flex-auto"},l.a.createElement("a",{href:"/","data-review-state":"",onClick:this.handleReviewStateChange,className:"subnav-item".concat(""===t.reviewState?" selected":"")},"All"),l.a.createElement("a",{href:"/","data-review-state":"review requested",onClick:this.handleReviewStateChange,className:"subnav-item".concat("review requested"===t.reviewState?" selected":"")},"Review requested"),l.a.createElement("a",{href:"/","data-review-state":"commented",onClick:this.handleReviewStateChange,className:"subnav-item".concat("commented"===t.reviewState?" selected":"")},"Commented"),l.a.createElement("a",{href:"/","data-review-state":"changes requested",onClick:this.handleReviewStateChange,className:"subnav-item".concat("changes requested"===t.reviewState?" selected":"")},"Changes requested"),l.a.createElement("a",{href:"/","data-review-state":"approved",onClick:this.handleReviewStateChange,className:"subnav-item".concat("approved"===t.reviewState?" selected":"")},"Approved")),l.a.createElement("div",{className:"subnav-search col-3"},l.a.createElement("input",{type:"search",name:"name",className:"form-control input-contrast",style:{width:"100%",paddingLeft:28},placeholder:"Search pull requests...",value:t.searchQuery,onChange:function(e){return a(Object(A.a)({},t,{searchQuery:e.target.value}))}}),l.a.createElement(b.k,{icon:b.g,className:"subnav-search-icon"})))}}]),t}(l.a.PureComponent),F=Object(c.b)(function(e){return{filters:e.pulls.filters}},function(e){return{setFilters:function(t){e(T(t))},dispatch:e}})(H),G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).updateInterval=null,a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.token||this.props.resetPullRequests(),this.props.token&&this.props.selectedRepos.length&&(((this.props.location||{}).state||{}).refresh&&this.props.requestPullRequests(this.props.selectedRepos,this.props.token),this.props.autoRefreshEnabled&&(this.updateInterval=setInterval(function(){e.props.requestPullRequests(e.props.selectedRepos,e.props.token)},60*this.props.autoRefreshInterval*1e3)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.updateInterval)}},{key:"render",value:function(){var e=this.props,t=e.selectedRepos,a=e.filteredPullRequests,n=e.loading,r=e.githubError,s=e.requestPullRequests,c=e.token,i=e.autoRefreshEnabled,d=e.lastUpdated;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"h3"},"Pull requests")),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/settings",className:"btn mr-2"},l.a.createElement(b.k,{icon:b.h})," Settings")))),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4"},t.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement("div",{className:"Box"},l.a.createElement("div",{className:"Box-header d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto d-flex flex-items-center"},l.a.createElement(L,{pullRequests:a})),l.a.createElement("div",{className:"d-flex flex-items-center"},i&&l.a.createElement("span",{className:"text-gray mr-2 f6"},"Auto refresh"," ",l.a.createElement(o.b,{to:"/settings/pull-requests"},"enabled"),"."),l.a.createElement("span",{className:"text-gray mr-2 f6"},d?"Last updated: ".concat(Object(g.a)(Object(v.a)(d),"Pp")):"Last updated: never."),l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return s(t,c)},disabled:n},l.a.createElement(b.k,{icon:b.i})," ",n?"Loading...":"Refresh"))),r?l.a.createElement(u,null,l.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",l.a.createElement(o.b,{to:"/settings/account"},"token")," is set correctly and try again.")):null,r||a.length?null:l.a.createElement(u,null,l.a.createElement("p",null,"No pull requests were found.")),!r&&a.length>0?a.map(function(e){return l.a.createElement(W,Object.assign({key:e.id},e))}):null)):l.a.createElement(U,null,"You have not selected any"," ",l.a.createElement(o.b,{to:"/settings/repositories"},"repositories")," yet."))))}}]),t}(l.a.PureComponent);G.defaultProps={selectedRepos:[],token:null,pullRequests:[],loading:!1,githubError:null};var B=function(e,t){var a=e;return t.hideOldEnabled&&(a=Object(n.filter)(a,function(e){return Object(R.a)(new Date(e[t.orderBy]),new Date)>-t.hideOldThreshold})),t.repo&&(a=Object(n.filter)(a,function(e){return e.repoName===t.repo})),t.author&&(a=Object(n.filter)(a,function(e){return e.author.login===t.author})),t.reviewState&&(a=Object(n.filter)(a,function(e){return e.reviewState===t.reviewState})),t.hideWithoutRequestEnabled&&(a=Object(n.filter)(a,function(e){return"no request"!==e.reviewState})),t.searchQuery&&(a=Object(n.filter)(a,function(e){var a=t.searchQuery.toLowerCase(),n=e.repoName.toLowerCase(),r=e.title.toLowerCase(),l=e.author.login.toLowerCase();return n.indexOf(a)>-1||r.indexOf(a)>-1||l.indexOf(a)>-1})),a=Object(n.orderBy)(a,t.orderBy,"desc")},V=Object(c.b)(function(e){return{selectedRepos:e.settings.selectedRepos,token:e.settings.token,autoRefreshEnabled:e.settings.autoRefreshEnabled,autoRefreshInterval:e.settings.autoRefreshInterval,githubError:e.pulls.githubError,loading:e.pulls.loading,lastUpdated:e.pulls.lastUpdated,filteredPullRequests:B(e.pulls.pulls,Object(n.extend)({hideOldEnabled:e.settings.hideOldEnabled,hideOldThreshold:e.settings.hideOldThreshold,hideWithoutRequestEnabled:e.settings.hideWithoutRequestEnabled},e.pulls.filters))}},function(e){return{requestPullRequests:function(t,a){return e(function(e,t){return function(){var a=Object(y.a)(S.a.mark(function a(n,r){var l,s,c;return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=r().pulls.pulls,a.prev=1,n({type:"REQUEST_PULL_REQUESTS_LOADING"}),s=_(e),a.next=6,w(s,t);case 6:c=a.sent,n(j(c,l)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n({type:"REQUEST_PULL_REQUESTS_FAILURE",error:a.t0});case 13:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e,t){return a.apply(this,arguments)}}()}(t,a))},resetPullRequests:function(){return e({type:"RESET_PULL_REQUESTS"})},dispatch:e}})(G),z=a(39),J=function(){return{type:"REQUEST_RELEASES_LOADING"}},M=function(e){return{type:"REQUEST_RELEASES_SUCCESS",data:e}},Y=function(e){return{type:"REQUEST_RELEASES_FAILURE",error:e}},K=(a(61),function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.token,a=e.selectedRepos,n=e.location,r=e.releases,l=e.requestReleases;t&&a.length&&(!((n||{}).state||{}).refresh&&r.length||l(a,t))}},{key:"render",value:function(){var e=this.props,t=e.releases,a=e.loading,n=e.requestReleases,r=e.selectedRepos,s=e.token;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"h3"},"Releases")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n(r,s)},disabled:a},l.a.createElement(b.k,{icon:b.i})," ",a?"Loading...":"Refresh")))),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4"},t.map(function(e){var t=e.id,a=e.author,n=e.publishedAt,r=e.url,s=e.name,c=e.repoUrl,o=e.repoName,i=e.description;return l.a.createElement("div",{key:t,className:"d-flex flex-items-baseline border-bottom border-gray py-3"},a.avatarUrl&&l.a.createElement("div",{className:"mr-3"},l.a.createElement("a",{href:a.url,className:"d-block"},l.a.createElement("img",{className:"avatar rounded-1",src:a.avatarUrl,width:"32",height:"32",alt:""}))),l.a.createElement("div",{className:"d-flex flex-column width-full"},l.a.createElement("div",{className:"d-flex flex-items-baseline"},l.a.createElement("div",null,l.a.createElement("a",{href:a.url,className:"link-gray-dark no-underline text-bold wb-break-all d-inline-block"},a.login)," ","released ",l.a.createElement("a",{href:r},s)," at"," ",l.a.createElement("a",{href:c,className:"link-gray-dark no-underline text-bold wb-break-all d-inline-block"},o)),l.a.createElement("span",{className:"f6 text-gray-light no-wrap ml-1",title:n},Q(n))),l.a.createElement("div",{className:"ReleaseNotes Box p-3 mt-2 bg-gray"},l.a.createElement(z.a,null,i))))}))))}}]),t}(l.a.PureComponent)),X=Object(c.b)(function(e){return{selectedRepos:e.settings.selectedRepos,token:e.settings.token,githubError:e.releases.githubError,loading:e.releases.loading,lastUpdated:e.releases.lastUpdated,releases:e.releases.releases}},function(e){return{requestReleases:function(t,a){return e(function(e,t){return function(){var a=Object(y.a)(S.a.mark(function a(n){var r,l;return S.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(J()),r=x(e),a.next=5,w(r,t);case 5:l=a.sent,n(M(l)),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n(Y(a.t0));case 12:case"end":return a.stop()}},a,null,[[0,9]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(K),Z=function(e){return{type:"REQUEST_VIEWER_INFO_SUCCESS",viewerInfo:e}},$=function(e){return function(){var t=Object(y.a)(S.a.mark(function t(a){var n,r;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"REQUEST_VIEWER_INFO_LOADING"}),n=N(),t.next=5,w(n,e);case 5:r=t.sent,a(Z(r.viewer)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"REQUEST_VIEWER_INFO_FAILURE",error:t.t0});case 12:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()},ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).input=l.a.createRef(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillUnmount",value:function(){this.props.token||this.props.resetViewerInfo(),this.props.token&&Object(n.isEmpty)(this.props.viewerInfo)&&this.props.requestViewerInfo(this.props.token)}},{key:"render",value:function(){var e=this,t=this.props,a=t.token,n=t.setToken;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Subhead"},l.a.createElement("h2",{className:"Subhead-heading"},"Account")),l.a.createElement("p",null,"You need to add a Personal Access Token in order to access GitHub data."),l.a.createElement("ol",{className:"pl-3"},l.a.createElement("li",null,"Go to"," ",l.a.createElement("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},"Personal Access Tokens")," ","and click ",l.a.createElement("b",null,"Generate new token"),"."),l.a.createElement("li",null,"Enter a description, select the ",l.a.createElement("code",null,"repo")," scope, then click"," ",l.a.createElement("b",null,"Generate token"),"."),l.a.createElement("li",null,"Copy the given token and add it below.")),l.a.createElement("form",{className:"my-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Token",ref:this.input,onChange:function(){return n(e.input.current.value)},value:a})))}}]),t}(l.a.PureComponent);ee.defaultProps={token:null};var te=Object(c.b)(function(e){return{token:e.settings.token,viewerInfo:e.settings.viewerInfo}},function(e){return{setToken:function(t){return e(function(e){return{type:"SET_TOKEN",value:e}}(t))},requestViewerInfo:function(t){return e($(t))},resetViewerInfo:function(){return e({type:"RESET_VIEWER_INFO"})},dispatch:e}})(ee),ae=Object(c.b)(function(e){return{autoRefreshEnabled:e.settings.autoRefreshEnabled,autoRefreshInterval:e.settings.autoRefreshInterval,hideOldEnabled:e.settings.hideOldEnabled,hideOldThreshold:e.settings.hideOldThreshold,hideWithoutRequestEnabled:e.settings.hideWithoutRequestEnabled}},function(e){return{toggleAutoRefresh:function(){return e({type:"TOGGLE_AUTO_REFRESH"})},setAutoRefreshInterval:function(t){return e(function(e){return{type:"SET_AUTO_REFRESH_INTERVAL",interval:e}}(t))},toggleHideOld:function(){return e({type:"TOGGLE_HIDE_OLD"})},setHideOldThreshold:function(t){return e({type:"SET_HIDE_OLD_THRESHOLD",threshold:t})},toggleHideWithoutRequest:function(){return e({type:"TOGGLE_HIDE_WITHOUT_REQUEST"})},dispatch:e}})(function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Subhead"},l.a.createElement("h2",{className:"Subhead-heading"},"Pull requests")),l.a.createElement("form",null,l.a.createElement("div",{className:"form-checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e.autoRefreshEnabled,onChange:e.toggleAutoRefresh})," ","Auto refresh pull requests every",l.a.createElement("select",{className:"form-select select-sm ml-1",value:e.autoRefreshInterval,onChange:function(t){return e.setAutoRefreshInterval(t.target.value)}},l.a.createElement("option",{value:"1"},"1 minute"),l.a.createElement("option",{value:"5"},"5 minutes"),l.a.createElement("option",{value:"10"},"10 minutes"),l.a.createElement("option",{value:"30"},"30 minutes")))),l.a.createElement("div",{className:"form-checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e.hideOldEnabled,onChange:e.toggleHideOld})," ","Hide pull requests older than",l.a.createElement("input",{type:"number",className:"form-control input-sm ml-1",style:{width:"40px "},value:e.hideOldThreshold,onChange:function(t){return e.setHideOldThreshold(t.target.value)}})," ","days")),l.a.createElement("div",{className:"form-checkbox"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:e.hideWithoutRequestEnabled,onChange:e.toggleHideWithoutRequest}),"Hide pull requests without a review request"))))}),ne=a(25),re=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.token||(this.props.resetSelectedRepos(),this.props.resetWatchedRepos()),this.props.token&&!this.props.selectedRepos.length&&this.props.requestWatchedRepos(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.token,a=e.loading,n=e.githubError,r=e.watchedRepos,s=e.selectedRepos,c=e.selectAllRepos,i=e.resetSelectedRepos,d=e.toggleRepoSelection,m=e.requestWatchedRepos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Subhead"},l.a.createElement("h2",{className:"Subhead-heading"},"Repositories")),l.a.createElement("p",{className:"mb-4"},"Select the repositories you wish to track."," ",l.a.createElement("strong",null,"Only repositories you are"," ",l.a.createElement("a",{href:"https://github.com/watching"},"watching")," are listed here.")),l.a.createElement("div",{className:"Box"},l.a.createElement("div",{className:"Box-header py-2 d-flex flex-items-center"},l.a.createElement("h3",{className:"Box-title"},"Selected repositories"," ",l.a.createElement("span",{className:"Counter Counter--gray-dark"},s.length)),l.a.createElement("div",{className:"flex-auto text-right"},l.a.createElement("div",{className:"BtnGroup"},l.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return c(r.map(function(e){return e.id}))}},"Select all"),l.a.createElement("button",{className:"BtnGroup-item btn btn-sm",onClick:function(){return i()}},"Reset")),l.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:function(){return m(t)},disabled:a},l.a.createElement(b.k,{icon:b.i})," ",a?"Loading...":"Refresh"))),n?l.a.createElement(u,null,l.a.createElement("p",null,"Error fetching data from GitHub. Ensure your"," ",l.a.createElement(o.b,{to:"/settings/account"},"token")," is set correctly and try again.")):null,n||r.length?null:l.a.createElement(u,null,l.a.createElement("p",null,"You are not watching any repositories currently.")),!n&&r.length>0?r.map(function(e){var t=e.id,a=e.name,n=e.url,r="repo-".concat(t),c=s.includes(t);return l.a.createElement("div",{className:"Box-row Box-row--hover-gray d-flex flex-items-center py-2 px-3",key:t},l.a.createElement("div",{className:"form-checkbox flex-auto my-0"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",id:r,onChange:function(){return d(t)},checked:c})," ",a)),l.a.createElement("a",{className:"btn btn-sm btn-outline",href:n},l.a.createElement(b.k,{icon:b.d,size:14})," Open on GitHub"))}):null))}}]),t}(l.a.PureComponent);re.defaultProps={watchedRepos:[],loading:!1,githubError:null,selectedRepos:[],token:null};var le=Object(c.b)(function(e){return{watchedRepos:e.watchedRepos.repos,loading:e.watchedRepos.loading,githubError:e.watchedRepos.githubError,selectedRepos:e.settings.selectedRepos,token:e.settings.token}},function(e){return{requestWatchedRepos:function(t){return e(function(e){return function(){var t=Object(y.a)(S.a.mark(function t(a){var n,r,l,s,c;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:"REQUEST_WATCHED_REPOS_LOADING"}),n=k(),t.next=5,w(n,e);case 5:if(r=t.sent,l=r.viewer.watching.edges,!r.viewer.watching.pageInfo.hasNextPage){t.next=18;break}s=!0;case 9:if(!s){t.next=18;break}return n=k(l[l.length-1].cursor),t.next=13,w(n,e);case 13:c=t.sent,l=[].concat(Object(ne.a)(l),Object(ne.a)(c.viewer.watching.edges)),s=c.viewer.watching.pageInfo.hasNextPage,t.next=9;break;case 18:l=l.map(function(e){return{id:e.node.id,name:e.node.name,url:e.node.url,owner:e.node.owner,createdAt:e.node.createdAt}}),a({type:"REQUEST_WATCHED_REPOS_SUCCESS",data:l}),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),a({type:"REQUEST_WATCHED_REPOS_FAILURE",error:t.t0});case 25:case"end":return t.stop()}},t,null,[[0,22]])}));return function(e){return t.apply(this,arguments)}}()}(t))},toggleRepoSelection:function(t){return e(function(e){return{type:"TOGGLE_REPO_SELECTION",id:e}}(t))},selectAllRepos:function(t){return e(function(e){return{type:"SELECT_ALL_REPOS",repoIds:e}}(t))},resetSelectedRepos:function(){return e({type:"RESET_SELECTED_REPOS"})},resetWatchedRepos:function(){return e({type:"RESET_WATCHED_REPOS"})},dispatch:e}})(re),se=function(e){var t=e.match;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-menu p-3 bg-gray-light border-bottom"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto"},l.a.createElement("h1",{className:"h3"},"Settings")),l.a.createElement("div",null,l.a.createElement(o.b,{to:{pathname:"/",state:{refresh:!0}},className:"btn btn-primary"},l.a.createElement(b.k,{icon:b.b})," Save")))),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"container-lg py-4 d-flex"},l.a.createElement("div",{className:"col-3 pr-4"},l.a.createElement("nav",{className:"menu"},l.a.createElement(o.c,{to:"".concat(t.url,"/account"),className:"menu-item",activeClassName:"selected"},l.a.createElement(b.k,{icon:b.e})," Account"),l.a.createElement(o.c,{to:"".concat(t.url,"/pulls"),className:"menu-item",activeClassName:"selected"},l.a.createElement(b.k,{icon:b.c})," Pull requests"),l.a.createElement(o.c,{to:"".concat(t.url,"/repositories"),className:"menu-item",activeClassName:"selected"},l.a.createElement(b.k,{icon:b.f})," Repositories"))),l.a.createElement("div",{className:"col-9"},l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"".concat(t.url,"/pulls"),component:ae}),l.a.createElement(i.b,{path:"".concat(t.url,"/account"),component:te}),l.a.createElement(i.b,{path:"".concat(t.url,"/repositories"),component:le}),l.a.createElement(i.b,{exact:!0,path:"".concat(t.url),render:function(){return l.a.createElement(i.a,{to:"".concat(t.url,"/pulls")})}}))))))},ce=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){Object(n.isEmpty)(this.props.viewerInfo)&&this.props.token&&this.props.requestViewerInfo(this.props.token)}},{key:"render",value:function(){var e=this.props,t=e.viewerInfo,a=e.loading,n=e.githubError,r=a||n||!t.avatarUrl?"https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png":t.avatarUrl;return l.a.createElement(o.b,{to:"/settings/account"},l.a.createElement("img",{className:"avatar avatar-small",src:r,width:32,height:32,alt:"Avatar"}))}}]),t}(l.a.PureComponent),oe=Object(c.b)(function(e){return{token:e.settings.token,viewerInfo:e.settings.viewerInfo,githubError:e.settings.githubError,loading:e.settings.loading}},function(e){return{requestViewerInfo:function(t){return e($(t))},dispatch:e}})(ce),ie=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header p-3 bg-gray-dark text-white"},l.a.createElement("div",{className:"container-lg d-flex flex-items-center"},l.a.createElement("div",{className:"flex-auto d-flex flex-items-baseline"},l.a.createElement("h1",{className:"h2"},l.a.createElement(o.b,{to:"/",className:"text-white no-underline"},"GitObserve")),l.a.createElement("nav",null,l.a.createElement(o.c,{to:"/pulls",className:"ml-4 f4 text-white",activeClassName:"text-underline"},"Pull requests"),l.a.createElement(o.c,{to:"/releases",className:"ml-3 f4 text-white",activeClassName:"text-underline"},"Releases"))),l.a.createElement(oe,null))),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/pulls",component:V}),l.a.createElement(i.b,{path:"/releases",component:X}),l.a.createElement(i.b,{path:"/settings",component:se}),l.a.createElement(i.b,{exact:!0,path:"/",render:function(e){var t=e.location.state;return l.a.createElement(i.a,{to:{pathname:"/pulls",state:t}})}}),l.a.createElement(i.b,{component:d})))},ue=function(e){var t=e.store;return l.a.createElement(c.a,{store:t},l.a.createElement(o.a,null,l.a.createElement(i.b,{path:"/",component:ie})))},de=a(23),me=(a(62),a(41)),pe={pulls:[],lastUpdated:null,filters:{repo:"",author:"",reviewState:"",orderBy:"updatedAt",searchQuery:""},loading:!1,githubError:null},Ee="APPROVED",he="REVIEW_REQUESTED",fe="NO_REQUEST",be=function(e){if("string"===typeof e)return e.replace(/_/g," ").toLowerCase()},ge=function(e,t){var a=null;return e.length?(a=e[e.length-1].state,be(a)):(a=t.length>0?he:fe,be(a))},ve=function(e){var t=0;return e.length&&(t=e.filter(function(e){return e.state===Ee}).length),t},Re=function(e,t){var a=Object(n.map)(t,"id");return Object(n.chain)(e.nodes).filter(function(e){return e}).map(function(e){return Object(n.map)(e.pullRequests.edges,"node")}).flatten().map(function(e){var t=Object(n.map)(e.reviews.edges,"node"),r=Object(n.map)(e.reviewRequests.edges,"node");return Object(A.a)({},e,{reviews:t,reviewRequests:r,repoName:e.repository.nameWithOwner,reviewState:ge(t,r),approvals:ve(t),isNew:!a.includes(e.id)})}).orderBy("updatedAt").reverse().value()},Oe={releases:[],lastUpdated:null,loading:!1,githubError:!1},Se={token:"",selectedRepos:[],autoRefreshEnabled:!1,autoRefreshInterval:"5",hideOldEnabled:!1,hideOldThreshold:30,hideWithoutRequest:!1,viewerInfo:{},loading:!1,githubError:null},ye={repos:[],loading:!1,githubError:null},we=Object(de.c)({pulls:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_PULL_REQUESTS_LOADING":return Object(A.a)({},e,{loading:!0,githubError:null});case"REQUEST_PULL_REQUESTS_SUCCESS":return Object(A.a)({},e,{pulls:Re(t.newPrs,t.oldPrs),lastUpdated:Math.floor(Date.now()/1e3),loading:!1,githubError:null});case"REQUEST_PULL_REQUESTS_FAILURE":return Object(A.a)({},e,{pulls:[],githubError:t.error,loading:!1});case"RESET_PULL_REQUESTS":return Object(A.a)({},e,{pulls:[],githubError:null,loading:!1});case"SET_FILTERS":return Object(A.a)({},e,{filters:t.filters});default:return e}},releases:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REQUEST_RELEASES_LOADING":return Object(A.a)({},t,{loading:!0,githubError:!1});case"REQUEST_RELEASES_SUCCESS":return Object(A.a)({},t,{releases:(e=a.data,Object(n.chain)(e.nodes).map(function(e){var t=e.name,a=e.url;return Object(A.a)({},e,{releases:Object(n.map)(e.releases.edges,function(e){var n=e.node;return Object(A.a)({},n,{repoName:t,repoUrl:a})})})}).map(function(e){return e.releases}).flatten().orderBy("publishedAt").reverse().value()),lastUpdated:Math.floor(Date.now()/1e3),loading:!1,githubError:!1});case"REQUEST_RELEASES_FAILURE":return Object(A.a)({},t,{releases:[],loading:!1,githubError:a.error});default:return t}},watchedRepos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_WATCHED_REPOS_LOADING":return Object(A.a)({},e,{loading:!0,githubError:null});case"REQUEST_WATCHED_REPOS_SUCCESS":return Object(A.a)({},e,{repos:t.data,githubError:null,loading:!1});case"REQUEST_WATCHED_REPOS_FAILURE":case"RESET_WATCHED_REPOS":return Object(A.a)({},e,{repos:[],githubError:t.error,loading:!1});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(A.a)({},e,{token:t.value});case"TOGGLE_REPO_SELECTION":return e.selectedRepos.includes(t.id)?Object(A.a)({},e,{selectedRepos:e.selectedRepos.filter(function(e){return e!==t.id})}):Object(A.a)({},e,{selectedRepos:[].concat(Object(ne.a)(e.selectedRepos),[t.id])});case"SELECT_ALL_REPOS":return Object(A.a)({},e,{selectedRepos:Object(ne.a)(t.repoIds)});case"RESET_SELECTED_REPOS":return Object(A.a)({},e,{selectedRepos:[]});case"TOGGLE_AUTO_REFRESH":return Object(A.a)({},e,{autoRefreshEnabled:!e.autoRefreshEnabled});case"SET_AUTO_REFRESH_INTERVAL":return Object(A.a)({},e,{autoRefreshInterval:t.interval});case"TOGGLE_HIDE_OLD":return Object(A.a)({},e,{hideOldEnabled:!e.hideOldEnabled});case"SET_HIDE_OLD_THRESHOLD":return Object(A.a)({},e,{hideOldThreshold:t.threshold});case"TOGGLE_HIDE_WITHOUT_REQUEST":return Object(A.a)({},e,{hideWithoutRequestEnabled:!e.hideWithoutRequestEnabled});case"REQUEST_VIEWER_INFO_LOADING":return Object(A.a)({},e,{loading:!0,githubError:null});case"REQUEST_VIEWER_INFO_SUCCESS":return Object(A.a)({},e,{viewerInfo:t.viewerInfo,loading:!1,githubError:null});case"REQUEST_VIEWER_INFO_FAILURE":return Object(A.a)({},e,{viewerInfo:{},githubError:t.error,loading:!1});case"RESET_VIEWER_INFO":return Object(A.a)({},e,{viewerInfo:{}});default:return e}}}),Ne=function(){var e=function(){try{var e=localStorage.getItem("go_state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),t=[me.a];return Object(de.d)(we,e,de.a.apply(void 0,t))}();Ne.subscribe(Object(n.throttle)(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("go_state",t)}catch(a){}}({settings:Ne.getState().settings,pulls:Ne.getState().pulls,releases:Ne.getState().releases,watchedRepos:Ne.getState().watchedRepos})}),1e3),Object(s.render)(l.a.createElement(ue,{store:Ne}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.26b2ae8c.chunk.js.map