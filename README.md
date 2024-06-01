# Do More with Your SuiFrens 

![Screenshot 2024-06-01 033050](https://github.com/abhishek-01k/talkwithyoursuifrens/assets/95926324/44933667-784d-4971-809e-89daa2daa2af)

SuiFrens are beloved, imaginative, and inventive creatures traversing the internet, seeking fellow pioneers to build new connections and friendships. The characters of Capy, Bullshark, and Narwhal tell the story of key parts of Sui’s architecture and infinite scalability. As collectibles, SuiFrens can be extended to operate in a number of ways within other Sui apps and services. SuiFrens are the building blocks of Sui and are here to help tell the story of what you build, too.

## Problem Statements

### SuiFrens Currently Are Only NFTs
The current utility of SuiFrens is limited to being non-fungible tokens (NFTs) with restricted usage within the SUI space.

### Less Utility Leading to Less User Engagement
Due to the limited functionality, user engagement with SuiFrens is minimal.

### Less User Interaction
The interactions users can have with their SuiFrens are very limited and primarily restricted to trading.

### Lack of Personalization
There is a lack of personalization options for users to interact with their SuiFrens NFTs, leading to a less engaging experience.

## Solution: Our Dapp

Our decentralized application (Dapp) aims to enhance the utility and engagement of SuiFrens by offering several key features:

- **Interactive Conversations**: This Dapp allows users to have conversations with their SuiFrens characters (Capy, Bullshark, Narwhal).
- **Easy Onboarding with zkLogin**: Integrated with zkLogin, the Dapp utilizes social logins for seamless user onboarding, allowing them to interact and play with their SuiFrens effortlessly.
- **Hero Collectibles**: Users can turn their SuiFrens into Hero Collectibles, enabling them to play and evolve these characters.
- **Sponsored Gas Fees**: For the best user experience, we sponsor the gas fees, making interactions within the Dapp frictionless.
- **RAG Model Integration**: The conversational interactions are based on the Retrieval-Augmented Generation (RAG) model, built on data specific to the SuiFrens.

![image](https://github.com/kamalbuilds/talkwithyoursuifrens/assets/95926324/e9287f89-51a9-4b7d-96c0-05b73d9bb74d)

## Highlights

- **Social Sign-In Experience**: Powered by [Shinami wallet services](https://www.shinami.com/invisible-wallet) and [zkLogin](https://docs.sui.io/build/zk_login).
  - Authenticates and authorizes the player to the demo app backend.
  - Authorizes Sui transactions from a zkLogin address tied to the player's social identity.
- **In-Game Heroes**: Player-owned on-chain objects with evolving attributes.
- **Sponsored Transactions**: Powered by [Shinami gas station](https://www.shinami.com/gas-station), ensuring a smooth player experience.

## Architecture

![Architecture diagram](images/architecture.drawio.svg)

### Core App Components

- **Backend**:
  - Implemented as [Next.js API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) under [pages/api](pages/api/).
  - Runs on a server with Node.js runtime.
  - Authenticates players using OpenID tokens obtained from the zkLogin sign-in flow.
  - Communicates with Shinami wallet services for persistent wallet states.
  - Implements "game" logic, constructing and executing Sui transactions that mutate hero states.
  - Communicates with Shinami gas station for Sui transaction sponsorship.
- **Frontend**:
  - Implemented as [Next.js pages](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) (React components) under [pages](pages/).
  - Runs in players' browsers.
  - Reads hero states from the Sui blockchain through [Shinami node service](https://www.shinami.com/node).
  - Integrates with OpenID providers.
  - Maintains local zkLogin state (such as the ephemeral key) and signs player transactions.

### External Infrastructure

- **Sui Blockchain**: Maintains all hero states.
- **Shinami Wallet Services**: Keeps persistent wallet states securely.
- **OpenID Providers**: Maintains players' sign-in information.

## Getting Started

```bash
# Start the development server
npm run dev
```

With our Dapp, users can now do more with their SuiFrens, enhancing their engagement and interaction while enjoying a personalized experience. Dive into the world of SuiFrens and discover new ways to connect and play!
