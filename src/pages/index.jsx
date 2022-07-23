import styles from './index.less';
import {Button} from 'antd';
import * as fcl from "@onflow/fcl";
import { useState,useEffect } from 'react';
export default function IndexPage() {
  const [user, setUser] = useState({loggedIn: null})

  useEffect(
    () => fcl.currentUser.subscribe(setUser), [])
  //登录，登出
 async function clickWallet()
  {

    console.log("hello world");
    //测试钱包地址
    fcl.config({
      "accessNode.api": "https://rest-testnet.onflow.org",
      "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
    })
    //并且登录
    fcl.authenticate();

    const currentUser = await fcl.currentUser.snapshot();
    console.log("The Current User", currentUser);
  }

 async  function fclquery() {
    const result = await fcl.query({
      cadence: `
      pub fun main(a: Int, b: Int): Int {
        
        return a + b
      }
    `,
      args: (arg, t) => [
        arg(7, t.Int), // a: Int
        arg(6, t.Int), // b: Int
      ],
    });
    console.log(result); // 13
  }

  async function fclmutate() {
    const txId = await fcl.mutate({
      cadence: `
        import  HelloWorld from 0xb51a64d391859f6d
        
        prepare(acct: AuthAccount) {}

        execute {
          log(HelloWorld.hello())
          log("Hello from execute")
        }
      `,
      proposer: fcl.currentUser,
      payer: fcl.currentUser,
      authorizations: [fcl.currentUser],
      limit: 10,
      args: () => []
    });
    const transaction = await fcl.tx(transactionId).onceSealed()
    console.log(transaction) // The transactions status and events after being sealed
  }
  async function fclmutate2() {
    var testUser=fcl.currentUser;
    const transactionId = await fcl.mutate({
      cadence: `
        transaction {
          execute {
            log("Hello from execute")
          }
        }
      `,
    proposer: fcl.currentUser,
  payer: fcl.currentUser,
  authorizations: [],
      limit:50
    })
    
    const transaction = await fcl.tx(transactionId).onceSealed()
    console.log(transaction) // The transactions status and events after being sealed
  }


  const AuthedState = () => {
    return (
      <div>
        <div>Address: {user?.addr ?? "No Address"}</div>
        <button onClick={fcl.unauthenticate}>Log Out</button>
      </div>
    )
  }
  const UnauthenticatedState = () => {
    return (
      <div>
       
        <button onClick={fcl.signUp}>Sign Up</button>
      </div>
    )
  }
  //获取钱包关联的资金
  function getWalletNFTAndFt()
  {

    console.log("hello world");
    //测试钱包地址
    // fcl.config({
    //   "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
    // })
    fcl.config({
      "accessNode.api": "https://rest-testnet.onflow.org", // Mainnet: "https://rest-mainnet.onflow.org"
      "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",  // Mainnet: "https://fcl-discovery.onflow.org/authn"
      "0xProfile": "0xba1132bc08f82fe2" // The account address where the Profile smart contract lives on Testnet
    })
    //并且登录
    fcl.authenticate();
  }

  const sendQuery = async () => {
    const profile = await fcl.query({
      cadence: `
        import Profile from 0xProfile

        pub fun main(address: Address): Profile.ReadOnly? {
          return Profile.read(address)
        }
      `,
      args: (arg, t) => [arg(user.addr, t.Address)]
    })

    setName(profile?.name ?? 'No Profile')
  }

  const initAccount = async () => {
    const transactionId = await fcl.mutate({
      cadence: `
        import Profile from 0xProfile
  
        transaction {
          prepare(account: AuthAccount) {
            // Only initialize the account if it hasn't already been initialized
            if (!Profile.check(account.address)) {
              // This creates and stores the profile in the user's account
              account.save(<- Profile.new(), to: Profile.privatePath)
  
              // This creates the public capability that lets applications read the profile's info
              account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
            }
          }
        }
      `,
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 50
    })
  
    const transaction = await fcl.tx(transactionId).onceSealed()
    console.log(transaction)
  }
  //购买盲盒
  function buyblindbox()
  {


  }
  //铸造NFT
  function CreateNFT()
  {}
  //开始游戏
  function StartGame()
  {}

  function GameSettlement()
  {}

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={clickWallet}>连接钱包</Button>
      <div>Profile Name: {name ?? "--"}</div> {/* NEW */}
      <button onClick={fclquery}>Send Query</button>
      <button onClick={fclmutate2}>fclmutate</button>
      {user.loggedIn
        ? <AuthedState />
        : <UnauthenticatedState />
      }
    </div>
  );
}
