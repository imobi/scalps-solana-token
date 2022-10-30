import * as mpl from "@metaplex-foundation/mpl-token-metadata";
import * as web3 from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

export function loadWalletKey(keypairFile: string): web3.Keypair {
  const fs = require("fs");
  const loaded = web3.Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())));
  return loaded;
}

const INITIALIZE = false;

async function main() {
  console.log("begin transaction ...");
  const myKeypair = loadWalletKey("scaLRcPfTW79cDVSmRbHuF52oDgwJX92TQKtfosTx6W.json"); //the mint authority address
  const mint = new web3.PublicKey("scagyP86TNpeahDSqEHz8oVN3ija2prg5m9nyLGQGZy"); //the token address

  const seed1 = Buffer.from(anchor.utils.bytes.utf8.encode("metadata"));
  const seed2 = Buffer.from(mpl.PROGRAM_ID.toBytes());
  const seed3 = Buffer.from(mint.toBytes());

  const [metadataPDA, _bump] = web3.PublicKey.findProgramAddressSync([seed1, seed2, seed3], mpl.PROGRAM_ID);

  const accounts = {
      metadata: metadataPDA,
      mint,
      mintAuthority: myKeypair.publicKey,
      payer: myKeypair.publicKey,
      updateAuthority: myKeypair.publicKey,
  }

  const dataV2 = {
    name: "Scalps Token",
    symbol: "SCALPS",
    uri: "https://scalps.finance/tokens/solana/assets/metadata.json",
    sellerFeeBasisPoints: 0,
    creators: null,
    collection: null,
    uses: null,
  };

  let ix;

  if (INITIALIZE) { //new metadata account
    const args = {
      createMetadataAccountArgsV2: {
        data: dataV2,
        isMutable: true,
      },
    };
    ix = mpl.createCreateMetadataAccountV2Instruction(accounts, args);
  } else { //update existing metadata account
    const args = {
      updateMetadataAccountArgsV2: {
        data: dataV2,
        isMutable: true,
        updateAuthority: myKeypair.publicKey,
        primarySaleHappened: true,
      },
    };
    ix = mpl.createUpdateMetadataAccountV2Instruction(accounts, args);
  }
  const tx = new web3.Transaction();
  tx.add(ix);
  const connection = new web3.Connection("https://api.devnet.solana.com");
  const txid = await web3.sendAndConfirmTransaction(connection, tx, [myKeypair]);
  console.log(txid);
  console.log("end transaction ...");
}

main();