(()=>{"use strict";var e={323:(e,r,a)=>{var n=a(87);var i=a(747);var t=a(129);var f="/etc/resolv.conf";function getInterfaceName(){var e="eth";var r=n.platform();if(r==="darwin"){e="en"}else if(r==="win32"){e=null}return e}function getIfconfigCMD(){if(n.platform()==="win32"){return"ipconfig/all"}return"/sbin/ifconfig"}function address(e,r){if(typeof e==="function"){r=e;e=null}var a={ip:address.ip(e),ipv6:address.ipv6(e),mac:null};address.mac(e,(function(e,n){if(n){a.mac=n}r(e,a)}))}address.interface=function(e,r){var a=n.networkInterfaces();var i=!r;r=r||getInterfaceName();e=e||"IPv4";for(var t=-1;t<8;t++){var f=r+(t>=0?t:"");var s=a[f];if(s){for(var d=0;d<s.length;d++){var c=s[d];if(c.family===e){return c}}}}if(i){for(var u in a){var s=a[u];for(var t=0;t<s.length;t++){var c=s[t];if(c.family===e&&c.address!=="127.0.0.1"){return c}}}}return};address.ip=function(e){var r=address.interface("IPv4",e);return r&&r.address};address.ipv6=function(e){var r=address.interface("IPv6",e);return r&&r.address};var s=/^(\w+)\:\s+flags=/;var d=/^(\w+)\s{2,}link encap:\w+/i;var c=address.MAC_RE=/(?:ether|HWaddr)\s+((?:[a-z0-9]{2}\:){5}[a-z0-9]{2})/i;var u=address.MAC_IP_RE=/inet\s(?:addr\:)?(\d+\.\d+\.\d+\.\d+)/;function getMAC(e,r,a){var n=e.split("\n");for(var i=0;i<n.length;i++){var t=n[i].trimRight();var f=s.exec(t)||d.exec(t);if(!f){continue}var v=f[1];if(v.indexOf(r)!==0){continue}var o=null;var l=null;var p=c.exec(t);if(p){l=p[1]}i++;while(true){t=n[i];if(!t||s.exec(t)||d.exec(t)){i--;break}if(!l){p=c.exec(t);if(p){l=p[1]}}if(!o){p=u.exec(t);if(p){o=p[1]}}i++}if(o===a){return l}}}address.mac=function(e,r){if(typeof e==="function"){r=e;e=null}e=e||getInterfaceName();var a=address.interface("IPv4",e);if(!a){return r()}if(!process.env.CI&&(a.mac==="ff:00:00:00:00:00"||a.mac==="00:00:00:00:00:00")){a.mac=""}if(a.mac){return r(null,a.mac)}t.exec(getIfconfigCMD(),{timeout:5e3},(function(n,i,t){if(n||!i){return r(n)}var f=getMAC(i||"",e,a.address);r(null,f)}))};var v=/^nameserver\s+(\d+\.\d+\.\d+\.\d+)$/i;address.dns=function(e,r){if(typeof e==="function"){r=e;e=null}e=e||f;i.readFile(e,"utf8",(function(e,a){if(e){return r(e)}var n=[];a=a||"";var i=a.split("\n");for(var t=0;t<i.length;t++){var f=i[t].trim();var s=v.exec(f);if(s){n.push(s[1])}}r(null,n)}))};e.exports=address},129:e=>{e.exports=require("child_process")},747:e=>{e.exports=require("fs")},87:e=>{e.exports=require("os")}};var r={};function __nccwpck_require__(a){var n=r[a];if(n!==undefined){return n.exports}var i=r[a]={exports:{}};var t=true;try{e[a](i,i.exports,__nccwpck_require__);t=false}finally{if(t)delete r[a]}return i.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var a=__nccwpck_require__(323);module.exports=a})();