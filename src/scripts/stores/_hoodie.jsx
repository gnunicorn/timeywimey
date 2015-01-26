
var Hoodie = require('hoodie'),
    dispatcher = require('../dispatcher'),
    EventEmitter = require('events').EventEmitter,
    CONSTS = require('../CONSTS'),
    _cache = {},
    _refreshCache = {},
    hoodie = new Hoodie();

hoodie.store.on('add', function(item){
    if (!_cache[item.type]) {
        _cache[item.type] = [item];
    } else {
        _cache[item.type].push(item);
    }
    _refreshCache[name].emit('refresh');
    dispatcher.dispatch({action: CONSTS.REFRESH[item.type.toUpperCase()]})
});

hoodie.store.on('update', function(item){
    if (!_cache[item.type]) {
        _cache[item.type] = [item];
    } else {
        var found = _cache[item.type].find(function(x){return x.id === item.id});
        if (!found) {
            _cache[item.type].push(item);
        } else {
            found.update(item);
        }
    }
    _refreshCache[name].emit('refresh');
    dispatcher.dispatch({action: CONSTS.REFRESH[item.type.toUpperCase()]})
});

hoodie.store.on('remove', function(item){
    if (_cache[item.type]) {
        var idx = _cache[item.type].findIndex(function(x){return x.id === item.id});
        if (idx > -1) {
            _cache[item.type] = _cache[item.type].splice(idx, 1)
        }
    }
    _refreshCache[name].emit('refresh');
    dispatcher.dispatch({action: CONSTS.REFRESH[item.type.toUpperCase()]})
});

function emitter(name){
    function refreshAll(){
            return hoodie.store.findAll(name).done(function(items){
                _cache[name] = items;
                _refreshCache[name].loaded = true;
                _refreshCache[name].emit('refresh');
                dispatcher.dispatch({action: CONSTS.REFRESH[name.toUpperCase()]});
            });
        }

    if (!_refreshCache[name]) {
        _refreshCache[name] = new EventEmitter();
        _refreshCache[name].loaded = false;
        _refreshCache[name].getItems = function(){ return _cache[name] || []; };
        hoodie.account.on('signup', refreshAll);
        hoodie.account.on('signin', refreshAll);
        hoodie.account.on('signout', refreshAll);
        refreshAll();
    }
    return _refreshCache[name];
}

module.exports = {
    store: hoodie.store,
    emitter: emitter,
    account: hoodie.account
}