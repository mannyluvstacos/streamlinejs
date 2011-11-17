/*** Generated by streamline 0.1.45 - DO NOT EDIT ***/
var __g=typeof global!=='undefined'?global:window;__g=(__g.__streamline||(__g.__streamline={}));__g.setEF=__g.setEF||function(e,f){e.__frame = e.__frame||f};var __srcName='streamline/examples/misc/bench_.js';
function __func(_, __this, __arguments, fn, index, frame, body){ if (!_) { return __future.call(__this, fn, __arguments, index); } frame.file = __srcName; frame.prev = __g.frame; __g.frame = frame; try { body(); } catch (e) { __g.setEF(e, frame.prev); __propagate(_, e); } finally { __g.frame = frame.prev; } }
function __cb(_, frame, offset, col, fn){ frame.offset = offset; frame.col = col; var ctx = __g.context; return function ___(err, result){ var oldFrame = __g.frame; __g.frame = frame; __g.context = ctx; try { if (err) { __g.setEF(err, frame); return _(err); } return fn(null, result); } catch (ex) { __g.setEF(ex, frame); return __propagate(_, ex); } finally { __g.frame = oldFrame; } } }
function __future(fn, args, i){ var err, result, done, q = []; args = Array.prototype.slice.call(args); args[i] = function(e, r){ err = e, result = r, done = true; q && q.forEach(function(f){ try { f(e, r); } catch (ex) { __trap(ex); } }); q = null; }; fn.apply(this, args); return function ___(_){ if (done) _(err, result); else q.push(_); }.bind(this);}
function __propagate(_, err){ try { _(err); } catch (ex) { __trap(ex); } }
function __trap(err){ if (err) { if (__g.context && __g.context.errorHandler) __g.context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + err.message + "\n" + err.stack); } }
function __tryCatch(_, fn){ try { fn(); } catch (e) { try { _(e); } catch (ex) { __trap(ex); } } }
function __forIn(object){ var array = []; for (var obj in object) { array.push(obj); } return array; }
            (function main(_) {
              var mode, benches;
/*     4 */   function bench(_, name, fn, native) {
/*     5 */     function tryNative(cb, count) {
/*     6 */       var t0 = Date.now();
/*     7 */       var depth = 0;
/*     9 */       function loop(i) {
/*    10 */         if ((++depth > 10)) {
/*    11 */           console.log((((mode + " native		") + name) + "	SKIPPED (risk of stack overflow)"));
/*    12 */           return cb(null, true);
                    }
                  ;
/*    14 */         if ((i < count)) {
/*    15 */           fn(function(err) {
/*    16 */             if (err) {
/*    16 */               return cb(err)
                        };
/*    17 */             loop((i + 1));
                      });
                    }
/*    19 */          else {
/*    20 */           var dt = ((Date.now() - t0));
/*    21 */           if ((dt < 100)) {
/*    21 */             return cb(null, false)
                      };
/*    22 */           dt = (Math.round((((dt * 100) * 1000) / count)) / 100);
/*    23 */           console.log((((((mode + " native		") + name) + "	") + dt) + "ns"));
/*    24 */           return cb(null, true);
                    }
                  ;
/*    26 */         depth--;
                  };
/*    28 */       loop(0);
                };
/*    31 */     function tryStreamline(_, count) {
                  var t0, i, dt;
                  var __frame = {
                    name: "tryStreamline",
                    line: 31
                  };
                  return __func(_, this, arguments, tryStreamline, 0, __frame, function __$tryStreamline() {
/*    32 */         t0 = Date.now();
/*    33 */         i = 0;
                    var __2 = false;
                    return (function ___(__break) {
                      var __more;
                      var __loop = __cb(_, __frame, 0, 0, function __$tryStreamline() {
                        __more = false;
                        if (__2) {
/*    33 */               i++;
                        }
                         else {
                          __2 = true;
                        }
                      ;
/*    33 */             var __1 = (i < count);
                        if (__1) {
/*    33 */               return fn(__cb(_, __frame, 2, 34, function __$tryStreamline() {
                            while (__more) {
                              __loop();
                            };
                            __more = true;
                          }));
                        }
                         else {
                          __break();
                        }
                      ;
                      });
                      do {
                        __loop();
                      } while (__more);
                      __more = true;
                    })(function __$tryStreamline() {
/*    34 */           dt = ((Date.now() - t0));
/*    35 */           if ((dt < 100)) {
/*    35 */             return _(null, false);
                      }
                    ;
/*    36 */           dt = (Math.round((((dt * 100) * 1000) / count)) / 100);
/*    37 */           console.log((((((mode + " streamline	") + name) + "	") + dt) + "ns"));
/*    38 */           return _(null, true);
                    });
                  });
                };
/*    42 */     function run(_, tryIt) {
                  var count;
                  var __frame = {
                    name: "run",
                    line: 42
                  };
                  return __func(_, this, arguments, run, 0, __frame, function __$run() {
/*    43 */         count = 1;
                    return (function ___(__break) {
                      var __more;
                      var __loop = __cb(_, __frame, 0, 0, function __$run() {
                        __more = false;
                        return (function __$run(_) {
/*    44 */               return tryIt(__cb(_, __frame, 2, 10, function ___(__0, __2) {
/*    44 */                 var __1 = !__2;
                            return _(null, __1);
/*    44 */               }), count);
                        })(__cb(_, __frame, -41, 20, function ___(__0, __1) {
                          if (__1) {
/*    44 */                 count *= 2;
                            while (__more) {
                              __loop();
                            };
                            __more = true;
                          }
                           else {
                            __break();
                          }
                        ;
                        }));
                      });
                      do {
                        __loop();
                      } while (__more);
                      __more = true;
                    })(_);
                  });
                };
                var __frame = {
                  name: "bench",
                  line: 4
                };
                return __func(_, this, arguments, bench, 0, __frame, function __$bench() {
/*    46 */       return run(__cb(_, __frame, 42, 1, _), (native ? tryNative : tryStreamline));
                });
              };
/*    49 */   function delay(_, val) {
                var __frame = {
                  name: "delay",
                  line: 49
                };
                return __func(_, this, arguments, delay, 0, __frame, function __$delay() {
/*    50 */       return process.nextTick(__cb(_, __frame, 1, 1, function __$delay() {
/*    51 */         return _(null, val);
                  }));
                });
              };
/*    54 */   function recurse(_, depth) {
                var __frame = {
                  name: "recurse",
                  line: 54
                };
                return __func(_, this, arguments, recurse, 0, __frame, function __$recurse() {
                  return (function __$recurse(__then) {
/*    55 */         if ((depth > 0)) {
/*    55 */           return recurse(__cb(_, __frame, 1, 16, __then), (depth - 1));
                    }
                     else {
/*    56 */           return process.nextTick(__cb(_, __frame, 2, 6, __then));
                    }
                  ;
                  })(_);
                });
              };
/*   118 */   function runAll(_, native) {
                var k;
                var __frame = {
                  name: "runAll",
                  line: 118
                };
                return __func(_, this, arguments, runAll, 0, __frame, function __$runAll() {
/*   119 */       var __1 = __forIn(benches);
                  var __2 = 0;
                  return (function ___(__break) {
                    var __more;
                    var __loop = __cb(_, __frame, 0, 0, function __$runAll() {
                      __more = false;
                      var __3 = (__2 < __1.length);
                      if (__3) {
/*   119 */             k = __1[__2++];
/*   120 */             return bench(__cb(_, __frame, 2, 2, function __$runAll() {
                          while (__more) {
                            __loop();
                          };
                          __more = true;
/*   120 */             }), k, benches[k], native);
                      }
                       else {
                        __break();
                      }
                    ;
                    });
                    do {
                      __loop();
                    } while (__more);
                    __more = true;
                  })(_);
                });
              };
              var __frame = {
                name: "main",
                line: 1
              };
              return __func(_, this, arguments, main, 0, __frame, function __$main() {
/*     2 */     mode = ((typeof fstreamline__ !== "undefined") ? "fibers" : "callback");
/*    59 */     benches = {
/*    60 */       "nop	": function nop_o___1(_) {
                    var __frame = {
                      name: "nop_o___1",
                      line: 60
                    };
                    return __func(_, this, arguments, nop_o___1, 0, __frame, _);
                  },
/*    61 */       nextTick: function nextTick__2(_) {
                    var __frame = {
                      name: "nextTick__2",
                      line: 61
                    };
                    return __func(_, this, arguments, nextTick__2, 0, __frame, function __$nextTick__2() {
/*    62 */           return process.nextTick(__cb(_, __frame, 1, 2, _));
                    });
                  },
/*    64 */       "delay	": function delay_o___3(_) {
                    var __frame = {
                      name: "delay_o___3",
                      line: 64
                    };
                    return __func(_, this, arguments, delay_o___3, 0, __frame, function __$delay_o___3() {
/*    65 */           return delay(__cb(_, __frame, 1, 2, _));
                    });
                  },
/*    67 */       "try/catch": function try_o_catch__4(_) {
                    var __frame = {
                      name: "try_o_catch__4",
                      line: 67
                    };
                    return __func(_, this, arguments, try_o_catch__4, 0, __frame, function __$try_o_catch__4() {
                      return (function ___(__then) {
                        (function ___(_) {
                          __tryCatch(_, function __$try_o_catch__4() {
/*    69 */                 return process.nextTick(__cb(_, __frame, 2, 3, __then));
                          });
                        })(function ___(ex, __result) {
                          __tryCatch(_, function __$try_o_catch__4() {
                            if (ex) {
                              __then();
                            }
                             else {
                              _(null, __result);
                            }
                          ;
                          });
                        });
                      })(function ___() {
                        __tryCatch(_, _);
                      });
                    });
                  },
/*    72 */       "try/catch/throw": function try_o_catch_o_throw__5(_) {
                    var __frame = {
                      name: "try_o_catch_o_throw__5",
                      line: 72
                    };
                    return __func(_, this, arguments, try_o_catch_o_throw__5, 0, __frame, function __$try_o_catch_o_throw__5() {
                      return (function ___(__then) {
                        (function ___(_) {
                          __tryCatch(_, function __$try_o_catch_o_throw__5() {
/*    74 */                 return process.nextTick(__cb(_, __frame, 2, 3, function __$try_o_catch_o_throw__5() {
/*    75 */                   return _(new Error(""));
                            }));
                          });
                        })(function ___(ex, __result) {
                          __tryCatch(_, function __$try_o_catch_o_throw__5() {
                            if (ex) {
                              __then();
                            }
                             else {
                              _(null, __result);
                            }
                          ;
                          });
                        });
                      })(function ___() {
                        __tryCatch(_, _);
                      });
                    });
                  },
/*    78 */       "try/finally": function try_o_finally__6(_) {
                    var __frame = {
                      name: "try_o_finally__6",
                      line: 78
                    };
                    return __func(_, this, arguments, try_o_finally__6, 0, __frame, function __$try_o_finally__6() {
                      return (function ___(__then) {
                        (function ___(_) {
                          __tryCatch(_, function __$try_o_finally__6() {
/*    80 */                 return process.nextTick(__cb(_, __frame, 2, 3, function __$try_o_finally__6() {
                              _(null, null, true);
                            }));
                          });
                        })(function ___(__e, __r, __cont) {
                          (function ___(__then) {
                            __tryCatch(_, __then);
                          })(function ___() {
                            __tryCatch(_, function ___() {
                              if (__cont) {
                                __then();
                              } else {
                                _(__e, __r);
                              };
                            });
                          });
                        });
                      })(function ___() {
                        __tryCatch(_, _);
                      });
                    });
                  },
/*    83 */       "if	": function if_o___7(_) {
                    var __frame = {
                      name: "if_o___7",
                      line: 83
                    };
                    return __func(_, this, arguments, if_o___7, 0, __frame, function __$if_o___7() {
                      return (function __$if_o___7(__then) {
/*    84 */             if (true) {
/*    84 */               return process.nextTick(__cb(_, __frame, 1, 12, __then));
                        }
                         else {
                          __then();
                        }
                      ;
                      })(_);
                    });
                  },
/*    86 */       "recurse 2": function recurse_o_2__8(_) {
                    var __frame = {
                      name: "recurse_o_2__8",
                      line: 86
                    };
                    return __func(_, this, arguments, recurse_o_2__8, 0, __frame, function __$recurse_o_2__8() {
/*    87 */           return recurse(__cb(_, __frame, 1, 2, _), 2);
                    });
                  },
/*    89 */       "recurse 10": function recurse_o_10__9(_) {
                    var __frame = {
                      name: "recurse_o_10__9",
                      line: 89
                    };
                    return __func(_, this, arguments, recurse_o_10__9, 0, __frame, function __$recurse_o_10__9() {
/*    90 */           return recurse(__cb(_, __frame, 1, 2, _), 10);
                    });
                  },
/*    92 */       "recurse 100": function recurse_o_100__10(_) {
                    var __frame = {
                      name: "recurse_o_100__10",
                      line: 92
                    };
                    return __func(_, this, arguments, recurse_o_100__10, 0, __frame, function __$recurse_o_100__10() {
/*    93 */           return recurse(__cb(_, __frame, 1, 2, _), 100);
                    });
                  },
/*    95 */       "fact 10	": function fact_o_10_o___11(_) {
/*    96 */         function fact(_, n) {
                      var __frame = {
                        name: "fact",
                        line: 96
                      };
                      return __func(_, this, arguments, fact, 0, __frame, function __$fact() {
                        return (function __$fact(_) {
/*    97 */               var __1 = (n <= 1);
                          return (function __$fact(__then) {
                            if (__1) {
/*    97 */                   return delay(__cb(_, __frame, 1, 19, _), 1);
                            }
                             else {
                              __then();
                            }
                          ;
                          })(function __$fact() {
/*    97 */                 return fact(__cb(_, __frame, 1, 37, function ___(__0, __4) {
/*    97 */                   var __3 = (n * __4);
                              return _(null, __3);
/*    97 */                 }), (n - 1));
                          });
                        })(__cb(_, __frame, -95, 20, _));
                      });
                    };
                    var __frame = {
                      name: "fact_o_10_o___11",
                      line: 95
                    };
                    return __func(_, this, arguments, fact_o_10_o___11, 0, __frame, function __$fact_o_10_o___11() {
/*    99 */           return fact(__cb(_, __frame, 4, 2, _), 10);
                    });
                  },
/*   101 */       "fibo	": function fibo_o___12(_) {
/*   102 */         function fibo(_, n) {
                      var __frame = {
                        name: "fibo",
                        line: 102
                      };
                      return __func(_, this, arguments, fibo, 0, __frame, function __$fibo() {
                        return (function __$fibo(_) {
/*   103 */               var __1 = (n <= 1);
                          return (function __$fibo(__then) {
                            if (__1) {
/*   103 */                   return delay(__cb(_, __frame, 1, 19, _), 1);
                            }
                             else {
                              __then();
                            }
                          ;
                          })(function __$fibo() {
/*   103 */                 return fibo(__cb(_, __frame, 1, 33, function ___(__0, __4) {
/*   103 */                   return fibo(__cb(_, __frame, 1, 48, function ___(__0, __5) {
/*   103 */                     var __3 = (__4 + __5);
                                return _(null, __3);
/*   103 */                   }), (n - 2));
/*   103 */                 }), (n - 1));
                          });
                        })(__cb(_, __frame, -101, 20, _));
                      });
                    };
                    var __frame = {
                      name: "fibo_o___12",
                      line: 101
                    };
                    return __func(_, this, arguments, fibo_o___12, 0, __frame, function __$fibo_o___12() {
/*   105 */           return fibo(__cb(_, __frame, 4, 2, _), 6);
                    });
                  },
/*   107 */       "mixed	": function mixed_o___13(_) {
                    var i;
                    var __frame = {
                      name: "mixed_o___13",
                      line: 107
                    };
                    return __func(_, this, arguments, mixed_o___13, 0, __frame, function __$mixed_o___13() {
/*   108 */           i = 0;
                      var __4 = false;
                      return (function ___(__break) {
                        var __more;
                        var __loop = __cb(_, __frame, 0, 0, function __$mixed_o___13() {
                          __more = false;
                          if (__4) {
/*   108 */                 i++;
                          }
                           else {
                            __4 = true;
                          }
                        ;
                          return (function __$mixed_o___13(_) {
/*   108 */                 return delay(__cb(_, __frame, 1, 18, function ___(__0, __2) {
/*   108 */                   var __1 = (__2 < 10);
                              return _(null, __1);
/*   108 */                 }), i);
                          })(__cb(_, __frame, -106, 20, function ___(__0, __3) {
                            if (__3) {
                              return (function ___(__then) {
                                (function ___(_) {
                                  __tryCatch(_, function __$mixed_o___13() {
/*   110 */                         return delay(__cb(_, __frame, 3, 8, function ___(__0, __2) {
/*   110 */                           var __1 = (__2 % 2);
                                      return (function __$mixed_o___13(__then) {
                                        if (__1) {
/*   111 */                               return process.nextTick(__cb(_, __frame, 4, 5, __then));
                                        }
                                         else {
                                          __then();
                                        }
                                      ;
                                      })(__then);
/*   110 */                         }), i);
                                  });
                                })(function ___(ex, __result) {
                                  __tryCatch(_, function __$mixed_o___13() {
                                    if (ex) {
                                      __then();
                                    }
                                     else {
                                      _(null, __result);
                                    }
                                  ;
                                  });
                                });
                              })(function ___() {
                                __tryCatch(_, function __$mixed_o___13() {
                                  while (__more) {
                                    __loop();
                                  };
                                  __more = true;
                                });
                              });
                            }
                             else {
                              __break();
                            }
                          ;
                          }));
                        });
                        do {
                          __loop();
                        } while (__more);
                        __more = true;
                      })(_);
                    });
                  }
                };
/*   124 */     return runAll(__cb(_, __frame, 123, 0, function __$main() {
/*   125 */       return runAll(__cb(_, __frame, 124, 0, _), true);
/*   124 */     }), false);
              });
            }).call(this, __trap);
