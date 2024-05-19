# Do More with your SuiFren ~~

- This Dapp allows users to talk with their SuiFrens Capy , Bullsharks , Narwals.
- Integrated with Zklogin , for easy user onboarding ,utilsing their social logins to interact and play
- Dapp allows users to turn their suifrens into Hero Collectibles and play.
- User gas fee is also sponsered by us, for the best user experience on our Dapp.
- The talk is based on the RAG model implemented , built on the data of the suifrens.

![image](https://github.com/kamalbuilds/talkwithyoursuifrens/assets/95926324/e9287f89-51a9-4b7d-96c0-05b73d9bb74d)


## Highlights

- Social sign in experience, powered by [Shinami wallet services](https://www.shinami.com/invisible-wallet) and [zkLogin](https://docs.sui.io/build/zk_login).
  Notably, the social identity serves both of these purposes:
  - Authenticates and authorizes the player to the demo app backend.
  - Authorizes Sui transactions from a zkLogin address tied to the player's social identity.
- In-game heroes as player-owned on-chain objects, with evolving attributes.
- Sponsored transactions powered by [Shinami gas station](https://www.shinami.com/gas-station), for a frictionless player experience.

## Architecture

![Architecture diagram](images/architecture.drawio.svg)

The core app consists of two parts:

- The backend, implemented as [Next.js API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes), is under [pages/api](pages/api/).
  - Runs on a server with Node.js runtime.
  - Authenticates players using OpenID tokens obtained from the zkLogin sign in flow.
  - Communicates with Shinami wallet services for persistent wallet states.
  - Implements "game" logic, constructing and executing Sui transactions that mutate hero states.
  - Communicates with Shinami gas station for Sui transaction sponsorship.
- The frontend, implemented as [Next.js pages](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) (React components), is everything else under [pages](pages/).
  - Runs in players' browsers.
  - Reads hero states from the Sui blockchain, through [Shinami node service](https://www.shinami.com/node).
  - Integrates with OpenID providers.
  - Maintains local zkLogin state (such as the ephemeral key) and signs player transactions.

Notably, the core app doesn't require its own database to operate, even though many players can sign up and mint and evolve their heroes.
All operating states are maintained by these external infra:

- The Sui blockchain itself, where all hero states are maintained.
- Shinami wallet services, where persitent wallet states are securely kept.
- OpenID providers, where players' sign-in information is maintained.

```bash
# Start the development server
npm run dev
