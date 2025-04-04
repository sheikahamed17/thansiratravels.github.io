'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eff9122bbb74f672fc7489f0d62c42c1",
".git/config": "42fe40324a2744fa80ec05bafaf7ee31",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9bca6155df9eeaa8d1609b04b47e763f",
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
".git/index": "b4d6b8d1e5f99d0d9a9431b15344502f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4138de73e9db01195bda6cdae8b01c80",
".git/logs/refs/heads/main": "fa7b290348b8e079290ed2492da8f569",
".git/logs/refs/heads/master": "f396ceab2a4a0ee4b9b571f09cda96f4",
".git/logs/refs/remotes/origin/HEAD": "6eac1cd32f6e91927e9de97a996059b0",
".git/logs/refs/remotes/origin/main": "13d66e161af6e32509b8f14c29acfa0f",
".git/logs/refs/remotes/origin/master": "57948a86f34a72036d3ccc7960a88d29",
".git/objects/01/acdea67e001d6f737440b616abf0f23c3533cb": "b0b5466a2589c16e5f1db534fa8ee16c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/37705d5b0a4ab9eba5835f9911c26573f86ae6": "719837c84e695f574e6fb2210b91f6ca",
".git/objects/04/3c13241ea5a75cfc013c091a7720b92f127f7d": "6c9b2831d4562f3d5772fa8efee4bca7",
".git/objects/08/01cc1e3f38e85026c87a4a3cb616b6323419ca": "103625757585153e7bf73ad3cd8d02df",
".git/objects/09/62a2f9cd6b49af91352e833e04637d294662ee": "308c7bbfcc7b10776a2b379ead5f40b3",
".git/objects/09/d1c23bbbbc0a10aa93f8ce6987424e96890f57": "b822378bf60e45be83a18ac3ff5e54e5",
".git/objects/0b/31ed5207ae8b9dd9294a2d158184a0001696c1": "54bb6436a6bdc9ca8d03f021ea6a893b",
".git/objects/0d/860507d3a8fccb78734380cf64e8c343b3427c": "df935a4f7069fb24ce77d6d36da90714",
".git/objects/0e/5ab65e3bf715476cda62ca5f540dfadbd115f2": "455f51bd397253a5b580dd7d2655d1df",
".git/objects/0e/b5a6d9fc2e3c465ffef2b99b5218e9aafc4b74": "e1344de5ef824c60d8dda3a67bc62c50",
".git/objects/0f/28eede062766253db045bd90b60ad70b8b18c9": "5f9c094b967dffc1ee6645cad522b67a",
".git/objects/11/9d39a86ec19e978e7395efc6d0663f147d77fc": "04e21c23dd8ef4e1f9f5d70852700897",
".git/objects/12/52dbaaba98b00c56212dc1b3616b5061f617e9": "75b13c344569e0265b8b63b16125e026",
".git/objects/14/5dbb55cfd88bc00fb03f197453b63a650f0be8": "587e472632d752d1ca81014fbaf882b5",
".git/objects/15/d642a34cc4e649e4351ed1ec460daf0c148bf2": "1e32ebf2d8fb7b0e812337abf11c4536",
".git/objects/16/4e894dd5c32cb0a9735b6430a2201b1802af05": "41ec48bc43f6c6dc854eaf678d8adfa0",
".git/objects/16/b5aae3cf06ed93f084de5dfc6f73d5fc768412": "d1625af0317c5a8d2d371532e948d4fe",
".git/objects/18/8a97b4a9c1dddb73b60e1b4ab4fb9ff21bf964": "25c6ea8843328efd34f5536f5a47b6cb",
".git/objects/19/75a0dba26debb3c3e1b0d548a8913aac0fa7c2": "225173a5bccde8d9c33a737558701cd3",
".git/objects/1a/187cbdec2727fc2822ff70665f2c0853155c2d": "73c6bdf5ec8ddfb8225c9eb475e162e6",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/1d/6be44b3b620a7777eba72278341f6b926bbedb": "9d203f02782b983aae5ec4d2e39293bd",
".git/objects/1f/25721aa76e38a1e103cde00cd6baab05273e89": "78bda4f5e0a0ec6520a58ff122867822",
".git/objects/20/48790ee35c607fe6834755dc02fe092dd3d3a0": "67f9a06ef11e33be4572e824196b55bf",
".git/objects/20/6fd2304225520fb6bd542636db492a546eff7d": "b323d5cd21fc83903b87963147a7a3c0",
".git/objects/20/b2fe97ad1124b66d7e3fc40ac4b222fd1261a1": "cf18369676accb83ff70f129b71380c7",
".git/objects/22/e2395e4949fd2923b85946a35655c5d741bc55": "87bb5637fb979e52f92f1584a8c685a5",
".git/objects/25/613a797bc4253269b5cf58c9e6baeedaa59b48": "d2d477b81927b8b18a1ca14e45414229",
".git/objects/25/9abc14c74bb5148759cb488c9387b70e4cc107": "abc2f80ccb3e30a7f73bebba2c769dbe",
".git/objects/25/9c189bb7b8b9a09be46e2b937c335b0d0f290b": "30f3ef7c1473bc3931b43071f8728d27",
".git/objects/25/bd9f34bf54942fbbe5a6ce0bc4a854f2b6a637": "73b38ab3d3fdcc71c5a90d8fbc7dc585",
".git/objects/26/817722e9eb5be09d991874780b93aa0f2c1b85": "5f28760d5a3e516dba5039e4355af509",
".git/objects/27/13c7a3ab38ccea424b56fd94a9b808f2658124": "ae5455039d6ad50d3a24b17cc98473e6",
".git/objects/29/863f2ce01a7b957e65c146e221b995c77c245f": "b70ec255068fafd95fb9a419d7d406af",
".git/objects/2a/3ac39c3977abd98b887a633a8164f40f530e9a": "887d9827591ef9619b169c37fceaade0",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/2f/98e41e03c8dc346532af0ad6066c6d4ea84f90": "bda2071d4245799105f1bf656fd96fc6",
".git/objects/2f/baac4b1b6387e29a8aca0b34ddd0611b00004c": "691998dd109c2aa6d66c90492c95630d",
".git/objects/30/04adbc00a5018e5131153881c7d571570ad103": "be2eeb9635a6a614a0db4274cb29abec",
".git/objects/30/743f9b72f698676b990c6b6ee6396e26c25c15": "b71ca18b979c01d14e4364042f3c32f2",
".git/objects/31/25ef8437815e714515e188f5705780d79b1362": "24616ced8533244a537d38c553a3653e",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/c8ff35a6253573204a12696b8e3da94d4a0775": "cd11df83aa813db726a691b0c12c8478",
".git/objects/34/145dc43d1d3ca173fca57845927545f540c02a": "9f46740946e534345b43acce5d975110",
".git/objects/34/64fcf3ddd828d0021d73346dc4087f611393b6": "fc97eacd97e61266e02f4fdcf0fe60fd",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/86031aa6b769aa428d7356d0d69f8d91a2d895": "05eb6222372f173222b4c0852c4eaa8a",
".git/objects/37/c3d48387ce2159588382702eaecd393e27e886": "76869743ab6292bcb209cc0e5767e488",
".git/objects/37/da472cb91a14ddcd5263c10a95bbb6765e3f3e": "af834cad068d44a6211a94618fd115cb",
".git/objects/38/783f7a93e62e0221b8fe008cf7f491555e06a0": "16752d1f4be0bdf139289f77c4ffef26",
".git/objects/38/ba962e414d876db78cb660987d4c6acfa978a5": "6bc69d9f36e13ee6f929d8ec38c1f8ee",
".git/objects/3b/d4833b00981cbf65ee8ecfd261b8215dad6a76": "25642016a198358f242c048bcc1ac9b4",
".git/objects/3c/0f38e3fe4a877461597c5c81c9f6a0de2472fb": "445dd682269cacf5957a511db4dc9b07",
".git/objects/3c/76656a7dbc71deffc8bd71fbf273b4e006f569": "f03c9722da6a5dc077f7121c6bbeedf7",
".git/objects/3d/8d9ff2abef2ff506b5bc0b80e28aeb71709978": "a5d7df978c4199be5d39ce818589d997",
".git/objects/3e/43123dc58b8901bd383c831512d18ab120a00e": "b629e3d314a30ac995e363a5e35159aa",
".git/objects/3e/45f16740c1fe53f94f69895baebbd7357d3bd7": "641f96fd18128f59d0a91bf44dfc372a",
".git/objects/3e/ab265cc2767977d3d647257726922515242163": "1e69515a5b0f88ba1b6a577c04bfbd22",
".git/objects/3e/dbb74cda299b11de3ae554e1c1fc7356649e50": "c388f9709d4b2f8d1218fd779b76db30",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/64e77f730bcf96ec027720730d2dc5def83fb0": "d84d3dec1baa234d78d1de72dee75ca2",
".git/objects/44/81a9f5fdd22135e3dae08d2d807567916013c7": "1d0a9f9337ab4889c2c68bf61aec25df",
".git/objects/46/6616580cfcc91bef0840999919f0709245c856": "08bc6b298656873b478ec30a385429c1",
".git/objects/47/4bad2174fc50606c8abeee9acf6999a4676ebc": "73cef1979d0c6b9b09abd8c0db08a634",
".git/objects/48/7294318efc562db6b6b9cff16bdf55c65b1e99": "6d7fbd595cbe0a546888c0a23b8159b8",
".git/objects/49/2ceb7b4190916e2437201f8ee4deac3628fda8": "a7572850c08d8c5706504c5cfb8d775b",
".git/objects/49/8f6824c17a179e5712362c6188a2de91074005": "e10e7e30d853a277481cfa91b4ae5c0a",
".git/objects/4a/2f5fcd407855c7026b9cdb8c2306368ca7a533": "6e40af43e5f1d94c244e52a1b9d46efe",
".git/objects/4c/50726472494249dd2669cffb4c7bd9707616ec": "59d48f29fc99064ca02c5878ceeaaa79",
".git/objects/4d/662eb870558220c22afb414c37cd3ace38c91a": "2dad0e9ffe48d2ca1cd286464e1b40fc",
".git/objects/4d/c6b1b624aafa3d83fe79189ccf90017750d67b": "d0337066e5956ab19db2bf066f6fe724",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/2b7a7e210d418413ffc996684f19630ef5b5be": "1f45d748fb231a426913a06ee52270dd",
".git/objects/4f/63e568f0b1572f73864d90d32ab8e198b683f6": "e7b45dcf1f1fd331546ed4107b4c0e0e",
".git/objects/50/d54336a61419667d558b1b76afeaa68bdd5478": "ba7a689566c806014a21b3b449a68bea",
".git/objects/51/dfe4ea4d91214f2a9751dc5c923d257bb0c0cc": "8330e775a2892c64965912867f7a87ba",
".git/objects/53/5eece0d72ebd8ae909bea84bcb3808fac10d7b": "8e3ff9d9bc112f60c3e9fd22deca2e26",
".git/objects/54/d9d93aa6726a860b8a0fc5da07a55f8bd9610c": "418a4dd56c9d11cb1e0f31ddf367621f",
".git/objects/56/f95e87bc6c42c5582154c777a1d0957134d5de": "3ca6ccc68e6257d6b30ee49809fd0769",
".git/objects/57/1dd8054ebf04ce8027fda25822a899363beae3": "bb2cff9762bd7b1e0e9637b2b16b5499",
".git/objects/57/4a875502331ae611dfc7574554615721fba8ff": "742769805573c1a02c02e4ba2b003eb4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/b96aa077e61f36c84b984efa6b69be002c0a76": "41947b0a2ab08199a95a1aaf53b1e24c",
".git/objects/58/33d14298ffefae98d0d9b108b5ffae5c522ae8": "e5edc25555a802cc0d3f19cfe19d39c6",
".git/objects/58/ba0844648a350162f36e21fafbf09b7ca8214a": "b94d406904a2b85e689bf01c14705ef5",
".git/objects/59/c5a47510e1884179577bab42289c65025f7637": "0447c27dbd97d7e548fb88082d8729aa",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/6dc00564fa39f677ec7fc60138dec5c7fcb459": "764847af70141c7e0b139254f1236ce6",
".git/objects/5a/bbe2790a63a81b3f87cd8a31a7332a3f569851": "5c20fcd0ec8f5687e201144c68f6fb3c",
".git/objects/5b/afc55a1ab8dadb4f8fab6d9c7f0f3fb564fe76": "3540f445285f55598f9aa9adca61e3e1",
".git/objects/5b/bc720fb0ac4cbdde0188f8f00ffb748b086098": "ed5c80f07e2538dbba05d9c096a3820b",
".git/objects/5c/85d08e4ecddf9a24862216f454bad9fec029c6": "b0bd8c3ead35d46a15e7a8fe8f6f74b1",
".git/objects/5d/6ae09b6fc50893b28b3ed19703a3e2676e66df": "432695364961aec0c8f257b024f5acd4",
".git/objects/5e/0797536e01ec9b52dae7851f12161956b4fd4b": "d0cb582f3011b966fdb58922cc09fa76",
".git/objects/5e/bc458c53cb0134b61c0b11567f44625ab835d8": "346e32885e3235464c6edc8790a36c59",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/20b1d9710ff531840a50593862aedd1d6585e3": "e4b0e03abeecc3e3dd29a81ab1fa8c5a",
".git/objects/61/5c319c9560cc18ff1d3e3a573db35b8cbc6a94": "e649fa792b989303a4ccc65fffa17c0f",
".git/objects/61/c6dddc44379e12059da425ebac18b678ae1506": "a251af45882c18dcb2e45cbbd8868d51",
".git/objects/63/33837e5c41b39e3dc5eeab05292a831eb3b63d": "3bdba29217cbee126d1fe13e803ebba4",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/9f8034bfd145b38aa950b7d61f5439ef12909a": "4761054b3c9d6ce6b48a38b90e87f5ad",
".git/objects/65/c90adeda392f9d7f9a05e4c382319bb3ba444d": "508baf92d88c0f9b50674b5b3b51e9a9",
".git/objects/66/2e5090e2a65c13c571b122b05534a391745678": "c02403ed327cfc2db64448edafa374db",
".git/objects/6a/194d966d3a6ebe984bd6a7c54fe99007d89093": "e4b8d62ecad4776048414f6ca74396d2",
".git/objects/6a/b8f28eb9bb193ade0540393cb84974ad8e36dc": "e521a792bebffb04c143efb8331f099c",
".git/objects/6a/c810faf78fb754077fc3f097061884ea0794d4": "2f83a088953b42a0bbda2327e8464611",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/96600274f0f6554b0bc68d089b82c59a308ff0": "5bcc2d4fcd0a1e74d4aa1749018470cd",
".git/objects/6d/d4c7d7de89eb3f8a3c003fdd870c92a54ddcc7": "d256842179ffc6d983dff4c3fbbf5e41",
".git/objects/6e/857e06ffa1cfeda9358670f3c6bc65db9bc554": "d3172cb2bb41780bc720f84a4bd56434",
".git/objects/6f/74f76fe0923096236b031c0213b5569deedbe4": "2fa612ad87d481f6456eb910ac8f8e60",
".git/objects/6f/f7ac7744f318f3d6d4a3fb552c6c98881acf48": "95651a829e723d79acd32923c78a43f4",
".git/objects/70/803df51ef649bdf9835051fd293b8414805405": "cb1d1276aaaa3456384fbfd086263891",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/59279a2cbdb6e9a6fa0cabbd3be8ac987645ad": "d342894c9e2fd8d3921b595dd9947cb0",
".git/objects/73/d27c4c24ba6d447f8ee60bc12e6b8a41eb887f": "4c5b71b5144b5f0ca7d1b66bac7b7652",
".git/objects/76/45d659c6d6c652c4a01713178a0f62c52fe7ee": "980a07d97ca8d8ebb601fae5c8b371d6",
".git/objects/76/d8141780598d6da14a108bb0aded64c7a8cff2": "995b24a0e72a2e2e50ac9fbc7ef8e398",
".git/objects/77/07f25a08323b37fae6f78998cc25df2c147db7": "e948d1b2d9b41622c47657f78cbd2aa0",
".git/objects/7a/84a0dc0668291ac11d25278706cf329f590cdf": "6f05cfe51b69f6a26f25accb844ef090",
".git/objects/7c/b32ee3b5f6615cfcde84acafd57a7d9ae0a12b": "fb52a662c4199570658be8cad28d3ce1",
".git/objects/7d/eb894bde01c587cabc2f19a52a68b6fa257f9e": "b482770c42452af3678699a16a9d1b80",
".git/objects/80/0c8a342535b48751a519222f730eaf0bb74a80": "d8ab6809a34173c2af0be9f001844059",
".git/objects/81/42b95828185834cb7a7fceada9dd1a55e1bab3": "51d3b93ea241b19aac8f8f26a008f944",
".git/objects/82/a7ff3850c80652cdb607dfbb0dee17d7ff096e": "142b6df02fdafe82eafc6d3a57cb92c6",
".git/objects/83/428d4c2109772ed9c93f8eebddbe365054dc4c": "e908aa4f50ab9330ec7e9d959a691427",
".git/objects/83/fb7170da754bb9a7bcedc05528d391ea1ef8d7": "cf12f5c1ec0bc8b62b37d12a1ce622fa",
".git/objects/84/c742eaed25fcd0c6a04a51fa5bfe40b49aa5a5": "484bf5044ea6514984bd8741d921bb52",
".git/objects/85/298c03b5181475893ae78aaabde78d562bd6d4": "c9c5f4aced335aaf53f051358fafe7fb",
".git/objects/86/66bc9fca58c0f20478266465968190f9df2bed": "c337d8fee974b8dbe9b0a17c7c59bf1e",
".git/objects/86/b0c95b35346616b3f14dabde0325ca9824ece7": "e3a1c07c33e598d8b69f7756709cb05c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2dcf0d2955e9a3b0fdce9f4fe3afc70fb10b02": "6d65ce71920f9e974d1f82dbea3d0077",
".git/objects/8b/c7a5e1448998f89867f6f1eb32c1d56db7356b": "ed5e49e22bf13d727cfb7848bee8a98c",
".git/objects/8c/a1bce6e53bbb14e59b7441a162dc7b65471638": "9ee22f2acf4de87bfdc38fd3682d5911",
".git/objects/8c/a2292274c474b0e2bef148a0a3c5dcda776fcd": "5e3e9754787c29c518e65ffd3ef199f7",
".git/objects/8d/4713bb9bc453ff5097d7ac7aca40fb5e850201": "33fb5e559323cc68428fb21699c8958a",
".git/objects/8d/5d5b679f46d21be7af358d8528bd8197b84d3b": "c7523873797c0a9b32a089b3a0e98871",
".git/objects/8d/b4d6a3d5befff03c61c9e75e7b9b179b30dab4": "ef76fec41dd98ea1572464e7695bcbac",
".git/objects/8d/df972bfe5e19e9f3823a7a40f67e18ba7015ce": "f93dcf138f9e00ab953c3ee3a236c43c",
".git/objects/8e/afa43b671e459645f3083b29b561f34d971dba": "6ae1fcdbd768bc52430e68d775b0d3ba",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/04565d2c640b8f38979b4727dd17168d2c191a": "e2ede3f49ed5d25ae2f11662d133881f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/b7953df7bb82e588002cbe95abec1e1fe3081e": "4cdaeef896b3b77c221de78d6c753051",
".git/objects/93/dbabb62745898dbfcde126eaf336308f393cca": "020b716bcfd81e2ae31515d3bb42eaa0",
".git/objects/96/de4694487c9650aa79bcb8af19317f62d1db21": "fe663187b9b1b5d2262b73a291971743",
".git/objects/97/a5793603c0b7a9848faeb5d87f1a5cb32116d3": "c65c77e3bed910cad5c6ae81bfb987f8",
".git/objects/98/93cf6355128a7f58e1e54c855dbed76d92933e": "d7c1db9bf56fe167532a9d9628c4be34",
".git/objects/99/34e6e2c8aba728b985417ee830436602666233": "e4782f211e8e860a27014469216a59ea",
".git/objects/99/7995af64f07568760d9c0e286a9094052a7c33": "4f03ebd164390037df211d1242744feb",
".git/objects/9b/028c274c666bfd4a00037e6fa23b6b598c558d": "8b9d86b44823987c672beb28480bcba1",
".git/objects/9b/241d0dea38cf04bb7232ee44b46bc086686f22": "0c9c440f052b82898ad204f384c709b7",
".git/objects/9b/b2da4c12474ea41f1eb74df871ad37189c115d": "d9fed77d4b6ac53e86559e7e3bd862c0",
".git/objects/a1/57021bec40e8d0cb72d09f351cd397be6a0848": "0d5f2dc510663a737494ded3da1fe4ce",
".git/objects/a1/73edc7735b4aace82feb9df311de9896ce102e": "6175d0ca92993e3606ee1cb1688d6da9",
".git/objects/a2/bd62352682cdd7c51df450d20d02d2f6a48513": "764586593ce6eec43c21730844033420",
".git/objects/a4/272fc5f6404cd67b12805c254f7fe0cbe24e11": "cd78fadad26a24739ba3ebb5533a9617",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/0d37c27982200b3bcd56e15bc3f69f0bdda18e": "b872c51d195b20283a7b1c66aacb3906",
".git/objects/ab/414f0161e9a35db41c9064bb143c1258db2a7d": "1791e308e2fed247a75b14a0e25ee50d",
".git/objects/ac/2b985512628a17a1af759e53ad2c40949d9aee": "9bbce3e000835ad643036ecfb0cebf46",
".git/objects/ad/50798020818f2c9865989d591791110697996b": "e99c55716643e3e7e0e4086ee9cbfd0c",
".git/objects/ae/f1f9fead2cbe9da48f4877384bacc880882689": "53ef7005f24cca07fa19828cac18d3b7",
".git/objects/b1/329f4a31160d2bf4e150990498464819c1469e": "6fa80a243385a5b8bf3a2462062657c0",
".git/objects/b1/592eebebe4dfe254ea440dbaeae32a36fd502c": "33eee737786f021b79a1b1af31f5c3fd",
".git/objects/b1/d3477a42dabc32ba35fbaa649318a28e8fd462": "fe777554601053d3ec36345c8d2482df",
".git/objects/b2/10d2563e3d030bebf71eded8088e4d2e98a5e4": "ebaae45f97082b9a0b40a257ff7947f3",
".git/objects/b2/dccdccdfa4e9c9aeba6babb6658b815ba87896": "cf66b475fc60cd2aff9a6a87e6ea3ad0",
".git/objects/b4/d3a26fd1466ec5302ffd44e93ed62ac4e53f3f": "226db466c39284a9d0eed036dba33df7",
".git/objects/b5/c3ebbf28bcbbed4dbeb448709fc5ec2433941f": "f7ddeb1a03ef78caf9b370771da8e6da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6815b6fd2f9723dd88b8bec6a89318badac6a7": "7884030dfc2d356debf73000060f138b",
".git/objects/b8/9e37f80d99ff9fc84a2f279321846eb4441fb9": "93549438046d95cb3d6757dd24e715eb",
".git/objects/b9/006969be13dc0bbfacd32f7644149b0f117242": "6fba1c947a6e7682d32af345a20b028f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/edb171ee7ce8ba8e948744d6ba595dd2816ac8": "89afb1e6ecbf77ce3a5617e0c90b5272",
".git/objects/be/e6b90be3bb23a9b3fa8cae01dceea669e82022": "01df38bd971dd9d0a62de14ac49c105e",
".git/objects/bf/84df080d6870f045d76e6e0f3e6cd989ff8b74": "cfa1ec155c1e4c6c410f60902523d89d",
".git/objects/bf/b2f89ea87e4e3225a1cb87bf523fc150a3c8e8": "cc3a3fde02c39ee3bb50ea5f2bac3bb9",
".git/objects/c1/82ffce246ab78d49a0bb948b22d1da05e4f4d0": "5382dfb26f84be90592a701f7548b0ed",
".git/objects/c3/2b67fea5a25fc1c4dd77707c439ad5f94a9b3b": "0f2d7496412edfb357d9169429c89d38",
".git/objects/c4/0d360a46bbdcb0e1362fe13b0dec84912ba801": "0dec4954b1ca46bd8e85510aa2c6a4ef",
".git/objects/c4/ea728376b326e68315d884af5f9568bb4a3a62": "a72fd797816877cdffd0b16ae865e27b",
".git/objects/c6/96205020a4e4f4bb5bb4a21a7af3a3ae766468": "66eb0d59f06101e094a493915ada311f",
".git/objects/c7/34948aae98d07e3f6f1e61fb888a5256d8ad89": "815275380961ff9fff173ff93aa83e6b",
".git/objects/c7/a9d4713ad1d5b507216ae761cb374a5308b27d": "b1f00978bf8a2d26964184ab145e8ff7",
".git/objects/c7/e861ed56f7371c8375d227e176c351de529fe6": "8823e1e118f147ae091d9ce773201f99",
".git/objects/c8/f12a2cb16d3db0068438e641057655ebf276cc": "46ca294dfed6ec10ec8a04f74d82ad0a",
".git/objects/c9/472a6bf9f3f0d9de6dcf68f885eef2d0bfcfd7": "9cfc2e6328633e59cf62946fb461d857",
".git/objects/c9/49456f7c522e6f74be12ba0324271692a4066f": "1d4cc4238055ca0b4d55b717aa3a6a41",
".git/objects/ca/c7887143998c9cbad9009b62dad4a6957cf3f5": "ba271fae3aa607292ff80e61b3f299e4",
".git/objects/cb/26701d6f9dc0a5f1b3f88e684417b9fe1ff570": "96327958f1b23c62ec686b2bd42880b6",
".git/objects/cb/6455cba8d95f656ccf27541db9e4e0465a2932": "b7923118f959540a52d72165bb09d4f1",
".git/objects/ce/6f40ca4c26dfeb8d85d609440c82c49ca97583": "46b7971ed780ddf74a859e207c8a255e",
".git/objects/cf/c7f691a9768d9b9657df7b1d350cd0259e9e4c": "3535feac08041ac2b82677810a1b21e3",
".git/objects/d3/21fc75b0804f2660e7e1345cdeb162d857ae12": "f808a34fe158c3841861c920f5260ef3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8c17d6393cc8a9742850eb563be3d32393ab67": "a96e5931c368d00fc7d81cdfc3736c1f",
".git/objects/d6/0491fd438fe4990976766e8720095b72b672ef": "dab7668b12a1f990a394dbf2c5e6fb2d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ae032c0bf7fa1d672085e91a55ffaccc4c0936": "a60fa639127dfbcd3566c33e24a77534",
".git/objects/d6/b0ae7d6689751dfdda620f4dd03beedd4cea1d": "f19f3b40ad861a1fa79a0fff02d5a0e2",
".git/objects/d6/b83f931e8e10fff20d06e6e5af669f68554080": "b97759bca62545be9792f9fd0463d4e7",
".git/objects/d6/d0331bc0501c7f7fd8190665beeb15c6cced25": "cab8b96a1e77b12a1abe7465995d4f9e",
".git/objects/d7/2dba0c56ede2d4443c3433fbf614ed41a737fd": "3eb83bc527e3c3172dfea13bc7c4b602",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/34d73f3682f5c25de84c692b8b00900b905636": "5cfdd20f0e4035c9bf1390df66167b02",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/d2023bb95bc63f42ab71c171f205cb055455db": "679e38227216d5e883978a05b41a0075",
".git/objects/df/f78687f3d9f008feb8e62cf739c0f3298c2889": "ddde8a786a3b5fa3e501fbaf55b74433",
".git/objects/e3/f3cb11f4cb7c547502c1c4125e0422cef233d8": "4692168cadbdf76f0d70fc1e6762e5be",
".git/objects/e3/f8a84970f430d120b0dae47663edc52c7e7b3d": "50c3ee9fcc67fdc7e7edbb02aa51fc1e",
".git/objects/e5/952b9ad5d64758356ab8f0a0b37e349fe512c9": "1a77dbf5902717acd4e0af4d7d64fe91",
".git/objects/e8/e71b7d57dfaf7fe0aeca26aa81095f7e50924d": "b224942002c1cdda28f2febab502c130",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/ecacc6bcb574252a751fd568542ffb2ff8b35d": "45ac6bc5d504d80d98e5e4531cc642d8",
".git/objects/eb/6d465e22106a9f95782b476aff56394dbc9be3": "59fc2d857d71198a077d8dc81aa77db3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/8ca2a7212cccc746cd2cabe3af4c3e3a87018c": "712eb53e688eaf77f7640e97620648aa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/39f0a970583aa4f3e8f041c7c2a5df6b91fc9d": "504b173a5cdf6431af1f2e15e85fd16a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/44f8ccca36bc15ef947c4154ea197740015915": "42fecd84ed0d679b865dee1f7830017e",
".git/objects/f5/17072b457a5323566f9a7b843347d094545f91": "ab798f5d6a828652920bd686dff84a5b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/32f40070b29f2751bcb690a510e42a21aef731": "f21dce2a73d46f5d63874869d77b82f0",
".git/objects/f6/4f197ef48c1bfd178b0d4fd94faec50d777f12": "7872b3ff19d708c24f53ff3deba63d8b",
".git/objects/f8/ca2146c4c3e85e182db3b297815c5a0f787ecc": "9ac54b1d3704cbdb60b0ff1b587041a1",
".git/objects/f8/ef9e1878db6b385677c8085c851e5ca220cc60": "6d7fc7e227cd64e6f297813ad5b3033a",
".git/objects/f9/63feaed77a0e18786d191fff56ea9924b0b5a4": "6f2c1da06a1807e8ce4d7d86a56225d7",
".git/objects/pack/pack-ba34c14a08bade0aac785ce7953c0d29427ce1db.idx": "a9b97d31f64f487cf1e1c1d34d1b4522",
".git/objects/pack/pack-ba34c14a08bade0aac785ce7953c0d29427ce1db.pack": "12785f8f7c622e55a43b35ec75c0a87a",
".git/objects/pack/pack-ba34c14a08bade0aac785ce7953c0d29427ce1db.rev": "075948bcc833f52bc60b44c9953071c0",
".git/ORIG_HEAD": "c99d5211b39fb6b3926249c7526c3b0e",
".git/packed-refs": "7aa1ec40945eb4ef4ffeb1b02283e719",
".git/rebase-merge/author-script": "7d6e5976b32c086f2fd490d4cd9a90ff",
".git/rebase-merge/done": "f21d83c14451febfee15ce85143136e7",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "46ed1163c089e161751d0ad6e294fff7",
".git/rebase-merge/head-name": "7af7f62c1ff93562f49dd5a2f00c248f",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "dc23c1befd551e3fdbb30291ce8dc260",
".git/rebase-merge/orig-head": "02e189ae3c4eb32fba64945384803cbe",
".git/rebase-merge/rewritten-list": "4f49a3bfcd6db4e921235132f6769108",
".git/REBASE_HEAD": "02e189ae3c4eb32fba64945384803cbe",
".git/refs/heads/main": "f4e30fdc4798a6fbc2d00981ac45a84a",
".git/refs/heads/master": "d8ce4e898939a40e542c43867d8888bc",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c59302b04dfb0d89bbba324b4a76babf",
".git/refs/remotes/origin/master": "d8ce4e898939a40e542c43867d8888bc",
"assets/AssetManifest.bin": "2ffc8be9200b9b4ff16a04deb1ade618",
"assets/AssetManifest.bin.json": "e09ab095902d6a4493dbbe9c069d31ad",
"assets/AssetManifest.json": "72f9f2ca771b515dfb8fe85c17a4e52d",
"assets/assets/fonts/PoorStory-Regular.ttf": "21d15c9110b18b49d69602323f1a7b36",
"assets/assets/fonts/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/images/collegeTour.jpg": "0a7352543b689b984ff9874401a36c0c",
"assets/assets/images/grouptour.jpg": "46e109b2b55ff9a5a0e0c10957b7e546",
"assets/assets/images/grouptour.webp": "6c22a901af6083ec3263b005d22c897c",
"assets/assets/images/honeymoon.jpg": "9600039f4f35e70ef01bbe37fd14304b",
"assets/assets/images/icons8-instagram-windows-11-color.zip": "f35523f425892887bc6e361e19dc3f03",
"assets/assets/images/kanyakumari.jpg": "014d81a56c005d2dc8e05432b3cdd887",
"assets/assets/images/Kodaikanal.jpg": "6189a1bf85a31e8691b5bdc86785f1aa",
"assets/assets/images/madurai.jpeg": "1989beaa824183a67d75d26772152659",
"assets/assets/images/navatirupathi.jpg": "73836fe9beec9009839406c8241f65bb",
"assets/assets/images/ooty.jpg": "8b84bd87e74248efbdb4edb55abf96c3",
"assets/assets/images/social/insta.png": "a207e912e8e119e6e69ce17f0bf64170",
"assets/assets/images/studentTour.jpg": "a0e30aff5434c8693d824a19cca04a5d",
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
"assets/fonts/MaterialIcons-Regular.otf": "73faed21633cd9d9edf587b30e18390c",
"assets/NOTICES": "8d70cb3fa3fccdbf18204a761acf9a59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
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
"flutter_bootstrap.js": "418358ac7a9c62318cf6eeb197194e2c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c30f60ab0591fb50584e889227881cc",
"/": "5c30f60ab0591fb50584e889227881cc",
"main.dart.js": "0539d0b1c7c10b4fe2db0bca131a5775",
"manifest.json": "90189742187795efd6eb0a084177a3e9",
"robots.txt": "2d49ced38576ffde1cf969fbc1c06196",
"sitemap.xml": "bac6a56d5c8125f5e8b08a0ca0d0338b",
"version.json": "d785a9aa6eb47eb2bdcbc307eb75dc39",
"_headers": "9af0edf81396ce899b08c92b265b9b5d"};
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
