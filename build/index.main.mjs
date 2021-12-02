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
  
  
  const v249 = stdlib.protect(ctc0, interact.deadline, 'for House\'s interact field deadline');
  const v250 = stdlib.protect(ctc0, interact.wager, 'for House\'s interact field wager');
  
  const v253 = stdlib.protect(ctc1, await interact.playingSet(), {
    at: './index.rsh:28:54:application',
    fs: ['at ./index.rsh:26:9:application call to [unknown function] (defined at: ./index.rsh:26:13:function exp)'],
    msg: 'playingSet',
    who: 'House'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v250, v253, v249],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v255, v256, v257], secs: v259, time: v258, didSend: v28, from: v254 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v296 = true;
      const v297 = v258;
      const v299 = stdlib.checkedBigNumberify('./index.rsh:24:11:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        
        return v296;})()) {
        const v304 = stdlib.add(v297, v257);
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
  const {data: [v255, v256, v257], secs: v259, time: v258, didSend: v28, from: v254 } = txn1;
  ;
  let v296 = true;
  let v297 = v258;
  let v299 = stdlib.checkedBigNumberify('./index.rsh:24:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v296;})()) {
    const v304 = stdlib.add(v297, v257);
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v304],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v254, v255, v257, v299, v304],
        evt_cnt: 0,
        funcNum: 4,
        lct: v297,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v328, time: v327, didSend: v130, from: v326 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv296 = false;
          const cv297 = v327;
          const cv299 = v299;
          
          await (async () => {
            const v296 = cv296;
            const v297 = cv297;
            const v299 = cv299;
            
            if (await (async () => {
              
              return v296;})()) {
              const v304 = stdlib.add(v297, v257);
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
      const {data: [], secs: v328, time: v327, didSend: v130, from: v326 } = txn3;
      ;
      const cv296 = false;
      const cv297 = v327;
      const cv299 = v299;
      
      v296 = cv296;
      v297 = cv297;
      v299 = cv299;
      
      continue;
      }
    else {
      const {data: [v312], secs: v314, time: v313, didSend: v108, from: v311 } = txn2;
      const v316 = stdlib.add(v299, v255);
      ;
      const cv296 = true;
      const cv297 = v313;
      const cv299 = v316;
      
      v296 = cv296;
      v297 = cv297;
      v299 = cv299;
      
      continue;}
    
    }
  const v334 = stdlib.protect(ctc6, await interact.winnersList(), {
    at: './index.rsh:69:56:application',
    fs: ['at ./index.rsh:68:9:application call to [unknown function] (defined at: ./index.rsh:68:13:function exp)'],
    msg: 'winnersList',
    who: 'House'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v254, v299, v334],
    evt_cnt: 1,
    funcNum: 2,
    lct: v297,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v336], secs: v338, time: v337, didSend: v142, from: v335 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v340 = stdlib.addressEq(v254, v335);
      stdlib.assert(v340, {
        at: './index.rsh:72:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'House'
        });
      const v342 = stdlib.div(v299, stdlib.checkedBigNumberify('./index.rsh:74:36:dot', stdlib.UInt_max, 10));
      const v343 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
      const v344 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
      const v345 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 2)];
      const v346 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 3)];
      const v347 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 4)];
      const v348 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 5)];
      const v349 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 6)];
      const v350 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 7)];
      const v351 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 8)];
      const v352 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 9)];
      const v353 = v343.addr;
      const v357 = stdlib.sub(v299, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v353,
        tok: undefined
        });
      const v358 = v344.addr;
      const v362 = stdlib.sub(v357, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v358,
        tok: undefined
        });
      const v363 = v345.addr;
      const v367 = stdlib.sub(v362, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v363,
        tok: undefined
        });
      const v368 = v346.addr;
      const v372 = stdlib.sub(v367, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v368,
        tok: undefined
        });
      const v373 = v347.addr;
      const v377 = stdlib.sub(v372, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v373,
        tok: undefined
        });
      const v378 = v348.addr;
      const v382 = stdlib.sub(v377, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v378,
        tok: undefined
        });
      const v383 = v349.addr;
      const v387 = stdlib.sub(v382, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v383,
        tok: undefined
        });
      const v388 = v350.addr;
      const v392 = stdlib.sub(v387, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v388,
        tok: undefined
        });
      const v393 = v351.addr;
      const v397 = stdlib.sub(v392, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v393,
        tok: undefined
        });
      const v398 = v352.addr;
      const v402 = stdlib.sub(v397, v342);
      sim_r.txns.push({
        amt: v342,
        kind: 'from',
        to: v398,
        tok: undefined
        });
      sim_r.txns.push({
        amt: v402,
        kind: 'from',
        to: v254,
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
  const {data: [v336], secs: v338, time: v337, didSend: v142, from: v335 } = txn2;
  ;
  const v340 = stdlib.addressEq(v254, v335);
  stdlib.assert(v340, {
    at: './index.rsh:72:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'House'
    });
  const v342 = stdlib.div(v299, stdlib.checkedBigNumberify('./index.rsh:74:36:dot', stdlib.UInt_max, 10));
  const v343 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
  const v344 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
  const v345 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 2)];
  const v346 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 3)];
  const v347 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 4)];
  const v348 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 5)];
  const v349 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 6)];
  const v350 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 7)];
  const v351 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 8)];
  const v352 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 9)];
  const v353 = v343.addr;
  const v357 = stdlib.sub(v299, v342);
  ;
  const v358 = v344.addr;
  const v362 = stdlib.sub(v357, v342);
  ;
  const v363 = v345.addr;
  const v367 = stdlib.sub(v362, v342);
  ;
  const v368 = v346.addr;
  const v372 = stdlib.sub(v367, v342);
  ;
  const v373 = v347.addr;
  const v377 = stdlib.sub(v372, v342);
  ;
  const v378 = v348.addr;
  const v382 = stdlib.sub(v377, v342);
  ;
  const v383 = v349.addr;
  const v387 = stdlib.sub(v382, v342);
  ;
  const v388 = v350.addr;
  const v392 = stdlib.sub(v387, v342);
  ;
  const v393 = v351.addr;
  const v397 = stdlib.sub(v392, v342);
  ;
  const v398 = v352.addr;
  const v402 = stdlib.sub(v397, v342);
  ;
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
  const {data: [v255, v256, v257], secs: v259, time: v258, didSend: v28, from: v254 } = txn1;
  ;
  let v296 = true;
  let v297 = v258;
  let v299 = stdlib.checkedBigNumberify('./index.rsh:24:11:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    
    return v296;})()) {
    const v304 = stdlib.add(v297, v257);
    const v308 = stdlib.protect(ctc4, await interact.uniqueSelected(), {
      at: './index.rsh:44:50:application',
      fs: ['at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)', 'at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:38:19:function exp)'],
      msg: 'uniqueSelected',
      who: 'Player'
      });
    const v309 = stdlib.protect(ctc3, await interact.kpGoing(), {
      at: './index.rsh:45:44:application',
      fs: ['at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:43:13:function exp)', 'at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:38:19:function exp)'],
      msg: 'kpGoing',
      who: 'Player'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v254, v255, v257, v299, v304, v308],
      evt_cnt: 1,
      funcNum: 3,
      lct: v297,
      onlyIf: v309,
      out_tys: [ctc4],
      pay: [v255, []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v312], secs: v314, time: v313, didSend: v108, from: v311 } = txn2;
        
        const v316 = stdlib.add(v299, v255);
        sim_r.txns.push({
          amt: v255,
          kind: 'to',
          tok: undefined
          });
        
        const cv296 = true;
        const cv297 = v313;
        const cv299 = v316;
        
        await (async () => {
          const v296 = cv296;
          const v297 = cv297;
          const v299 = cv299;
          
          if (await (async () => {
            
            return v296;})()) {
            const v304 = stdlib.add(v297, v257);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v304],
      tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc4],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v254, v255, v257, v299, v304],
        evt_cnt: 0,
        funcNum: 4,
        lct: v297,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v328, time: v327, didSend: v130, from: v326 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv296 = false;
          const cv297 = v327;
          const cv299 = v299;
          
          await (async () => {
            const v296 = cv296;
            const v297 = cv297;
            const v299 = cv299;
            
            if (await (async () => {
              
              return v296;})()) {
              const v304 = stdlib.add(v297, v257);
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
      const {data: [], secs: v328, time: v327, didSend: v130, from: v326 } = txn3;
      ;
      const cv296 = false;
      const cv297 = v327;
      const cv299 = v299;
      
      v296 = cv296;
      v297 = cv297;
      v299 = cv299;
      
      continue;
      }
    else {
      const {data: [v312], secs: v314, time: v313, didSend: v108, from: v311 } = txn2;
      const v316 = stdlib.add(v299, v255);
      ;
      stdlib.protect(ctc0, await interact.currentPlayedIs(v311), {
        at: './index.rsh:57:59:application',
        fs: ['at ./index.rsh:56:17:application call to [unknown function] (defined at: ./index.rsh:56:21:function exp)', 'at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:48:14:function exp)'],
        msg: 'currentPlayedIs',
        who: 'Player'
        });
      
      const cv296 = true;
      const cv297 = v313;
      const cv299 = v316;
      
      v296 = cv296;
      v297 = cv297;
      v299 = cv299;
      
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
  const {data: [v336], secs: v338, time: v337, didSend: v142, from: v335 } = txn2;
  ;
  const v340 = stdlib.addressEq(v254, v335);
  stdlib.assert(v340, {
    at: './index.rsh:72:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Player'
    });
  const v342 = stdlib.div(v299, stdlib.checkedBigNumberify('./index.rsh:74:36:dot', stdlib.UInt_max, 10));
  const v343 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 0)];
  const v344 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 1)];
  const v345 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 2)];
  const v346 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 3)];
  const v347 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 4)];
  const v348 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 5)];
  const v349 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 6)];
  const v350 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 7)];
  const v351 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 8)];
  const v352 = v336[stdlib.checkedBigNumberify('reach standard library:105:21:application', stdlib.UInt_max, 9)];
  const v353 = v343.addr;
  const v357 = stdlib.sub(v299, v342);
  ;
  const v358 = v344.addr;
  const v362 = stdlib.sub(v357, v342);
  ;
  const v363 = v345.addr;
  const v367 = stdlib.sub(v362, v342);
  ;
  const v368 = v346.addr;
  const v372 = stdlib.sub(v367, v342);
  ;
  const v373 = v347.addr;
  const v377 = stdlib.sub(v372, v342);
  ;
  const v378 = v348.addr;
  const v382 = stdlib.sub(v377, v342);
  ;
  const v383 = v349.addr;
  const v387 = stdlib.sub(v382, v342);
  ;
  const v388 = v350.addr;
  const v392 = stdlib.sub(v387, v342);
  ;
  const v393 = v351.addr;
  const v397 = stdlib.sub(v392, v342);
  ;
  const v398 = v352.addr;
  const v402 = stdlib.sub(v397, v342);
  ;
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
// "./index.rsh:32:5:dot"
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
// "./index.rsh:32:5:dot"
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
// "./index.rsh:72:5:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:72:5:dot"
// "[]"
load 255
txn Sender
==
assert
load 254
int 10
/
dup
store 252
dup
bz l4_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 0 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l4_makeTxnK:
pop
load 252
dup
bz l5_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 49 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l5_makeTxnK:
pop
load 252
dup
bz l6_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 98 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l6_makeTxnK:
pop
load 252
dup
bz l7_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 147 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l7_makeTxnK:
pop
load 252
dup
bz l8_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 196 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l8_makeTxnK:
pop
load 252
dup
bz l9_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
extract 245 49
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l9_makeTxnK:
pop
load 252
dup
bz l10_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
int 294
int 49
extract3
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l10_makeTxnK:
pop
load 252
dup
bz l11_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
int 343
int 49
extract3
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l11_makeTxnK:
pop
load 252
dup
bz l12_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
int 392
int 49
extract3
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l12_makeTxnK:
pop
load 252
dup
bz l13_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 253
int 441
int 49
extract3
extract 0 32
itxn_field Receiver
itxn_submit
int 0
l13_makeTxnK:
pop
load 254
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
load 252
-
dup
bz l14_makeTxnK
itxn_begin
itxn_field Amount
int pay
itxn_field TypeEnum
load 255
itxn_field Receiver
itxn_submit
int 0
l14_makeTxnK:
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
l15_makeTxnK:
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
bz l16_afterHandler3
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
// "./index.rsh:38:19:dot"
// "[]"
load 254
dup
bz l17_checkTxnK
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
l17_checkTxnK:
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
l16_afterHandler3:
// Handler 4
dup
int 4
==
bz l18_afterHandler4
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
// "./index.rsh:63:17:dot"
// "[at ./index.rsh:38:19:application call to [unknown function] (defined at: ./index.rsh:62:43:function exp)]"
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
l18_afterHandler4:
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
bz l19_ifF
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
l19_ifF:
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v256",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v256",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v257",
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
                "name": "v336",
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
                "name": "v312",
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
                "name": "v336",
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
                "name": "v312",
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
  Bytecode: `0x6080604052604051620014d8380380620014d88339810160408190526200002691620003a8565b60008055436003556040517fcf0126561efc1f24b305028ded80b0ba9e1383f9f7e0730d97456eecb84f90ce906200006090839062000459565b60405180910390a162000076341560076200010b565b620000c16040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b80513390526020808301805151835183015251604090810151835182015281830180516001905280514393019290925290516000910152620001038162000135565b505062000515565b81620001315760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815260208201515115620002245781516040015160208084015101516200016a9190620004b1565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015187528d518c015186528d8801518c015184528c5182526004909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c0015b604051602081830303815290604052600290805190602001906200021e92919062000277565b50505050565b604080518082018252600080825260208083018281528651516001600160a01b031680855287830151860151825260029093554360015584519182019290925290519281019290925290606001620001f8565b8280546200028590620004d8565b90600052602060002090601f016020900481019282620002a95760008555620002f4565b82601f10620002c457805160ff1916838001178555620002f4565b82800160010185558215620002f4579182015b82811115620002f4578251825591602001919060010190620002d7565b506200030292915062000306565b5090565b5b8082111562000302576000815560010162000307565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200035857620003586200031d565b60405290565b604051606081016001600160401b03811182821017156200035857620003586200031d565b60405160a081016001600160401b03811182821017156200035857620003586200031d565b6000818303610100811215620003bd57600080fd5b620003c762000333565b83518152602060e0601f1984011215620003e057600080fd5b620003ea6200035e565b925080850151835285605f8601126200040257600080fd5b6200040c62000383565b8060e08701888111156200041f57600080fd5b604088015b818110156200043d578051845292840192840162000424565b5085840191909152516040850152508101919091529392505050565b60006101008201905082518252602080840151805182850152818101516040850160005b60058110156200049c578251825291840191908401906001016200047d565b505050604081015160e0850152505092915050565b60008219821115620004d357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620004ed57607f821691505b602082108114156200050f57634e487b7160e01b600052602260045260246000fd5b50919050565b610fb380620005256000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780635381e056146100835780635d2eeac21461009657806383230757146100a9578063a7661d54146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610c30565b6100f4565b61005d6100a4366004610c48565b610285565b3480156100b557600080fd5b50600154610070565b61005d6100cc366004610c5b565b61079a565b3480156100dd57600080fd5b506100e6610911565b60405161007a929190610c6d565b610104600460005414600d6109ae565b61011e8135158061011757506001548235145b600e6109ae565b60008080556002805461013090610cca565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610cca565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610d14565b90506101d481608001514310600f6109ae565b7ff72c084509ab9670eeabcbf8f9bce63bdf7d3a334a6d0f1d7f0294291e02ef93826040516102039190610db0565b60405180910390a161021c81602001513414600c6109ae565b610224610b13565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152818301805160019052514392019190915251606083015161026e9190610e0d565b602082015160400152610280816109d7565b505050565b610295600260005414600a6109ae565b6102af813515806102a857506001548235145b600b6109ae565b6000808055600280546102c190610cca565b80601f01602080910402602001604051908101604052809291908181526020018280546102ed90610cca565b801561033a5780601f1061030f5761010080835404028352916020019161033a565b820191906000526020600020905b81548152906001019060200180831161031d57829003601f168201915b50505050508060200190518101906103529190610e25565b905061036a6040518060200160405280600081525090565b7f95339974c0e86f7dbf90d69ae8207b3f243ebb4c33f8e40d63f13ff3cae66c36836040516103999190610e8b565b60405180910390a16103ad341560086109ae565b81516103c5906001600160a01b0316331460096109ae565b600a82602001516103d69190610eff565b81526103e86040840160208501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610421573d6000803e3d6000fd5b5061043260c0840160a08501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561046b573d6000803e3d6000fd5b5061047e61014084016101208501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156104b7573d6000803e3d6000fd5b506104ca6101c084016101a08501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610503573d6000803e3d6000fd5b5061051661024084016102208501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561054f573d6000803e3d6000fd5b506105626102c084016102a08501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561059b573d6000803e3d6000fd5b506105ae61034084016103208501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156105e7573d6000803e3d6000fd5b506105fa6103c084016103a08501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610633573d6000803e3d6000fd5b5061064661044084016104208501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561067f573d6000803e3d6000fd5b506106926104c084016104a08501610f21565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156106cb573d6000803e3d6000fd5b508151815160208401516001600160a01b03909216916108fc919081908190819081908190819081908190610701908290610f45565b61070b9190610f45565b6107159190610f45565b61071f9190610f45565b6107299190610f45565b6107339190610f45565b61073d9190610f45565b6107479190610f45565b6107519190610f45565b61075b9190610f45565b6040518115909202916000818181858888f19350505050158015610783573d6000803e3d6000fd5b506000808055600181905561028090600290610b5a565b6107aa60046000541460116109ae565b6107c4813515806107bd57506001548235145b60126109ae565b6000808055600280546107d690610cca565b80601f016020809104026020016040519081016040528092919081815260200182805461080290610cca565b801561084f5780601f106108245761010080835404028352916020019161084f565b820191906000526020600020905b81548152906001019060200180831161083257829003601f168201915b50505050508060200190518101906108679190610d14565b905061087b816080015143101560136109ae565b7fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1826040516108aa9190610f5c565b60405180910390a16108be341560106109ae565b6108c6610b13565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152818301805160009052805143930192909252606084015191510152610280816109d7565b60006060600054600280805461092690610cca565b80601f016020809104026020016040519081016040528092919081815260200182805461095290610cca565b801561099f5780601f106109745761010080835404028352916020019161099f565b820191906000526020600020905b81548152906001019060200180831161098257829003601f168201915b50505050509050915091509091565b816109d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602081019091526000815260208201515115610ac1578151604001516020808401510151610a099190610e0d565b81526040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528c51516001600160a01b0316808b528d5188015187528d518c015186528d8801518c015184528c5182526004909855436001558a519687019790975293519885019890985290519083015294519481019490945251908301529060c0015b60405160208183030381529060405260029080519060200190610abb929190610b97565b50505050565b604080518082018252600080825260208083018281528651516001600160a01b031680855287830151860151825260029093554360015584519182019290925290519281019290925290606001610a97565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b508054610b6690610cca565b6000825580601f10610b76575050565b601f016020900490600052602060002090810190610b949190610c1b565b50565b828054610ba390610cca565b90600052602060002090601f016020900481019282610bc55760008555610c0b565b82601f10610bde57805160ff1916838001178555610c0b565b82800160010185558215610c0b579182015b82811115610c0b578251825591602001919060010190610bf0565b50610c17929150610c1b565b5090565b5b80821115610c175760008155600101610c1c565b600060808284031215610c4257600080fd5b50919050565b60006105208284031215610c4257600080fd5b600060408284031215610c4257600080fd5b82815260006020604081840152835180604085015260005b81811015610ca157858101830151858201606001528201610c85565b81811115610cb3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610cde57607f821691505b60208210811415610c4257634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610b9457600080fd5b600060a08284031215610d2657600080fd5b60405160a0810181811067ffffffffffffffff82111715610d5757634e487b7160e01b600052604160045260246000fd5b6040528251610d6581610cff565b80825250602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b80358015158114610dab57600080fd5b919050565b81358152608081016020830135610dc681610cff565b6001600160a01b03166020830152610de060408401610d9b565b151560408301526060830135606083015292915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e2057610e20610df7565b500190565b600060408284031215610e3757600080fd5b6040516040810181811067ffffffffffffffff82111715610e6857634e487b7160e01b600052604160045260246000fd5b6040528251610e7681610cff565b81526020928301519281019290925250919050565b813581526105208101602080830181850160005b600a811015610ef5578135610eb381610cff565b6001600160a01b0316835281840135848401526040610ed3818401610d9b565b1515908401526060828101359084015260809283019290910190600101610e9f565b5050505092915050565b600082610f1c57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215610f3357600080fd5b8135610f3e81610cff565b9392505050565b600082821015610f5757610f57610df7565b500390565b8135815260408101610f7060208401610d9b565b151560208301529291505056fea26469706673582212203a098e9228031bc2f1af6be6b7bb5def7263f780b4c5fdbe2dc38434607f85eb64736f6c63430008090033`,
  BytecodeLen: 5336,
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
