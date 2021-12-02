// Automatically generated with Reach 0.1.7 (b34d92ae)
/* eslint-disable */
export const _version = '0.1.7';
export const _versionHash = '0.1.7 (b34d92ae)';
export const _backendVersion = 6;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      2: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function House(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for House expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for House expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    addr: ctc2,
    played: ctc3,
    selected: ctc0
    });
  const ctc5 = stdlib.T_Object({
    addr: ctc2,
    numOfWinners: ctc0,
    played: ctc3,
    selected: ctc0
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  
  
  const v155 = stdlib.protect(ctc0, interact.deadline, 'for House\'s interact field deadline');
  const v156 = stdlib.protect(ctc0, interact.wager, 'for House\'s interact field wager');
  
  const v159 = stdlib.protect(ctc1, await interact.playingSet(), {
    at: './index.rsh:27:54:application',
    fs: ['at ./index.rsh:25:9:application call to [unknown function] (defined at: ./index.rsh:25:13:function exp)'],
    msg: 'playingSet',
    who: 'House'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v156, v159, v155],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v28, from: v160 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v202 = true;
      const v203 = v164;
      const v205 = stdlib.checkedBigNumberify('./index.rsh:23:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v202;})()) {
        const v210 = stdlib.add(v203, v163);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v28, from: v160 } = txn1;
  ;
  let v202 = true;
  let v203 = v164;
  let v205 = stdlib.checkedBigNumberify('./index.rsh:23:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v202;})()) {
    const v210 = stdlib.add(v203, v163);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v210],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v160, v161, v163, v205, v210],
        evt_cnt: 0,
        funcNum: 4,
        lct: v203,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v234, time: v233, didSend: v130, from: v232 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv202 = false;
          const cv203 = v233;
          const cv205 = v205;
          
          await (async () => {
            const v202 = cv202;
            const v203 = cv203;
            const v205 = cv205;
            
            if (await (async () => {
              
              return v202;})()) {
              const v210 = stdlib.add(v203, v163);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v234, time: v233, didSend: v130, from: v232 } = txn3;
      ;
      const cv202 = false;
      const cv203 = v233;
      const cv205 = v205;
      
      v202 = cv202;
      v203 = cv203;
      v205 = cv205;
      
      continue;
      }
    else {
      const {data: [v218], secs: v220, time: v219, didSend: v108, from: v217 } = txn2;
      const v222 = stdlib.add(v205, v161);
      ;
      const cv202 = true;
      const cv203 = v219;
      const cv205 = v222;
      
      v202 = cv202;
      v203 = cv203;
      v205 = cv205;
      
      continue;}
    
    }
  const v240 = stdlib.protect(ctc6, await interact.winnersList(), {
    at: './index.rsh:68:56:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:13:function exp)'],
    msg: 'winnersList',
    who: 'House'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v160, v205, v240],
    evt_cnt: 1,
    funcNum: 2,
    lct: v203,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v242], secs: v244, time: v243, didSend: v142, from: v241 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v246 = stdlib.addressEq(v160, v241);
      stdlib.assert(v246, {
        at: './index.rsh:71:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'House'
        });
      sim_r.txns.push({
        amt: v205,
        kind: 'from',
        to: v160,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v242], secs: v244, time: v243, didSend: v142, from: v241 } = txn2;
  ;
  const v246 = stdlib.addressEq(v160, v241);
  stdlib.assert(v246, {
    at: './index.rsh:71:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'House'
    });
  ;
  return;
  
  
  
  
  };
export async function Player(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Object({
    addr: ctc2,
    played: ctc3,
    selected: ctc0
    });
  const ctc5 = stdlib.T_Object({
    addr: ctc2,
    numOfWinners: ctc0,
    played: ctc3,
    selected: ctc0
    });
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 10));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v161, v162, v163], secs: v165, time: v164, didSend: v28, from: v160 } = txn1;
  ;
  let v202 = true;
  let v203 = v164;
  let v205 = stdlib.checkedBigNumberify('./index.rsh:23:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v202;})()) {
    const v210 = stdlib.add(v203, v163);
    const v214 = stdlib.protect(ctc4, await interact.uniqueSelected(), {
      at: './index.rsh:43:50:application',
      fs: ['at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
      msg: 'uniqueSelected',
      who: 'Player'
      });
    const v215 = stdlib.protect(ctc3, await interact.kpGoing(), {
      at: './index.rsh:44:44:application',
      fs: ['at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:37:19:function exp)'],
      msg: 'kpGoing',
      who: 'Player'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v160, v161, v163, v205, v210, v214],
      evt_cnt: 1,
      funcNum: 3,
      lct: v203,
      onlyIf: v215,
      out_tys: [ctc4],
      pay: [v161, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v218], secs: v220, time: v219, didSend: v108, from: v217 } = txn2;
        
        const v222 = stdlib.add(v205, v161);
        sim_r.txns.push({
          amt: v161,
          kind: 'to',
          tok: undefined
          });
        
        const cv202 = true;
        const cv203 = v219;
        const cv205 = v222;
        
        await (async () => {
          const v202 = cv202;
          const v203 = cv203;
          const v205 = cv205;
          
          if (await (async () => {
            
            return v202;})()) {
            const v210 = stdlib.add(v203, v163);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v210],
      tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v160, v161, v163, v205, v210],
        evt_cnt: 0,
        funcNum: 4,
        lct: v203,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v234, time: v233, didSend: v130, from: v232 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv202 = false;
          const cv203 = v233;
          const cv205 = v205;
          
          await (async () => {
            const v202 = cv202;
            const v203 = cv203;
            const v205 = cv205;
            
            if (await (async () => {
              
              return v202;})()) {
              const v210 = stdlib.add(v203, v163);
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v234, time: v233, didSend: v130, from: v232 } = txn3;
      ;
      const cv202 = false;
      const cv203 = v233;
      const cv205 = v205;
      
      v202 = cv202;
      v203 = cv203;
      v205 = cv205;
      
      continue;
      }
    else {
      const {data: [v218], secs: v220, time: v219, didSend: v108, from: v217 } = txn2;
      const v222 = stdlib.add(v205, v161);
      ;
      stdlib.protect(ctc0, await interact.currentPlayedIs(v217), {
        at: './index.rsh:56:59:application',
        fs: ['at ./index.rsh:55:17:application call to [unknown function] (defined at: ./index.rsh:55:21:function exp)', 'at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:47:14:function exp)'],
        msg: 'currentPlayedIs',
        who: 'Player'
        });
      
      const cv202 = true;
      const cv203 = v219;
      const cv205 = v222;
      
      v202 = cv202;
      v203 = cv203;
      v205 = cv205;
      
      continue;}
    
    }
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc6],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v242], secs: v244, time: v243, didSend: v142, from: v241 } = txn2;
  ;
  const v246 = stdlib.addressEq(v160, v241);
  stdlib.assert(v246, {
    at: './index.rsh:71:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
int 8
extract_uint64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 56
==
assert
dup
int 0
extract_uint64
store 255
dup
extract 8 40
store 254
dup
int 48
extract_uint64
store 253
pop
// "CheckPay"
// "./index.rsh:31:5:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:31:5:dot"
// "[]"
txn Sender
load 255
itob
concat
load 253
itob
concat
int 1
itob // bool
substring 7 8
global Round
itob
concat
int 8
bzero
concat
b loopBody1
l0_afterHandler0:
l2_afterHandler1:
// Handler 2
dup
int 2
==
bz l3_afterHandler2
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 490
==
assert
dup
store 253
pop
// "CheckPay"
// "./index.rsh:71:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:71:5:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
dup
bz l4_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l4_makeTxnK:
pop
int 0
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
global CreatorAddress
itxn_field CloseRemainderTo
global CurrentApplicationAddress
itxn_field Receiver
itxn_submit
int 0
l5_makeTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 41
==
assert
dup
store 250
pop
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:37:19:dot"
// "[]"
load 254
dup
bz l7_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
global CurrentApplicationAddress
dig 1
gtxns Receiver
==
assert
l7_checkTxnK:
pop
load 255
load 254
itob
concat
load 253
itob
concat
int 1
itob // bool
substring 7 8
global Round
itob
concat
load 252
load 254
+
itob
concat
b loopBody1
l6_afterHandler3:
// Handler 4
dup
int 4
==
bz l8_afterHandler4
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
int 40
extract_uint64
store 253
dup
int 48
extract_uint64
store 252
dup
int 56
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "./index.rsh:62:17:dot"
// "[at ./index.rsh:37:19:application call to [unknown function] (defined at: ./index.rsh:61:43:function exp)]"
load 255
load 254
itob
concat
load 253
itob
concat
int 0
itob // bool
substring 7 8
global Round
itob
concat
load 252
itob
concat
b loopBody1
l8_afterHandler4:
int 0
assert
loopBody1:
dup
extract 0 1
btoi
store 255
dup
int 1
extract_uint64
store 254
dup
int 9
extract_uint64
store 253
pop
dup
extract 0 32
store 252
dup
int 32
extract_uint64
store 251
dup
int 40
extract_uint64
store 250
pop
load 255
bz l9_ifF
load 254
load 250
+
store 249
load 252
load 251
itob
concat
load 250
itob
concat
load 253
itob
concat
load 249
itob
concat
int 1
bzero
dig 1
extract 0 64
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_ifF:
load 252
load 253
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
  unsupported: [],
  version: 6
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v162",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v163",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v161",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v162",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v163",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_numOfWinners",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8[10]",
                "name": "v242",
                "type": "tuple[10]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v218",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_numOfWinners",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T8[10]",
                "name": "v242",
                "type": "tuple[10]"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_addr",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "_played",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_selected",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T12",
                "name": "v218",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010dc380380620010dc8339810160408190526200002691620003a8565b60008055436003556040517fcf0126561efc1f24b305028ded80b0ba9e1383f9f7e0730d97456eecb84f90ce906200006090839062000459565b60405180910390a162000076341560076200010b565b620000c16040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b80513390526020808301805151835183015251604090810151835182015281830180516001905280514393019290925290516000910152620001038162000135565b505062000515565b81620001315760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815260208201515115620002245781516040015160208084015101516200016a9190620004b1565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015187528d518c015186528d8801518c015184528c5182526004909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c0015b604051602081830303815290604052600290805190602001906200021e92919062000277565b50505050565b604080518082018252600080825260208083018281528651516001600160a01b031680855287830151860151825260029093554360015584519182019290925290519281019290925290606001620001f8565b8280546200028590620004d8565b90600052602060002090601f016020900481019282620002a95760008555620002f4565b82601f10620002c457805160ff1916838001178555620002f4565b82800160010185558215620002f4579182015b82811115620002f4578251825591602001919060010190620002d7565b506200030292915062000306565b5090565b5b8082111562000302576000815560010162000307565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200035857620003586200031d565b60405290565b604051606081016001600160401b03811182821017156200035857620003586200031d565b60405160a081016001600160401b03811182821017156200035857620003586200031d565b6000818303610100811215620003bd57600080fd5b620003c762000333565b83518152602060e0601f1984011215620003e057600080fd5b620003ea6200035e565b925080850151835285605f8601126200040257600080fd5b6200040c62000383565b8060e08701888111156200041f57600080fd5b604088015b818110156200043d578051845292840192840162000424565b5085840191909152516040850152508101919091529392505050565b60006101008201905082518252602080840151805182850152818101516040850160005b60058110156200049c578251825291840191908401906001016200047d565b505050604081015160e0850152505092915050565b60008219821115620004d357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620004ed57607f821691505b602082108114156200050f57634e487b7160e01b600052602260045260246000fd5b50919050565b610bb780620005256000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780635381e056146100835780635d2eeac21461009657806383230757146100a9578063a7661d54146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610899565b6100f4565b61005d6100a43660046108b1565b610285565b3480156100b557600080fd5b50600154610070565b61005d6100cc3660046108c4565b610407565b3480156100dd57600080fd5b506100e661057e565b60405161007a9291906108d6565b610104600460005414600d61061b565b61011e8135158061011757506001548235145b600e61061b565b60008080556002805461013090610933565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610933565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c1919061097d565b90506101d481608001514310600f61061b565b7ff72c084509ab9670eeabcbf8f9bce63bdf7d3a334a6d0f1d7f0294291e02ef93826040516102039190610a19565b60405180910390a161021c81602001513414600c61061b565b61022461077c565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152818301805160019052514392019190915251606083015161026e9190610a60565b60208201516040015261028081610640565b505050565b610295600260005414600a61061b565b6102af813515806102a857506001548235145b600b61061b565b6000808055600280546102c190610933565b80601f01602080910402602001604051908101604052809291908181526020018280546102ed90610933565b801561033a5780601f1061030f5761010080835404028352916020019161033a565b820191906000526020600020905b81548152906001019060200180831161031d57829003601f168201915b50505050508060200190518101906103529190610a86565b90507f95339974c0e86f7dbf90d69ae8207b3f243ebb4c33f8e40d63f13ff3cae66c36826040516103839190610aec565b60405180910390a16103973415600861061b565b80516103af906001600160a01b03163314600961061b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103ec573d6000803e3d6000fd5b5060008080556001819055610403906002906107c3565b5050565b610417600460005414601161061b565b6104318135158061042a57506001548235145b601261061b565b60008080556002805461044390610933565b80601f016020809104026020016040519081016040528092919081815260200182805461046f90610933565b80156104bc5780601f10610491576101008083540402835291602001916104bc565b820191906000526020600020905b81548152906001019060200180831161049f57829003601f168201915b50505050508060200190518101906104d4919061097d565b90506104e88160800151431015601361061b565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1826040516105179190610b60565b60405180910390a161052b3415601061061b565b61053361077c565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015281830180516000905280514393019290925260608401519151015261028081610640565b60006060600054600280805461059390610933565b80601f01602080910402602001604051908101604052809291908181526020018280546105bf90610933565b801561060c5780601f106105e15761010080835404028352916020019161060c565b820191906000526020600020905b8154815290600101906020018083116105ef57829003601f168201915b50505050509050915091509091565b816104035760405163100960cb60e01b81526004810182905260240160405180910390fd5b6040805160208101909152600081526020820151511561072a5781516040015160208084015101516106729190610a60565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015187528d518c015186528d8801518c015184528c5182526004909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c0015b60405160208183030381529060405260029080519060200190610724929190610800565b50505050565b604080518082018252600080825260208083018281528651516001600160a01b031680855287830151860151825260029093554360015584519182019290925290519281019290925290606001610700565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b5080546107cf90610933565b6000825580601f106107df575050565b601f0160209004906000526020600020908101906107fd9190610884565b50565b82805461080c90610933565b90600052602060002090601f01602090048101928261082e5760008555610874565b82601f1061084757805160ff1916838001178555610874565b82800160010185558215610874579182015b82811115610874578251825591602001919060010190610859565b50610880929150610884565b5090565b5b808211156108805760008155600101610885565b6000608082840312156108ab57600080fd5b50919050565b600061052082840312156108ab57600080fd5b6000604082840312156108ab57600080fd5b82815260006020604081840152835180604085015260005b8181101561090a578581018301518582016060015282016108ee565b8181111561091c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061094757607f821691505b602082108114156108ab57634e487b7160e01b600052602260045260246000fd5b6001600160a01b03811681146107fd57600080fd5b600060a0828403121561098f57600080fd5b60405160a0810181811067ffffffffffffffff821117156109c057634e487b7160e01b600052604160045260246000fd5b60405282516109ce81610968565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b80358015158114610a1457600080fd5b919050565b81358152608081016020830135610a2f81610968565b6001600160a01b03166020830152610a4960408401610a04565b151560408301526060830135606083015292915050565b60008219821115610a8157634e487b7160e01b600052601160045260246000fd5b500190565b600060408284031215610a9857600080fd5b6040516040810181811067ffffffffffffffff82111715610ac957634e487b7160e01b600052604160045260246000fd5b6040528251610ad781610968565b81526020928301519281019290925250919050565b813581526105208101602080830181850160005b600a811015610b56578135610b1481610968565b6001600160a01b0316835281840135848401526040610b34818401610a04565b1515908401526060828101359084015260809283019290910190600101610b00565b5050505092915050565b8135815260408101610b7460208401610a04565b151560208301529291505056fea2646970667358221220749e8a828feaec9e6087864a3cee4951f50482da670f86281e8e0bf82cfd77a564736f6c63430008090033`,
  BytecodeLen: 4316,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "House": House,
  "Player": Player
  };
export const _APIs = {
  };
