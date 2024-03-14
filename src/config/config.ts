import algosdk from "algosdk";

 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";

 const mnemonic: string =
 "luxury kangaroo artist desert dish various dove second spare together chat grocery slight speed find leg helmet nest program caught proud fun intact abstract horse";

 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }

 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }