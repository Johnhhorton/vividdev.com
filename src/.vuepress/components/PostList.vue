<template>
  <div>
      <ul>
          <li v-for="post in posts" :key="post.title">
            <div>
                <h2>{{post.title}}</h2>
                <span>{{new Date(post.frontmatter.date).toLocaleString(false, {year: 'numeric', month: 'long', day: 'numeric' })}}</span>
                <p>{{post.frontmatter.description}}</p>
                <router-link :to="post.path">Read more</router-link>
            </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "post-list",
  computed: {
    posts() {
      console.log(this.$site.pages);
      return this.$site.pages.filter(
        page => page.path.startsWith("/posts/") && page.path !== "/posts/"
      );
    }
  }
};
</script>
