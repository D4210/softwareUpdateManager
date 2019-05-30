<!-- TOC -->

- [软件更新管理器](#软件更新管理器)
    - [说明](#说明)
      - [使用方法](#使用方法)
      - [其他说明](#其他说明)
    - [命令行](#命令行)
    - [TODO](#todo)
    - [软件示例](#软件示例)
    - [支持的搜索站点](#支持的搜索站点)
    - [支持的软件](#支持的软件)
    - [特别的软件](#特别的软件)
        - [特殊的安装方式(作为参考)](#特殊的安装方式作为参考)
        - [缺少下载地址](#缺少下载地址)
        - [缺少安装方式](#缺少安装方式)

<!-- /TOC -->


## 软件更新管理器

[English ReadMe](README_en.md)

#### 说明

##### 使用方法

1. `git clone https://github.com/dodying/softwareUpdateManager`
2. `npm install`
3. 下载 `https://github.com/dodying/software-for-softwareUpdateManager/archive/master.zip`，
  解压并移动 **software** 到 **softwareUpdateManager** 下
4. 从[这里](https://github.com/dodying/softwareUpdateManager/releases/tag/plugins)下载 **plugins.7z**，并解压到 **plugins** 下
5. 复制一份 **config.default.js**，按其中注释修改并存为 **config.js**

##### 其他说明

1. 以下软件，如果`通常版(installer)`与`便携版(portable)`功能相同则一般以绿色版优先(如果安装版的包小许多，则可能以安装版优先)，同时64位优先
2. 大多软件都支持自动安装
3. 带 :money_with_wings: 的为**商业软件** (包括Freemium与Free Persion)， 带 :airplane: 的需**番羽土墙**， 带 :hand: 的需**手动下载/安装**， 带 :pushpin: 的表示**安装目录固定**
4. 代理优先级(前提是设置了代理): `config.urlWithoutProxy > config.urlWithProxy > config.useProxy > software.useProxy`
5. 模式优先级: `config.specialMode > config.mode = config.commercialSoftware`
6. 安装方法并没有一一测试，如果自动安装失败，请尝试手动安装


#### 命令行

* `--help`
* `--makemd`
* `--search keyword`
* `[--profile name] --list`
* `[--quiet] [--profile name] [--filter name] [ --test | --test-download | --test-install | --check | --backup | --install ]`
* `[--quiet] [--profile name] [ --test | --test-download | --test-install | --check | --backup | --install ] [name]`

<details>
  <summary>命令行详情</summary>

* `node index`

   `node index.js`
    检查并更新所有软件
* `--help`, `-h`

    `node index.js --help`
* `--makemd`, `-md`

    `node index.js --makemd`
    更新`README.md`
* `--search`, `-s`

    `node index.js --search keyword`
    搜索并创建`js`文件
* `--profile`, `-p`

    `node index.js --profile name`
    eg: `node index.js -profile sync`
        ==> 当`config`与`config.profile.sync`中存在相同项时，以`config.profile.sync`优先，同时数据会保存在`data-sync.json`中
* `--list`, `-l`

    `node index.js --list`
    列出`database.json`中的软件及版本
* `--quiet`, `-q`

    `node index.js --quiet`
    所有的提问为false或0(第一项)
* `--filter`, `-f`

    `node index.js --filter name`
    检查并更新匹配的软件(多个匹配条件用`,`相隔) (忽略更新间隔)
* `--test`, `-t`

    `node index.js --test`
    获取网上所有软件的最新版本号 (忽略更新间隔)
* `--test-download`, `-td`

    `node index.js --test-download`
    获取网上所有软件的最新版本号，并下载 (使用 profile test)
* `--test-download`, `-ti`

    `node index.js --test-install`
    获取网上所有软件的最新版本号，并下载安装 (使用 profile test)
* `--check`, `-c`

    `node index.js --check`
    获取网上软件的最新版本号，并写入`database.json` (忽略更新间隔)
    效果: 忽略本地版本
* `--backup`, `-b`

    `node index.js --backup`
    获取网上软件的最新版本，并下载安装包 (忽略更新间隔)
* `--install`, `-i`

    `node index.js --install`
    安装本地最新版本
* `software_name`

    `node index.js 7-Zip AIMP "Google Chrome"`
    检查并更新这些软件(多个软件用`空格`相隔) (忽略更新间隔)
</details>


#### TODO


#### 软件示例

详见 [Telegram](software/Telegram.js)

#### 支持的搜索站点

1. FileHorse
2. Pc6
3. Softpedia


#### 支持的软件

详见 [SupportedSoftwares.md](SupportedSoftwares.md)

#### 特别的软件

###### 特殊的安装方式(作为参考)

1. [Advanced IP Scanner](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Advanced%20IP%20Scanner.js)
2. [AIMP](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/AIMP.js)
3. [AppleApplicationSupport](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/AppleApplicationSupport.js)
4. [AutoHotkey](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/AutoHotkey.js)
5. [Bandisoft Bandizip](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Bandisoft%20Bandizip.js)
6. [Bandisoft Honeyview](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Bandisoft%20Honeyview.js)
7. [CocosCreator](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/CocosCreator.js)
8. [Directory Opus](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Directory%20Opus.js)
9. [Evernote](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Evernote.js)
10. [Fork](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Fork.js)
11. [GIMP](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/GIMP.js)
12. [IObit/Driver Booster](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/IObit/Driver%20Booster.js)
13. [KingSoft/WPS](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/KingSoft/WPS.js)
14. [MinGW-w64](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/MinGW-w64.js)
15. [Mythicsoft/Agent Ransack](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Mythicsoft/Agent%20Ransack.js)
16. [Npcap](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Npcap.js)
17. [Python](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Python.js)
18. [Python2](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Python2.js)
19. [SmartGit](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/SmartGit.js)
20. [uTorrent](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/uTorrent.js)
21. [VirtualBox](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/VirtualBox.js)
22. [Weasel](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Weasel.js)


###### 缺少下载地址

1. [CnkiDownloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/CnkiDownloader.js)
2. [Enigma Virtual Box unpacker](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Enigma%20Virtual%20Box%20unpacker.js)
3. [shadowsocks-qt5](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/shadowsocks-qt5.js)
4. [Universal Extractor mod by koros aka ya158](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Universal%20Extractor%20mod%20by%20koros%20aka%20ya158.js)
5. [天若OCR](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/%E5%A4%A9%E8%8B%A5OCR.js)


###### 缺少安装方式

1. [Ad Muncher](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Ad%20Muncher.js)
2. [avidemux](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/avidemux.js)
3. [Balabolka](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Balabolka.js)
4. [BinaryMark/Advanced File Finder](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Advanced%20File%20Finder.js)
5. [BinaryMark/All the Best YouTube Downloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/All%20the%20Best%20YouTube%20Downloader.js)
6. [BinaryMark/Batch Docs](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Docs.js)
7. [BinaryMark/Batch Encoding Converter](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Encoding%20Converter.js)
8. [BinaryMark/Batch File Encrypt](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20File%20Encrypt.js)
9. [BinaryMark/Batch File Manager](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20File%20Manager.js)
10. [BinaryMark/Batch File Rename](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20File%20Rename.js)
11. [BinaryMark/Batch File Replace](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20File%20Replace.js)
12. [BinaryMark/Batch File Split & Join](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20File%20Split%20&%20Join.js)
13. [BinaryMark/Batch Files](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Files.js)
14. [BinaryMark/Batch Hex Editor](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Hex%20Editor.js)
15. [BinaryMark/Batch Image Converter](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Image%20Converter.js)
16. [BinaryMark/Batch Image Enhancer](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Image%20Enhancer.js)
17. [BinaryMark/Batch Image Resizer](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Image%20Resizer.js)
18. [BinaryMark/Batch Image Splitter](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Image%20Splitter.js)
19. [BinaryMark/Batch Image Watermarker](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Image%20Watermarker.js)
20. [BinaryMark/Batch Images](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Images.js)
21. [BinaryMark/Batch Photo Face](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Photo%20Face.js)
22. [BinaryMark/Batch RegEx](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20RegEx.js)
23. [BinaryMark/Batch Text File Editor](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Text%20File%20Editor.js)
24. [BinaryMark/Batch Word Replace](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Batch%20Word%20Replace.js)
25. [BinaryMark/Biorhythms Calculator 2018](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Biorhythms%20Calculator%202018.js)
26. [BinaryMark/Blogspot & Tumblr Image Downloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Blogspot%20&%20Tumblr%20Image%20Downloader.js)
27. [BinaryMark/Color Picker Pro](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Color%20Picker%20Pro.js)
28. [BinaryMark/Database E-Mailer](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Database%20E-Mailer.js)
29. [BinaryMark/File Hash Generator](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/File%20Hash%20Generator.js)
30. [BinaryMark/Password Generator](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Password%20Generator.js)
31. [BinaryMark/Random Item Picker](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Random%20Item%20Picker.js)
32. [BinaryMark/Random Number Generator](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Random%20Number%20Generator.js)
33. [BinaryMark/Streaming Video Downloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Streaming%20Video%20Downloader.js)
34. [BinaryMark/Text to MP3 Converter](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/BinaryMark/Text%20to%20MP3%20Converter.js)
35. [Blue Iris](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Blue%20Iris.js)
36. [cFos Software/cFos Broadband Connect](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFos%20Broadband%20Connect.js)
37. [cFos Software/cFos IPv6 Link](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFos%20IPv6%20Link.js)
38. [cFos Software/cFos Outlook DAV](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFos%20Outlook%20DAV.js)
39. [cFos Software/cFos Personal Net](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFos%20Personal%20Net.js)
40. [cFos Software/cFos](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFos.js)
41. [cFos Software/cFosSpeed](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/cFos%20Software/cFosSpeed.js)
42. [ChemTable/Autorun Organizer](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/ChemTable/Autorun%20Organizer.js)
43. [ChemTable/Registry Life](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/ChemTable/Registry%20Life.js)
44. [ChemTable/Soft Organizer](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/ChemTable/Soft%20Organizer.js)
45. [Classic Shell](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Classic%20Shell.js)
46. [Cloudevo](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Cloudevo.js)
47. [Clover](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Clover.js)
48. [CuteFTP](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/CuteFTP.js)
49. [EasyDrv](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/EasyDrv.js)
50. [fman](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/fman.js)
51. [FreeFileSync](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/FreeFileSync.js)
52. [OpalCalc](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/OpalCalc.js)
53. [Paragon/Paragon Disk Wiper Professional](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Paragon/Paragon%20Disk%20Wiper%20Professional.js)
54. [Paragon/Paragon VM Backup](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Paragon/Paragon%20VM%20Backup.js)
55. [Pixia](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Pixia.js)
56. [Preme](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Preme.js)
57. [QTTabBar](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/QTTabBar.js)
58. [Saleen/FilePro](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/FilePro.js)
59. [Saleen/Folder Sync](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/Folder%20Sync.js)
60. [Saleen/KeyboardExt](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/KeyboardExt.js)
61. [Saleen/ScanFs](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/ScanFs.js)
62. [Saleen/Tasks Manager](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/Tasks%20Manager.js)
63. [Saleen/Video Manager](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/Video%20Manager.js)
64. [Saleen/WebDownloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Saleen/WebDownloader.js)
65. [SoftEtherVPN](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/SoftEtherVPN.js)
66. [Stardock/Start8](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Stardock/Start8.js)
67. [Trillian](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Trillian.js)
68. [TVDownloader](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/TVDownloader.js)
69. [Twitch](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Twitch.js)
70. [VSO Software/Free Media Player](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/VSO%20Software/Free%20Media%20Player.js)
71. [Vuze](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/Vuze.js)
72. [WinCDEmu](https://github.com/dodying/software-for-softwareUpdateManager/blob/master/software/WinCDEmu.js)

