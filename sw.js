if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const i=e=>a(e,c),b={module:{uri:c},exports:r,require:i};s[c]=Promise.all(f.map((e=>b[e]||i(e)))).then((e=>(d(...e),r)))}}define(["./workbox-4765ab6a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"maurya-store"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icons/128.png",revision:"668fb0b2c788939d9c76fa1a1769e758"},{url:"app-icons/192.png",revision:"31cd947fec461af4fe069df2a3e07eb6"},{url:"app-icons/256.png",revision:"6c7e764a0d45e0d9e99e41c103db17f9"},{url:"app-icons/512.png",revision:"87b25908b76c475e614060fa6cced916"},{url:"assets/AddAddress.28556a93.js",revision:"52494e6483733989e6a64b3f8ae55a22"},{url:"assets/AddressScreen.ab35ca04.js",revision:"4bffbdba5877d9d982b87db75ae30849"},{url:"assets/adminStore.38110329.js",revision:"613b97a50e4927da588c9f0e2f2c1fd7"},{url:"assets/AppLayout.d2fc6399.js",revision:"30147b4fddb1274e2be9a19848337dd8"},{url:"assets/BlankLayout.2052894c.js",revision:"58607c8787faaafc5e259819d13c1703"},{url:"assets/capacitor.c157086c.js",revision:"67117745d1caa71f4d7f8b66cd26f413"},{url:"assets/cart-store.5bd8861f.js",revision:"ebb723704fe6b0e2429d173956c5dc23"},{url:"assets/CartScreen.1dae6c83.js",revision:"4047f4b7ee927937dcf2b8f3a29ffa58"},{url:"assets/ClosePopup.1d5de704.js",revision:"fb9a3edb81e789374af8265d08738697"},{url:"assets/common.22642096.js",revision:"2e4c1bbe3495c57b4ec54ff0dfa0bff4"},{url:"assets/Create.1ccf7cee.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/Create.b59c7b2f.js",revision:"71d732cf437836760b11ee25aa92b274"},{url:"assets/Create.d446a64a.js",revision:"558936625301b577f18b7cdc2546fd3d"},{url:"assets/CreateOrUpdate.36821709.js",revision:"b2f40890a085fe2e2cdf4a55c7c2ea28"},{url:"assets/CustomerDetail.84547854.js",revision:"6976d24c6659dd84185f910cbcea1574"},{url:"assets/db.eb94c5fc.js",revision:"54d8141fae255eb39e3221ea2d47f126"},{url:"assets/DetailDialog.6754afad.js",revision:"ce8c7c9571adb08f83133f43fa372db0"},{url:"assets/DetailDialog.9afd1007.css",revision:"775d7acb2011cd8219bf88bf7d99473b"},{url:"assets/DirectOrderConfirmationScreen.c300b3fb.js",revision:"672283d687fa83a91a045ff2ad83c2dc"},{url:"assets/ErrorNotFound.5ec1aff3.js",revision:"52b144c550433543d2b86c8d4c96ac75"},{url:"assets/FavoriteScreen.2eff48e2.js",revision:"bfb9bfe62ee06f00948e638dc9e82418"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.2a3572e1.js",revision:"6a121eda7f531acef5ccee07df0fba1f"},{url:"assets/formatting.897fab98.js",revision:"8ca351d251fe02731c8a31ece358a56c"},{url:"assets/GeneralInfo.3611716d.js",revision:"20acab0a09403542bd40626e0a950dd4"},{url:"assets/globalStore.0ae12050.js",revision:"922d0d8445c953c54d2b07f55de82c3f"},{url:"assets/HomeScreen.3fdf39ad.js",revision:"403a780a9f5d2921fbbd4d75ed3f9bba"},{url:"assets/i18n.ac076964.js",revision:"d93f4d0743bde50fa11bd9afe2830bff"},{url:"assets/ImageGallery.a069a776.js",revision:"e97731aef10f47b93751c7cfee73f9ad"},{url:"assets/ImageGallery.a8dd6320.css",revision:"8d7edcf319be76439f0f9a799882267f"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.6768ccbb.css",revision:"1bc22111efdfaca462d068727bba12cf"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.b20502cf.js",revision:"39d7961a0820f41dd42a514c6f3aaa1a"},{url:"assets/index.6c2d41df.css",revision:"2d4be66e92556ef22b1ab8328f35cd96"},{url:"assets/index.7f71ea72.js",revision:"89da62e9907aca3bdd96175df37f93ac"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListDetail.57940e6c.js",revision:"489af9f469c3e376cbb0595a67d3906d"},{url:"assets/Lists.539d996b.js",revision:"8565e0022a9f16261303df3dffae7cfa"},{url:"assets/Lists.730e55ba.js",revision:"40bfee271d60d59bdb19ff445af236f6"},{url:"assets/Lists.fe241e65.js",revision:"05405b78c9529f53a01740d20da6a010"},{url:"assets/Login.55ed453c.js",revision:"7ae307ef9934725334b31d734d82a22a"},{url:"assets/logo.dd0e1fe5.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"assets/MainLayout.d8e11476.js",revision:"b64b5c28080683bbb21b506c8f5c1f66"},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:"147e3378b44bc9570418b1eece10dd7c"},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:"7a44ea195f395e1d086010e44555a5c4"},{url:"assets/MyOrderDetailScreen.482b0ae3.js",revision:"915d813620537719782818453283d8f7"},{url:"assets/MyOrderScreen.16dd3637.js",revision:"dc4bb0fe6025eeee22481d53b0040f6b"},{url:"assets/NoData.43f01424.js",revision:"7be9a155aac10bf46d290ed978143ed7"},{url:"assets/option-sizes.bdd9339d.js",revision:"01000e01342b6b7545e00a5c97e25938"},{url:"assets/OrderConfirmationScreen.fbbd9907.js",revision:"d9792b589f8df8e1f6309d1100013ee5"},{url:"assets/OrderDetail.694dd010.js",revision:"0418fe0674a86be70b88ee1dca0de831"},{url:"assets/Orders.9a028333.js",revision:"1c075aa9eae3711ff2006270b0cbc2e5"},{url:"assets/ProductByCategoryScreen.e3a5e36c.js",revision:"70f70ec04c3c7a1e2749fe7aa5b955dd"},{url:"assets/ProductList2.b988b98f.css",revision:"a21aaaf5da27791613e3f86da36d7895"},{url:"assets/ProductList2.d48e5b64.js",revision:"5f4fcaf40fe3ae1ee94fc6acf270bef6"},{url:"assets/ProfileScreen.4f77b8dd.js",revision:"986406ee2896e1f796f7dfad486a5c7b"},{url:"assets/pwa-action-sheet.entry.25a44dcf.js",revision:"71a9af82bc93170cc6d64d1703d560a2"},{url:"assets/pwa-camera-modal-instance.entry.1e488695.js",revision:"8ff6bbd95e0bab829475f2e11a2e5a47"},{url:"assets/pwa-camera-modal.entry.cd53c269.js",revision:"166ba48c8f507a8e1347b706259f34ff"},{url:"assets/pwa-camera.entry.24748f68.js",revision:"9dc3cb1fedcdc72d1dd1b54466e12180"},{url:"assets/pwa-toast.entry.1d00bf72.js",revision:"a0772c15b6be50c50e0351e4c8aa17d3"},{url:"assets/QCardActions.ad149bad.js",revision:"66144a7ca83859cbff458d9d86ecb674"},{url:"assets/QCarousel.629f2ec1.js",revision:"310ccddd0e7bc7d2fad189f7475a2abe"},{url:"assets/QChip.01286c79.js",revision:"1b4dd43a47d915046a76c80c8bfbd89e"},{url:"assets/QCircularProgress.4936353f.js",revision:"7b95603a77227e15f488f05cda171a1f"},{url:"assets/QItem.0b16b194.js",revision:"b19d4cb72f42ee005d8c686b9e20552f"},{url:"assets/QLayout.73053235.js",revision:"4e4839f7252703af46edad2960f4c32e"},{url:"assets/QList.b1960a70.js",revision:"95d0826b8edb794884214da04c9687c8"},{url:"assets/QMenu.dd793c12.js",revision:"672000ee217524e72a75a708d975282c"},{url:"assets/QPage.a06096b5.js",revision:"6c257d19a249104a11bc1805f2982c3a"},{url:"assets/QRadio.a31490dc.js",revision:"9db0da0223ed41c4ac0d0c8b8d8343c7"},{url:"assets/QResizeObserver.fb346d2d.js",revision:"a4332fecfc052fc7591ada38fcccae0d"},{url:"assets/QSelect.5e08e2f1.js",revision:"b1d3f8137cfb87ae91f0aa09b3a1e917"},{url:"assets/QSkeleton.f6d47279.js",revision:"f12a028045967b0623e20727f5fceb91"},{url:"assets/QSpace.274f18d6.js",revision:"9d33c7922d39f5585a9e143678dca9b3"},{url:"assets/QToggle.7711cdfa.js",revision:"4d98500f49bcaf68ac6ebb3056822edb"},{url:"assets/Register.c23d3c77.js",revision:"2b9a833056fcca0cf850e103bb3ed0c9"},{url:"assets/rtl.b51694b1.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/SearchScreen.ee87ceac.js",revision:"f0d15501a05d1f2f7b5b6d6fa3650c6a"},{url:"assets/selection.68e7b480.js",revision:"d3cad5344d73011fe8cc60c1e4c4d991"},{url:"assets/ShippingAddress.e7e567d9.js",revision:"bedfc5ef1348a78fd0eeed12a5d0aa09"},{url:"assets/shopping.1f2cceca.svg",revision:"e0a36caf32df80485560bac8d1eab9f8"},{url:"assets/SuccessConfirmation.eee2430b.js",revision:"829b09cfa66c52d493a0b76dd45332f6"},{url:"assets/web.98dc73a3.js",revision:"3d160fc202eee1662bf3a0f42290c99e"},{url:"assets/WhatsappShare.076391c8.js",revision:"823501410bb39b8b7505c696e0374022"},{url:"assets/WhatsappShare.3e90a203.css",revision:"87dc54d0f11dd069b5e19d3e7c4630da"},{url:"favicon.ico",revision:"be71afb87abee44674960de9de51f73b"},{url:"icons/android-chrome-192x192.png",revision:"355c10808b3f9c9e1f36e6ea394793c2"},{url:"icons/android-chrome-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/apple-touch-icon.png",revision:"431c4a5cbbd9f5cc8ab710c4063131af"},{url:"icons/favicon-128x128.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/favicon-16x16.png",revision:"f263361684056cfa950048196c332241"},{url:"icons/favicon-32x32.png",revision:"912d4d596d85b6e15bf8bb001c395dad"},{url:"icons/favicon-96x96.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-128x128.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-192x192.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-256x256.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-384x384.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/ms-icon-144x144.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"index.html",revision:"eb78677e7ff8a7b2afb67df16794ba7e"},{url:"manifest.json",revision:"32096a7215b1eafd7cff3f60fe8cad08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
