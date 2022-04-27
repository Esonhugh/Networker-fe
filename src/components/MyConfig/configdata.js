let wireguard_template = `[Interface]
PrivateKey = [PRIVATEKEY] # replace this with your secret Private key
ListenPort = [User_LAST_5_DIGITS_OF_YOUR_ASN]
Table = off
PostUp = ip addr add [Admin_DN42_IPv6]/128 dev %i
PostUp = ip addr add [Admin_DN42_IPv4] peer [User_DN42_IPv4] dev %i
PostUp = sysctl -w net.ipv6.conf.%i.autoconf=0

# or use old version in lantian.pub which is shell file
# ip link add dev dn42-[User] type wireguard
# wg setconf dn42-[User] [User].conf
# ip link set dn42-[User] up
# ip addr add [Admin_DN42_IPv6] peer [User_DN42_IPv6] dev dn42-[User]
# ip route add [User_DN42_IPv6]/128 src [Admin_DN42_IPv6] dev dn42-[User]

[Peer]
PublicKey = [User_Public_Key]
Endpoint = [User_Public_Access]:22239
AllowedIPs = 10.0.0.0/8, 172.20.0.0/14, 172.31.0.0/16, fd00::/8, fe80::/64

# Usage: wg-quick up [User].conf`;

export function CreateWg(admin, user) {
    let data = wireguard_template;
    // 对于对方来说 user 就是 网站 admin
    data = data.replaceAll("[Admin]", user.username)
    data = data.replaceAll("[User]", admin.username)
    data = data.replaceAll("[User_LAST_5_DIGITS_OF_YOUR_ASN]", admin.asn.substring(user.asn.length - 5))
    data = data.replaceAll("[Admin_DN42_IPv6]", user.dn42_ipv6)
    data = data.replaceAll("[Admin_DN42_IPv4]", user.dn42_ipv4)
    data = data.replaceAll("[User_DN42_IPv6]", admin.dn42_ipv6)
    data = data.replaceAll("[User_DN42_IPv4]", admin.dn42_ipv4)
    data = data.replaceAll("[User_Public_Key]", admin.wireguard_key)
    data = data.replaceAll("[User_Public_Access]", admin.public_access)
    return data
}

let bird_template = `# /etc/bird/peers/[User].conf ：
protocol bgp dn42_[User]_v4 from dnpeers {
    neighbor [User_DN42_IPv4] as [User_ASN];
    direct;
    ipv6 {
        import none;
        export none;
    };
};
protocol bgp dn42_[User]_v6 from dnpeers {
    neighbor [User_DN42_IPv6] % 'dn42-[User]' as [User_ASN];
    direct;
    ipv4 {
        import none;
        export none;
    };
};`

export function CreateBird(admin) {
    let data = bird_template;
    data = data.replaceAll("[User]", admin.username)
    data = data.replaceAll("[User_ASN]", admin.asn)
    data = data.replaceAll("[User_DN42_IPv6]", admin.dn42_ipv6)
    data = data.replaceAll("[User_DN42_IPv4]", admin.dn42_ipv4)
    return data
}