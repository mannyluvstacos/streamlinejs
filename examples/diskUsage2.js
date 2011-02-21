/*** Generated by streamline.js 0.1.1d - DO NOT EDIT ***/

var __global = typeof global !== 'undefined' ? global : window;
function __cb(_, self, fn){ var ctx = __global.__context; return function(err, result){ __global.__context = ctx; if (err) return _.call(self, err); return fn.call(self, null, result); } }
function __throw(err) { if (err) throw err; }
var fs = require("fs");
var flows = require("streamline/flows");
var fileFunnel = flows.funnel(20);
function du(_, path) {
    var __ = (_ = (_ || __throw));
    var total = 0;
    return fs.stat(path, __cb(_, this, function(__0, stat) {
        return (function(__) {
            if (stat.isFile()) {
                return fileFunnel.channel(__cb(_, this, __), function(_) {
                    var __ = (_ = (_ || __throw));
                    return fs.readFile(path, __cb(_, this, function(__0, __1) {
                        total += __1.length;
                        return __();
                    }));
                });
            }
             else {
                if (stat.isDirectory()) {
                    return fs.readdir(path, __cb(_, this, function(__0, files) {
                        return flows.spray(files.map(function(file) {
                            return function(_) {
                                var __ = (_ = (_ || __throw));
                                return du(__cb(_, this, function(__0, __1) {
                                    total += __1;
                                    return __();
                                }), ((path + "/") + file));
                            };
                        })).collectAll(__cb(_, this, function() {
                            console.log(((path + ": ") + total));
                            return __();
                        }));
                    }));
                }
                 else {
                    console.log((path + ": odd file"));
                }
            ;
                return __();
            }
        ;
        }).call(this, function() {
            return _(null, total);
        });
    }));
};
var p = ((process.argv.length > 2) ? process.argv[2] : ".");
var t0 = Date.now();
function report(err, result) {
    if (err) {
        console.log(((err.toString() + "\n") + err.stack));
    };
    console.log((("completed in " + ((Date.now() - t0))) + " ms"));
};
du(report, p);