操作系统 manjaro gnome（manjaro是 Arch Linux 的衍生版之一，最近几年很火，富有“世界第 ? linux”的美誉。
我曾经使用过 ubuntu16.04、manjaro KD，其中ubuntu16.04可以说是很人性化了(deepin更甚)，对新手很友好，网上资料很多；manjaro KDE可定制型十分强，滚动更新......emm，没法直接安装 gcc 5.4.0或者更低的版本，编译安装不过，但 manjaro KDE 界面十分漂亮，操作也相对复杂、专业。
这次尝试 manjaro gnome 主要是有一次更新 manjaro KDE挂掉了......
花费了一下午的时间，配置开发环境以及主题美化等，较为简单，效果如下：
![](https://upload-images.jianshu.io/upload_images/11693809-8169c13382f7a6bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 相关文件
每次重装 linux 都有一大堆命令，还是零零散散地，为了克服”怕麻烦“的心理，做一次较为简单、流畅的配置流程，相关文件放在 [github](https://github.com/YHLelaine/files_used_in_manjaro)
下载：
> 1. sudo pacman -S git
> git clone https://github.com/YHLelaine/files_used_in_manjaro
> 2. 直接从 github 下载，没有挂掉的风险
> 
> ![](https://upload-images.jianshu.io/upload_images/11693809-224b2f7ceabec035.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 更新源
首先输入以下命令，选择一个耗时较短的源地址，点击 OK -> 我想使用这个镜像源，最好选择 https://mirrors.ustc.edu.cn/manjaro/
> sudo pacman-mirrors -i -c China -m rank
> 
> ![](https://upload-images.jianshu.io/upload_images/11693809-973c3911c5165c3a.gif?imageMogr2/auto-orient/strip)

更新系统，速度会比原来快很多
> sudo pacman -Syy

若想长久使用镜像源，还需要编辑配置文件 /etc/pacman.conf。原有的 gedit 编辑器启动太慢，卸载（可选可不选，我几乎没用过），安装 leafpad 即可，leafpad 是 linux 下十分轻巧的编辑器，启动很快。
> sudo pacman -R gedit
> sudo pacman -S leafpad
> sudo leafpad /etc/pacman.conf

输入以下内容，保存
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
```

安装 archlinuxcn-keyring 包导入 GPG key 
> sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring

完成之后，基本的包管理命令已经可以使用了
> 安装软件 :   sudo pacman -S 软件名  
> 卸载软件 :   sudo pacman -R 软件名
> 搜索软件 :   sudo pacman -Ss 软件名
> ...

新的包管理工具：
> sudo pacman -S yaourt
> sudo pacman -S yay
> yay -S 软件名

## 安装中文输入法
> sudo pacman -S fcitx-rime fcitx-im fcitx-configtool

修改配置文件
> sudo leafpad ~/.xprofile

输入以下内容保存
```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```
重启生效
> reboot

点击右上方小键盘 －＞　配置当前输入法　
![](https://upload-images.jianshu.io/upload_images/11693809-400b7d032b735326.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

将搜狗输入法调至首位
检查，输入：
> sogou-qimpanel

如果报错，提示缺少lib.qt.so，则安装 qt4 配件，重启生效
> sudo pacman -S fcitx-qt4
> reboot

## 卸载一些不用的软件
> sudo pacman -R steam-manjaro gedit freeoffice
> 添加/删除软件 -> 卸载火狐浏览器

## 基本使用
#### 1. QQ
> sudo pacman -S deepin.com.qq.im

安装竟然一遍过...这和以往不同。wineQQ还是有点不太稳定，但是和官方新推出的QQ for linux 2.0版(2009老款)相比好太多。

####2. 微信
先搜索，有两个版本，wine-wechat 和 electron-wechat，我以前用过 electron-wechat，还不错，这次继续用 electron-wechat
> sudo pacman -Ss wechat
> sudo pacman -S electronic-wechat

#### 3. WPS
自带的 libreoffice 和 freeoffice 都不太行...直接卸载；wps 在ubuntu上的体验还不错，但在windows上就有点卡了。
> sudo pacman -S wps-office ttf-wps-fonts

打开 word，输入几个字符，发现....所有的字体都是一样的，连最常用的宋体都不正常，这是系统缺少字体的缘故，将Windows下的字体全部拷贝（路径：C->Windows->Fonts），以下解决措施参考[这里](https://blog.csdn.net/atpalain_csdn/article/details/50801639)。
之前从 [github](https://github.com/YHLelaine/files_used_in_manjaro) 下载的文件已经下载好了 `win_fonts` 文件夹，将文件夹拷贝至 /usr/share/fonts/目录下
> sudo cp -r win_fonts /usr/share/fonts/
> sudo fc-cache -fv
> fc-list :lang=zh-cn | sort
> 效果如下，说明 linux 安装字体成功
> 
> ![](https://upload-images.jianshu.io/upload_images/11693809-828fc00f9845a280.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

重新打开 word，可以任意切换字体，正常！


#### 4. 浏览器
google 浏览器当然有，推荐 vivaldi 浏览器，同步功能十分强大，而且书签等功能设计十分友好，同样支持 google 插件
> sudo pacman -S google-chrome vivaldi 

###### 浏览器插件
首先，最重要的是下载　`谷歌访问助手`。之前从 github 下载的文件中已有一些 crx 文件，直接拖到浏览器界面即可安装，或者扩展->开发者模式->加载已解压的插件->使用
如果这个文件删除，浏览器的对应插件也会消失。
![](https://upload-images.jianshu.io/upload_images/11693809-09ddc2a3db77db47.gif?imageMogr2/auto-orient/strip)

必备插件
> 2. setup...打不出来呢
> 3. 一键管理扩展
> 4. OneTab
> 5. Adguard 广告拦截
> 6. octotree 浏览github目录必备
> 7. Nighteye 夜间眼睛


#### 5. C++
输入命令 gcc --version 检查开发环境，如果提示 gcc 不是命令也不是提示，则安装 gcc 和 g++，以及调试器 gdb
> sudo pacman -S gcc
> sudo pacman -S gdb
> g++ --version

#### 6. Python
输入命令 python -V，一般默认 3.7，若没有版本，则安装 python
> sudo pacman -S python

最新推出 python==3.8，但大多数第三方包还未适配，先等着吧。
#####　配置清华镜像源
> sudo pip install pip -U
> sudo pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

接下来就可以欢快地安装常用包了！
> sudo pip3 install beautifulsoup4 Cython Django eli5 jieba jedi keras keras-vis lightgbm matplotlib nltk numpy scipy pandas pillow PyPDF2 PyQt5 qimage2ndarray requests scikit-learn scikit-image tensorflow tqdm urllib3 opencv-python opencv-contrib-python


#### 7. Git
> sudo pacman -S git
> git --version
> git config --global user.email "邮箱"
> git config --global user.name "github 用户名"


#### 8. Sublime Text3
使用 sublime-text3 也有三年了，真是码代码神器，节约了大量的时间，也许没有 vscode 扩展性强，也没有 vim 那么炫酷，但是编辑器来说足够了。

官方安装方式如下：
> `curl -O https://download.sublimetext.com/sublimehq-pub.gpg && sudo pacman-key --add sublimehq-pub.gpg && sudo pacman-key --lsign-key 8A8F901A && rm sublimehq-pub.gpg`
> `echo -e "\n[sublime-text]\nServer = https://download.sublimetext.com/arch/stable/x86_64" | sudo tee -a /etc/pacman.conf`
> `sudo pacman -Syu sublime-text`

但其实，yay 就足够了
> yay -S sublime

输入命令：`subl`　即可打开神器！
具体配置参考：[开发环境 C++, Python, Java](https://www.jianshu.com/p/05a510f132c1)　　[如何写 sublime-build](https://sublime-text.readthedocs.io/en/latest/reference/build_systems.html)

配套 sublime-merge　git　可视化工具
> yay -S sublime-merge

如果安装失败，添加／删除文件－＞搜索 sublime-merge 

#### 9. Vscode
> sudo pacman -S visual-studio-code-bin 

首要扩展 -> Settings Sync -> 登录 github -> 直接同步我的 gist id

具体配置参考 [配置 vscode](https://www.jianshu.com/p/ec6bc976d097)


#### 10. ANGRYsearch
linux 下的 everything，搜索十分强大，原理不清楚，应该是基于索引和哈希。
> yay -S ANGRYsearch

如果安装失败，则`添加/删除软件`搜索安装，点击软件图标：
![](https://upload-images.jianshu.io/upload_images/11693809-f4dad06c406dea3f.gif?imageMogr2/auto-orient/strip)


#### 11. 百度网盘
之前从 [github](https://github.com/YHLelaine/files_used_in_manjaro) 下载的目录中有安装包![](https://upload-images.jianshu.io/upload_images/11693809-0386174a634ef40d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
直接双击安装即可，找到图标，点击，正常登陆：

![](https://upload-images.jianshu.io/upload_images/11693809-21a10a86d120f9db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

界面还是很简洁的，不限速 2MB/s，下载还是蛮快的。


#### 12. starDict
linux 下最好的翻译软件！在 windows 下反而需要先粘贴到剪切板，失去了它的优势，安装软件和翻译库

> sudo pacman -S stardict
在[这个网站](http://download.huzheng.org/)下载词典，或者之前从　[github](https://github.com/YHLelaine/files_used_in_manjaro) 下载的文件中有：
![](https://upload-images.jianshu.io/upload_images/11693809-d9c5b8c8e18a7094.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> cd stardict
> sudo cp -r * /usr/share/stardict/dic

打开小巧强大的 stardict，可直接翻译

![](https://upload-images.jianshu.io/upload_images/11693809-d9409e25af3fb9b2.gif?imageMogr2/auto-orient/strip)


#### 13. Okular
Okular 是 linux 下一款 pdf 阅读器
> sudo pacman -S okular


#### 14. SSH 连接
一直以来用 putty，文件传输用 FileZilla
> sudo pacman -S openssh
> sudo pacman -S putty
> yay -S FileZilla

如果 yay 安装 FileZilla 失败，则用`添加/删除软件`直接搜索安装 FIlezilla。
安装完成后，将云服务器的 ip 地址等配置到会话。
> 后续发现 vscode 推出 remote SSH 等远端连接工具后，简直不能更方便！



#### 15. Qt designer
添加/删除软件　－＞　Qt designer

　
#### 16. 截图工具 Flameshot
> sudo pacman -S Flameshot

#### 17. 屏幕录制工具 peek
> sudo pacman -S peek 


# 美化
#### 待续
https://www.gnome-look.org/s/Gnome/browse/cat/134/order/latest/
