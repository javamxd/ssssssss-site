<template>
</template>
<script>
	export default {
	    name : 'Stat',
        mounted (){
            window._mtac = {};
            let element = document.createElement("script");
            element.src = "https://s4.cnzz.com/z_stat.php?id=1280031557&web_id=1280031557";
            element.setAttribute('async', true);
            let s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(element, s);
            this.$router.beforeEach((to, from, next) => {
                try{
                  window._czc.push(["_trackPageview",'magic-api' + to.path])
                }catch(e){
                }
                next()
            })

        }
    }
</script>