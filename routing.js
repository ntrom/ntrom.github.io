const Routing = (function () {

    let queryString = null;
    let queryStringObject = null;
    let currentRoute = null;
    let routes = {};
    let vueObject = null;

    const registerRouteVueComponent = function (route) {
        if (!route.vueComponentName) {
            route.vueComponentName = route.path.replace('/', '_');
        }
        Vue.component(route.vueComponentName, function (resolve, reject) {
            fetch('routes/' + route.path + '.html').then(function (htmlSrc) {
                return htmlSrc.text();
            }).then(function (htmlSrc) {
                route.vueComponent.template = htmlSrc;
                resolve(route.vueComponent);
            }, reject);
        });
    };

    const defineRoute = function (route) {
        if (!route || !route.path) {
            console.log("Bad route");
            return;
        }
        routes[route.path] = route;

        if (route.vueComponent) {
            registerRouteVueComponent(route);
        }
    };

    const getParsedQueryStringObject = function () {
        return queryStringObject;
    };

    const parseQueryString = function (qs) {
        if (!qs || !qs.length) {
            return null;
        }
        let qsObject = {};
        let expressions = qs.split('&');
        for (let i in expressions) {
            let expr = expressions[i];
            let fieldAndValue = expr.split('=');
            qsObject[fieldAndValue[0]] = fieldAndValue[1];
        }
        return qsObject;
    };

    const renderRouteView = function () {
        if (vueObject) {
            vueObject.$forceUpdate();
        } else {
            vueObject = new Vue({
                el: '#routing-viewport',
                render(h) {
                    return h({
                        template: '<div id="routing-viewport"><' + currentRoute.vueComponentName + ' /></div>'
                    });
                }
            });
        }
    };

    const router = function () {
        let hash = window.location.hash;
        let queryStringIndex = hash.indexOf('?');
        queryString = '';
        let routePath = '';
        if (queryStringIndex >= 0) {
            queryString = hash.substring(queryStringIndex + 1);
            queryStringObject = parseQueryString(queryString);
            routePath = hash.substring(1, queryStringIndex);
        } else {
            routePath = hash.substring(1);
        }

        let reqRoute = routes[routePath];
        if (!reqRoute) {
            reqRoute = {
                path: routePath,
                load: function () { },
                vueComponent: {}
            };
            defineRoute(reqRoute);
        }
        currentRoute = reqRoute;

        currentRoute.load();
        renderRouteView();
    };

    const initializeHashNavigationHandling = function () {
        defineRoute('empty', {
            path: 'empty',
            load: function () { },
            vueComponent: {}
        });
        $(window).on('hashchange', function () {
            router();
        });

        if (window.location.hash.length <= 1) {
            window.location.hash = '#home';
        } else {
            router();
        }
    };

    return {
        defineRoute: defineRoute,
        getParsedQueryStringObject: getParsedQueryStringObject,
        initializeHashNavigationHandling: initializeHashNavigationHandling
    };
})();
