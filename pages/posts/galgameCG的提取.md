---
title: galgameCG的提取
date: 2024-07-10 11:23:02
tags: 
    - galgame
    - CG解包 
cover: https://cdn.jsdelivr.net/gh/Thanatos732/photos/10.png
---
**这只是一个演示如何使用工具提取CG的文章，并不是专门的逆向教程**

**本文中所提到的软件均为开源**

# Garbro

[Garbro](https://github.com/morkt/GARbro)

用Garbro的话其实大部分包都能解了，而且非常的简单无脑,这里我以9-nine为例

在软件中找到处于游戏目录中的evimage.xp3文件

![evimage.xp3](https://cdn.jsdelivr.net/gh/Thanatos732/photos/1.png)

如果你的游戏是未解包的状态的话需要进行解码，也就是在列表中找到游戏的名字。**（这里需要知道游戏的罗马音，可以萌娘或者wiki）**

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/2.png)

随后便可以找到解包后的cg了。

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/3.png)

可以按F4保存到相应路径。

**如果你想解包的游戏在列表中未找到的话，可以先寻找到与其同社团的作品进行尝试，一般来说其加密方式很可能相同。**



# KRKRExtract

[KRKRExtract](https://github.com/xmoezzz/KrkrExtract)

KRKRExtract是专门对付xp3文件的，我们需要将两个dll复制到游戏目录下，然后将**原版游戏**的exe文件拖动到KRKRExtract的exe上执行。

![将两个dll复制到游戏目录](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710094645.png)

我这里以恋爱定位为例子

执行以后，会出现如下界面

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710103326.png)

我们需要将需要解包的文件拖动到Original Archive中

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710103530.png)

随后解包过后的文件会存储在游戏目录下的KrkrExtract_Output文件夹里，当然，这时解包出来的图片格式都是未转换过的，如果无法打开，可以用转码工具进行转码。

**此工具只适用于旧krkr的加密方式，新krkr会提取失败**

# GRV

[GRV](https://grviewer.com/)

这是一个网站

可以解包.rpa后缀的文件，这里我以我梦见了她为例

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710110309.png)

将archive.rpa文件拖入网站

找到images中的cg文件夹

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710110452.png)

随后便能看到cg了

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710110554.png)

此时我们可以通过File下的Export进行批量下载

![](https://cdn.jsdelivr.net/gh/Thanatos732/photos/20240710110649.png)
