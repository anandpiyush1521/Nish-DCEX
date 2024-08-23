
export interface TokenDetails{
    name: string;
    mint: string;
    native: boolean;
    price: string;
    image: string;
    decimals: number;
}

export const SUPPORTED_TOKENS: TokenDetails[] = [{
    name: "SOL",
    mint: "So11111111111111111111111111111111111111112",
    native: true,
    price: "180",
    image: "https://cdn-icons-png.flaticon.com/512/6001/6001527.png",
    decimals: 9
},{
    name: "USDC",
    mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    native: false,
    price: "1",
    image: "https://static.vecteezy.com/system/resources/previews/024/093/471/non_2x/usd-coin-usdc-glass-crypto-coin-3d-illustration-free-png.png",
    decimals: 6
}, {
    name: "USDT",
    mint: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
    native: false,
    price: "1",
    image: "https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png",
    decimals: 6
}
]