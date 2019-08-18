---
layout:     post
title:      Macbook Air SSD硬盘升级（附蓝牙Wifi模块更换）
subtitle:   128GB的乞丐版硬盘忍无可忍就无需再忍
date:       2019-08-18
author:     BH
header-img: img/home-bg-o.jpg
catalog:    true
tags:       -Macbook
               -SSD
             
---

家里有一台老的13年Macbook Air，乞丐版128GB内盘，小的实在可怜，用久了以后每次更新都提醒容量不足，跟乞丐版的iPhone似的，非常麻烦，自从有了黑苹果以后很少就再碰这台Air了。月底要出差开会，Air的体积重量无疑是旅行必选，所以就放狗搜了一下，结果还真有SSD扩容的神奇，特此和大家分享一下。

如果打开Air的后盖大家会发现Air用的SSD是一个非常诡异的接口，不知道苹果是不是为了防止大家自行升级而特意设计的，但这自然难不倒聪明睿智的天朝人民，淘宝上已经出现了M.2转接各类适用于不同Macbook SSD的转接头，大家可以根据自己Macbook的型号购买，价格也是非常公道。在国外不方便淘宝的同学不要忘记淘宝的亲兄弟aliexpress。优点是价格和淘宝差不多，缺点是从国内寄出的东西通常需要好几个礼拜甚至一个多月。

![M2转接SSD](https://s2.ax1x.com/2019/08/18/mleZE8.png)

大概就长这样，几刀就包邮了，很小的一个转接口，有了这个再买一个M.2插进这个转接口就可以安装在Macbook上了，大小和原来的SSD基本一样。这里我用的M.2是[Adata SX8200Pro](https://www.amazon.com/gp/product/B07K1J3C23/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07K1J3C23&linkCode=as2&tag=binpedia0a-20&linkId=a3737461362958384c43dcf3997a380b)，我的台式机黑苹果M.2用的都是他家，速度很快，从来没出现过任何问题，价格也公道。特此安利，大家可以根据自己需要的容量购买。

![M2vsSSD](https://s2.ax1x.com/2019/08/18/mle2Pe.jpg)

有了转接头和M.2之后就可以更换SSD了。**首先大家记得先用Time Machine备份一下，因为新的M2是需要重装系统的，到时候只需要用Time Machine再把原来SSD的数据拷贝进去就好了。**备份好之后就可以开动啦！这里要注意的是打开Mac需要一种特别的[五角形螺丝刀](https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=binpedia0a-20&keywords=macbook screwdriver&index=aps&camp=1789&creative=9325&linkCode=ur2&linkId=021fbaad6b2afba4b6276e4569d753ec)，然后SSD上面的螺丝是传统的[T5或T6](https://www.amazon.com/gp/search/ref=as_li_qf_sp_sr_tl?ie=UTF8&tag=binpedia0a-20&keywords=T6 screwdriver&index=aps&camp=1789&creative=9325&linkCode=ur2&linkId=8cc05291cd01ae8b77f59b5063878353)（忘记是哪个了，反正是其中之一）这种六角形螺丝刀，大家购买的时候要注意。如果螺丝刀不对千万不要硬来，这样如果把螺丝刮花那就不容易再打开了。

![Macbook Air](https://s2.ax1x.com/2019/08/18/mleR8H.jpg)
Air的背面一共有是10个螺丝，其中靠近有字地方的那两个是长的，其余8个都是小的，大家拧出来以后就知道了。全部拧完以后在靠近字的那段，也就是出风口这里用手指撬一下就能打开后盖了。

打开后的情况是这样的，下面四个黑方块就是电池，大概占了打开2/3的体积。上面就是主板了，首先先把电源线给拔下来，然后把ssd上面的螺丝拧下来，自带的ssd就可以拔出来了。新买的M.2装上转接口以后插进去，拧上螺丝就可以了，就这么简单。
![mluJVP.jpg](https://s2.ax1x.com/2019/08/18/mluJVP.jpg)

然后就是安装系统了，大家需要那一块不用的usb格式化了以后制作启动盘，制作方法可以放狗搜或看[苹果官网](https://support.apple.com/en-us/HT201372)，制作完成后按电源键启动。需要先在磁盘工具下把新的M.2格式化成APFS格式，然后选择重新安装macOS进行安装就好了，这里就不一一细讲了。安装完以后用Time Machine重新把你之前备份好的数据再还原过来就搞定啦。

![mlKhY8.png](https://s2.ax1x.com/2019/08/18/mlKhY8.png)

现在的容量就从原来可怜的128GB扩展到512GB，大家有需要的上1TB甚至2TB都没有问题，是不是很爽呢哈哈哈~这下可以安心地下载Adobe大礼包了~

![mleDDx.png](https://s2.ax1x.com/2019/08/18/mleDDx.png)

最后讲讲蓝牙wifi模块。我的这台Air很久前蓝牙就死了，再怎么按照网上的教程重置都不行，后来买了一个蓝牙usb暂时解决了这个问题，但后来这个usb又死了。。。既然发现这个Air那么好拆干脆就把这个模块也换了。[ebay](https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338551365&mpre=https%3A%2F%2Fwww.ebay.com%2Fsch%2Fi.html%3F_from%3DR40%26_trksid%3Dp2380057.m570.l1313.TR10.TRC2.A0.H0.Xmacbook%2Bair%2Bbluetooth.TRS2%26_nkw%3Dmacbook%2Bair%2Bbluetooth%26_sacat%3D0)上这么个模块也就10多刀，也不算太贵。这个模块就在ssd的左上方，有两个很小的类似于纽扣一样的东西，小心地拔下来，然后再用SSD相同的螺丝刀把那可螺丝拧下来就可以把原来的模块取下来了。换上新的模块后再小心地把这两个纽扣扣回去，再把螺丝拧紧重启系统就好了。原本消失的蓝牙标志又回来啦。

![mleyVK.png](https://s2.ax1x.com/2019/08/18/mleyVK.png)

这些应该都是MacBook Air里面最简单的操作了，这两天用了这台Air后发现内存实在是太小了（4GB），但更换内存自己来几乎是不可能的，只能换主板，这样可以顺便把处理器也升级了。我发现淘宝上还真有主板卖，等到时候嫌弃Air慢的时候再换吧哈哈！这样一台6年旧的笔记本估计还能再战个四五年。。。大家如果有什么问题可以在下面留言，希望可以帮助到大家谢谢！


