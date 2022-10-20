(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{781:function(e,i,t){"use strict";t.r(i);var o=t(1),a=Object(o.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"genesis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[e._v("#")]),e._v(" Genesis")]),e._v(" "),t("p",[e._v("The genesis file is the starting point of a chain. An application will populate the "),t("code",[e._v("app_state")]),e._v(" field in the genesis with their required fields. Tendermint is not able to validate this section because it is unaware what application state consists of.")]),e._v(" "),t("h2",{attrs:{id:"genesis-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#genesis-fields"}},[e._v("#")]),e._v(" Genesis Fields")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("genesis_time")]),e._v(": The time the blockchain started or will start. If nodes are started before this time they will sit idle until the time specified.")]),e._v(" "),t("li",[t("code",[e._v("chain_id")]),e._v(": The chain identifier. Every chain should have a unique identifier. When conducting a fork based upgrade, we recommend changing the chainid to avoid network or consensus errors.")]),e._v(" "),t("li",[t("code",[e._v("initial_height")]),e._v(": The starting height of the blockchain. When conducting a chain restart to avoid restarting at height 1, the network is able to start at a specified height.")]),e._v(" "),t("li",[t("code",[e._v("consensus_params")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("block")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("max_bytes")]),e._v(": The max amount of bytes a block can be.")]),e._v(" "),t("li",[t("code",[e._v("max_gas")]),e._v(": The maximum amount of gas that a block can have.")])])]),e._v(" "),t("li",[t("code",[e._v("evidence")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("max_age_num_blocks")]),e._v(": After this preset amount of blocks has passed a single piece of evidence is considered invalid.")]),e._v(" "),t("li",[t("code",[e._v("max_age_duration")]),e._v(": After this preset amount of time has passed a single piece of evidence is considered invalid.")]),e._v(" "),t("li",[t("code",[e._v("max_bytes")]),e._v(": The max amount of bytes of all evidence included in a block.")])])]),e._v(" "),t("li",[t("code",[e._v("validator")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("pub_key_types")]),e._v(": Defines which curves are to be accepted as a valid validator consensus key. Tendermint supports ed25519, sr25519 and secp256k1.")])])]),e._v(" "),t("li",[t("code",[e._v("version")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("app_version")]),e._v(": The version of the application. This is set by the application and is used to identify which version of the app a user should be using in order to operate a node.")])])]),e._v(" "),t("li",[t("code",[e._v("synchrony")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("message_delay")]),e._v(": A bound on how long a proposal message may take to reach all validators on a network and still be considered valid.")]),e._v(" "),t("li",[t("code",[e._v("precision")]),e._v(": A bound on how skewed the proposer's clock may be from any validator on the network while still producing valid proposals.")])])]),e._v(" "),t("li",[t("code",[e._v("timeout")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("propose")]),e._v(": How long the Tendermint consensus engine will wait for a proposal block before prevoting nil.")]),e._v(" "),t("li",[t("code",[e._v("propose_delta")]),e._v(": How much the propose timeout increase with each round.")]),e._v(" "),t("li",[t("code",[e._v("vote")]),e._v(": How long the consensus engine will wait after receiving +2/3 votes in a round.")]),e._v(" "),t("li",[t("code",[e._v("vote_delta")]),e._v(": How much the vote timeout increases with each round.")]),e._v(" "),t("li",[t("code",[e._v("commit")]),e._v(": How long the consensus engine will wait after receiving +2/3 precommits before beginning the next height.")]),e._v(" "),t("li",[t("code",[e._v("bypass_commit_timeout")]),e._v(": Configures if the consensus engine will wait for the full commit timeout before proceeding to the next height. If this field is set to true, the conesnsus engine will proceed to the next height as soon as the node has gathered votes from all of the validators on the network.")])])])])]),e._v(" "),t("li",[t("code",[e._v("validators")]),e._v(" "),t("ul",[t("li",[e._v("This is an array of validators. This validator set is used as the starting validator set of the chain. This field can be empty, if the application sets the validator set in "),t("code",[e._v("InitChain")]),e._v(".")])])]),e._v(" "),t("li",[t("code",[e._v("app_hash")]),e._v(": The applications state root hash. This field does not need to be populated at the start of the chain, the application may provide the needed information via "),t("code",[e._v("Initchain")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("app_state")]),e._v(": This section is filled in by the application and is unknown to Tendermint.")])])])}),[],!1,null,null,null);i.default=a.exports}}]);