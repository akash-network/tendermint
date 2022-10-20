(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{724:function(e,t,n){"use strict";n.r(t);var o=n(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"running-in-production"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-in-production"}},[e._v("#")]),e._v(" Running in production")]),e._v(" "),n("p",[e._v("If you are building Tendermint from source for use in production, make sure to check out an appropriate Git tag instead of a branch.")]),e._v(" "),n("h2",{attrs:{id:"database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),n("p",[e._v("By default, Tendermint uses the "),n("code",[e._v("syndtr/goleveldb")]),e._v(" package for its in-process\nkey-value database. If you want maximal performance, it may be best to install\nthe real C-implementation of LevelDB and compile Tendermint to use that using\n"),n("code",[e._v("make build TENDERMINT_BUILD_OPTIONS=cleveldb")]),e._v(". See the "),n("RouterLink",{attrs:{to:"/introduction/install.html"}},[e._v("install\ninstructions")]),e._v(" for details.")],1),e._v(" "),n("p",[e._v("Tendermint keeps multiple distinct databases in the "),n("code",[e._v("$TMROOT/data")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("blockstore.db")]),e._v(": Keeps the entire blockchain - stores blocks,\nblock commits, and block meta data, each indexed by height. Used to sync new\npeers.")]),e._v(" "),n("li",[n("code",[e._v("evidence.db")]),e._v(": Stores all verified evidence of misbehaviour.")]),e._v(" "),n("li",[n("code",[e._v("state.db")]),e._v(": Stores the current blockchain state (ie. height, validators,\nconsensus params). Only grows if consensus params or validators change. Also\nused to temporarily store intermediate results during block processing.")]),e._v(" "),n("li",[n("code",[e._v("tx_index.db")]),e._v(": Indexes txs (and their results) by tx hash and by DeliverTx result events.")])]),e._v(" "),n("p",[e._v("By default, Tendermint will only index txs by their hash and height, not by their DeliverTx\nresult events. See "),n("RouterLink",{attrs:{to:"/app-dev/indexing-transactions.html"}},[e._v("indexing transactions")]),e._v(" for\ndetails.")],1),e._v(" "),n("p",[e._v("Applications can expose block pruning strategies to the node operator. Please read the documentation of your application\nto find out more details.")]),e._v(" "),n("p",[e._v("Applications can use "),n("RouterLink",{attrs:{to:"/nodes/state-sync.html"}},[e._v("state sync")]),e._v(" to help nodes bootstrap quickly.")],1),e._v(" "),n("h2",{attrs:{id:"logging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),n("p",[e._v("Default logging level ("),n("code",[e._v('log-level = "info"')]),e._v(") should suffice for\nnormal operation mode. Read "),n("a",{attrs:{href:"https://blog.cosmos.network/one-of-the-exciting-new-features-in-0-10-0-release-is-smart-log-level-flag-e2506b4ab756",target:"_blank",rel:"noopener noreferrer"}},[e._v("this\npost"),n("OutboundLink")],1),e._v("\nfor details on how to configure "),n("code",[e._v("log-level")]),e._v(" config variable. Some of the\nmodules can be found "),n("RouterLink",{attrs:{to:"/nodes/logging.html#list-of-modules"}},[e._v("here")]),e._v(". If\nyou're trying to debug Tendermint or asked to provide logs with debug\nlogging level, you can do so by running Tendermint with\n"),n("code",[e._v('--log-level="debug"')]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"consensus-wal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consensus-wal"}},[e._v("#")]),e._v(" Consensus WAL")]),e._v(" "),n("p",[e._v("Tendermint uses a write ahead log (WAL) for consensus. The "),n("code",[e._v("consensus.wal")]),e._v(" is used to ensure we can recover from a crash at any point\nin the consensus state machine. It writes all consensus messages (timeouts, proposals, block part, or vote)\nto a single file, flushing to disk before processing messages from its own\nvalidator. Since Tendermint validators are expected to never sign a conflicting vote, the\nWAL ensures we can always recover deterministically to the latest state of the consensus without\nusing the network or re-signing any consensus messages. The consensus WAL max size of 1GB and is automatically rotated.")]),e._v(" "),n("p",[e._v("If your "),n("code",[e._v("consensus.wal")]),e._v(" is corrupted, see "),n("a",{attrs:{href:"#wal-corruption"}},[e._v("below")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"dos-exposure-and-mitigation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dos-exposure-and-mitigation"}},[e._v("#")]),e._v(" DOS Exposure and Mitigation")]),e._v(" "),n("p",[e._v("Validators are supposed to setup "),n("RouterLink",{attrs:{to:"/nodes/validators.html"}},[e._v("Sentry Node\nArchitecture")]),e._v("\nto prevent Denial-of-service attacks.")],1),e._v(" "),n("h3",{attrs:{id:"p2p"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2p"}},[e._v("#")]),e._v(" P2P")]),e._v(" "),n("p",[e._v("The core of the Tendermint peer-to-peer system is "),n("code",[e._v("MConnection")]),e._v(". Each\nconnection has "),n("code",[e._v("MaxPacketMsgPayloadSize")]),e._v(", which is the maximum packet\nsize and bounded send & receive queues. One can impose restrictions on\nsend & receive rate per connection ("),n("code",[e._v("SendRate")]),e._v(", "),n("code",[e._v("RecvRate")]),e._v(").")]),e._v(" "),n("p",[e._v("The number of open P2P connections can become quite large, and hit the operating system's open\nfile limit (since TCP connections are considered files on UNIX-based systems). Nodes should be\ngiven a sizable open file limit, e.g. 8192, via "),n("code",[e._v("ulimit -n 8192")]),e._v(" or other deployment-specific\nmechanisms.")]),e._v(" "),n("h3",{attrs:{id:"rpc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rpc"}},[e._v("#")]),e._v(" RPC")]),e._v(" "),n("p",[e._v("Endpoints returning multiple entries are limited by default to return 30\nelements (100 max). See the "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RPC Documentation"),n("OutboundLink")],1),e._v("\nfor more information.")]),e._v(" "),n("p",[e._v("Rate-limiting and authentication are another key aspects to help protect\nagainst DOS attacks. Validators are supposed to use external tools like\n"),n("a",{attrs:{href:"https://www.nginx.com/blog/rate-limiting-nginx/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX"),n("OutboundLink")],1),e._v(" or\n"),n("a",{attrs:{href:"https://doc.traefik.io/traefik/middlewares/http/ratelimit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("traefik"),n("OutboundLink")],1),e._v("\nto achieve the same things.")]),e._v(" "),n("h2",{attrs:{id:"debugging-tendermint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debugging-tendermint"}},[e._v("#")]),e._v(" Debugging Tendermint")]),e._v(" "),n("p",[e._v("If you ever have to debug Tendermint, the first thing you should probably do is\ncheck out the logs. See "),n("RouterLink",{attrs:{to:"/nodes/logging.html"}},[e._v("Logging")]),e._v(", where we\nexplain what certain log statements mean.")],1),e._v(" "),n("p",[e._v("If, after skimming through the logs, things are not clear still, the next thing\nto try is querying the "),n("code",[e._v("/status")]),e._v(" RPC endpoint. It provides the necessary info:\nwhenever the node is syncing or not, what height it is on, etc.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBodHRwKHMpOi8ve2lwfTp7cnBjUG9ydH0vc3RhdHVzCg=="}}),e._v(" "),n("p",[n("code",[e._v("/dump_consensus_state")]),e._v(" will give you a detailed overview of the consensus\nstate (proposer, latest validators, peers states). From it, you should be able\nto figure out why, for example, the network had halted.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCBodHRwKHMpOi8ve2lwfTp7cnBjUG9ydH0vZHVtcF9jb25zZW5zdXNfc3RhdGUK"}}),e._v(" "),n("p",[e._v("There is a reduced version of this endpoint - "),n("code",[e._v("/consensus_state")]),e._v(", which returns\njust the votes seen at the current height.")]),e._v(" "),n("p",[e._v("If, after consulting with the logs and above endpoints, you still have no idea\nwhat's happening, consider using "),n("code",[e._v("tendermint debug kill")]),e._v(" sub-command. This\ncommand will scrap all the available info and kill the process. See\n"),n("RouterLink",{attrs:{to:"/tools/debugging/"}},[e._v("Debugging")]),e._v(" for the exact format.")],1),e._v(" "),n("p",[e._v("You can inspect the resulting archive yourself or create an issue on\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),n("OutboundLink")],1),e._v(". Before opening an issue\nhowever, be sure to check if there's "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("no existing\nissue"),n("OutboundLink")],1),e._v(" already.")]),e._v(" "),n("h2",{attrs:{id:"monitoring-tendermint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-tendermint"}},[e._v("#")]),e._v(" Monitoring Tendermint")]),e._v(" "),n("p",[e._v("Each Tendermint instance has a standard "),n("code",[e._v("/health")]),e._v(" RPC endpoint, which responds\nwith 200 (OK) if everything is fine and 500 (or no response) - if something is\nwrong.")]),e._v(" "),n("p",[e._v("Other useful endpoints include mentioned earlier "),n("code",[e._v("/status")]),e._v(", "),n("code",[e._v("/net_info")]),e._v(" and\n"),n("code",[e._v("/validators")]),e._v(".")]),e._v(" "),n("p",[e._v("Tendermint also can report and serve Prometheus metrics. See\n"),n("RouterLink",{attrs:{to:"/nodes/metrics.html"}},[e._v("Metrics")]),e._v(".")],1),e._v(" "),n("p",[n("code",[e._v("tendermint debug dump")]),e._v(" sub-command can be used to periodically dump useful\ninformation into an archive. See "),n("RouterLink",{attrs:{to:"/tools/debugging/"}},[e._v("Debugging")]),e._v(" for more\ninformation.")],1),e._v(" "),n("h2",{attrs:{id:"what-happens-when-my-app-dies"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-my-app-dies"}},[e._v("#")]),e._v(" What happens when my app dies")]),e._v(" "),n("p",[e._v("You are supposed to run Tendermint under a "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Process_supervision",target:"_blank",rel:"noopener noreferrer"}},[e._v("process\nsupervisor"),n("OutboundLink")],1),e._v(" (like\nsystemd or runit). It will ensure Tendermint is always running (despite\npossible errors).")]),e._v(" "),n("p",[e._v("Getting back to the original question, if your application dies,\nTendermint will panic. After a process supervisor restarts your\napplication, Tendermint should be able to reconnect successfully. The\norder of restart does not matter for it.")]),e._v(" "),n("h2",{attrs:{id:"signal-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signal-handling"}},[e._v("#")]),e._v(" Signal handling")]),e._v(" "),n("p",[e._v("We catch SIGINT and SIGTERM and try to clean up nicely. For other\nsignals we use the default behavior in Go: "),n("a",{attrs:{href:"https://golang.org/pkg/os/signal/#hdr-Default_behavior_of_signals_in_Go_programs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Default behavior of signals\nin Go\nprograms"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"corruption"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#corruption"}},[e._v("#")]),e._v(" Corruption")]),e._v(" "),n("p",[n("strong",[e._v("NOTE:")]),e._v(" Make sure you have a backup of the Tendermint data directory.")]),e._v(" "),n("h3",{attrs:{id:"possible-causes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#possible-causes"}},[e._v("#")]),e._v(" Possible causes")]),e._v(" "),n("p",[e._v("Remember that most corruption is caused by hardware issues:")]),e._v(" "),n("ul",[n("li",[e._v("RAID controllers with faulty / worn out battery backup, and an unexpected power loss")]),e._v(" "),n("li",[e._v("Hard disk drives with write-back cache enabled, and an unexpected power loss")]),e._v(" "),n("li",[e._v("Cheap SSDs with insufficient power-loss protection, and an unexpected power-loss")]),e._v(" "),n("li",[e._v("Defective RAM")]),e._v(" "),n("li",[e._v("Defective or overheating CPU(s)")])]),e._v(" "),n("p",[e._v("Other causes can be:")]),e._v(" "),n("ul",[n("li",[e._v("Database systems configured with fsync=off and an OS crash or power loss")]),e._v(" "),n("li",[e._v("Filesystems configured to use write barriers plus a storage layer that ignores write barriers. LVM is a particular culprit.")]),e._v(" "),n("li",[e._v("Tendermint bugs")]),e._v(" "),n("li",[e._v("Operating system bugs")]),e._v(" "),n("li",[e._v("Admin error (e.g., directly modifying Tendermint data-directory contents)")])]),e._v(" "),n("p",[e._v("(Source: "),n("a",{attrs:{href:"https://wiki.postgresql.org/wiki/Corruption",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki.postgresql.org/wiki/Corruption"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("h3",{attrs:{id:"wal-corruption"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wal-corruption"}},[e._v("#")]),e._v(" WAL Corruption")]),e._v(" "),n("p",[e._v("If consensus WAL is corrupted at the latest height and you are trying to start\nTendermint, replay will fail with panic.")]),e._v(" "),n("p",[e._v("Recovering from data corruption can be hard and time-consuming. Here are two approaches you can take:")]),e._v(" "),n("ol",[n("li",[e._v("Delete the WAL file and restart Tendermint. It will attempt to sync with other peers.")]),e._v(" "),n("li",[e._v("Try to repair the WAL file manually:")])]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Create a backup of the corrupted WAL file:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3AgJnF1b3Q7JFRNSE9NRS9kYXRhL2NzLndhbC93YWwmcXVvdDsgJmd0OyAvdG1wL2NvcnJ1cHRlZF93YWxfYmFja3VwCg=="}})],1),e._v(" "),n("li",[n("p",[e._v("Use "),n("code",[e._v("./scripts/wal2json")]),e._v(" to create a human-readable version:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9zY3JpcHRzL3dhbDJqc29uL3dhbDJqc29uICZxdW90OyRUTUhPTUUvZGF0YS9jcy53YWwvd2FsJnF1b3Q7ICZndDsgL3RtcC9jb3JydXB0ZWRfd2FsCg=="}})],1),e._v(" "),n("li",[n("p",[e._v('Search for a "CORRUPTED MESSAGE" line.')])]),e._v(" "),n("li",[n("p",[e._v("By looking at the previous message and the message after the corrupted one\nand looking at the logs, try to rebuild the message. If the consequent\nmessages are marked as corrupted too (this may happen if length header\ngot corrupted or some writes did not make it to the WAL ~ truncation),\nthen remove all the lines starting from the corrupted one and restart\nTendermint.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JEVESVRPUiAvdG1wL2NvcnJ1cHRlZF93YWwK"}})],1),e._v(" "),n("li",[n("p",[e._v("After editing, convert this file back into binary form by running:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Li9zY3JpcHRzL2pzb24yd2FsL2pzb24yd2FsIC90bXAvY29ycnVwdGVkX3dhbCAgJFRNSE9NRS9kYXRhL2NzLndhbC93YWwK"}})],1)]),e._v(" "),n("h2",{attrs:{id:"hardware"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),n("h3",{attrs:{id:"processor-and-memory"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#processor-and-memory"}},[e._v("#")]),e._v(" Processor and Memory")]),e._v(" "),n("p",[e._v("While actual specs vary depending on the load and validators count, minimal\nrequirements are:")]),e._v(" "),n("ul",[n("li",[e._v("1GB RAM")]),e._v(" "),n("li",[e._v("25GB of disk space")]),e._v(" "),n("li",[e._v("1.4 GHz CPU")])]),e._v(" "),n("p",[e._v("SSD disks are preferable for applications with high transaction throughput.")]),e._v(" "),n("p",[e._v("Recommended:")]),e._v(" "),n("ul",[n("li",[e._v("2GB RAM")]),e._v(" "),n("li",[e._v("100GB SSD")]),e._v(" "),n("li",[e._v("x64 2.0 GHz 2v CPU")])]),e._v(" "),n("p",[e._v("While for now, Tendermint stores all the history and it may require significant\ndisk space over time, we are planning to implement state syncing (See "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/828",target:"_blank",rel:"noopener noreferrer"}},[e._v("this\nissue"),n("OutboundLink")],1),e._v("). So, storing all\nthe past blocks will not be necessary.")]),e._v(" "),n("h3",{attrs:{id:"validator-signing-on-32-bit-architectures-or-arm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validator-signing-on-32-bit-architectures-or-arm"}},[e._v("#")]),e._v(" Validator signing on 32 bit architectures (or ARM)")]),e._v(" "),n("p",[e._v("Both our "),n("code",[e._v("ed25519")]),e._v(" and "),n("code",[e._v("secp256k1")]),e._v(" implementations require constant time\n"),n("code",[e._v("uint64")]),e._v(" multiplication. Non-constant time crypto can (and has) leaked\nprivate keys on both "),n("code",[e._v("ed25519")]),e._v(" and "),n("code",[e._v("secp256k1")]),e._v(". This doesn't exist in hardware\non 32 bit x86 platforms ("),n("a",{attrs:{href:"https://bearssl.org/ctmul.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),n("OutboundLink")],1),e._v("), and it\ndepends on the compiler to enforce that it is constant time. It's unclear at\nthis point whenever the Golang compiler does this correctly for all\nimplementations.")]),e._v(" "),n("p",[n("strong",[e._v('We do not support nor recommend running a validator on 32 bit architectures OR\nthe "VIA Nano 2000 Series", and the architectures in the ARM section rated\n"S-".')])]),e._v(" "),n("h3",{attrs:{id:"operating-systems"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operating-systems"}},[e._v("#")]),e._v(" Operating Systems")]),e._v(" "),n("p",[e._v("Tendermint can be compiled for a wide range of operating systems thanks to Go\nlanguage (the list of $OS/$ARCH pairs can be found\n"),n("a",{attrs:{href:"https://golang.org/doc/install/source#environment",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("p",[e._v("While we do not favor any operation system, more secure and stable Linux server\ndistributions (like Centos) should be preferred over desktop operation systems\n(like Mac OS).")]),e._v(" "),n("p",[e._v("Native Windows support is not provided. If you are using a windows machine, you can try using the "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"}},[e._v("bash shell"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h3",{attrs:{id:"miscellaneous"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),n("p",[e._v("NOTE: if you are going to use Tendermint in a public domain, make sure\nyou read "),n("a",{attrs:{href:"https://cosmos.network/validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardware recommendations"),n("OutboundLink")],1),e._v(" for a validator in the\nCosmos network.")]),e._v(" "),n("h2",{attrs:{id:"configuration-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters"}},[e._v("#")]),e._v(" Configuration parameters")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("p2p.flush-throttle-timeout")])]),e._v(" "),n("li",[n("code",[e._v("p2p.max-packet-msg-payload-size")])]),e._v(" "),n("li",[n("code",[e._v("p2p.send-rate")])]),e._v(" "),n("li",[n("code",[e._v("p2p.recv-rate")])])]),e._v(" "),n("p",[e._v("If you are going to use Tendermint in a private domain and you have a\nprivate high-speed network among your peers, it makes sense to lower\nflush throttle timeout and increase other params.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"W3AycF0Kc2VuZC1yYXRlPTIwMDAwMDAwICMgMk1CL3MKcmVjdi1yYXRlPTIwMDAwMDAwICMgMk1CL3MKZmx1c2gtdGhyb3R0bGUtdGltZW91dD0xMAptYXgtcGFja2V0LW1zZy1wYXlsb2FkLXNpemU9MTAyNDAgIyAxMEtCCg=="}}),e._v(" "),n("ul",[n("li",[n("code",[e._v("mempool.broadcast")])])]),e._v(" "),n("p",[e._v("Setting this to false will stop the mempool from relaying transactions\nto other peers until they are included in a block. It means only the\npeer you send the tx to will see it until it is included in a block.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("consensus.skip-timeout-commit")])])]),e._v(" "),n("p",[e._v("We want "),n("code",[e._v("skip-timeout-commit=false")]),e._v(" when there is economics on the line\nbecause proposers should wait to hear for more votes. But if you don't\ncare about that and want the fastest consensus, you can skip it. It will\nbe kept false by default for public deployments (e.g. "),n("a",{attrs:{href:"https://hub.cosmos.network/main/hub-overview/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos\nHub"),n("OutboundLink")],1),e._v(") while for enterprise\napplications, setting it to true is not a problem.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("consensus.peer-gossip-sleep-duration")])])]),e._v(" "),n("p",[e._v("You can try to reduce the time your node sleeps before checking if\ntheres something to send its peers.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("consensus.timeout-commit")])])]),e._v(" "),n("p",[e._v("You can also try lowering "),n("code",[e._v("timeout-commit")]),e._v(" (time we sleep before\nproposing the next block).")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("p2p.addr-book-strict")])])]),e._v(" "),n("p",[e._v("By default, Tendermint checks whenever a peer's address is routable before\nsaving it to the address book. The address is considered as routable if the IP\nis "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/27bd1deabe4ba6a2d9b463b8f3e3f1e31b993e61/p2p/netaddress.go#L209",target:"_blank",rel:"noopener noreferrer"}},[e._v("valid and within allowed\nranges"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("This may not be the case for private or local networks, where your IP range is usually\nstrictly limited and private. If that case, you need to set "),n("code",[e._v("addr-book-strict")]),e._v("\nto "),n("code",[e._v("false")]),e._v(" (turn it off).")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("rpc.max-open-connections")])])]),e._v(" "),n("p",[e._v("By default, the number of simultaneous connections is limited because most OS\ngive you limited number of file descriptors.")]),e._v(" "),n("p",[e._v("If you want to accept greater number of connections, you will need to increase\nthese limits.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/satori-com/tcpkali/blob/master/doc/tcpkali.man.md#sysctls-to-tune-the-system-to-be-able-to-open-more-connections",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sysctls to tune the system to be able to open more connections"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("The process file limits must also be increased, e.g. via "),n("code",[e._v("ulimit -n 8192")]),e._v(".")]),e._v(" "),n("p",[e._v("...for N connections, such as 50k:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"a2Vybi5tYXhmaWxlcz0xMDAwMCsyKk4gICAgICAgICAjIEJTRAprZXJuLm1heGZpbGVzcGVycHJvYz0xMDArMipOICAgICMgQlNECmtlcm4uaXBjLm1heHNvY2tldHM9MTAwMDArMipOICAgIyBCU0QKZnMuZmlsZS1tYXg9MTAwMDArMipOICAgICAgICAgICAjIExpbnV4Cm5ldC5pcHY0LnRjcF9tYXhfb3JwaGFucz1OICAgICAgIyBMaW51eAoKIyBGb3IgbG9hZC1nZW5lcmF0aW5nIGNsaWVudHMuCm5ldC5pcHY0LmlwX2xvY2FsX3BvcnRfcmFuZ2U9JnF1b3Q7MTAwMDAgIDY1NTM1JnF1b3Q7ICAjIExpbnV4LgpuZXQuaW5ldC5pcC5wb3J0cmFuZ2UuZmlyc3Q9MTAwMDAgICMgQlNEL01hYy4KbmV0LmluZXQuaXAucG9ydHJhbmdlLmxhc3Q9NjU1MzUgICAjIChFbm91Z2ggZm9yIE4gJmx0OyA1NTUzNSkKbmV0LmlwdjQudGNwX3R3X3JldXNlPTEgICAgICAgICAjIExpbnV4Cm5ldC5pbmV0LnRjcC5tYXh0Y3B0dz0yKk4gICAgICAgIyBCU0QKCiMgSWYgdXNpbmcgbmV0ZmlsdGVyIG9uIExpbnV4OgpuZXQubmV0ZmlsdGVyLm5mX2Nvbm50cmFja19tYXg9TgplY2hvICQoKE4vOCkpICZndDsgL3N5cy9tb2R1bGUvbmZfY29ubnRyYWNrL3BhcmFtZXRlcnMvaGFzaHNpemUK"}}),e._v(" "),n("p",[e._v("The similar option exists for limiting the number of gRPC connections -\n"),n("code",[e._v("rpc.grpc-max-open-connections")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);