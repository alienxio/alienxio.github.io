(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O}));var r=n(1),c=n.n(r),i=n(4),a=n(32),s=n(64),o=new a.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new a.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new a.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a,s,o,u,l,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",s=d.length>4&&void 0!==d[4]&&d[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(c.a.mark((function e(d,b){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(f){o=!0,console.error("WS error in setup",t,f)}case 2:if(o||!s){e.next=8;break}return Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(t,n,r,c){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:a.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:a.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new a.d.TransactionInstruction({keys:i,programId:u,data:e.from([])})},f=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var i,s,u,l,d,b,f,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new a.b(r,t,{preflightCommitment:"recent"}),e.next=3,a.a.fetchIdl(o,i);case 3:return s=e.sent,u=new a.a(s,o,i),l={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return d=e.sent,b=d.data.itemsAvailable.toNumber(),f=d.itemsRedeemed.toNumber(),m=b-f,p=d.data.goLiveDate.toNumber(),p=new Date(1e3*p),console.log({itemsAvailable:b,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p}),e.abrupt("return",{candyMachine:l,itemsAvailable:b,itemsRedeemed:f,itemsRemaining:m,goLiveDate:p});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer(),e.from("edition")],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),n.toBuffer()],l);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.d.PublicKey.findProgramAddress([t.toBuffer(),s.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r,i){var o,u,d,f,g,O,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.d.Keypair.generate(),e.next=3,j(r,o.publicKey);case 3:return u=e.sent,d=t.connection,f=t.program,e.next=7,p(o.publicKey);case 7:return g=e.sent,e.next=10,m(o.publicKey);case 10:return O=e.sent,e.next=13,d.getMinimumBalanceForRentExemption(s.a.span);case 13:return x=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:i,mint:o.publicKey,metadata:g,masterEdition:O,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:l,tokenProgram:s.b,systemProgram:a.d.SystemProgram.programId,rent:a.d.SYSVAR_RENT_PUBKEY,clock:a.d.SYSVAR_CLOCK_PUBKEY},signers:[o],instructions:[a.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:o.publicKey,space:s.a.span,lamports:x,programId:s.b}),s.c.createInitMintInstruction(s.b,o.publicKey,0,r,r),b(u,r,r,o.publicKey),s.c.createMintToInstruction(s.b,o.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},355:function(e,t,n){},358:function(e,t){},360:function(e,t){},376:function(e,t){},377:function(e,t){},408:function(e,t){},466:function(e,t){},468:function(e,t){},482:function(e,t){},486:function(e,t){},488:function(e,t){},498:function(e,t){},500:function(e,t){},527:function(e,t){},529:function(e,t){},534:function(e,t){},536:function(e,t){},542:function(e,t){},544:function(e,t){},556:function(e,t){},559:function(e,t){},571:function(e,t){},572:function(e,t,n){"use strict";n.r(t);var r,c,i,a,s=n(2),o=n.n(s),u=n(29),l=n.n(u),d=(n(353),n(354),n(355),n(13)),b=n(1),f=n.n(b),m=n(4),p=n(12),j=n(132),g=n(134),O=n(313),x=n(599),h=n(607),v=n(606),y=n(15),S=n(52),k=n(174),w=n(133),P=n.p+"static/media/alienx_logo.b4b67a6c.png",C=n.p+"static/media/alienx_ship.e236c1ec.png",M=n(23),K=Object(g.a)(k.a)(r||(r=Object(j.a)(["color: light"]))),T=g.a.span(c||(c=Object(j.a)([""]))),L=g.a.div(i||(i=Object(j.a)([""]))),R=(Object(g.a)(x.a)(a||(a=Object(j.a)([""]))),function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(M.jsxs)(T,{className:"h2",children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})}),N=function(e){var t=Object(s.useState)(),r=Object(p.a)(t,2),c=r[0],i=r[1],a=Object(s.useState)(!1),o=Object(p.a)(a,2),u=o[0],l=o[1],b=Object(s.useState)(!1),j=Object(p.a)(b,2),g=j[0],x=j[1],k=Object(s.useState)(!1),T=Object(p.a)(k,2),N=T[0],A=T[1],B=Object(s.useState)("true"===e.mintOpen),I=Object(p.a)(B,2),E=I[0],D=(I[1],Object(s.useState)(0)),W=Object(p.a)(D,2),U=(W[0],W[1]),_=Object(s.useState)(0),G=Object(p.a)(_,2),Y=(G[0],G[1]),z=Object(s.useState)(0),q=Object(p.a)(z,2),H=(q[0],q[1]),V=Object(s.useState)(0),X=Object(p.a)(V,2),F=X[0],J=X[1],Z=Object(s.useState)({open:!1,message:"",severity:void 0}),Q=Object(p.a)(Z,2),$=Q[0],ee=Q[1],te=Object(s.useState)(new Date(e.startDate)),ne=Object(p.a)(te,2),re=ne[0],ce=ne[1],ie=Object(S.c)(),ae=Object(s.useState)(),se=Object(p.a)(ae,2),oe=se[0],ue=se[1],le=function(){Object(m.a)(f.a.mark((function t(){var n,r,c,i,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ie){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(w.b)(ie,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,i=n.itemsAvailable,a=n.itemsRemaining,s=n.itemsRedeemed,U(i),H(a),Y(s),0!==e.mintCount?x(a===e.mintCountStart+e.mintCount):x(0===a),J(a-(e.mintCountStart-e.mintCount)),console.log(J),ce(c),ue(r);case 18:case"end":return t.stop()}}),t)})))()},de=function(){var t=Object(m.a)(f.a.mark((function t(){var n,r,c,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,A(!0),!ie||!(null===oe||void 0===oe?void 0:oe.program)){t.next=10;break}return t.next=5,Object(w.c)(oe,e.config,ie.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(w.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?ee({open:!0,message:"Mint failed! Please try again!",severity:"error"}):ee({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",x(!0)):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),ee({open:!0,message:c,severity:"error"});case 17:if(t.prev=17,!ie){t.next=23;break}return t.next=21,e.connection.getBalance(ie.publicKey);case 21:a=t.sent,i(a/y.LAMPORTS_PER_SOL);case 23:return A(!1),le(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){Object(m.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ie){t.next=5;break}return t.next=3,e.connection.getBalance(ie.publicKey);case 3:n=t.sent,i(n/y.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))(),n(410).parse(window.location.search).magiclink===e.mintMagicLink&&l(!0),console.log(u)}),[ie,e.connection]),Object(s.useEffect)(le,[ie,e.candyMachineId,e.connection]);return Object(M.jsxs)("main",{className:"container-fluid h-100 d-flex justify-content-center align-items-center",style:{backgroundImage:"url(".concat(C,")"),backgroundPosition:"center top",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Object(M.jsxs)("div",{className:" text-white p-4 text-center col-12 col-lg-8 col-xl-4l",style:{zIndex:10},children:[Object(M.jsx)("img",{className:"img-fluid col-10 mb-5",src:P}),E?Object(M.jsxs)(L,{className:"d-none d-sm-block",children:[Object(M.jsx)("div",{children:g?Object(M.jsx)("div",{children:Object(M.jsx)("h2",{className:"mb-5",children:"AlienX Golden Tickets are all sold out!"})}):u?N?Object(M.jsxs)("div",{children:[Object(M.jsxs)("a",{className:"btn btn-dark py-3 px-4 fw-bold me-2 rounded-4 mb-4",children:[" ",Object(M.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"})," "]}),Object(M.jsxs)("h5",{children:["Price: ",e.mintPrice," SOL"]})]}):ie?Object(M.jsx)("div",{children:0!==e.mintCount?F>0?Object(M.jsxs)("div",{children:[Object(M.jsx)("h4",{children:e.mintCountMsg}),Object(M.jsx)("button",{disabled:g||N||!u,onClick:de,className:"btn btn-light py-3 px-4 fw-bold rounded-0 mb-4",children:"Get Ticket"}),Object(M.jsxs)("h5",{children:["Price: ",e.mintPrice," SOL"]})]}):Object(M.jsx)("div",{children:Object(M.jsx)("h2",{className:"mb-5",children:"AlienX Golden Tickets are all sold out!"})}):Object(M.jsxs)("div",{children:[Object(M.jsx)("button",{disabled:g||N||!u,onClick:de,className:"btn btn-light py-3 px-4 fw-bold rounded-4 mb-4",children:"Get Ticket"}),Object(M.jsxs)("h5",{children:["Price: ",e.mintPrice," SOL"]})]})}):Object(M.jsx)(K,{className:"btn btn-light py-3 px-4 fw-bold me-2 border-5 rounded-0 ",children:"Connect Wallet"}):Object(M.jsx)("div",{className:"mb-4",children:Object(M.jsx)(O.a,{date:re,onMount:function(e){return e.completed&&l(!0)},onComplete:function(){return l(!0)},renderer:R})})}),ie&&Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(M.jsxs)("div",{children:[Object(w.d)(ie.publicKey.toBase58()||"")," | ",(c||0).toLocaleString()," SOL"]}),Object(M.jsx)("div",{})]})})]}):Object(M.jsx)("h2",{children:e.mintCloseMsg}),Object(M.jsx)("div",{className:"d-block d-sm-none",children:Object(M.jsx)("h3",{children:"Mint function is not available for mobile devices"})})]}),Object(M.jsx)(h.a,{open:$.open,autoHideDuration:6e3,onClose:function(){return ee(Object(d.a)(Object(d.a)({},$),{},{open:!1}))},children:Object(M.jsx)(v.a,{onClose:function(){return ee(Object(d.a)(Object(d.a)({},$),{},{open:!1}))},severity:$.severity,children:$.message})})]})},A=n(32),B=n(219),I=n(340),E=n(604),D=new A.d.PublicKey("BcPLDDQEBTcHUZu3UmYHGZLeVbzKYhc32gPnpK2yroCc"),W=new A.d.PublicKey("6pSvDorN9QfrTrE2g8sbTpPzVKsDcrBvmDNXzqpXJLHe"),U=new A.d.PublicKey("GhMbJW6nyrNmruKgUB1tiUPUhaUSudf5w4dwnCCYyqGx"),_=new A.d.Connection("https://api.mainnet-beta.solana.com"),G=parseInt("0",10),Y=parseInt("2863",10),z=parseInt("4",10);console.log(z);var q=parseInt("1637874000000",10),H=Object(I.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),V=function(){var e=Object(s.useMemo)((function(){return Object(y.clusterApiUrl)("mainnet-beta")}),[]),t=Object(s.useMemo)((function(){return[Object(B.a)(),Object(B.b)()]}),[]);return Object(M.jsx)(E.a,{theme:H,children:Object(M.jsx)(S.a,{endpoint:e,children:Object(M.jsx)(S.b,{wallets:t,autoConnect:!0,children:Object(M.jsx)(k.b,{children:Object(M.jsx)(N,{candyMachineId:U,config:W,connection:_,startDate:q,treasury:D,txTimeout:3e4,mintCount:G,mintCountStart:Y,mintPrice:z,mintCountMsg:"Available:",mintCountSoldOutMsg:"AlienX Golden Tickets are all sold out!",mintMagicLink:"catchthemall",mintOpen:"false",mintCloseMsg:"The first space-time window is closed!"})})})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,608)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};l.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(V,{})}),document.getElementById("root")),X()}},[[572,1,2]]]);
//# sourceMappingURL=main.89021192.chunk.js.map