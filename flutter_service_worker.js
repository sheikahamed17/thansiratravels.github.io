'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "62c7bafaa3f4a953d3e48cf03ff12af6",
".git/config": "988e56f01ea00d18c6f360c5d9227af7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "406d85015ef01004adec7587426b8700",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a27b5e6ff7397954001adc25c83237e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dab36d7fa7bda034b7bb02db95eb2c5",
".git/logs/refs/heads/main": "e2f4f014a3b1887d7842bf2b0192d915",
".git/logs/refs/heads/master": "72f2ca1a23b965c3152dfb4d1ca05de0",
".git/logs/refs/remotes/origin/main": "e2bf6a1fce0c0d52e0dc12ff00991495",
".git/logs/refs/remotes/origin/master": "510f11a726a27637c9ae671e37b7ebf9",
".git/objects/09/62a2f9cd6b49af91352e833e04637d294662ee": "308c7bbfcc7b10776a2b379ead5f40b3",
".git/objects/09/d1c23bbbbc0a10aa93f8ce6987424e96890f57": "b822378bf60e45be83a18ac3ff5e54e5",
".git/objects/12/52dbaaba98b00c56212dc1b3616b5061f617e9": "75b13c344569e0265b8b63b16125e026",
".git/objects/14/5dbb55cfd88bc00fb03f197453b63a650f0be8": "587e472632d752d1ca81014fbaf882b5",
".git/objects/16/4e894dd5c32cb0a9735b6430a2201b1802af05": "41ec48bc43f6c6dc854eaf678d8adfa0",
".git/objects/16/b5aae3cf06ed93f084de5dfc6f73d5fc768412": "d1625af0317c5a8d2d371532e948d4fe",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/20/48790ee35c607fe6834755dc02fe092dd3d3a0": "67f9a06ef11e33be4572e824196b55bf",
".git/objects/22/e2395e4949fd2923b85946a35655c5d741bc55": "87bb5637fb979e52f92f1584a8c685a5",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/2f/98e41e03c8dc346532af0ad6066c6d4ea84f90": "bda2071d4245799105f1bf656fd96fc6",
".git/objects/30/743f9b72f698676b990c6b6ee6396e26c25c15": "b71ca18b979c01d14e4364042f3c32f2",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/86031aa6b769aa428d7356d0d69f8d91a2d895": "05eb6222372f173222b4c0852c4eaa8a",
".git/objects/38/ba962e414d876db78cb660987d4c6acfa978a5": "6bc69d9f36e13ee6f929d8ec38c1f8ee",
".git/objects/3b/d4833b00981cbf65ee8ecfd261b8215dad6a76": "25642016a198358f242c048bcc1ac9b4",
".git/objects/3c/76656a7dbc71deffc8bd71fbf273b4e006f569": "f03c9722da6a5dc077f7121c6bbeedf7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/4bad2174fc50606c8abeee9acf6999a4676ebc": "73cef1979d0c6b9b09abd8c0db08a634",
".git/objects/48/7294318efc562db6b6b9cff16bdf55c65b1e99": "6d7fbd595cbe0a546888c0a23b8159b8",
".git/objects/49/2ceb7b4190916e2437201f8ee4deac3628fda8": "a7572850c08d8c5706504c5cfb8d775b",
".git/objects/49/8f6824c17a179e5712362c6188a2de91074005": "e10e7e30d853a277481cfa91b4ae5c0a",
".git/objects/4c/50726472494249dd2669cffb4c7bd9707616ec": "59d48f29fc99064ca02c5878ceeaaa79",
".git/objects/4d/662eb870558220c22afb414c37cd3ace38c91a": "2dad0e9ffe48d2ca1cd286464e1b40fc",
".git/objects/4f/2b7a7e210d418413ffc996684f19630ef5b5be": "1f45d748fb231a426913a06ee52270dd",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/54/d9d93aa6726a860b8a0fc5da07a55f8bd9610c": "418a4dd56c9d11cb1e0f31ddf367621f",
".git/objects/57/4a875502331ae611dfc7574554615721fba8ff": "742769805573c1a02c02e4ba2b003eb4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/b96aa077e61f36c84b984efa6b69be002c0a76": "41947b0a2ab08199a95a1aaf53b1e24c",
".git/objects/58/ba0844648a350162f36e21fafbf09b7ca8214a": "b94d406904a2b85e689bf01c14705ef5",
".git/objects/59/c5a47510e1884179577bab42289c65025f7637": "0447c27dbd97d7e548fb88082d8729aa",
".git/objects/5a/6dc00564fa39f677ec7fc60138dec5c7fcb459": "764847af70141c7e0b139254f1236ce6",
".git/objects/5b/bc720fb0ac4cbdde0188f8f00ffb748b086098": "ed5c80f07e2538dbba05d9c096a3820b",
".git/objects/5e/0797536e01ec9b52dae7851f12161956b4fd4b": "d0cb582f3011b966fdb58922cc09fa76",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/20b1d9710ff531840a50593862aedd1d6585e3": "e4b0e03abeecc3e3dd29a81ab1fa8c5a",
".git/objects/61/c6dddc44379e12059da425ebac18b678ae1506": "a251af45882c18dcb2e45cbbd8868d51",
".git/objects/6a/c810faf78fb754077fc3f097061884ea0794d4": "2f83a088953b42a0bbda2327e8464611",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/96600274f0f6554b0bc68d089b82c59a308ff0": "5bcc2d4fcd0a1e74d4aa1749018470cd",
".git/objects/6f/f7ac7744f318f3d6d4a3fb552c6c98881acf48": "95651a829e723d79acd32923c78a43f4",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/76/d8141780598d6da14a108bb0aded64c7a8cff2": "995b24a0e72a2e2e50ac9fbc7ef8e398",
".git/objects/77/07f25a08323b37fae6f78998cc25df2c147db7": "e948d1b2d9b41622c47657f78cbd2aa0",
".git/objects/7d/eb894bde01c587cabc2f19a52a68b6fa257f9e": "b482770c42452af3678699a16a9d1b80",
".git/objects/84/c742eaed25fcd0c6a04a51fa5bfe40b49aa5a5": "484bf5044ea6514984bd8741d921bb52",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2dcf0d2955e9a3b0fdce9f4fe3afc70fb10b02": "6d65ce71920f9e974d1f82dbea3d0077",
".git/objects/8c/a1bce6e53bbb14e59b7441a162dc7b65471638": "9ee22f2acf4de87bfdc38fd3682d5911",
".git/objects/8d/5d5b679f46d21be7af358d8528bd8197b84d3b": "c7523873797c0a9b32a089b3a0e98871",
".git/objects/8d/b4d6a3d5befff03c61c9e75e7b9b179b30dab4": "ef76fec41dd98ea1572464e7695bcbac",
".git/objects/8d/df972bfe5e19e9f3823a7a40f67e18ba7015ce": "f93dcf138f9e00ab953c3ee3a236c43c",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/de4694487c9650aa79bcb8af19317f62d1db21": "fe663187b9b1b5d2262b73a291971743",
".git/objects/99/34e6e2c8aba728b985417ee830436602666233": "e4782f211e8e860a27014469216a59ea",
".git/objects/a1/57021bec40e8d0cb72d09f351cd397be6a0848": "0d5f2dc510663a737494ded3da1fe4ce",
".git/objects/a2/bd62352682cdd7c51df450d20d02d2f6a48513": "764586593ce6eec43c21730844033420",
".git/objects/a4/272fc5f6404cd67b12805c254f7fe0cbe24e11": "cd78fadad26a24739ba3ebb5533a9617",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/0d37c27982200b3bcd56e15bc3f69f0bdda18e": "b872c51d195b20283a7b1c66aacb3906",
".git/objects/ae/f1f9fead2cbe9da48f4877384bacc880882689": "53ef7005f24cca07fa19828cac18d3b7",
".git/objects/b2/dccdccdfa4e9c9aeba6babb6658b815ba87896": "cf66b475fc60cd2aff9a6a87e6ea3ad0",
".git/objects/b5/c3ebbf28bcbbed4dbeb448709fc5ec2433941f": "f7ddeb1a03ef78caf9b370771da8e6da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9e37f80d99ff9fc84a2f279321846eb4441fb9": "93549438046d95cb3d6757dd24e715eb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/e6b90be3bb23a9b3fa8cae01dceea669e82022": "01df38bd971dd9d0a62de14ac49c105e",
".git/objects/c1/82ffce246ab78d49a0bb948b22d1da05e4f4d0": "5382dfb26f84be90592a701f7548b0ed",
".git/objects/c6/96205020a4e4f4bb5bb4a21a7af3a3ae766468": "66eb0d59f06101e094a493915ada311f",
".git/objects/c9/49456f7c522e6f74be12ba0324271692a4066f": "1d4cc4238055ca0b4d55b717aa3a6a41",
".git/objects/ca/c7887143998c9cbad9009b62dad4a6957cf3f5": "ba271fae3aa607292ff80e61b3f299e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ae032c0bf7fa1d672085e91a55ffaccc4c0936": "a60fa639127dfbcd3566c33e24a77534",
".git/objects/d6/b83f931e8e10fff20d06e6e5af669f68554080": "b97759bca62545be9792f9fd0463d4e7",
".git/objects/d6/d0331bc0501c7f7fd8190665beeb15c6cced25": "cab8b96a1e77b12a1abe7465995d4f9e",
".git/objects/d7/2dba0c56ede2d4443c3433fbf614ed41a737fd": "3eb83bc527e3c3172dfea13bc7c4b602",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e8/e71b7d57dfaf7fe0aeca26aa81095f7e50924d": "b224942002c1cdda28f2febab502c130",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/39f0a970583aa4f3e8f041c7c2a5df6b91fc9d": "504b173a5cdf6431af1f2e15e85fd16a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/32f40070b29f2751bcb690a510e42a21aef731": "f21dce2a73d46f5d63874869d77b82f0",
".git/ORIG_HEAD": "02e189ae3c4eb32fba64945384803cbe",
".git/rebase-merge/author-script": "7d6e5976b32c086f2fd490d4cd9a90ff",
".git/rebase-merge/done": "f21d83c14451febfee15ce85143136e7",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "46ed1163c089e161751d0ad6e294fff7",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "d016dbcb4d8d267ae59e16a386baf042",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "dc23c1befd551e3fdbb30291ce8dc260",
".git/rebase-merge/orig-head": "02e189ae3c4eb32fba64945384803cbe",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "02e189ae3c4eb32fba64945384803cbe",
".git/REBASE_HEAD": "02e189ae3c4eb32fba64945384803cbe",
".git/refs/heads/main": "02e189ae3c4eb32fba64945384803cbe",
".git/refs/heads/master": "02e189ae3c4eb32fba64945384803cbe",
".git/refs/remotes/origin/main": "02e189ae3c4eb32fba64945384803cbe",
".git/refs/remotes/origin/master": "02e189ae3c4eb32fba64945384803cbe",
"assets/AssetManifest.bin": "1d13850c05bbe84fe55763521a6f22f1",
"assets/AssetManifest.bin.json": "e57c3fe109ece4e5845a43447533a2b1",
"assets/AssetManifest.json": "6088a0b9ec0be4aaa334fc462b80bcd7",
"assets/assets/fonts/PoorStory-Regular.ttf": "21d15c9110b18b49d69602323f1a7b36",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/images/collegeTour.jpg": "0a7352543b689b984ff9874401a36c0c",
"assets/assets/images/kanyakumari.jpg": "014d81a56c005d2dc8e05432b3cdd887",
"assets/assets/images/Kodaikanal.jpg": "6189a1bf85a31e8691b5bdc86785f1aa",
"assets/assets/images/madurai.jpeg": "1989beaa824183a67d75d26772152659",
"assets/assets/images/ooty.jpg": "8b84bd87e74248efbdb4edb55abf96c3",
"assets/assets/images/taxi.png": "c88cce2dcf75a17c5429a63567968ec5",
"assets/assets/images/temples/temple1.jpg": "559296939c1606caca880a9eaaa3283b",
"assets/assets/images/temples/temple2.jpg": "ed533fecb23332f5918182a960d1fa0a",
"assets/assets/images/temples/temple3.jpg": "5999cb0d56e9c9090b7a71858cdc76c2",
"assets/assets/images/temples/temple4.jpg": "e61b58765cbbc255555f1ae7be24b86b",
"assets/assets/images/temples/temple5.jpg": "80110623f39490caf575b024a1559ab2",
"assets/assets/images/temples/temple6.jpg": "05df111861d06243c2e5602d2c6b3b1e",
"assets/assets/images/temples/temple7.jpg": "22c420cd49d1411fb9d1a420d7b6fbea",
"assets/assets/images/temples/temple8.jpg": "4b9a734e5080cffdd354ab26839016d2",
"assets/assets/images/Thanjavur.jpg": "bcd360a2ba1a6af4a067fe3bbabb12db",
"assets/assets/images/TNtour.jpg": "07a9d2a5c1e33319b471e81b4b779e08",
"assets/assets/images/whatsapp.png": "cc7ed84031a39e69a28d9a007c06d56f",
"assets/FontManifest.json": "ea79ceccbb66ace406b5e88f349ee23c",
"assets/fonts/MaterialIcons-Regular.otf": "dc2d2eacf31085c1615d6b01cc0bce3a",
"assets/NOTICES": "f001ab36bd122a85347f91222c70992d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "dd96395436e2ee53bfa3591e975df0d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "219da02845d399ad48900d73dab6f50c",
"/": "219da02845d399ad48900d73dab6f50c",
"main.dart.js": "7e49accbf0e08a565c9f67f6a395dcd3",
"manifest.json": "90189742187795efd6eb0a084177a3e9",
"version.json": "d785a9aa6eb47eb2bdcbc307eb75dc39"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
