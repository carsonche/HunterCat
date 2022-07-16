import styles from './index.less';
import {Button} from 'antd';
import * as fcl from "@onflow/fcl";
export default function IndexPage() {

  function clickWallet()
  {

    console.log("hello world");
  }



  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={clickWallet}>钱包</Button>
    </div>
  );
}
