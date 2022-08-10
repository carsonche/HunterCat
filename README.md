 本项目是flow的gamefi项目，玩家通过玩gamefi抽取商家投放的nft权益并获取carly币
 
 
 L src/
      L cadence/       // cadence 相关代码
      L ui/            // 前端相关代码
      L game          // 游戏源码
    L docs/            // 文档资料，视频资料, PPT/PDF等
    L README.md


    发布测试网命令
    flow project deploy --network=testnet
    flow accounts update-contract <name> <filename> [<argument> <argument>...] [flags]
    flow accounts remove-contract <name>
 flow accounts add-contract FungibleToken ./FungibleToken.cdc --signer alice --network testnet


 <NFTHunter game/NFTHunter Team>
赛道选择
请选择一项赛道类型进行报名：

 NFT x DAO/Tools - 组织工具
 NFT x Game/Entertainment - 游戏娱乐
 NFT x Life/Metaverse - 生活方式
项目描述
项目背景
NFT除了数字艺术品外还有更多的可能性，NFTHunter是基于gameFI的模式对NFT的挖掘和探索，引入商家权益NFT和商家主题赛，解决GameFI的死亡螺旋问题，助力web2商家引入web3领域。而玩家通过玩NFTHunter除了可以获取代币激励外还可以获取抽奖的NFT

请说明以下内容：

目标用户 Target audience

元宇宙用户，游戏玩家

需求证明 Evidence for the need
-对 游戏的热爱和追求是永无止尽的

产品方案
请填写简介（注册时若暂不填写可设为TBD）。包括但不限于：

产品介绍

该游戏由知名游戏黄金矿工进行改编，结合NFT抽奖和FT代币激励环节吸引玩家和吸引商家共同参与。

技术架构

Unity+Umi+FCL+cadence

产品Logo（如有）

运营策略（如有）
前期会以5%FT吸引玩家，并且以10%ft作为运营费用

Web3 Jam 期间的开发规划
请在项目注册时便进行填写。
例子如下（请团队根据自身情况定义具体工作）：

Cadence合约

 NFT标准合约实现
 NFT盲盒功能
客户端

 FCL接入
 NFT盲盒购买
团队成员
姓名 Name	角色 Role	个人经历 Bio	联系方式 Contact
- carsonche	- Full-Stack Engineer	---	- wechat： chezi26
- last save	- 产品经理	-	-----------------------