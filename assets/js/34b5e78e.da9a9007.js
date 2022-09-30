"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2,title:"Prep the network"},l="Prepare your local network environment",s={unversionedId:"tutorial-basics/network",id:"tutorial-basics/network",title:"Prep the network",description:"We are going to create a dedicated virtual network on your machine which will be",source:"@site/docs/tutorial-basics/network.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/network",permalink:"/site/docs/tutorial-basics/network",draft:!1,editUrl:"https://github.com/weaveworks-liquidmetal/site/tree/main/docs/tutorial-basics/network.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Prep the network"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/site/docs/tutorial-basics/overview"},next:{title:"Install and start containerd",permalink:"/site/docs/tutorial-basics/containerd"}},o={},d=[{value:"Install",id:"install",level:2},{value:"Create the network and bridge",id:"create-the-network-and-bridge",level:2},{value:"Create the tap device and attach it to the network bridge",id:"create-the-tap-device-and-attach-it-to-the-network-bridge",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prepare-your-local-network-environment"},"Prepare your local network environment"),(0,r.kt)("p",null,"We are going to create a dedicated virtual network on your machine which will be\nused to allocate addresses to any MicroVMs we create."),(0,r.kt)("p",null,"The benefit of using a dedicated network and a bridge is that we won't accidentally\ninterfere or conflict with anything else running on your machine. We will have a\nsegregated ",(0,r.kt)("inlineCode",{parentName:"p"},"dhcp")," pool which will make it easy to track address leases in the case\nof a problem."),(0,r.kt)("p",null,"We will also create a bridge and associated tap device.\nThis will allow us to create and then connect to flintlock-created MicroVMs on\nthe same host in ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," mode (the default ",(0,r.kt)("inlineCode",{parentName:"p"},"macvtap")," mode would not be useable in\na single-machine setup)."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"We'll use ",(0,r.kt)("a",{parentName:"p",href:"https://libvirt.org/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"libvirt"))," and the ",(0,r.kt)("a",{parentName:"p",href:"https://www.libvirt.org/manpages/virsh.html"},(0,r.kt)("inlineCode",{parentName:"a"},"virsh"))," CLI tool to create and\nmanage the virtual network."),(0,r.kt)("p",null,"First install required packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install qemu qemu-kvm libvirt-clients libvirt-daemon-system virtinst bridge-utils\n")),(0,r.kt)("p",null,"Then start ",(0,r.kt)("inlineCode",{parentName:"p"},"libvirtd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable libvirtd\nsudo systemctl start libvirtd\n")),(0,r.kt)("p",null,"Check that the service is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status libvirtd.service\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf libvirtd.service - Virtualization daemon\n     Loaded: loaded (/lib/systemd/system/libvirtd.service; enabled; vendor preset: enabled)\n     Active: active (running) since Mon 2022-09-26 09:27:17 BST; 2 days ago\nTriggeredBy: \u25cf libvirtd-admin.socket\n             \u25cf libvirtd-ro.socket\n             \u25cf libvirtd.socket\n       Docs: man:libvirtd(8)\n             https://libvirt.org\n   Main PID: 1241 (libvirtd)\n      Tasks: 21 (limit: 32768)\n     Memory: 13.0M\n        CPU: 30.078s\n     CGroup: /system.slice/libvirtd.service\n             \u251c\u25001241 /usr/sbin/libvirtd\n             \u251c\u25001834 /usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script=/usr/lib/libvirt/libvirt_leaseshelper\n             \u2514\u25001837 /usr/sbin/dnsmasq --conf-file=/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script=/usr/lib/libvirt/libvirt_leaseshelper\n\nSep 28 14:03:11 callisto-XPS dnsmasq-dhcp[1934832]: DHCPACK(flkbr0) 192.168.100.218 6e:8d:79:f5:6b:65\nSep 28 14:03:22 callisto-XPS dnsmasq-dhcp[1934832]: DHCPREQUEST(flkbr0) 192.168.100.253 7a:35:c9:38:2b:a9\nSep 28 14:03:22 callisto-XPS dnsmasq-dhcp[1934832]: DHCPACK(flkbr0) 192.168.100.253 7a:35:c9:38:2b:a9\nSep 28 14:03:25 callisto-XPS dnsmasq-dhcp[1934832]: DHCPREQUEST(flkbr0) 192.168.100.57 1e:bb:a6:dc:e4:f5\nSep 28 14:03:25 callisto-XPS dnsmasq-dhcp[1934832]: DHCPACK(flkbr0) 192.168.100.57 1e:bb:a6:dc:e4:f5\nSep 28 14:04:09 callisto-XPS dnsmasq-dhcp[1934832]: DHCPREQUEST(flkbr0) 192.168.100.93 46:b8:fd:ac:a5:0b\nSep 28 14:04:09 callisto-XPS dnsmasq-dhcp[1934832]: DHCPACK(flkbr0) 192.168.100.93 46:b8:fd:ac:a5:0b\nSep 28 14:04:20 callisto-XPS dnsmasq-dhcp[1934832]: DHCPREQUEST(flkbr0) 192.168.100.232 26:36:df:1b:ef:a8\nSep 28 14:04:20 callisto-XPS dnsmasq-dhcp[1934832]: DHCPACK(flkbr0) 192.168.100.232 26:36:df:1b:ef:a8\n...\n"))),(0,r.kt)("h2",{id:"create-the-network-and-bridge"},"Create the network and bridge"),(0,r.kt)("p",null,"Define the bridge name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export BRIDGE_NAME=lmbr0\n")),(0,r.kt)("p",null,"Define the network in an XML file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF >>~/liquid-metal-net.xml\n<network>\n  <name>liquid-metal</name>\n  <forward mode='nat'>\n    <nat>\n      <port start='1024' end='65535'/>\n    </nat>\n  </forward>\n  <bridge name=\"$BRIDGE_NAME\" stp='on' delay='0'/>\n  <ip address='192.168.100.1' netmask='255.255.255.0'>\n    <dhcp>\n      <range start='192.168.100.10' end='192.168.100.254'/>\n    </dhcp>\n  </ip>\n</network>\nEOF\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.100.x")," addresses if you are already using that range on your network.")),(0,r.kt)("p",null,"Define and start the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo virsh net-define liquid-metal-net.xml\nsudo virsh net-start liquid-metal\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Network liquid-metal defined from liquid-metal-net.xml\n\nNetwork liquid-metal started\n"))),(0,r.kt)("p",null,"Verify that it was created and is up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"virsh net-list\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," Name           State    Autostart   Persistent\n-------------------------------------------------\n default        active   yes         yes\n liquid-metal   active   no          yes\n")),(0,r.kt)("h2",{id:"create-the-tap-device-and-attach-it-to-the-network-bridge"},"Create the tap device and attach it to the network bridge"),(0,r.kt)("p",null,"Export the device name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export TAP_NAME=tap0\n")),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," device and connect it to the bridge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ip tuntap add $TAP_NAME mode tap\nsudo ip link set $TAP_NAME master $BRIDGE_NAME up\n")),(0,r.kt)("p",null,"Verify the devices with ",(0,r.kt)("inlineCode",{parentName:"p"},"ip link show $TAP_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ip link show $BRIDGE_NAME"),"."),(0,r.kt)("p",null,"We can now move on to installing ",(0,r.kt)("inlineCode",{parentName:"p"},"containerd"),"."))}p.isMDXComponent=!0}}]);