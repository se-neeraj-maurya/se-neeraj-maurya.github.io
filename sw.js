if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const d=e=>a(e,i),b={module:{uri:i},exports:r,require:d};s[i]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-4765ab6a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"maurya-store"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icons/128.png",revision:"668fb0b2c788939d9c76fa1a1769e758"},{url:"app-icons/192.png",revision:"31cd947fec461af4fe069df2a3e07eb6"},{url:"app-icons/256.png",revision:"6c7e764a0d45e0d9e99e41c103db17f9"},{url:"app-icons/512.png",revision:"87b25908b76c475e614060fa6cced916"},{url:"assets/AddAddress.75932a7c.js",revision:"2b677862071a63b86358cf9605badbd9"},{url:"assets/AddressScreen.6f0bc8a2.js",revision:"d1523747f6cf77059d107aa24dfe208c"},{url:"assets/adminStore.b68fef75.js",revision:"806a4b9f2cf933c9c97a4f665bf6dfb3"},{url:"assets/AppLayout.7b74c711.js",revision:"ee4ae2a9ce749615b51a27bc7292e9bf"},{url:"assets/authStore.cbfd6f4c.js",revision:"98d17e6276345709f52f639367dba54f"},{url:"assets/axios.boot.7a3cb386.js",revision:"31a161e68c249ad55081aec425375c9c"},{url:"assets/BlankLayout.dacb8215.js",revision:"7dc6de6f8fdd4a5309d4d06fd03e08eb"},{url:"assets/capacitor.d9bf7a59.js",revision:"911e063f0a9ebff4345f955c33d39806"},{url:"assets/cart-store.24769fea.js",revision:"0f59508a7e3b5abc486ef1cd1f3442e8"},{url:"assets/CartScreen.384ebf2e.js",revision:"b345a0375fec8e05c4fe48b710ecd1df"},{url:"assets/ClosePopup.422b55cf.js",revision:"b2435d0d4bab41f69229296250b03b6f"},{url:"assets/Create.1ccf7cee.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/Create.45886636.js",revision:"d3611bcd87de652dbdb686c265c5953a"},{url:"assets/Create.8e10272b.js",revision:"b4db6b95b6ee0807f972caee5de7b529"},{url:"assets/CreateOrUpdate.6cdcef76.js",revision:"b6f62ba9e1e57a560642de1ad90bb55b"},{url:"assets/CustomerDetail.27f3607b.js",revision:"28e310590caf8e8926bdda7ab6f5570d"},{url:"assets/db.eb94c5fc.js",revision:"54d8141fae255eb39e3221ea2d47f126"},{url:"assets/DetailDialog.259cd428.css",revision:"cdfc659ced2b52f0175e053e7addc2f8"},{url:"assets/DetailDialog.44df573a.js",revision:"905cd0aa82ee942758e4cf419a70ed4b"},{url:"assets/ErrorNotFound.5a33f148.js",revision:"4628783114f73833d4e324c9b098e6f6"},{url:"assets/FavoriteScreen.96262e56.js",revision:"f302d61e87a4e0d948b5793e6f64a537"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/focus-manager.02955f48.js",revision:"cde52530e8b67431efb6e5ad7381930a"},{url:"assets/format.2a3572e1.js",revision:"6a121eda7f531acef5ccee07df0fba1f"},{url:"assets/formatting.897fab98.js",revision:"8ca351d251fe02731c8a31ece358a56c"},{url:"assets/GeneralInfo.25358d84.js",revision:"c92fd0f45a9f403aba9fba61c34eab06"},{url:"assets/globalStore.da87f570.js",revision:"257236d843f7004c83a7ff86f233b4bc"},{url:"assets/HomeScreen.5754ce96.js",revision:"4f6b169f21b91ebcde3d7a356a6527fa"},{url:"assets/i18n.5a0e63fe.js",revision:"fcd543df851ef9d678bdd2cad97efa76"},{url:"assets/ImageGallery.a8dd6320.css",revision:"8d7edcf319be76439f0f9a799882267f"},{url:"assets/ImageGallery.b86aa7a0.js",revision:"34788814872cf3ae6d63e3549daf2300"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.6768ccbb.css",revision:"1bc22111efdfaca462d068727bba12cf"},{url:"assets/ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.9d485165.js",revision:"684a1553ce5e4190dd08a5288ca77165"},{url:"assets/index.571d9957.css",revision:"0d13fbf0d2698bc5db8c7ec1accd7fd3"},{url:"assets/index.c73ad5d1.js",revision:"60151a876061f41e66799871e437279b"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/ListDetail.4346b312.js",revision:"a4357422ddec36e8457dcf864fcc5c3b"},{url:"assets/Lists.3a144680.js",revision:"a50c0f9780ac3fc679ee3dbd5577bebb"},{url:"assets/Lists.5aa64e0a.js",revision:"2b3937158020753479f747f18c634290"},{url:"assets/Lists.cbc21242.js",revision:"9e148ab5d6948f5e77d87c94108ff0a1"},{url:"assets/Login.7954a926.js",revision:"27ccfb7961ebae1b38a2cfcc7665ef09"},{url:"assets/MainLayout.822b0c70.js",revision:"6fc0bdedc779a623ecd75a4ba6010e3d"},{url:"assets/materialdesignicons-webfont.8bded8f4.woff",revision:"147e3378b44bc9570418b1eece10dd7c"},{url:"assets/materialdesignicons-webfont.da7fba3c.woff2",revision:"7a44ea195f395e1d086010e44555a5c4"},{url:"assets/MyOrderDetailScreen.283a9f03.js",revision:"a671910a0ded0019ece3483b66cd2828"},{url:"assets/MyOrderScreen.d47489e0.js",revision:"738c523a60862f3ba3928ce85af83b77"},{url:"assets/NoData.a07d8052.js",revision:"049955ef1cb48e75b88ff8d509c8aca8"},{url:"assets/option-sizes.8c53dc9d.js",revision:"5340e46ce67934ec29b81e9d68b0a61c"},{url:"assets/OrderConfirmationScreen.8d6fff4f.js",revision:"66dc897012b1ba0efcba6e4fedce0df5"},{url:"assets/OrderDetail.87193c6f.js",revision:"5625166192baf0accb37515e1623cc54"},{url:"assets/Orders.925f8316.js",revision:"5569b09619dd155f065076f776b85fbf"},{url:"assets/ProductByCategoryScreen.3fbcd118.js",revision:"2cd612fcffe755b4cb9df4915a71e484"},{url:"assets/ProductList2.454ede9d.js",revision:"2173bc5a0d7e9eb6e873e310d78a69dc"},{url:"assets/ProductList2.b988b98f.css",revision:"a21aaaf5da27791613e3f86da36d7895"},{url:"assets/ProfileScreen.e6be423b.js",revision:"82e7f4164f7cce4c40437a2a944012ba"},{url:"assets/pwa-action-sheet.entry.8a815230.js",revision:"7a496d1f22aadbcfac4af7d083f9aba5"},{url:"assets/pwa-camera-modal-instance.entry.c9031dc5.js",revision:"6d3b31969817dac7219ff77fb3efb9a6"},{url:"assets/pwa-camera-modal.entry.ccc9fba4.js",revision:"33a05a82607926aa04e384c4d79d36c4"},{url:"assets/pwa-camera.entry.9010d278.js",revision:"b261b4ae08619dded002fac39ff1f0c8"},{url:"assets/pwa-toast.entry.34299cfe.js",revision:"e5beb1bd1ac75505bc26a03955a4fd00"},{url:"assets/QCard.f27ef106.js",revision:"5380c19e3460490eed5966982bdb3665"},{url:"assets/QCardActions.187f4417.js",revision:"6145a05301245bcd15b58ca1a4182612"},{url:"assets/QCarousel.ff8b4386.js",revision:"1b5553e239fc9d605efa18f73de13f7f"},{url:"assets/QChip.c8662ee6.js",revision:"943861c0b50cc382f5b63d5119fce46c"},{url:"assets/QDialog.2a776b35.js",revision:"837cd2a13f553e3884d23935a43a6465"},{url:"assets/QForm.40f5f0c2.js",revision:"3f5600b2152b160c44ae883eafeddc6c"},{url:"assets/QImg.1c1ad563.js",revision:"e152ed9ac464fd2fc2ea2397d338d5e0"},{url:"assets/QInput.4d258c5d.js",revision:"ff2709fd4f6e910b378b3ca41995f8af"},{url:"assets/QItem.1687dd60.js",revision:"f4b1d570829a86d5f99692603a501acb"},{url:"assets/QLayout.eb94ebbc.js",revision:"0ebfa195b2b02e9b59be5e7b45b39e4f"},{url:"assets/QList.e1ece8ed.js",revision:"8f9d7591d86f3c7510bc03c7a9d653c3"},{url:"assets/QMenu.a25d15c1.js",revision:"99e4168c8780e621037ad172000b4502"},{url:"assets/QPage.905abf71.js",revision:"c35cbd9614b96beba239c7f4b679572a"},{url:"assets/QRadio.c6303b2b.js",revision:"88380471c1232e399ae767738a823cde"},{url:"assets/QResizeObserver.7d4f2dc4.js",revision:"f996974feb96ae68fb0f6bda9ba5a1dd"},{url:"assets/QSelect.3de4f74b.js",revision:"31f49cf811012d485576cee8757e677c"},{url:"assets/QSeparator.0ae7e94f.js",revision:"b197227b15ab0d1a16bd723cbed722ef"},{url:"assets/QSkeleton.c57ae26c.js",revision:"7e136ac776c65b4e2e13a0a6a874b38a"},{url:"assets/QSpace.a7f2320a.js",revision:"44c7050bd3b692381c5d303e04ace9d9"},{url:"assets/QToggle.0921c891.js",revision:"a874b0c2399ac969a254388b4548cc1f"},{url:"assets/Register.aede2fae.js",revision:"fa6b3d5d269b0c92d35e7c53713f5ae9"},{url:"assets/rtl.b51694b1.js",revision:"528db8ee9db59534c84c8fe3314e1c7c"},{url:"assets/SearchScreen.6ff454fe.js",revision:"15f264051e630ed7240ecffff9526a3e"},{url:"assets/selection.eebcb6cc.js",revision:"290bf4d08a256a4a42082b31add90710"},{url:"assets/ShippingAddress.97dcf0cb.js",revision:"6b01c36f8279ed50e53a541526eae885"},{url:"assets/shopping.1f2cceca.svg",revision:"e0a36caf32df80485560bac8d1eab9f8"},{url:"assets/SuccessConfirmation.4234167d.js",revision:"0b4f2c564066e19d3452c5ab06255f51"},{url:"assets/uid.42677368.js",revision:"01add560b365ffb4147667d832fc2267"},{url:"assets/use-dark.008590ea.js",revision:"1da39b7bd4beb264fb79ebc29feeb9d7"},{url:"assets/use-form.6491fe21.js",revision:"b2f4909ea1e8ebd846f3d34220b7e23e"},{url:"assets/web.5993818d.js",revision:"02fa975081d1b9335bc9ed4baf0c36b5"},{url:"favicon.ico",revision:"be71afb87abee44674960de9de51f73b"},{url:"icons/android-chrome-192x192.png",revision:"355c10808b3f9c9e1f36e6ea394793c2"},{url:"icons/android-chrome-512x512.png",revision:"dd4fb1c4e379b6f961dfff23b9fb4074"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/apple-touch-icon.png",revision:"431c4a5cbbd9f5cc8ab710c4063131af"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"f263361684056cfa950048196c332241"},{url:"icons/favicon-32x32.png",revision:"912d4d596d85b6e15bf8bb001c395dad"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"4908ee2a41b389cfeddbff58738ebd7f"},{url:"manifest.json",revision:"32096a7215b1eafd7cff3f60fe8cad08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
