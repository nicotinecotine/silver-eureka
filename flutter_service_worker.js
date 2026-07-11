'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "012af85c2e044134ec1145394f2fad5a",
"version.json": "d8f179864d109e07fbece2de0f8f7d7d",
"index.html": "428a908a4908ea8c95e984336bb9d67a",
"/": "428a908a4908ea8c95e984336bb9d67a",
"CNAME": "98d9f53a5c436ad3835b144d62e967bd",
"main.dart.js": "8920f9bb898201977977388dc04f54e1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "c98e5e6b1b03ce7f5b2ceed77d8f9824",
"favicon.png": "d0ff084be1505c564699b49d4e697136",
"icons/Icon-192.png": "8b8cfacde503b890ef6b5a90943d2ea0",
"icons/Icon-maskable-192.png": "4eb6f5c1a732623110c3a1d3f975c72e",
"icons/loading_pig.png": "1cad6980c69c950503ebe725b6ec2ca5",
"icons/Icon-maskable-512.png": "66487c00e7675af73e97599df4f5ec6d",
"icons/Icon-512.png": "b6fac2c3cb028402d7ce68c1911eec51",
"manifest.json": "4f1c89b42d8d4f35b685873ee4aed293",
".git/ORIG_HEAD": "1cc2cf31ec1534198c4f7514211feb10",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/metadata.json": "8ab3efd6551bd173e71894bc0273f002",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/index.bin": "d08517f12af94f556d24e3e390fa76ee",
".git/cursor/crepe/119ee8d81bae60f006e8d7dc58e2d58eb2c37465/postings.bin": "5538d57540c661a35db3480ed66d17b7",
".git/config": "a76705e6cd05e47effd6e57ccfef3ca5",
".git/objects/95/bd6b7bd6d14c43cf4221fe2b0243b892a93105": "e45b92b9966587cd56a90694e93cb011",
".git/objects/66/f94aa48416b995d743e3eb776b3ed551db15e2": "15f8ced64d94b33c9334d721b1b35882",
".git/objects/66/4b4454f07dea68693072f2e7c19002bd10b5d5": "46e32c28e7843a9d06e39791e42d006a",
".git/objects/66/0bfb007740750f7fc12629ac2a5c6f6dbb078e": "d3d19f3a173afa94b8c58ea8be2091ac",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/2112441b73c3355d20e7703d49edcfb3975f8b": "7871758e8b5a73cf520372344ec802d8",
".git/objects/04/df5ab9eef9b51fe05f2bafecaff3a73435b978": "5b91641b7b2073cbb6ecb4e5b67c818f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3d/ebf4d088fd013b01f369f9f7f8350d08cbce1d": "361fecf0f1bb1dab806ea5b44d0a47c6",
".git/objects/93/fa873e0d117b4a1856195060d3da026015e2d0": "f101e4f35fa49e379d649c04feb8ff29",
".git/objects/94/9d75b58f8315938b9b9797e443bf92d919ee8f": "2fa71a6219423e77705f67db90267923",
".git/objects/5f/e3b50f7be27d04fc784fa001c7a4354e63a51f": "091b5e46830dc18534b04f816f003a81",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/a4/33135aeb3c8aff7e632ab7b2a321488b00e48b": "8d7cb54b71cb5c3f452007c4143752ab",
".git/objects/a3/7ab45be9e915b43ee1bf10d75b0762be37e54c": "4e24b4d4aec40af35921fdc64ae84301",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/10205d556e7f0b5c0a6b3caad4736def7c5c7f": "adf9a48b36d2cdf7e4d455a5fdc009ce",
".git/objects/ad/9c37c5bc1d54ed574bc4bd5337191ca0c5a0c3": "2792f7c357fdcdad95603259218982ef",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/b98e11c9a571b93d46f84137e436c62e45ef9a": "89965e696ade4b29278d1dc25dae1ebf",
".git/objects/be/1c8451e1804d26538d86e38518347f2df86b25": "cd7f8e57e96bad7414cc8e9a1cfcc766",
".git/objects/b3/8eda5df921237f5fe02f29701c425cf22119ab": "5395c56c6fd54cd965ffb7835434de67",
".git/objects/df/eaf16e17471c6ab2aa46735e427c32df1b3f65": "128898a6d4a85fd101f57409ce0603f9",
".git/objects/a5/d527793132c61f90dcb99f7b6c5bcd3cb0e248": "b9cb964550da5c959a0684cb9d899bc6",
".git/objects/a5/454ac4c9827ccecbb129bbda6074afd79d904c": "e2d85afbe479056c5bc150f2ae57069d",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/15b22691f6913673d42a91e465b992d08ada15": "b1cde3f9837b05ae2b108576248ff092",
".git/objects/ab/cff7439123a72c4c3756100d5e158316a1f110": "80c70ca265b8886e6f297738785484bb",
".git/objects/ab/2399ccc065026b2563173c279836f6e3a2106e": "f62ba78a6aba26faa9f3ee3ff6beba62",
".git/objects/e5/8c9970b42ee8c25997c9ac0287a9378b91f05d": "968f490035638c682ee736c8d20941f6",
".git/objects/e2/17aa3e621d468d50580df641343286ece10ba9": "bfd78a8d7c46c45166d48f357c49c5be",
".git/objects/e2/0dfa44bbd1d7a2e22a32bff438cc9a4491139b": "e90907fa7cf52420a5c63669b99490e3",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/fc/f11f69d8d8b3011e4cd3f001f1f85bb0c1395b": "cc03a950b600259f62568c9028089a85",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/85374b01225fb64218294f5a1a17b654d200a2": "daedcf2e2f587d88dce7f05fbb39766b",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/7a83a5deb8d3af98d9d63d7e371be9cd1f00d7": "29814e0472b3f24bc085a72dab20f580",
".git/objects/cf/48fd771f19cac1926413b372f52a2c19d90cd9": "2377d230824d81c800c0e53a927b45e8",
".git/objects/ca/afb98c760e4688792bff60ec9c7bf7d72f3915": "0196584b689be801dac9ac9836620ccb",
".git/objects/ca/3e8a5987bb23635393a295e47dc4fbdaf814c4": "9931743bb5d473497d550594453be9d0",
".git/objects/e4/e75788cba2d599d5d9d2409f6b01b9ec8eb9a6": "2c47fbacb06a3e8e5774e837edf97523",
".git/objects/c8/e95f2801736501327544493b381e2ee5a57d8d": "f3361088a56fab6c2041aa4d03b76e09",
".git/objects/fb/5f9e1d82bf169fae044fc76d367d7522a97fa7": "f094634b5957ab64e77e76ff9825d54d",
".git/objects/ec/003626d9f20b84ef04fcf6e02190795e95666e": "b47a66b71c73822a9acb0bc0ec30578d",
".git/objects/4e/4082d425d5f1cdc1adec8e07129b234d6bc2f0": "275fd0ad15032477b60aed231c12a3f3",
".git/objects/27/3554b20268d863dc8dcdc87e34b0c646ffd00b": "3d36be277dd767255b75f79aa307ebfc",
".git/objects/4b/4def7f42499b9151318c585530afca26f7d1e6": "dd36ef5773a2bbfbbf26b240e93c959f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/9ee8d81bae60f006e8d7dc58e2d58eb2c37465": "9f5aa3e84266af6eee4057413350b85a",
".git/objects/7d/22a183ccf533a20b8ce888b746d26f17be303b": "1d2b362f8d840c3cec7afda47e82b52e",
".git/objects/7c/a5dc0ec683463da4c62b75252213e4725cfa69": "03b338e596bae955d4dfe44d77975bbd",
".git/objects/16/8fece760a0f911d40c96f917bc92f014b01b7c": "3a21c9295609a8a0d635ec20270abaaf",
".git/objects/89/cc15d51a85c5fc21a1feeb0a7c2d7b1233b448": "08a545b8ef7f0a3947c9715255603db5",
".git/objects/45/a90999670dbd4b465a61cfdf936d3003a09404": "c1fd99ba17104c7d935231106e284025",
".git/objects/1f/c6ae641198f2bf2e0dfd4fc0bc4a71442f2283": "aecdbc1ed3a85e10bc406e0779d7abbd",
".git/objects/73/b73d855fe6379139f65039bacaf1dcb14c4e4e": "e469fbe962027898b7fbf4d1073ebf9e",
".git/objects/73/6438ec7fe2460158916817cfe7710e8132d6b7": "7a941ebb05aaafae3d606623e21851dc",
".git/objects/1a/0e01136e0cb7400dc0da2b45a10af77029d1e0": "3d4e0ca49b967bb352d2898308d3cc2a",
".git/objects/1a/cac4d1e9778faec911c3f5a3d25032824e8142": "a9f139f2dd0d6026ef2483d9b6c723db",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/7e/d0017c345b131a320e58507b851931c5627898": "996b27e01433215bd26a43dc949ef579",
".git/objects/10/ff9347b754b639d6837a4eeee9c60bd9438b1d": "caef15bff8e5bce3e62fe8650b6bcb4d",
".git/objects/19/7040dc293412e9d3bc4c881cd99c0dac6348cd": "0f2096a0723a66fd4dd76dd37def599b",
".git/objects/26/ac1784ba901558312df9f47aada05408f6985f": "df6a4ae82a15868a60c0947bc298a891",
".git/objects/21/e07723b08d0bb341678f3b658d0f56ec20477f": "32bf424c980e9e4372eaa449a9cdd0ee",
".git/objects/75/90d5c74bb63e55cb1ca1068e2cc2650d41955c": "ef17ceb00e4ca690a3f22113b33c8a73",
".git/objects/75/5b3c7a9838dda503ddd9bc5dcb43ffcb4a2e44": "c0f06d04fbc6daab75d6482f38a1c1a5",
".git/objects/81/abfc403460cc6662ee28d00e85b5f1d23d38c0": "f359d58399178b598397556ff4d2e817",
".git/objects/43/2eb18e3910f249cf23f6186f91a3f745f93a8d": "7c3b301f650f87fcf1648f2f98bf205c",
".git/objects/9f/ca8e55844e6a2ba63544f0f7085c5f008940bc": "48245e27907ffdecd5681a6d6e53bc37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/152d6d501d26fc93443792dd95a92dbc567722": "fd79c20df0fc80b423cb852688c47864",
".git/objects/9a/81925847803a5378c0ca0af991c5f92d15b441": "de8ff500b82cbbad46712a7f589b8788",
".git/objects/5d/ae92345c5d1b38558d28c4f006e65aeeb70b93": "1164aae196a07766692f3e8ce177e2d4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/54/21766bc76b98b1c91280f715d2a2bcff63b24e": "4938f2dfe4fcc2862767f1c4a488b50a",
".git/objects/98/699fb2cc7a31915f64634958fdf60aa5f7925d": "57bb9a8500222a437948b5800ef7dcfa",
".git/objects/98/6ad4c800c23e3eecd546981d2ab653fa350f35": "f6be899ac2320b76a77f6129f1c237e4",
".git/objects/53/8d2dcfc28ac0c6786eb7659cc87457dfae9396": "a329971ba5b8903b492d64679606dd6f",
".git/objects/53/b6ff45d532d760b9bea9f5ae429da9a64d30e5": "23a017d9b48ce3488daf9f3ea5e4b1cd",
".git/objects/37/63dbdce8c7b15d1c45e4efbf3e62882942d6c9": "eed319c1083c3f4aae0a529141c46e3f",
".git/objects/39/9a905c642c445a70b974d3f059f52adfff182a": "9e89684917993f0f95b5f89d4d565ceb",
".git/objects/0a/2ff173ac50519c95ea1e1b989ef36407e85ec4": "c3df1133fde6cf18b207d4a848bbaee5",
".git/objects/90/dc426d174fc6c6fbbf6c0eef8efe0ac987cc87": "e36aa12928be9b0119588fe887513121",
".git/objects/90/5a2eaa7ba95cbf8ba338d7a7574917a81ee4b6": "2c52966b964c9c4ff09e0aeb78860818",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/becbca155a69f656dae822b531d63c1a1fafc5": "10a532dc88def639de89f7246a813cf9",
".git/objects/a7/13aa483ad40df94a1b756d613989420beb2431": "cdaece87997e7721aa4a578518703e1b",
".git/objects/b1/009c98d6ccc092532544f39fc6fae0fdd47763": "f2a659ea66203dd952db6a4dddd998d9",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/af/862f824243a74eff591ac5bbb80044dab0f823": "5caaa76d0103cd6a78f62b822b09b1f2",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/970f7c52521dc8dda01553486fbeea8c804644": "6f1d63897037e551c78afad59db4611b",
".git/objects/b0/2b46532a539312b4734fa8ac687fe9f18ef66d": "26e76ed0a72d4b60e985f8f3343828fc",
".git/objects/b0/e782235ffc693d0a9ccae8e086ff35045da509": "8edd2c2a31726c4c4bc8a7dc34f04bdf",
".git/objects/a1/0c0296fb2a1e07703cb3f7f9ca438e52e74c29": "60d949128a88b9a0fcf1530fd374a957",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/1ea6ec6270e6c1ea61a30199f550ac4e3cc3f9": "4d0075e9b867a1d66b565b936f7177fc",
".git/objects/e1/249a00a83f0496c145564d46aa68191b7b751f": "0150314ff17371ea1e0af895a555093c",
".git/objects/cd/83f77192f2f061bbeb8a38cdc09c21e97c0245": "2853c733e6e37f8f84df120e7705c43b",
".git/objects/e6/aba24b61811031b2bf730ccec7f5b5f1c5c3f2": "dacf135755c58c2dcbfc0f3abb0ed290",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/842796672555840a00a98eb9addae0af90a79f": "a5dca0363ba99155bfce1915cf36e58e",
".git/objects/f7/a876593ce03f99347efe58bc877eeccc31a1c4": "1349f4c1e9ba5c4ffbd4774701503ec4",
".git/objects/e8/61956a47ead7b4614273e03664f42421286ea1": "1cbcb602d8385d2f45f2db3249ba1120",
".git/objects/fa/d3b5d6c882c8569dcd7f555eb7edf073187313": "c3739c9ce2f129b62acfac20aef95b56",
".git/objects/c5/50ab77ce2fc5248b0be4f63d616d9ff98ecbe1": "8550600071a62fa96b4d94f00669ce25",
".git/objects/c5/58ed08600156d7a563ac62f90548318f57c304": "f6b26cb132a1f4d002d394c6ab39bfc0",
".git/objects/c5/b0cd7c787c8a1835252c777413c09b1c310c83": "7b741f0ef833833d294a71e714d0f8a9",
".git/objects/c2/6a6f314275f7022f26777eda59ff102ede64af": "377c3a552d305dbfb045de79b338f4a1",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/88dc05625a138c697b1d9356f4a40f05347927": "f11f2c21ea1306213d481d33bf317ef5",
".git/objects/f8/7499b58d95970cb613b1fb84554c828b82b13b": "0689d521497c212516140f98f7c95820",
".git/objects/ce/02dd060de126f65b3a5ecd1fedf181af0c2033": "89f61aa816523eba7452d599a32a990c",
".git/objects/ce/98cc810779213839ee5e47f034937fddeca49d": "c51a22e70b8febbcdc3de09cef81ac13",
".git/objects/e0/34f42e4c56f342f216771dac7d935b8310bbc9": "45f81db836e854a2a1dc81bd10641b2a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/132a151623ac39b1e6192a1233aea311570104": "4cd927fe4ad561c9fccfd7e1ddd89074",
".git/objects/48/5ae96135491dcb2aeabe642c0a07d506d7f5af": "9b7c76c82af2bb9fff840798294b9c9e",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/1d/2ce6f58d63564fd67e5d4fa762de5845ae1174": "70ffe95a1f376a4063e7263c794bf8ff",
".git/objects/1d/a7529cb0bb97a9de54584a50de04bc21f0a7b3": "2c69752eb4d042962c0ae2a425de15b0",
".git/objects/76/1698e3247279ffa0cee9642f3bf35268c6d1f7": "78b2c7e9ab07936ca68be8ff2e1af26c",
".git/objects/1c/3fa21caff54006b78e804a27a8a1a9c1537dfe": "eec6e2019e74dbe0431478803001345e",
".git/objects/40/e50497320b3b332d1965213bb2452e7fa96f54": "9789dd5658953e9212f3577bec3bdfb6",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/13/8624d8c3071a4ea07d38f6393c43b627676f3e": "371f1d7a3ee416a40f04fa41887580df",
".git/objects/25/9c48a4abb1528a502df7e36f25bbd0134c725a": "77aa628c326b82fa06b59e94ad048d68",
".git/objects/25/5dcf0c813a01138017deeb49e09dd8fe343658": "59bd0f534fbe56bc89d6072ef031b285",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "90466a5a429c0083160a0455f3a56f07",
".git/logs/refs/heads/main": "b45414810bdccf9ffa35984d6ba0b4bc",
".git/logs/refs/remotes/origin/main": "4362fef0546d2ee5140ecc97abfa2657",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "37cfa35488fa91e78ea77a94d9636301",
".git/refs/remotes/origin/main": "37cfa35488fa91e78ea77a94d9636301",
".git/gk/config": "0e62a2b5672306d1562be9aabc2a0089",
".git/index": "1151e11a4aaf27b8ecc6cb130e904bc3",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "e5828c564f71fea3a12dde8bd5d27063",
".git/FETCH_HEAD": "e35440465f50298f3bd3b4f004c5b7e5",
"assets/AssetManifest.json": "f6f49ae941543fab0b8a2ba58853d179",
"assets/NOTICES": "3b685c0d3ba711c0f8d934e274720f15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "809b574aadb4ca02abb87d00ccf54475",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3ef7e923198c84b5dc69caadf88d28e6",
"assets/fonts/MaterialIcons-Regular.otf": "93c2d2940957c4484d32ebac1afbb8a4",
"assets/assets/images/pig_logo.png": "7053269a4f102ea78b70bbb450b35eb4",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
