if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const d=e=>a(e,r),b={module:{uri:r},exports:i,require:d};s[r]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(f(...e),i)))}}define(["./workbox-4765ab6a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"maurya-store"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icons/128.png",revision:"668fb0b2c788939d9c76fa1a1769e758"},{url:"app-icons/192.png",revision:"31cd947fec461af4fe069df2a3e07eb6"},{url:"app-icons/256.png",revision:"6c7e764a0d45e0d9e99e41c103db17f9"},{url:"app-icons/512.png",revision:"87b25908b76c475e614060fa6cced916"},{url:"assets/AddAddress.703cbf32.js",revision:"bea936c62aea531729fbae1ef08f88ab"},{url:"assets/AddressScreen.22e4e1ee.js",revision:"5a3c55c209168a4ed4c2271b2f62d684"},{url:"assets/adminStore.394d471e.js",revision:"47adc80a96abea7eef3a046a7c4cb3cb"},{url:"assets/AppLayout.12bf9884.js",revision:"6245494f550014062a32bc0f1517c199"},{url:"assets/BlankLayout.bb7d5ceb.js",revision:"809e06b274a41df1d67a76e1f11b363f"},{url:"assets/capacitor.c7cd6ddb.js",revision:"b762b0398fabb9ba241ade8ace42e6f6"},{url:"assets/cart-store.17921f79.js",revision:"273cd75b82226dd1df25127456689914"},{url:"assets/CartScreen.48c822f2.js",revision:"9e5f20b90b43db1bb708405d0090add5"},{url:"assets/ClosePopup.1d3c12f1.js",revision:"f1f29be9a092393da7167e9832358cd6"},{url:"assets/common.807e182b.js",revision:"ff25e12ed66e5d0353f4cc80069764b1"},{url:"assets/Create.1ccf7cee.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/Create.88182351.js",revision:"0ec0b7ce645f7f321cdff06a5f536b2a"},{url:"assets/Create.bb883b22.js",revision:"bce44e0389b9c88f24040de31e27eec1"},{url:"assets/CreateOrUpdate.bb94ee37.js",revision:"1401d5a29fcd82ead084213ced021ef1"},{url:"assets/CustomerDetail.4a9fe6f9.js",revision:"ad8819a360d56867e22adcb76e8d77fb"},{url:"assets/db.eb94c5fc.js",revision:"54d8141fae255eb39e3221ea2d47f126"},{url:"assets/DetailDialog.771d40c9.js",revision:"a451034373fe8ec2ec8c77d9e3a107ec"},{url:"assets/DetailDialog.9afd1007.css",revision:"775d7acb2011cd8219bf88bf7d99473b"},{url:"assets/DirectOrderConfirmationScreen.f83d89ab.js",revision:"adca00a5c26173fb6ab6de96f924c8d5"},{url:"assets/ErrorNotFound.1dac655b.js",revision:"8042eed9afae49887bec2c0931aca4ac"},{url:"assets/FavoriteScreen.b1235e9e.js",revision:"cf86836c1c7af16fe17817a2e3e00b45"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.2a3572e1.js",revision:"6a121eda7f531acef5ccee07df0fba1f"},{url:"assets/formatting.897fab98.js",revision:"8ca351d251fe02731c8a31ece358a56c"},{url:"assets/GeneralInfo.d61124ae.js",revision:"f2495024b301e7c10f67bea41ee97d8c"},{url:"assets/globalStore.2c6ed0bd.js",revision:"26e4587e623a27fb45c89c83bc749f95"},{url:"assets/HomeScreen.fe044b63.js",revision:"8378d1891d9b8c832452cbc52b26b46f"},{url:"assets/i18n.5dc4b80c.js",revision:"1d9c6b4549889b73b9ad9290d065335b"},{url:"assets/ImageGallery.a2c516ba.js",revision:"604424f97924051b22cb212892c0db19"},{url:"assets/ImageGallery.a8dd6320.css",revision:"8d7edcf319be76439f0f9a799882267f"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.2cdab474.js",revision:"a903679df42655fa13b3a5e7aad9e3e4"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.6768ccbb.css",revision:"1bc22111efdfaca462d068727bba12cf"},{url:"assets/index.6c2d41df.css",revision:"2d4be66e92556ef22b1ab8328f35cd96"},{url:"assets/index.85b4eabb.js",revision:"7436b91a796910d698116f92700124a8"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListDetail.7918c22b.js",revision:"8058f2e9c0082e11b92227ff941360a8"},{url:"assets/Lists.a513ba0a.js",revision:"78b4794f7fd87252a777b50e8c9034c3"},{url:"assets/Lists.b83f3748.js",revision:"7357983a3d246801be7995c7918b9aff"},{url:"assets/Lists.fca8fd46.js",revision:"687886f89bba9450eb0188063f0f2fcd"},{url:"assets/Login.9e9d7914.js",revision:"25e8ce881c1dd63499ea8e2bb0d84a1b"},{url:"assets/logo.dd0e1fe5.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"assets/MainLayout.96e9ed0a.js",revision:"7c8238413e7028001aca158042caa628"},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:"147e3378b44bc9570418b1eece10dd7c"},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:"7a44ea195f395e1d086010e44555a5c4"},{url:"assets/MyOrderDetailScreen.ca046aab.js",revision:"0c183e1a3eeba66ee779c1dccf7d9ec0"},{url:"assets/MyOrderScreen.ea40c5c9.js",revision:"88bd8c3db76d7f76a5fa3d5e2d091396"},{url:"assets/NoData.54acfb85.js",revision:"c7f7f32a2d8d2ef2d64b80cc8ea08ca7"},{url:"assets/option-sizes.79a54e45.js",revision:"ecab543e0ac6d714660b08adbdb941d9"},{url:"assets/OrderConfirmationScreen.8f0e0312.js",revision:"a5699095bf6e869c4bbebf108586ba16"},{url:"assets/OrderDetail.1696b787.js",revision:"1e38185ac192e849340324dcc1bae7a7"},{url:"assets/Orders.d5806fdb.js",revision:"e7d42ea424e54f289c100f4b263376bb"},{url:"assets/ProductByCategoryScreen.8f2b44f6.js",revision:"fd769662556f716e8eecfb3751330859"},{url:"assets/ProductList2.b988b98f.css",revision:"a21aaaf5da27791613e3f86da36d7895"},{url:"assets/ProductList2.e211c602.js",revision:"823ccb903c7ecd714d9844d1379a8b16"},{url:"assets/ProfileScreen.8cf90124.js",revision:"42450020a9bb54474263102ac3c0a753"},{url:"assets/pwa-action-sheet.entry.6c918c7e.js",revision:"21160345977ee44b214bf2d83663a6ac"},{url:"assets/pwa-camera-modal-instance.entry.cdd95a6c.js",revision:"49352d9d0a5bf4c153b4224e72066e55"},{url:"assets/pwa-camera-modal.entry.929cca70.js",revision:"3e143d8d47485085a1be7077b15a944e"},{url:"assets/pwa-camera.entry.a0321cbd.js",revision:"6cbbf256d0a4b67975be1c4d6944e33b"},{url:"assets/pwa-toast.entry.979d2d8b.js",revision:"bdfcadd0fd423c4511ca6b6b3f427be3"},{url:"assets/QCardActions.b7aaf9b3.js",revision:"b4ad1e1bf9dc712cea0c468973c40bb9"},{url:"assets/QCarousel.5dcf9bed.js",revision:"a0439d36c9abe979552fa60132033638"},{url:"assets/QChip.94745fe4.js",revision:"80b0816e3a03cec75c57116fb0a2053e"},{url:"assets/QCircularProgress.fd022cd5.js",revision:"f6727e43f471bb44b707d86c3e1d4479"},{url:"assets/QItem.bb4b5915.js",revision:"fc6c0c035f67fb3e68da1e622ebd43e0"},{url:"assets/QLayout.d0440f90.js",revision:"da3b2934de77540b5ec8610e7a49c08a"},{url:"assets/QList.af14cb60.js",revision:"da6965162e5f965f5360a457e7e97fc0"},{url:"assets/QMenu.56f8c2ac.js",revision:"7ea4b0d8ab5ef3a3243ab5016837ef9a"},{url:"assets/QPage.f75849b8.js",revision:"e7745ef6fcf329bed5da839eddeaa446"},{url:"assets/QRadio.039b9419.js",revision:"a0056e96286c87e67c7a8dab6573cebf"},{url:"assets/QResizeObserver.bda6a233.js",revision:"81fca7a8effc5dd71d68831e6409fe78"},{url:"assets/QSelect.dae424f0.js",revision:"a5247f11ee28d9f0b52d5ed2efe8e315"},{url:"assets/QSkeleton.8b35fb2e.js",revision:"5d035d96a70015eb4d2ec388b08fe026"},{url:"assets/QSpace.94c74ebb.js",revision:"ac47769cbf0b639be7e6976a0a08abcb"},{url:"assets/QToggle.fc2ee63b.js",revision:"2f7060de4dab3f8734036aa628214c14"},{url:"assets/Register.9c2849ba.js",revision:"19ceba6a8de8674188e757c1be142dab"},{url:"assets/rtl.b51694b1.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/SearchScreen.409d3f2e.js",revision:"9f746dff7a85677b682ad373a24f635b"},{url:"assets/selection.b1e3b628.js",revision:"59613277a2fa2430e4425a7e76d17574"},{url:"assets/ShippingAddress.6ba81030.js",revision:"f7f7af9e5e24e30b8068f58794dd9785"},{url:"assets/shopping.1f2cceca.svg",revision:"e0a36caf32df80485560bac8d1eab9f8"},{url:"assets/SuccessConfirmation.8dfad30a.js",revision:"49ea99c1dd2d3b370cdc93915b675475"},{url:"assets/web.dda74c62.js",revision:"57f1e50a6afee2a74a410862b6a32b9e"},{url:"assets/WhatsappShare.3e90a203.css",revision:"87dc54d0f11dd069b5e19d3e7c4630da"},{url:"assets/WhatsappShare.701b443d.js",revision:"ade7dfbfaa29f7b914d8e8ffd79ff3c5"},{url:"favicon.ico",revision:"be71afb87abee44674960de9de51f73b"},{url:"icons/android-chrome-192x192.png",revision:"355c10808b3f9c9e1f36e6ea394793c2"},{url:"icons/android-chrome-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/apple-touch-icon.png",revision:"431c4a5cbbd9f5cc8ab710c4063131af"},{url:"icons/favicon-128x128.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/favicon-16x16.png",revision:"f263361684056cfa950048196c332241"},{url:"icons/favicon-32x32.png",revision:"912d4d596d85b6e15bf8bb001c395dad"},{url:"icons/favicon-96x96.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-128x128.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-192x192.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-256x256.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-384x384.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/icon-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/ms-icon-144x144.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"index.html",revision:"a530b0d59bbd7c092ed2cb6bd34cc6c4"},{url:"manifest.json",revision:"32096a7215b1eafd7cff3f60fe8cad08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
