---
sidebar_position: 3
id: dashboard
title: '1.3. 機器人設置: 控制面板'
tags:
  - dashboard
  - Ticket Bot
slug: dashboard
---

# 控制面板

要使用控制面板的第一步當然是要先至 [ticketbot.dev/servers](https://ticketbot.dev/servers) 使用Discord登入。

![login](https://i.imgur.com/liRxUDt.png)

登入完成後將會自動導向至控制面板中，並且您會看到您擁有管理權限的伺服器列表。

![Server](https://i.imgur.com/yrwn5U5.png)

點選下方的 `控制面板` 後您應該會看到以下的畫面:

![](https://i.imgur.com/QqoJDvp.png)


:::note 備註

如果您的伺服器是第一次邀請機器人的話你應該會在統計區看到全部都是 NaN 。

:::

點選左側選單的 `主題` ，您應該會在畫面中看到有 `客服單主題` ，正常來說第一次邀請機器人的話上面不該有任何主題，所以您應該使用下方的 `新增主題` 的按鈕來創建新的客服單主題!

![](https://i.imgur.com/SkaSAeL.png)

按下後您應該會看到這很長很長的頁面

![](https://i.imgur.com/4pxYB0J.png)

接下來我們將逐一介紹此頁面每個欄位的功能以及說明
* 主題 - 顧名思義此欄位就是主題顯示的名稱。
![](https://i.imgur.com/F7u9ZyK.png)

![](https://i.imgur.com/leg97yG.png)

* 客服單名稱 - 當用戶創建客服單時的Discord頻道名稱。
![](https://i.imgur.com/qCvEvpA.png)


---

使用滑鼠點擊一下下方的 `查看可用函數` 可以查看可用的函數。
![](https://i.imgur.com/XjLCPfe.png)

1. `{author.name}` - 替換為開單用戶名
– 例如一個名稱為`Krick`的人開啟了客服單，那麼頻道名稱將顯示 Krick  
3. `{author.discriminator}` - 替換為開單用戶 # 後面的四個數字
– 例如用戶`Krick#9685`開啟了客服單，那麼頻道名稱將會顯示 `Krick#9685` (這通常會和`{author.name}`搭配使用)  
5. `{subject}` - 替換為主題名稱
– 如果您上方的主題名稱取名為 `大佬` ，那麼此客服單在開啟後名稱將會顯示 `大佬` 。  
7. `{subject.amount}` - 替換為主題被開單的次數
– 假如Kevin是第一個開啟客服單的，那麼頻道名稱將會是 `1` ，而無論上個客服單是否被關閉或刪除，下一個開單的數字將會是上個客服單的編號 +1。  
---

* 身分組 - 當客服單被開啟時給予該頻道權限的身分組，通常是客服人員或是管理人員。
![](https://i.imgur.com/akoP3ER.png)

* 開啟時，自動標注客服人員(高級版專屬) - 當用戶開啟客服單時， 會自動標注客服人員。


* 回覆時，自動標注客服人員(高級版專屬) - 當用戶在客服單回覆時， 會自動標注客服人員。

![](https://i.imgur.com/VqukeP3.png)

* 第一條客服單的訊息 - 開啟客服單時的第一條訊息。

![](https://i.imgur.com/Ncuco1z.png)

*以下為範例*

![](https://i.imgur.com/OFeaYON.png)

* 作者設置 - 標題上方的資訊，通常是放上您的資訊或版權宣告。
* 圖片設置 - 如果討厭使用文字或想增加一點豐富度話可以設置圖片。
* 縮圖設置 - 如果想增加一點豐富度話可以設置縮圖。
* 頁腳設置 - 當前無法更改。

![](https://i.imgur.com/9rzJPja.png)

*以下為範例*

![](https://i.imgur.com/crAnBIp.png)

* 嵌入顏色 - 此設置可以更改Discord訊息嵌入的顏色
![](https://i.imgur.com/zrbqJ3X.png)


---
## 總攬:
設置完後您可以使用側邊的 `Embed 預覽` 來查看您設置的結果，下方附上範例圖。

![](https://i.imgur.com/KvdeewW.png)

如果您非常滿意的話您就可以使用 `提交` 按鈕來創建新的主題了!!
![](https://i.imgur.com/pLp7kkD.png)

提交後您會在主題頁面上看到您剛剛創建的主題了!
![](https://i.imgur.com/d2sp93v.png)
