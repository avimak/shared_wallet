import styles from '../styles/Home.module.css'
import { useStarknet, InjectedConnector, useStarknetInvoke } from '@starknet-react/core'
import Link from 'next/link'

export const Navbar = () => {

    const { account, connect } = useStarknet()


    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <div className="navbar__links-container">
                    <Link href="/details"  passHref>
                        <p>Details</p>
                    </Link>
                </div>
            </div>
            <div className={styles.wallet}>
                {account ? (
                    <div>
                        <button className={styles.wallet_address_button}>
                            <p>{`${account?.slice(0, 5)}...${account?.slice(-4)}`}</p>
                        </button>
                    </div>
                ) : (
                    <button className={styles.wallet_connect_button}
                        onClick={() => connect(new InjectedConnector())}
                    >
                        <p>Connect</p>
                    </button>
                )}
            </div>
        </div>

    )
}