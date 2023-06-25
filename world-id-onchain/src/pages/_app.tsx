// // import '@/styles/globals.css'
// // import { APP_NAME } from '@/lib/consts'
// // import type { AppProps } from 'next/app'
// import { WagmiConfig } from 'wagmi'
// import { createConfig, configureChains, mainnet } from '@wagmi/core'
// import { publicProvider } from '@wagmi/core/providers/public'
 
// const { publicClient } = configureChains([mainnet], [publicProvider()])

// const config = createConfig({
//   publicClient,
// })

// // import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

// // const client = createConfig(
// // 	getDefaultConfig({
// // 		appName: APP_NAME,
// // 		infuraId: process.env.INFURA_ID,
// // 	})
// // )

// // export default function App({ Component, pageProps }: AppProps) {
// // 	return (
// // 		<WagmiConfig config={client}>
// // 			<ConnectKitProvider>
// // 				<Component {...pageProps} />
// // 			</ConnectKitProvider>
// // 		</WagmiConfig>
// // 	)
// // }
// // import { createConfig, configureChains, mainnet } from '@wagmi/core'
// // import { publicProvider } from '@wagmi/core/providers/public'

// // const { chains, publicClient, webSocketPublicClient } = configureChains(
// //   [mainnet],
// //   [publicProvider()],
// // )

// // const config = createConfig({
// //   chains,
// //   publicClient,
// //   webSocketPublicClient,
// })

// // import { WagmiConfig } from "wagmi";
// // import { createConfig } from '@wagmi/core'

// // import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

// // const config = createConfig(
// //   getDefaultConfig({
// // 		infuraId: process.env.INFURA_ID,
// //     // Required API Keys
// //     // alchemyId: process.env.ALCHEMY_ID, // or infuraId
// //     // walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID,

// //     // Required
// //     appName: "Your App Name",

// //     // Optional
// //     appDescription: "Your App Description",
// //     appUrl: "https://family.co", // your app's url
// //     appLogo: "https://family.co/logo.png", // your app's logo,no bigger than 1024x1024px (max. 1MB)
// //   }),
// // );

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <WagmiConfig config={config}>
//       <ConnectKitProvider>
//         <ConnectKitButton />
// 				<Component {...pageProps} />
//       </ConnectKitProvider>
//     </WagmiConfig>
//   );
// };

