
function registerPageComponent(componentName, templatePath, vueObject) {
    Vue.component(componentName, function (resolve, reject) {
        fetch(templatePath).then(function (resp) {
            return resp.text()
        }).then(function (html) {
            if (!vueObject) {
                vueObject = {};
            }
            vueObject.template = html;
            resolve(vueObject);
        }, reject);
    });
}

registerPageComponent("recruiters", "recruiters.html");
registerPageComponent("calendar", "calendar.html");
registerPageComponent("bug-knowledge-base", "articles/bug-knowledge-base.html");
registerPageComponent("tools-of-the-trade", "articles/tools-of-the-trade.html");

new Vue({
    el: "#app",
    data: function () {
        return {
            currentPage: "home",
            currentArticle: ""
        }
    },
    methods: {
        setCurrentPage: function (page) {
            this.currentPage = page;
        },
        setCurrentArticle: function (article) {
            this.currentArticle = article;
        },
        setCurrentPageByHash: function (hash) {
            if (hash === '#') {
                this.setCurrentPage("home");
            }
            else if (hash === '#recruiters') {
                this.setCurrentPage("recruiters");
            }
            else if (hash === '#articles') {
                this.setCurrentPage("articles");
            }
            else if (hash === '#calendar') {
                this.setCurrentPage("calendar");
            }
            else if (hash === '#articles/bug-knowledge-base') {
                this.setCurrentPage("articles");
                this.setCurrentArticle("bug-knowledge-base");
            }
            else if (hash === '#articles/tools-of-the-trade') {
                this.setCurrentPage("articles");
                this.setCurrentArticle("tools-of-the-trade");
            }
        }
    },
    mounted: function () {
        let hash = window.location.hash;
        this.setCurrentPageByHash(hash);

        let t = this;
        $(window).on("hashchange", function () {
            let hash = window.location.hash;
            t.setCurrentPageByHash(hash);    
        });
    }
});