---
archive: true
---
<PostList :posts="posts" />

<script>
export default {
    computed: {
        posts() {
            console.log(this.$site.pages)
            return this.$site.pages
            .filter((page) => page.path.startsWith("/posts/") && page.path !== '/posts/')
        }
    },
}
</script>