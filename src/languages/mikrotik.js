/*
Language: MikroTik
Author: Troy Settle <troy.settle@gmail.com>
Category: networking
Description: Language file for MikroTik's RouterOS
*/

function(hljs) {
  return {
    aliases: ['ros'],
    keywords: {
        keyword: 'add comment disable edit enable export find print remove set'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        className: 'section',
        begin: /^\/(caps-man aaa|caps-man manager|certificate settings|interface bridge|interface bridge port|interface bridge settings|interface eoip|interface ethernet|interface gre|interface l2tp-server server|interface list|interface list member|interface ovpn-server server|interface pptp-server server|interface sstp-server server|interface vlan|interface wireless align|interface wireless cap|interface wireless security-profiles|interface wireless sniffer|interface wireless snooper|ip accounting|ip accounting web-access|ip address|ip arp|ip cloud|ip cloud advanced|ip dhcp-client|ip dhcp-client option|ip dhcp-relay|ip dhcp-server network|ip dhcp-server config|ip dhcp-server lease|ip dhcp-server option|ip dhcp-server|ip dns|ip firewall address-list|ip firewall connection tracking|ip firewall filter|ip firewall layer7-protocol|ip firewall mangle|ip firewall nat|ip firewall service-port|ip ipsec mode-config|ip ipsec policy|ip ipsec policy group|ip ipsec proposal|ip neighbor discovery|ip neighbor discovery|ip neighbor discovery settings|ip pool|ip proxy|ip proxy access|ip route|ip service|ip settings|ip smb|ip smb shares|ip smb users|ip socks|ip ssh|ip traffic-flow|ip traffic-flow ipfix|ip traffic-flow target|ip upnp|lcd|lcd interface|lcd interface pages|lcd pin|lcd screen|mpls|mpls interface|mpls ldp|port|port firmware|ppp aaa|ppp profile|queue interface|queue interface|queue interface|queue simple|queue tree|queue type|radius incoming|routing bfd interface|routing bgp instance|routing bgp peer|routing filter|routing mme|routing ospf area|routing ospf instance|routing rip|snmp|snmp community|system clock|system clock manual|system console|system health|system identity|system leds|system leds setting|system logging|system logging action|system note|system ntp client|system ntp server|system resource irq|system resource irq rps|system routerboard settings|system scheduler|system script|system upgrade mirror|system watchdog|tool bandwidth-server|tool e-mail|tool graphing|tool graphing interface|tool graphing queue|tool graphing resource|tool mac-server|tool mac-server mac-winbox|tool mac-server ping|tool romon|tool romon port|tool sms|tool sniffer|tool traffic-generator|user aaa|user group)(\ |\n)/
      },
      {
        className: 'function',
        begin: /\[+/, end: /\]+/
      },
      {
        className: 'attribute',
        begin: /!keepalive/
      },
      {
        begin: /[^\s]+=("[^"]*"|[^\s]+)/,
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: /\b[^=]+/
          },
          {
            begin: /=/, endsWithParent:  true,
            relevance: 0,
            contains: [
              {
                className: 'literal',
                begin: /\byes|no\b/
              },
              {
                // IPv4 addresses and subnets
                className: 'number',
                begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])(\/(3[0-2]|[1-2][0-9]|d))?\\b'
              },
              {
                // MAC addresses and DHCP Client IDs
                className: 'number',
                begin: /\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\b/
              },
              {
                className: 'string',
                begin: /'[^']*'/
              },
              {
                className: 'string',
                begin: /"[^"]*"/
              },
              {
                className: 'string',
                begin: /\b[^\s]*/
              }
            ]
          }
        ]
      }
    ]
  };
}


