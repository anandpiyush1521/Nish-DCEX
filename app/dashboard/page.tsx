import { getServerSession } from "next-auth";
import { ProfileCard } from "../components/ProfileCard";
import db from "@/app/db";
import { authConfig } from "../lib/auth";

async function getUserWallet(){
    const session = await getServerSession(authConfig);

    const userWallet = await db.solWallet.findFirst({
        where:{
            userId: session?.user?.uid
        },
        select: {
            publicKey: true
        }
    })

    if(!userWallet){
        return{
            error: "No solana wallet found assosiated with the user"
        }
    }
    return {error: null, userWallet};
}
 
export default async function(){
    const userWallet = await getUserWallet();
    if(userWallet.error || !userWallet.userWallet?.publicKey){
        return <>No Solana Wallet found</>
    }
    return <div>
        <ProfileCard publicKey={userWallet.userWallet?.publicKey} />
    </div>
}

