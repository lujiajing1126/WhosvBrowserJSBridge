/**
 * Whosv奢圈 JSBridge
 * @author Megrez
 * @date 2014-11-17
 * @version 0.2.1
 */

// for compatible with Other Toolkits
;
(function(window, undefined) {
    var DEBUG = true;
    var UA = window.navigator.userAgent,
    // Mozilla/5.0 (Linux; U; Android 4.3; zh-cn; A0001 Build/JLS36C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30
    _Android = UA.indexOf("Android") != -1,
    // Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53
    _IOS = UA.indexOf("iPhone OS") != -1,
    // WhosvBrowser
    _WHOSV_BROWSER = UA.indexOf("; WhosvBrowser/") != -1,
    Api = null,
    detectWhosvBrowserApi = function(callback) {
        if (typeof window.whosvBrowserInvoker === 'object' && typeof window.whosvBrowserInvoker.toString === 'function' && (DEBUG || ((_Android || _IOS) && _WHOSV_BROWSER))) {
            callback(Api);
        }
    };
    detectWhosvBrowserApi(function() {
        var invoker = window.whosvBrowserInvoker;
        /**
         * toString
         * @return String
         */
        var toString = function() {
            return invoker.toString();
        },
        /**
         * 获取当前App的版本号
         * @return String
         */
        getVersionName = function() {
            return invoker.getVersionName();
        },
        /**
         * 获取当前登录用户的Id
         * @return String
         * @example 5444811777686f6e46140000
         */
        getUserId = function() {
            return invoker.getUserId();
        },
        /**
         * 获取当前登录用户的用户名
         * @return String
         * @example 小灰灰
         */
        getUserName = function() {
            return invoker.getUserName();
        };
        /**
         * 召唤神兽
         * @param  String action
         * @param  String[] option1
         * @param  String[] option2
         * @return void
         */
        invoke = function(action,option1,option2) {
            return invoker.invoke(action,option1,option2);
        };
        Api = {
            toString: toString,
            getVersionName: getVersionName,
            getUserId: getUserId,
            getUserName: getUserName,
            invoke: invoke
        };
    });
    window.WhosvBrowserApi = {
        ready: detectWhosvBrowserApi
    };
})(window);