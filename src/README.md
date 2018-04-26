---
archive: true
---
<div v-for="post in posts()"
     :key="post.frontmatter.date">
  <router-link :to="post.path">
    <article>
      <div class="title">{{ post.title }}</div>
      <div>Tag {{post.frontmatter.tag}}</div>
      <div class="date">{{ new Date(post.frontmatter.date).toLocaleDateString() }}</div>
      <div class="description">{{ post.frontmatter.description }}</div>
      <br>
    </article>
  </router-link>
</div>

<script>
export default {
    methods: {
        posts() {
            console.log(this.$site.pages)
            return this.$site.pages
            .filter((page) => page.path.startsWith("/posts/") && page.path !== '/posts/')
        }
    },
}
</script>