if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const d=e=>a(e,f),b={module:{uri:f},exports:r,require:d};s[f]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-4765ab6a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"maurya-store"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icons/128.png",revision:"668fb0b2c788939d9c76fa1a1769e758"},{url:"app-icons/192.png",revision:"31cd947fec461af4fe069df2a3e07eb6"},{url:"app-icons/256.png",revision:"6c7e764a0d45e0d9e99e41c103db17f9"},{url:"app-icons/512.png",revision:"87b25908b76c475e614060fa6cced916"},{url:"assets/AddAddress.471f9e19.js",revision:"e579eb7c69e69ceaac6369dbf0a593f8"},{url:"assets/AddressScreen.716c165e.js",revision:"4f34746aecbc6450fe44ed1415035130"},{url:"assets/adminStore.ac0a24ee.js",revision:"f77c5bf188b4b7b41480d418fb437060"},{url:"assets/AppLayout.1d825233.js",revision:"86a8309846aa297a33d2f1524d589e4b"},{url:"assets/authStore.b9f59675.js",revision:"f88d1800add17a6672e6879f19729c7c"},{url:"assets/axios.boot.983c9995.js",revision:"fd1b5719b6567ac73770daba9d73cf5a"},{url:"assets/BlankLayout.609f930f.js",revision:"cb391e3379f85bae3b76edbba1354905"},{url:"assets/capacitor.4df351ac.js",revision:"b4c3863afdbced18fe1e3c032ab91a6e"},{url:"assets/cart-store.c74d847f.js",revision:"9bfa2a358dc48dea42299b8b19c03a87"},{url:"assets/CartScreen.1825c0f0.js",revision:"71c03815f33758a4408de676936b1801"},{url:"assets/ClosePopup.ab7e1bd9.js",revision:"c9e30ebaa143d26535d70692f5fc2f26"},{url:"assets/Create.1ccf7cee.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/Create.57634b02.js",revision:"17c19e8c81cf515670b40f0f77487194"},{url:"assets/Create.c6228e44.js",revision:"1e64ff4cd1959bd7d1925af590e20168"},{url:"assets/CreateOrUpdate.99e17687.js",revision:"eb3f94322fb991a0c68bf8f30f9035aa"},{url:"assets/CustomerDetail.70283d9c.js",revision:"d60fe1fd47fcb72a48a96ad5112d233b"},{url:"assets/db.eb94c5fc.js",revision:"54d8141fae255eb39e3221ea2d47f126"},{url:"assets/DetailDialog.259cd428.css",revision:"cdfc659ced2b52f0175e053e7addc2f8"},{url:"assets/DetailDialog.d0982eff.js",revision:"12d081e07c24d3de95fb47dc9531e2bc"},{url:"assets/ErrorNotFound.a81b5142.js",revision:"62fc82ec44b31a5e1a4790ed1c3fa625"},{url:"assets/FavoriteScreen.5a31239a.js",revision:"c7d0475fedb55d06ef079bc3b0dd36b1"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager.02955f48.js",revision:"cde52530e8b67431efb6e5ad7381930a"},{url:"assets/format.2a3572e1.js",revision:"6a121eda7f531acef5ccee07df0fba1f"},{url:"assets/formatting.897fab98.js",revision:"8ca351d251fe02731c8a31ece358a56c"},{url:"assets/GeneralInfo.93945aa9.js",revision:"9e25fd232eea019824526c4d06bfabe3"},{url:"assets/globalStore.e615e6cd.js",revision:"95bb3dbc2031aaadcc41f6f57f767a69"},{url:"assets/HomeScreen.7f972e52.js",revision:"cb46bf2e1633fae56d51997680b4cdb0"},{url:"assets/i18n.c39fb9ca.js",revision:"4d9c3ecf077184885426758c0de2b968"},{url:"assets/ImageGallery.6f79f139.js",revision:"029ddeef69d4917cd35f73708f37cbac"},{url:"assets/ImageGallery.a8dd6320.css",revision:"8d7edcf319be76439f0f9a799882267f"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.6768ccbb.css",revision:"1bc22111efdfaca462d068727bba12cf"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.df871064.js",revision:"47de052e256ed0cd1049a828874383ca"},{url:"assets/index.0b50b950.js",revision:"5cfcd88540f8a45cd3aec004eee986a6"},{url:"assets/index.571d9957.css",revision:"0d13fbf0d2698bc5db8c7ec1accd7fd3"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListDetail.da07be1c.js",revision:"1395116bc117ac854bd4032c0fc5c463"},{url:"assets/Lists.07996b19.js",revision:"04bc1bb50fe8ecaaa20ac9476a92e59a"},{url:"assets/Lists.c8494f2d.js",revision:"c3e6cf171115214fa226b8c356c06f77"},{url:"assets/Lists.d36e6a9f.js",revision:"feaf894a0ceab53c9310f2cc42df333e"},{url:"assets/Login.8dccc8b1.js",revision:"b7a0907175b344d5e57f712740d0de7f"},{url:"assets/MainLayout.6038f4a6.js",revision:"b802c1d3cc2cf4b4ed36f59f62a5b972"},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:"147e3378b44bc9570418b1eece10dd7c"},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:"7a44ea195f395e1d086010e44555a5c4"},{url:"assets/MyOrderDetailScreen.335b3ec3.js",revision:"2086992ce6855685398067b6fd4308c3"},{url:"assets/MyOrderScreen.6d77514a.js",revision:"5e4d620099518e564a77812ea83d1e06"},{url:"assets/NoData.c898492e.js",revision:"0dedaa6adead0c789ed153fb3af00ca8"},{url:"assets/option-sizes.21b4f8cf.js",revision:"68d46d5ed5ed7a9f4a9c78b0324e54b3"},{url:"assets/OrderConfirmationScreen.c5650cbe.js",revision:"218d1ef3bee78bc09d3da88e4f8e9034"},{url:"assets/OrderDetail.a6d19ffe.js",revision:"79c67c8c01bb9a788daee327efde50fe"},{url:"assets/Orders.7d83ff83.js",revision:"e40ae136b109d2ffe93f6a0d3247f4e7"},{url:"assets/ProductByCategoryScreen.71be4f71.js",revision:"b918ca08ad329836d21739336a267363"},{url:"assets/ProductList2.28b0ea51.css",revision:"910031d745021f30072370ace17e13b0"},{url:"assets/ProductList2.62524dd8.js",revision:"be263fe678095162ed97f73a0e35f200"},{url:"assets/ProfileScreen.eaa5d6a6.js",revision:"29775a880df4455e17da91751cecfc77"},{url:"assets/pwa-action-sheet.entry.1b48195a.js",revision:"800198a997c3bfc813882cecc92118f6"},{url:"assets/pwa-camera-modal-instance.entry.3544149f.js",revision:"373c0964be59e961026b7b28f7924ac1"},{url:"assets/pwa-camera-modal.entry.18956295.js",revision:"2964938e18f518bc14b37efaf140c297"},{url:"assets/pwa-camera.entry.fff15eb6.js",revision:"2d96fe854ced41f513a0beba5d2c2caf"},{url:"assets/pwa-toast.entry.97d39607.js",revision:"22e93ff0b6fd2ec81d7d8e702b63e759"},{url:"assets/QCard.47d0caec.js",revision:"c8ed2bde92a9d339361ab30e73e3f0d1"},{url:"assets/QCardActions.0292b5eb.js",revision:"c8ec1632386f1e8e169f73bd0bb2d352"},{url:"assets/QCarousel.55b61766.js",revision:"d533452e45e87ed99fdf95202972ed31"},{url:"assets/QChip.1cfbdc52.js",revision:"69b0105e969849d5232f23762cfd35eb"},{url:"assets/QDialog.6ab3ebea.js",revision:"2252f00b6336c285c6358f9da4d7c54d"},{url:"assets/QForm.2af90c39.js",revision:"0cb789068c5e9554d0e888c77c16dd62"},{url:"assets/QImg.fb8cad65.js",revision:"047ef67ad2c5237683ceca167f1252c8"},{url:"assets/QInput.1606e594.js",revision:"9e95a62de11b2c669ce1ace6e872c2d4"},{url:"assets/QItem.6c7945f2.js",revision:"646fdeb333a0f5549a07ec8ca09e98bf"},{url:"assets/QLayout.416e1c8d.js",revision:"24802af091a1a86d8fd44602739a9fcd"},{url:"assets/QList.d2c31b6b.js",revision:"8289cbf26a29b65a3f5ac7d765037a82"},{url:"assets/QMenu.77e7f7d2.js",revision:"a0bb81cb472481aa7015148e334ac22b"},{url:"assets/QPage.bf274f1c.js",revision:"65443aafc0677525eaf39450633e3322"},{url:"assets/QRadio.e0cfe6b0.js",revision:"8a522f309980aa60b24b9fd16f67bd23"},{url:"assets/QResizeObserver.b941d6b3.js",revision:"7ec940eadfce2bd9db2d66e31a108e06"},{url:"assets/QSelect.a19869e8.js",revision:"b174c60a3d466e369378e5e7c4066106"},{url:"assets/QSeparator.6f357aad.js",revision:"1f9d08b2d408e3e46b91b1fa21f96a2d"},{url:"assets/QSkeleton.5b145f41.js",revision:"f0107ef6419e28b3f08161e0c7661c04"},{url:"assets/QSpace.df0e5647.js",revision:"16fb06f9f0fdbb38ec963cc6b32a8986"},{url:"assets/QToggle.c7464894.js",revision:"2f7ed6508dbb48113aa809d03c991654"},{url:"assets/Register.da06053f.js",revision:"754eb847192bf944023f35ba285d01f2"},{url:"assets/rtl.b51694b1.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/SearchScreen.4b5ccb60.js",revision:"4d20ec806ebbd955a769c84d9da95fa7"},{url:"assets/selection.18db85d0.js",revision:"8370a306d46393f259adec21831b75b2"},{url:"assets/ShippingAddress.64c88bee.js",revision:"7690cfc69b7e5123969e5d7ff229602a"},{url:"assets/shopping.1f2cceca.svg",revision:"e0a36caf32df80485560bac8d1eab9f8"},{url:"assets/SuccessConfirmation.2f732225.js",revision:"fb7074fdcad81c2b96d990f22a830280"},{url:"assets/uid.42677368.js",revision:"01add560b365ffb4147667d832fc2267"},{url:"assets/use-dark.a1890830.js",revision:"164108b07958e4ead2fe7be4171e0dc2"},{url:"assets/use-form.cb121783.js",revision:"c68c0792b20611089ab557eeecc8e70d"},{url:"assets/web.80c163b3.js",revision:"86c9cc13a0ffd41a7e7673c68fc0a568"},{url:"favicon.ico",revision:"be71afb87abee44674960de9de51f73b"},{url:"icons/android-chrome-192x192.png",revision:"355c10808b3f9c9e1f36e6ea394793c2"},{url:"icons/android-chrome-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/apple-touch-icon.png",revision:"431c4a5cbbd9f5cc8ab710c4063131af"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"f263361684056cfa950048196c332241"},{url:"icons/favicon-32x32.png",revision:"912d4d596d85b6e15bf8bb001c395dad"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"eeba65016114e6b7c0eebbde9f431086"},{url:"manifest.json",revision:"32096a7215b1eafd7cff3f60fe8cad08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
