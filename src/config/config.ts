import algosdk from "algosdk";

 const algodToken = "a".repeat(64);
 const server: string = "http://localhost";
 const port: string = "4001";

 const mnemonic: string =
 "fame then analyst broccoli ice picnic output panic ignore goose gold jelly opinion organ clinic base unknown fossil metal unaware reward mansion boss abandon switch";

 export function getClient(): algosdk.Algodv2 {
 let client = new algosdk.Algodv2(algodToken, server, port);
 return client;
 }

 export function getAccount(): algosdk.Account {
 let account = algosdk.mnemonicToSecretKey(mnemonic);
 return account;
 }