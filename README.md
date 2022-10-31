Scalps new token (devnet setup steps) 

Token/Vanity Wallet:
Admins-MacBook-Pro:scalps-solana-token samir$ solana-keygen grind --starts-with sc2:1
Searching with 12 threads for:
	1 pubkey that starts with 'sc2' and ends with ''
Searched 1000000 keypairs in 4s. 0 matches found.
Wrote keypair to sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ.json
Admins-MacBook-Pro:scalps-solana-token samir$

Main wallet
Admins-MacBook-Pro:scalps-solana-token samir$ solana-keygen grind --starts-with sc2:1
Searching with 12 threads for:
	1 pubkey that starts with 'sc2' and ends with ''
Searched 1000000 keypairs in 4s. 0 matches found.
Searched 2000000 keypairs in 8s. 0 matches found.
Wrote keypair to sc2SDTrAdqaUxUHVpCWk4j8haH8gK4YZFZzexsPQ2Gg.json

Set the config keys with Main wallet for the devnet: 
Admins-MacBook-Pro:scalps-solana-token samir$ solana config set --url https://api.devnet.solana.com --keypair sc2SDTrAdqaUxUHVpCWk4j8haH8gK4YZFZzexsPQ2Gg.json
Config File: /Users/samir/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: sc2SDTrAdqaUxUHVpCWk4j8haH8gK4YZFZzexsPQ2Gg.json
Commitment: confirmed

Airdrop SOL
Admins-MacBook-Pro:scalps-solana-token samir$ solana airdrop 2
Requesting airdrop of 2 SOL
Signature: 2fFy1aYaS7wmpX1R8gdeaCs5MtQCak5erjkThgha27taJa69Y3x2JKM239NihLsvi7USWrrYZ17sMnJCgoinYtRa
2 SOL

Create the token
Admins-MacBook-Pro:scalps-solana-token samir$ spl-token create-token --decimals 18 sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ.json
Creating token sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ
Signature: 5TokstKwJ4JMqq8fUpTU8oDsUzsxYPGobzdpQ7m2KRF3739dHhEf3jZYzYgJrJCvEbkoK3HeRbAnytWS5RMCuX37

Create the token account:
Admins-MacBook-Pro:scalps-solana-token samir$ spl-token create-account sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ
Creating account HWNgfTfgC55x3ckc6qw1LAwnC5a3QqUEbBvMAo85UZjz
Signature: 3ZCAAxdthMSq9ACeSuAju5q5f3YhhSSsBF74a8kw1V8Q6snVwwLUsGZDmFDpB21JPsVS8WQZ2Jeg6DxkJfjhCFeo

Mint tokens: 
Admins-MacBook-Pro:scalps-solana-token samir$ spl-token mint sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ 6000000000
Minting 6000000000 tokens
  Token: sc2S1xqo1pg6PJDaEB1xHFhxFkQ7QZbCJqX9f2J7pnZ
  Recipient: HWNgfTfgC55x3ckc6qw1LAwnC5a3QqUEbBvMAo85UZjz
Signature: 3jyUQJhda9F7orJErGcArHXaMKudKNiM3Vvj7mYvLGvKZqKB5aEKR4BTRERPQm3shw7FiGv9DaEF5Dm5GhRNHTK4

Run create-token.ts
/Users/samir/.nvm/versions/node/v17.6.0/bin/node -r ts-node/register create-token.ts
Let's name some tokens
sc2SDTrAdqaUxUHVpCWk4j8haH8gK4YZFZzexsPQ2Gg
MKhzNLLqwbYDMVb94MzHJnu4dGpztXTAQocjAGnqtja7cRAynHiJBtzp3zbiCKoRo7ghHd3soPSmxG5D22AnB1p 
